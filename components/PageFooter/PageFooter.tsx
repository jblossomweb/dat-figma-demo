import type { Content } from '@/types/Content';

import Link from 'next/link';
import Image from 'next/image';

import FacebookIcon from '@/icons/FacebookIcon/FacebookIcon';
import XwitterIcon from '@/icons/XwitterIcon';
import YouTubeIcon from '@/icons/YouTubeIcon';
import InstagramIcon from '@/icons/InstagramIcon';

import Button from '@/components/Button';

import styles from './PageFooter.module.css';


export interface PageFooterProps {
  footer: Content['footer'];
};

const SocialIcons = {
  Facebook: FacebookIcon,
  X: XwitterIcon,
  YouTube: YouTubeIcon,
  Instagram: InstagramIcon,
};

const PageFooter: React.FC<PageFooterProps> = ({ footer }) => (
  <footer className={styles.pageFooter}>
    <div className={styles.columnHeadings}>
      {footer.columns.map((column, index) => (
        <h3 key={index} className={styles.heading}>
          {column.heading}
        </h3>
      ))}
    </div>

    <hr className={styles.divider} />

    <div className={styles.columnLinks}>
      {footer.columns.map((column, index) => (
        <div key={index} className={styles.linkList}>
          {column.links.map((link, linkIndex) => (
            <Link key={linkIndex} className={styles.link} href="#">
              {link}
            </Link>
          ))}
        </div>
      ))}
    </div>

    <hr className={styles.divider} />

    <div className={styles.social}>
      {footer.social.map((socialMedium, index) => {
        const Icon = SocialIcons[socialMedium as keyof typeof SocialIcons];

        return (
          <Link key={index} className={styles.link} href="#">
            <Button
              variant="outline"
              label={(
                <Icon className={styles.icon} />
              )}
            />
            <span>{socialMedium}</span>
          </Link>
        );
      })}
    </div>

    <hr className={styles.divider} />

    <div className={styles.appDownload}>
      <div className={styles.heading}>
        {footer.appDownload}
      </div>
      <div className={styles.stores}>
        <Link href="#">
          <Image
            src="/AppStore.png"
            alt="Download on the App Store"
            width={135}
            height={40}
          />
        </Link>
        <Link href="#">
          <Image
            src="/GooglePlay.png"
            alt="Get it on Google Play"
            width={135}
            height={40}
          />
        </Link>
      </div>
    </div>

    <hr className={styles.divider} />

    <div className={styles.review}>
      <div className={styles.heading}>
        {footer.reviewHeading}
      </div>
      <div className={styles.sites}>
        <Link href="#">
          <Image
            className={styles.capterra}
            src="/CapterraLoadBoard.png"
            alt="Review Load Board on Capterra"
            width={183}
            height={60}
          />
        </Link>
        <Link href="#">
          <Image
            className={styles.g2}
            src="/G2LoadBoard.png"
            alt="Review Load Board on G2"
            width={120}
            height={60}
          />
        </Link>
        <Link href="#">
          <Image
            className={styles.g2}
            src="/G2DATiQ.png"
            alt="Review DAT iQ on G2"
            width={120}
            height={60}
          />
        </Link>
        <Link href="#">
          <Image
            className={styles.capterra}
            src="/CapterraDATiQ.png"
            alt="Review DAT iQ on Capterra"
            width={183}
            height={60}
          />
        </Link>
      </div>
      
    </div>

    <hr className={styles.divider} />

    <div className={styles.legalLinks}>
      {footer.legalLinks.map((link, index) => (
        <Link key={index} className={styles.link} href="#">
          {link}
        </Link>
      ))}
    </div>

    <div className={styles.copyright}>
      {footer.copyright}
    </div>
  </footer>
);

export default PageFooter;
