import Link from 'next/link';
import { Title } from '../Title/Title';
import { Text } from '../Text/Text';
import styles from './Footer.module.css';

export function Footer({ dict, lang = 'es' }) {
  if (!dict) return null;

  return (
    <footer className={styles.footer}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topContainer}>
          <div className={styles.logo}>
            <span className={styles.logoWhite}>BIM</span>
            <span className={styles.logoOrange}>CONSTRUCTIONS</span>
          </div>
          <div className={styles.slogan}>
            {dict.tagline}
          </div>
          <div className={styles.ctaBox}>
            <div className={styles.ctaIconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className={styles.ctaTextContainer}>
              <span className={styles.ctaTitle}>{dict.ctaText}</span>
              <span className={styles.ctaPhone}>{dict.contact.phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Area */}
      <div className={styles.middleArea}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            {/* Column 1: Company */}
            <div className={styles.col}>
              <Title level="h3" className={styles.title}>{dict.company.title}</Title>
              <Text className={styles.text}>{dict.company.desc}</Text>
              
              <div className={styles.menuGroup}>
                <span className={styles.menuTitle}>{dict.company.menuTitle}</span>
                <ul className={styles.links}>
                  <li><span className={styles.bullet}>•</span> <Link href={`/${lang}`}>{dict.company.links.about}</Link></li>
                  <li><span className={styles.bullet}>•</span> <Link href={`/${lang}/servicios`}>{dict.company.links.services}</Link></li>
                  <li><span className={styles.bullet}>•</span> <Link href={`/${lang}/proyectos`}>{dict.company.links.projects}</Link></li>
                  <li><span className={styles.bullet}>•</span> <Link href={`/${lang}/contacto`}>{dict.company.links.contact}</Link></li>
                </ul>
              </div>
            </div>
            
            {/* Column 2: Services */}
            <div className={styles.col}>
              <Title level="h3" className={styles.title}>{dict.services.title}</Title>
              <ul className={styles.links}>
                {dict.services.items.map((item, i) => (
                  <li key={i}><span className={styles.bullet}>•</span> {item}</li>
                ))}
              </ul>
              <Link href={`/${lang}/servicios`} className={styles.viewAll}>
                <span className={styles.bullet}>•</span> {dict.services.viewAll}
              </Link>
            </div>
            
            {/* Column 3: Contact */}
            <div className={styles.col}>
              <Title level="h3" className={styles.title}>{dict.contact.title}</Title>
              <ul className={styles.contactList}>
                <li>
                  <div className={styles.iconCircle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <Text>{dict.contact.address}</Text>
                </li>
                <li>
                  <div className={styles.iconCircle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <Text>{dict.contact.email}</Text>
                </li>
                <li>
                  <div className={styles.iconCircle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <Text>{dict.contact.phone}</Text>
                </li>
              </ul>
              
              <div className={styles.hoursGroup}>
                <span className={styles.menuTitle}>{dict.contact.hoursTitle}</span>
                <div className={styles.hoursBox}>
                  <div className={styles.clockIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div className={styles.hoursLines}>
                    <div className={styles.hourLine}>
                      <span className={styles.hourDay}>{dict.contact.hoursText1}</span>
                      <span className={styles.hourTime}>{dict.contact.hoursTime1}</span>
                    </div>
                    <div className={styles.hourLine}>
                      <span className={styles.hourDay}>{dict.contact.hoursText2}</span>
                      <span className={styles.hourTime}>{dict.contact.hoursTime2}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Bottom Area */}
      <div className={styles.bottomArea}>
        <div className={styles.bottomContainer}>
          <Text className={styles.copyright}>
            {dict.bottom.copyright.replace('{year}', new Date().getFullYear().toString())}
          </Text>
          <div className={styles.socialBox}>
            <span className={styles.socialTitle}>{dict.bottom.socialTitle}</span>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">facebook</a>,{' '}
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">Whatsapp</a>,{' '}
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>,{' '}
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
