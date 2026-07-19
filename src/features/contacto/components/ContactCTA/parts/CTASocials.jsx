import styles from "./CTASocials.module.css";
import { Title } from "@/shared/ui/Title/Title";
import { SocialIcon } from "@/shared/ui/SocialIcon/SocialIcon";

/**
 * CTASocials — renders the social media block with branded colors.
 *
 * @param {Object} props
 * @param {string} props.title
 * @returns {JSX.Element}
 */
export function CTASocials({ title }) {
  return (
    <div className={styles.socialBlock}>
      <Title level="h3" className={styles.socialTitle}>
        {title}
      </Title>
      <div className={styles.socialList}>
        <a href="#" className={`${styles.socialLink} ${styles.fb}`} aria-label="Facebook">
          <SocialIcon name="facebook" size={20} />
        </a>
        <a href="#" className={`${styles.socialLink} ${styles.wa}`} aria-label="WhatsApp">
          <SocialIcon name="whatsapp" size={20} />
        </a>
        <a href="#" className={`${styles.socialLink} ${styles.yt}`} aria-label="YouTube">
          <SocialIcon name="youtube" size={20} />
        </a>
        <a href="#" className={`${styles.socialLink} ${styles.tk}`} aria-label="TikTok">
          <SocialIcon name="tiktok" size={20} />
        </a>
      </div>
    </div>
  );
}
