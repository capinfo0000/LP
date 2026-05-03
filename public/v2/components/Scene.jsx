// Editorial line-art scenes — pure mono + gold accent only.
// Each evokes a moment: concert, cafe, travel morning, hobby — drawn as a single stroke study.

const Scene = ({ variant, className = "", style = {} }) => {
  const common = {
    width: "100%", height: "100%",
    viewBox: "0 0 400 200",
    preserveAspectRatio: "xMidYMid slice",
    fill: "none",
    strokeLinecap: "round", strokeLinejoin: "round",
  };
  const ink = "#0A0A0A";
  const line = "#FFFFFF";
  const gold = "#C9A968";
  const dim = "rgba(255,255,255,0.18)";

  if (variant === "concert") {
    return (
      <svg {...common} className={className} style={style}>
        <rect width="400" height="200" fill={ink} />
        {/* spotlight beam */}
        <path d="M180 -10 L 60 200 L 180 200 Z" fill={gold} fillOpacity="0.08" />
        <path d="M220 -10 L 340 200 L 220 200 Z" fill={gold} fillOpacity="0.05" />
        {/* gold spotlight orb */}
        <circle cx="200" cy="38" r="14" fill={gold} fillOpacity="0.6" />
        <circle cx="200" cy="38" r="8" fill={gold} />
        <circle cx="200" cy="38" r="2" fill="#fff" />
        {/* stage */}
        <line x1="0" y1="170" x2="400" y2="170" stroke={dim} strokeWidth="1" />
        {/* crowd silhouettes (heads + raised hands) */}
        <g stroke={line} strokeWidth="1.25">
          {[20,46,72,98,124,150,176,202,228,254,280,306,332,358,384].map((cx,i)=>(
            <g key={i}>
              <circle cx={cx} cy={170} r={6 + (i%3)} fill={ink} />
              {i % 3 === 0 && <line x1={cx-1} y1={161} x2={cx-1} y2={140} />}
              {i % 4 === 1 && <line x1={cx+2} y1={163} x2={cx+5} y2={134} />}
            </g>
          ))}
        </g>
        {/* gold mic stand */}
        <line x1="200" y1="60" x2="200" y2="170" stroke={gold} strokeWidth="1" />
        <circle cx="200" cy="60" r="3" fill={gold} />
      </svg>
    );
  }

  if (variant === "cafe") {
    return (
      <svg {...common} className={className} style={style}>
        <rect width="400" height="200" fill={ink} />
        {/* table line */}
        <line x1="0" y1="148" x2="400" y2="148" stroke={line} strokeWidth="1" />
        {/* saucer */}
        <ellipse cx="200" cy="148" rx="78" ry="9" fill="none" stroke={line} strokeWidth="1.25" />
        {/* cup body */}
        <path d="M148 110 Q 148 148 200 148 Q 252 148 252 110 Z" fill="none" stroke={line} strokeWidth="1.25" />
        {/* coffee surface — gold rim */}
        <ellipse cx="200" cy="110" rx="52" ry="7" fill="none" stroke={gold} strokeWidth="1.5" />
        {/* steam — gold */}
        <path d="M180 100 Q 174 80 184 64 Q 178 48 192 32" stroke={gold} strokeWidth="1.25" fill="none" />
        <path d="M210 100 Q 204 76 216 60 Q 208 42 222 26" stroke={gold} strokeWidth="1" fill="none" opacity="0.7" />
        {/* handle */}
        <path d="M252 122 Q 274 122 274 134 Q 274 146 252 146" stroke={line} strokeWidth="1.25" fill="none" />
        {/* hand silhouette outline (right) */}
        <path d="M268 158 Q 286 152 308 158 Q 320 168 318 188 L 274 188 Q 264 180 264 168 Z"
          stroke={line} strokeWidth="1.25" fill="none" />
        {/* steam ticks */}
        <line x1="160" y1="64" x2="166" y2="64" stroke={dim} />
      </svg>
    );
  }

  if (variant === "morning") {
    return (
      <svg {...common} className={className} style={style}>
        <rect width="400" height="200" fill={ink} />
        {/* sun — gold */}
        <circle cx="280" cy="80" r="34" fill="none" stroke={gold} strokeWidth="1.5" />
        <circle cx="280" cy="80" r="22" fill={gold} fillOpacity="0.18" />
        {/* horizon line */}
        <line x1="0" y1="130" x2="400" y2="130" stroke={line} strokeWidth="1" />
        {/* mountains */}
        <path d="M0 130 L 50 100 L 90 115 L 140 85 L 200 110 L 260 90 L 320 118 L 370 100 L 400 120"
          stroke={line} strokeWidth="1.25" fill="none" />
        {/* lower hills */}
        <path d="M0 150 L 60 138 L 130 152 L 220 140 L 300 154 L 400 142"
          stroke={line} strokeWidth="1" fill="none" opacity="0.6" />
        {/* window mullions (gold corners) */}
        <line x1="0" y1="2" x2="400" y2="2" stroke={gold} strokeWidth="2" />
        <line x1="2" y1="0" x2="2" y2="200" stroke={dim} />
        <line x1="398" y1="0" x2="398" y2="200" stroke={dim} />
        {/* small bird */}
        <path d="M120 60 q 6 -4 12 0 m 0 0 q 6 -4 12 0" stroke={gold} strokeWidth="1" fill="none" />
      </svg>
    );
  }

  if (variant === "hobby") {
    return (
      <svg {...common} className={className} style={style}>
        <rect width="400" height="200" fill={ink} />
        {/* desk surface */}
        <line x1="0" y1="150" x2="400" y2="150" stroke={line} strokeWidth="1" />
        {/* book stack */}
        <rect x="60" y="116" width="172" height="14" stroke={line} strokeWidth="1.25" fill="none" />
        <rect x="56" y="130" width="180" height="12" stroke={line} strokeWidth="1.25" fill="none" />
        <rect x="70" y="142" width="156" height="8" stroke={line} strokeWidth="1.25" fill="none" />
        {/* page edges — gold tick marks */}
        <g stroke={gold} strokeWidth="0.75">
          {Array.from({length:18}).map((_,i)=>(
            <line key={i} x1={68+i*9} y1="119" x2={68+i*9} y2="129" />
          ))}
        </g>
        {/* lamp on right */}
        <line x1="334" y1="150" x2="334" y2="106" stroke={line} strokeWidth="1.25" />
        <path d="M310 106 L 358 106 L 348 84 L 320 84 Z" stroke={line} strokeWidth="1.25" fill="none" />
        {/* lamp glow */}
        <circle cx="334" cy="98" r="14" fill={gold} fillOpacity="0.18" />
        {/* plant left */}
        <path d="M40 150 Q 30 130 38 110 Q 46 130 52 150" stroke={line} strokeWidth="1.25" fill="none" />
        <path d="M50 150 Q 56 134 70 124" stroke={line} strokeWidth="1" fill="none" />
        <line x1="40" y1="150" x2="56" y2="150" stroke={line} strokeWidth="1" />
        {/* pen — gold */}
        <line x1="248" y1="146" x2="290" y2="138" stroke={gold} strokeWidth="2" />
        <line x1="246" y1="146" x2="240" y2="148" stroke={gold} strokeWidth="2" />
      </svg>
    );
  }

  return null;
};

window.Scene = Scene;
