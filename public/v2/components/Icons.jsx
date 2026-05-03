// Custom line-art icons (no lucide). 24x24, stroke 1.25, designed for editorial restraint.
const Icon = ({ name, size = 28, stroke = 1.25, color = "currentColor" }) => {
  const props = {
    width: size, height: size, viewBox: "0 0 32 32",
    fill: "none", stroke: color, strokeWidth: stroke,
    strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (name) {
    case "compass": // 知識
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="12" />
          <path d="M21 11 L17 17 L11 21 L15 15 Z" fill={color} stroke="none" />
          <circle cx="16" cy="16" r="1" fill={color} />
        </svg>
      );
    case "scale": // 判断
      return (
        <svg {...props}>
          <path d="M16 5 V27" />
          <path d="M8 9 H24" />
          <path d="M11 9 L7 18 H15 Z" />
          <path d="M21 9 L17 18 H25 Z" />
          <circle cx="16" cy="5" r="1" fill={color} />
        </svg>
      );
    case "seed": // 習慣
      return (
        <svg {...props}>
          <path d="M16 27 V14" />
          <path d="M16 14 C 12 14 9 11 9 7 C 13 7 16 10 16 14 Z" />
          <path d="M16 16 C 20 16 23 13 23 9 C 19 9 16 12 16 16 Z" />
          <path d="M9 27 H23" />
        </svg>
      );
    case "horizon": // 長期
      return (
        <svg {...props}>
          <circle cx="16" cy="20" r="4" />
          <path d="M3 26 H29" />
          <path d="M16 8 V4" />
          <path d="M22 10 L25 7" />
          <path d="M10 10 L7 7" />
        </svg>
      );
    case "book":
      return (
        <svg {...props}>
          <path d="M5 6 H14 C15.5 6 16 7 16 8 V26 C16 25 15.5 24 14 24 H5 Z" />
          <path d="M27 6 H18 C16.5 6 16 7 16 8" />
          <path d="M27 6 V24 H18 C16.5 24 16 25 16 26" />
        </svg>
      );
    case "bars":
      return (
        <svg {...props}>
          <path d="M5 26 H27" />
          <path d="M9 26 V18" />
          <path d="M15 26 V12" />
          <path d="M21 26 V6" />
        </svg>
      );
    case "node":
      return (
        <svg {...props}>
          <circle cx="8" cy="8" r="3" />
          <circle cx="24" cy="16" r="3" />
          <circle cx="10" cy="24" r="3" />
          <path d="M11 8 L22 14" />
          <path d="M11 24 L23 18" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M16 4 L26 8 V16 C26 22 21 26 16 28 C11 26 6 22 6 16 V8 Z" />
          <path d="M11 16 L15 20 L22 12" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...props}>
          <path d="M6 16 H26" />
          <path d="M20 10 L26 16 L20 22" />
        </svg>
      );
    case "circle-mark":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.25" />
          <circle cx="16" cy="16" r="4" fill="currentColor" />
        </svg>
      );
    default: return null;
  }
};

window.Icon = Icon;
