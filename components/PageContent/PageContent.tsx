import styles from './PageContent.module.css';

export interface PageContentProps {
  children: React.ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({
  children,
}) => (
  <div className={styles.pageContent}>
    {children}
  </div>
);

export default PageContent;
