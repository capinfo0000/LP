// Hero purchasing-power chart — dark theme, mono + gold + crimson, glow-stroked.
import { useState } from 'react';

const PurchasingChart = () => {
  const [hover, setHover] = useState(null);
  const W = 560, H = 360;
  const padL = 56, padR = 24, padT = 28, padB = 44;
  const innerW = W - padL - padR, innerH = H - padT - padB;
  const years = 20;

  const series = [
    { rate: 0.00, label: "0%", color: "rgba(255,255,255,0.85)", weight: 1.25, dash: "" },
    { rate: 0.02, label: "2%", color: "#C9A968", weight: 2.5, dash: "" },
    { rate: 0.03, label: "3%", color: "#A82C2C", weight: 1.5, dash: "5 4" },
  ];
  const rateName = { 0: "\u30a4\u30f3\u30d5\u30ec 0%", 0.02: "\u30a4\u30f3\u30d5\u30ec 2%", 0.03: "\u30a4\u30f3\u30d5\u30ec 3%" };

  const yMin = 50, yMax = 100;
  const x = (t) => padL + (t / years) * innerW;
  const y = (v) => padT + (1 - (v - yMin) / (yMax - yMin)) * innerH;

  const path = (rate) => {
    let d = "";
    for (let t = 0; t <= years; t++) {
      const v = 100 / Math.pow(1 + rate, t);
      d += (t === 0 ? "M" : "L") + x(t).toFixed(2) + "," + y(v).toFixed(2) + " ";
    }
    return d;
  };

  const finalAt20 = (rate) => 100 / Math.pow(1 + rate, 20);

  return (
    <div className="chart-wrap-dark">
      <div className="chart-eyebrow">— FIG.01 · INTERACTIVE</div>
      <div className="chart-title">100万円の20年後</div>
      <div className="chart-sub">インフレ率別・実質購買力の推移</div>

      <svg viewBox={`0 0 ${W} ${H}`} className="chart-svg"
        onMouseLeave={() => setHover(null)}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const px = ((e.clientX - rect.left) / rect.width) * W;
          const t = Math.round(((px - padL) / innerW) * years);
          if (t >= 0 && t <= years) setHover(t);
        }}>
        <defs>
          <filter id="goldglow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {[50, 60, 70, 80, 90, 100].map((v) => (
          <g key={v}>
            <line x1={padL} x2={W - padR} y1={y(v)} y2={y(v)}
              stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <text x={padL - 10} y={y(v) + 4} fontSize="11" fill="rgba(255,255,255,0.45)"
              textAnchor="end" fontFamily="Inter" style={{ fontVariantNumeric: "tabular-nums" }}>
              {v}万
            </text>
          </g>
        ))}
        <line x1={padL} x2={padL} y1={padT} y2={H - padB} stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
        <line x1={padL} x2={W - padR} y1={H - padB} y2={H - padB} stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
        {[0, 5, 10, 15, 20].map((t) => (
          <g key={t}>
            <line x1={x(t)} x2={x(t)} y1={H - padB} y2={H - padB + 5} stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
            <text x={x(t)} y={H - padB + 20} fontSize="11" fill="rgba(255,255,255,0.45)"
              textAnchor="middle" fontFamily="Inter" style={{ fontVariantNumeric: "tabular-nums" }}>
              {t}年
            </text>
          </g>
        ))}

        {series.map((s) => (
          <path key={s.rate} d={path(s.rate)}
            stroke={s.color} strokeWidth={s.weight}
            fill="none" strokeDasharray={s.dash}
            strokeLinecap="round"
            filter={s.rate === 0.02 ? "url(#goldglow)" : undefined} />
        ))}

        {series.map((s) => {
          const v = finalAt20(s.rate);
          return (
            <g key={s.rate}>
              <circle cx={x(20)} cy={y(v)} r={s.rate === 0.02 ? 5 : 3.5} fill={s.color} />
              <text x={x(20) + 10} y={y(v) + 4} fontSize="11" fill={s.color}
                fontFamily="Inter" fontWeight={s.rate === 0.02 ? 700 : 500}
                style={{ fontVariantNumeric: "tabular-nums" }}>
                {s.label}
              </text>
            </g>
          );
        })}

        {hover !== null && (
          <g>
            <line x1={x(hover)} x2={x(hover)} y1={padT} y2={H - padB}
              stroke="rgba(255,255,255,0.35)" strokeWidth="1" strokeDasharray="2 3" />
            {series.map((s) => {
              const v = 100 / Math.pow(1 + s.rate, hover);
              return (
                <circle key={s.rate} cx={x(hover)} cy={y(v)} r="4" fill="#0A0A0A"
                  stroke={s.color} strokeWidth="2" />
              );
            })}
          </g>
        )}
      </svg>

      <div className="chart-readout">
        <div className="readout-col">
          <div className="readout-label">経過年数</div>
          <div className="readout-val">{hover !== null ? hover : 20}<span className="readout-unit">年</span></div>
        </div>
        <div className="readout-divider"></div>
        {series.map((s) => {
          const v = hover !== null ? 100 / Math.pow(1 + s.rate, hover) : finalAt20(s.rate);
          return (
            <div className="readout-col" key={s.rate}>
              <div className="readout-label" style={{ color: s.color }}>
                <span className="legend-dot" style={{ background: s.color }}></span>
                {s.label}
              </div>
              <div className="readout-val" style={{ color: s.color }}>
                ¥{(v * 10000).toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="chart-source">
        出典：日本銀行「物価安定の目標」インフレ率2%を基準。<br/>
        計算は単純複利モデル。ホバーで任意年の購買力を表示。
      </div>
    </div>
  );
};

export { PurchasingChart };
