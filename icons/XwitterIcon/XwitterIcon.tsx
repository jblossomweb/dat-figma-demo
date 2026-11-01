export interface XwitterIconProps {
  className?: string;
}

const XwitterIcon: React.FC<XwitterIconProps> = ({ className }) => (
  <svg
    className={className}
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="X"
  >
    <path
      d="M4.43588 3.48963L6.79361 0.666748H6.2349L4.18769 3.11781L2.55258 0.666748H0.666687L3.13928 4.37319L0.666687 7.33341H1.22542L3.38733 4.74501L5.11412 7.33341H7.00002L4.43574 3.48963H4.43588ZM3.67061 4.40585L3.42009 4.03677L1.42675 1.09997H2.28493L3.89358 3.47006L4.14411 3.83914L6.23516 6.91989H5.37698L3.67061 4.40599V4.40585Z"
      fill="currentColor"
    />
  </svg>

);

export default XwitterIcon;
