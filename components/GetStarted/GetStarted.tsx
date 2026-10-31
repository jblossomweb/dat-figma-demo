import Button from '@/components/Button';

import styles from './GetStarted.module.css';

const GetStarted: React.FC = () => (
  <div className={styles.getStarted}>
    <div className={styles.content}>
      <h1>Get started today</h1>
      <p>Talk to our team about getting started with the industry standard in transportation analytics.</p>
    </div>
    <div className={styles.actions}>
      <Button label="Learn More" variant="borderless"/>
      <Button label="Request a Demo" variant="gradient" />
    </div>
  </div>
);

export default GetStarted;
