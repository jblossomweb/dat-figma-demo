import Link from 'next/link';

import styles from './Button.module.css';

export interface ButtonProps {
  label: string | React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
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
  type = 'button',
  className,
  onClick,
}) => href ? (
  <Link
    href={href}
    className={`${styles.button} ${styles[variant]} ${className || ''}`}
  >
    {label}
  </Link>
) : (
  <button
    type={type}
    className={`${styles.button} ${styles[variant]} ${className || ''}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
