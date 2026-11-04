import type { Content } from '@/types/Content';

import Button from '@/components/Button';

import styles from './PageCta.module.css';

export interface PageCtaProps {
  cta: Content['cta'];
}

const PageCta: React.FC<PageCtaProps> = ({ cta }) => (
  <div className={styles.pageCta}>
    <div className={styles.content}>
      <h1>{cta.heading}</h1>
      <p>{cta.text}</p>
    </div>
    {!!cta.actions?.length && (
      <div className={styles.actions}>
        {cta.actions.map((action) => (
          <Button
            key={action.label}
            label={action.label}
            href={action.href}
            variant={action.variant}
            className={styles.button}
          />
        ))}
      </div>
    )}
  </div>
);

export default PageCta;
