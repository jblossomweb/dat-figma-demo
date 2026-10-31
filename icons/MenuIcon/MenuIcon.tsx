export interface MenuIconProps {
  className?: string;
}

const MenuIcon: React.FC<MenuIconProps> = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Expand Menu"
  >
    <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fillRule="evenodd" clipRule="evenodd" fill="currentColor" />
    <mask id="mask0_50290_89" maskUnits="userSpaceOnUse" x="3" y="6" width="18" height="12">
      <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fillRule="evenodd" clipRule="evenodd" fill="white" />
    </mask>
    <g mask="url(#mask0_50290_89)">
      <rect width="24" height="24" fill="currentColor" />
    </g>
  </svg>

);

export default MenuIcon;
