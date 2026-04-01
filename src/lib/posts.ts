import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export type PostMeta = {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  locale: string;
  coverImage?: string;
};

export type Post = PostMeta & {
  content: string;
};

function getDir(type: 'blog' | 'cases') {
  return path.join(process.cwd(), 'src', 'content', type);
}

export function getAllPosts(type: 'blog' | 'cases', locale: string): PostMeta[] {
  const dir = getDir(type);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
  return files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(dir, filename), 'utf-8');
      const { data } = matter(raw);
      return data as PostMeta;
    })
    .filter((p) => p.locale === locale)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(type: 'blog' | 'cases', slug: string, locale: string): Promise<Post | null> {
  const dir = getDir(type);
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
  for (const filename of files) {
    const raw = fs.readFileSync(path.join(dir, filename), 'utf-8');
    const { data, content } = matter(raw);
    if (data.slug === slug && data.locale === locale) {
      const processed = await remark().use(html).process(content);
      return { ...(data as PostMeta), content: processed.toString() };
    }
  }
  return null;
}
