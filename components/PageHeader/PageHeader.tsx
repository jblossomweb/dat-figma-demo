'use client';

import type { Content } from '@/types/Content';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import SearchIcon from '@/icons/SearchIcon';
import CloseIcon from '@/icons/CloseIcon';
import ExpandIcon from '@/icons/ExpandIcon';
import MenuIcon from '@/icons/MenuIcon';
  
import Button from '@/components/Button';

import styles from './PageHeader.module.css';

export interface PageHeaderProps {
  nav: Content['nav'];
}

const PageHeader: React.FC<PageHeaderProps> = ({
  nav,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navContent = (
    <>
      <ul className={styles.links}>
        {nav.links.map((link) => (
          <li key={link.label} className={styles.link}>
            <Link href={link.href}>
              <span className={link.current ? styles.current : undefined}>{link.label}</span>
              {link.hasMenu && <ExpandIcon className={styles.expandIcon} />}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.search}>
        <Link href="#" aria-label="Search">
          <SearchIcon className={styles.icon} />
        </Link>
      </div>
      <div className={styles.actions}>
        {nav.actions.map((action) => (
          <Button
            key={action.label}
            label={action.label}
            href={action.href}
            variant={action.variant}
          />
        ))}
      </div>
    </>
  );

  return (
    <header className={styles.pageHeader}>
      <Link href="/" aria-label="DAT home">
        <Image
          className={styles.logo}
          src="/DatFaHorizontalBlueWhite.png"
          alt="DAT Freight & Analytics"
          width={206}
          height={35}
        />
      </Link>

      <nav className={styles.nav}>
        {navContent}
      </nav>

      <button className={styles.burger} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? (<CloseIcon className={styles.icon} />) : (<MenuIcon className={styles.icon} />)}
      </button>

      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navContent}
        </div>
      )}
    </header>
  );
};

export default PageHeader;
