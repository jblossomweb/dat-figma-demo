import type { Content } from '@/types/Content';

import Image from 'next/image';

import CheckboxIcon from '@/icons/CheckboxIcon';

import styles from './Spotlights.module.css';

export interface SpotlightsProps {
  spotlights: Content['spotlights'];
}

const Spotlights: React.FC<SpotlightsProps> = ({
  spotlights = [],
}) => (
  <div className={styles.spotlights}>
    <div className={styles.separator} />
    {spotlights.map(({
      title,
      description,
      benefits = [],
      image,
      mediaPosition = 'right',
    }, index) => (
      <div key={index}>
        <div className={`${styles.spotlight} ${styles[mediaPosition]}`}>
          <div className={styles.screenshot}>
            <Image
              src={`/${image}`}
              alt=""
              width={620}
              height={340}
            />
          </div>
          <div className={styles.copy}>
            <h3 className={styles.title}>
              {title}
            </h3>
            <p className={styles.description}>
              {description}
            </p>
            <ul className={styles.benefits}>
              {benefits.map((benefit, benefitsIndex) => (
                <li key={benefitsIndex} className={styles.benefit}>
                  <CheckboxIcon className={styles.benefitIcon} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.separator} />
      </div>
    ))}
  </div>
);

export default Spotlights;
