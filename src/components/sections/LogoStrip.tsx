import Image from 'next/image';
import styles from './LogoStrip.module.css';

const LOGOS = [
  { src: 'https://framerusercontent.com/images/TWAnC7GX1Wmv3D2Kah1ir7RfxWA.png', alt: 'Trustpilot', w: 100, h: 28 },
  { src: 'https://framerusercontent.com/images/cVGYo4plm9kXogkopSlQXjWtylM.png', alt: 'Logo', w: 100, h: 28 },
  { src: 'https://framerusercontent.com/images/zEQ6P5x54lLUwDxRoDfcZu71ZLo.png', alt: 'Logo', w: 110, h: 28 },
  { src: 'https://framerusercontent.com/images/5DNPuHVk52TDxDLGr5BRlTerco.png', alt: 'Logo', w: 120, h: 28 },
  { src: 'https://framerusercontent.com/images/jEKJk1RKf1FbpSA1OxPEl0xFg.png', alt: 'Logo', w: 120, h: 28 },
];

export default function LogoStrip() {
  return (
    <section className={styles.strip}>
      <div className={styles.wrapper}>
        <div className="marquee-track">
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className={styles.logoItem}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                style={{ objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.5 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
