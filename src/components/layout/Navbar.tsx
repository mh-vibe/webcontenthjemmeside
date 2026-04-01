'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Navbar.module.css';

const LOCALES = [
  { code: 'da', label: 'DA', flag: '🇩🇰' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'sv', label: 'SV', flag: '🇸🇪' },
  { code: 'no', label: 'NO', flag: '🇳🇴' },
];

type NavbarProps = {
  locale: string;
};

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const getLocalePath = (newLocale: string) => {
    const prefix = locale === 'da' ? '' : `/${locale}`;
    const newPrefix = newLocale === 'da' ? '' : `/${newLocale}`;
    const path = prefix ? pathname.replace(prefix, '') : pathname;
    return newPrefix + path || '/';
  };

  const localePath = (path: string) => {
    return locale === 'da' ? path : `/${locale}${path}`;
  };

  const currentLang = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  const resources = [
    { label: t('blog'), href: localePath('/blog') },
    { label: t('cases'), href: localePath('/cases') },
    { label: t('support'), href: localePath('/supportcenter') },
  ];

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.nav}`}>
          {/* Logo */}
          <Link href={localePath('/')} className={styles.logo}>
            <Image
              src="https://framerusercontent.com/images/bnZyGSfKgvTIvmXu3YRSONXkPiE.png"
              alt="WebContent"
              width={130}
              height={40}
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <nav className={styles.links}>
            <div className={styles.dropdown} ref={resourcesRef}>
              <button
                className={styles.navLink}
                onClick={() => setResourcesOpen(!resourcesOpen)}
              >
                {t('resources')}
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" style={{ marginLeft: 4 }}>
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              {resourcesOpen && (
                <div className={styles.dropdownMenu}>
                  {resources.map((r) => (
                    <Link key={r.href} href={r.href} className={styles.dropdownItem} onClick={() => setResourcesOpen(false)}>
                      {r.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href={localePath('/pricing')} className={styles.navLink}>{t('pricing')}</Link>
            <Link href={localePath('/about')} className={styles.navLink}>{t('about')}</Link>
            <Link href={localePath('/creators')} className={styles.navLink}>{t('becomeCreator')}</Link>
          </nav>

          {/* Right side */}
          <div className={styles.right}>
            {/* Language switcher */}
            <div className={styles.langSwitcher} ref={langRef}>
              <button className={styles.langBtn} onClick={() => setLangOpen(!langOpen)}>
                <span>{currentLang.flag}</span>
                <span>{currentLang.label}</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              {langOpen && (
                <div className={styles.langMenu}>
                  {LOCALES.map((l) => (
                    <Link
                      key={l.code}
                      href={getLocalePath(l.code)}
                      className={`${styles.langItem} ${l.code === locale ? styles.langItemActive : ''}`}
                      onClick={() => setLangOpen(false)}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a href="https://app.webcontent.dk/login" className={styles.loginBtn}>{t('login')}</a>
            <a href="https://app.webcontent.dk/signup" className={styles.ctaBtn}>{t('startFree')}</a>

            {/* Hamburger */}
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <Link href={localePath('/')} onClick={() => setMenuOpen(false)}>
            <Image
              src="https://framerusercontent.com/images/bnZyGSfKgvTIvmXu3YRSONXkPiE.png"
              alt="WebContent"
              width={120}
              height={36}
            />
          </Link>
          <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>✕</button>
        </div>
        <nav className={styles.drawerNav}>
          <Link href={localePath('/')} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href={localePath('/pricing')} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>{t('pricing')}</Link>
          <Link href={localePath('/about')} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>{t('about')}</Link>
          <Link href={localePath('/creators')} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>{t('becomeCreator')}</Link>
          <Link href={localePath('/blog')} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>{t('blog')}</Link>
          <Link href={localePath('/cases')} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>{t('cases')}</Link>
          <Link href={localePath('/contact-support')} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>{t('support')}</Link>
        </nav>
        <div className={styles.drawerLangs}>
          {LOCALES.map((l) => (
            <Link
              key={l.code}
              href={getLocalePath(l.code)}
              className={`${styles.drawerLang} ${l.code === locale ? styles.drawerLangActive : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.flag} {l.label}
            </Link>
          ))}
        </div>
        <div className={styles.drawerCtas}>
          <a href="https://app.webcontent.dk/login" className={styles.loginBtn}>{t('login')}</a>
          <a href="https://app.webcontent.dk/signup" className={styles.ctaBtn}>{t('startFree')}</a>
        </div>
      </div>
    </>
  );
}
