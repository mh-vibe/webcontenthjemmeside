import styles from './LogoStrip.module.css';

const LOGOS = [
  { src: 'https://framerusercontent.com/images/5DNPuHVk52TDxDLGr5BRlTerco.png', alt: 'Teeshoppen', w: 140 },
  { src: 'https://framerusercontent.com/images/8t16C3ZN04rpfQGNyTnUJw7SH6E.png', alt: 'Luksushund', w: 120 },
  { src: 'https://framerusercontent.com/images/39TxLXlTK7Jh6cfXqcAkgGrlUw.png', alt: 'Fleggaard', w: 110 },
  { src: 'https://framerusercontent.com/images/0f6elDFlPOra037g6PexamN7rk.png', alt: 'Yuaia', w: 100 },
  { src: 'https://framerusercontent.com/images/H8I02191s0XUI2x9s8anculpLE.png', alt: 'IDA', w: 80 },
  { src: 'https://framerusercontent.com/images/uF5M8NSKbOsdz7gYGDdf7FqnZM.png', alt: 'Gelblast', w: 110 },
];

export default function LogoStrip() {
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section className={styles.strip}>
      <div className={styles.wrapper}>
        <div className="marquee-track">
          {[...doubled, ...doubled].map((logo, i) => (
            <div key={i} className={styles.logoItem}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                height={32}
                style={{ width: 'auto', maxWidth: logo.w, objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.55 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
