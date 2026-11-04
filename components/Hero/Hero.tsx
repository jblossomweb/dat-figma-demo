import type { Content } from '@/types/Content';

import Image from 'next/image';

import AuthorityIcon from '@/icons/AuthorityIcon';
import Button from '@/components/Button';

import styles from './Hero.module.css';

export interface HeroProps {
  hero: Content['hero'];
}

const Hero: React.FC<HeroProps> = ({
  hero,
}) => (
  <div className={styles.hero}>
    <div className={styles.column}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          {hero.heading}
        </h1>
        <div className={styles.subheading}>
          {hero.subheading}
        </div>
        <div className={styles.callout}>
          <div className={styles.left}>
            <div className={styles.icon}>
              <AuthorityIcon />
            </div>
            <div className={styles.copy}>
              <div className={styles.heading}>
                {hero.callout.heading}
              </div>
              <div className={styles.text}>
                {hero.callout.text}
              </div>
            </div>
          </div>
          <div className={styles.cta}>
            <Button
              variant="gradient"
              className={styles.button}
              label={hero.callout.cta.label}
              href={hero.callout.cta.href}
            />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.column}>
      <Image
        className={styles.image}
        src="/hero.png"
        alt={hero.heading}
        width={544}
        height={335}
      />
    </div>
    
    
  </div>
);

export default Hero;
