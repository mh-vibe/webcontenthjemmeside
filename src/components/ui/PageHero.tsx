import styles from './PageHero.module.css';

type Props = {
  badge?: string;
  headline: string;
  description?: string;
  children?: React.ReactNode;
};

export default function PageHero({ badge, headline, description, children }: Props) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {badge && <div className={styles.badge}>{badge}</div>}
        <h1 className={styles.headline}>{headline}</h1>
        {description && <p className={styles.description}>{description}</p>}
        {children}
      </div>
    </section>
  );
}
