// Spot illustrations — mono + gold line studies, used in Risk panels
const SpotIllustration = ({ variant }) => {
  const common = {
    width: "100%", viewBox: "0 0 200 160",
    fill: "none",
    strokeLinecap: "round", strokeLinejoin: "round",
  };
  if (variant === "decline") {
    return (
      <svg {...common}>
        {/* descending hill */}
        <path d="M10 50 Q 60 70 100 100 T 190 140"
          stroke="currentColor" strokeWidth="1.25" fill="none" />
        {/* dotted continuation */}
        <path d="M10 50 Q 60 70 100 100 T 190 140"
          stroke="#C9A968" strokeWidth="1" strokeDasharray="2 3" fill="none" opacity="0.7" />
        {/* downward arrow */}
        <path d="M165 130 L 190 140 L 180 116" stroke="#A82C2C" strokeWidth="1.5" fill="none" />
        {/* baseline */}
        <line x1="10" y1="150" x2="190" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        {/* tiny figure */}
        <circle cx="40" cy="48" r="4" stroke="currentColor" strokeWidth="1.25" fill="none" />
        <path d="M40 52 V66 M34 60 H46 M36 66 L 32 80 M44 66 L 48 80"
          stroke="currentColor" strokeWidth="1.25" fill="none" />
        {/* sun setting */}
        <circle cx="170" cy="40" r="10" stroke="#C9A968" strokeWidth="1.5" fill="none" />
      </svg>
    );
  }
  if (variant === "ascent") {
    return (
      <svg {...common}>
        {/* ascending steps */}
        {[0,1,2,3,4].map((i)=>(
          <rect key={i}
            x={20 + i*30} y={130 - i*18}
            width="30" height={20 + i*18}
            stroke="currentColor" strokeWidth="1.25" fill="none" />
        ))}
        {/* arrow up */}
        <path d="M150 60 L 170 40 L 180 50" stroke="#C9A968" strokeWidth="1.5" fill="none" />
        <line x1="170" y1="40" x2="170" y2="80" stroke="#C9A968" strokeWidth="1.5" />
        {/* tiny figure climbing */}
        <circle cx="125" cy="58" r="4" stroke="currentColor" strokeWidth="1.25" fill="none" />
        <path d="M125 62 V76 M119 70 H131 M121 76 L 116 90 M129 76 L 134 90"
          stroke="currentColor" strokeWidth="1.25" fill="none" />
        {/* sun rising — gold filled */}
        <circle cx="170" cy="40" r="6" fill="#C9A968" />
      </svg>
    );
  }
  return null;
};

window.SpotIllustration = SpotIllustration;
