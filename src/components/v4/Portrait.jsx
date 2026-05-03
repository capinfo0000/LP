// Editorial portrait — high-contrast silhouette in mono + gold accent.
// Rendered as a chiaroscuro line study: black background, white outline, gold rim-light.

const Portrait = ({ name = "K.M.", date = "2026年5月", role = "第3期受講生", variant = 1 }) => {
  const ink = "#0A0A0A";
  const line = "#FFFFFF";
  const gold = "#C9A968";

  // small pose variations
  const isV1 = variant === 1;
  const headTurn = isV1 ? -2 : 4;
  const hairPath = isV1
    ? "M126 220 Q 132 130 200 122 Q 270 130 274 220 Q 268 168 240 148 Q 215 142 198 150 Q 168 156 144 178 Q 134 198 126 220 Z"
    : "M124 226 Q 130 132 204 118 Q 276 128 278 222 Q 272 174 254 158 Q 224 152 200 158 Q 162 168 138 192 Q 130 208 124 226 Z";

  return (
    <figure className="portrait-frame">
      <svg viewBox="0 0 400 520" preserveAspectRatio="xMidYMid slice"
        style={{ width: "100%", height: "100%", display: "block" }}>
        {/* background — pure black */}
        <rect width="400" height="520" fill={ink} />

        {/* gold rim halo behind head */}
        <circle cx={210 + headTurn} cy="225" r="120" fill={gold} fillOpacity="0.08" />
        <path d={`M ${300 + headTurn} 200 A 100 100 0 0 1 ${290 + headTurn} 280`}
          stroke={gold} strokeWidth="1.5" fill="none" opacity="0.85" />

        {/* shoulders + clothing — outline only */}
        <path d="M30 520 Q 56 380 130 360 L 270 360 Q 344 380 370 520 Z"
          fill={ink} stroke={line} strokeWidth="1.25" />
        {/* collar */}
        <path d="M165 380 L 200 410 L 235 380" stroke={line} strokeWidth="1.25" fill="none" />
        {/* lapel gold accent */}
        <line x1="200" y1="410" x2="200" y2="450" stroke={gold} strokeWidth="1.5" />

        {/* neck */}
        <path d={`M170 365 Q 175 335 175 ${308} L 225 ${308} Q 225 335 230 365`}
          stroke={line} strokeWidth="1.25" fill="none" />

        {/* head — outline */}
        <ellipse cx={200 + headTurn} cy="225" rx="70" ry="90"
          stroke={line} strokeWidth="1.5" fill={ink} />

        {/* hair — outline + filled black */}
        <path d={hairPath} fill={ink} stroke={line} strokeWidth="1.25" />

        {/* features — minimal lines */}
        <path d="M165 235 Q 178 230 192 235" stroke={line} strokeWidth="1.25" fill="none" />
        <path d="M210 235 Q 224 230 238 234" stroke={line} strokeWidth="1.25" fill="none" />
        <path d="M201 252 Q 199 270 202 278" stroke={line} strokeWidth="0.75" fill="none" opacity="0.5" />
        <path d="M188 295 Q 200 300 213 295" stroke={line} strokeWidth="1.25" fill="none" />

        {/* gold corner marks (editorial) */}
        <g stroke={gold} strokeWidth="1.5" fill="none">
          <path d="M16 16 H32 M16 16 V32" />
          <path d="M384 504 H368 M384 504 V488" />
        </g>
      </svg>
      <figcaption className="portrait-caption-meta">
        <div className="pc-name serif">{name}</div>
        <div className="pc-meta sans-en">{date} · {role}</div>
      </figcaption>
    </figure>
  );
};

export { Portrait };
