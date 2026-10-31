import Link from 'next/link';

import styles from './Button.module.css';

export interface ButtonProps {
  label: string;
  href?: string;
  variant?:
    | 'primary'
    | 'outline'
    | 'ghost'
    | 'gradient'
    | string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  href,
  variant = 'primary',
}) => (
  <Link href={href ?? '#'}>
    <button className={`${styles.button} ${styles[variant]}`}>{label}</button>
  </Link>
);

export default Button;
