import type { Content } from '@/types/Content';

import Image from 'next/image';

import styles from './Features.module.css';

export interface FeaturesProps {
  features: Content['features'];
}

const Features: React.FC<FeaturesProps> = ({
  features,
}) => (
  <div className={styles.features}>
    <h2 className={styles.heading}>
      {features.heading}
    </h2>
    <div className={styles.items}>
      {features.items.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.screenshot}>
            <Image
              className={styles.image}
              src={`/${item.image}`}
              alt={item.title}
              width={360}
              height={200}
              loading="lazy"
            />
          </div>
          <h3 className={styles.title}>
            {item.title}
          </h3>
          <p className={styles.description}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Features;
