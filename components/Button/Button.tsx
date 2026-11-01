import Link from 'next/link';

import styles from './Button.module.css';

export interface ButtonProps {
  label: string | React.ReactNode;
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
}) => {
  const button = (
    <button className={`${styles.button} ${styles[variant]}`}>{label}</button>
  );

  return href ? <Link href={href}>{button}</Link> : button;
};

export default Button;
