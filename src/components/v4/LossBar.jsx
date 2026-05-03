// Loss-bar visualization — replaces the old line chart with a direct, intuitive bar.
// "今" full bar, "20年後" 67% bar with the lost 33% as red diagonal hatching.
import { useInView, CountUp } from './Motion';

const LossBar = () => {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
    <div className="loss-block" ref={ref}>
      <div className="loss-block-inner">
        <div className="loss-eyebrow">— FIG.04 · LOSS VISUAL</div>
        <h3 className="loss-title">今の100万円が、<br/>20年後には。</h3>

        <div className="loss-bars">
          <div className="loss-bar">
            <div className="loss-bar-label">
              CURRENT
              <span className="when">今</span>
            </div>
            <div className="loss-bar-track">
              <div className="loss-bar-fill" style={{ width: inView ? "100%" : "0%" }}></div>
            </div>
            <div className="loss-bar-amount">¥1,000,000</div>
          </div>

          <div className="loss-bar">
            <div className="loss-bar-label">
              + 20 YEARS
              <span className="when">20年後</span>
            </div>
            <div className="loss-bar-track">
              <div className="loss-bar-fill gold" style={{ width: inView ? "67%" : "0%" }}></div>
              <div className="loss-bar-lost" style={{
                left: inView ? "67%" : "0%",
                width: inView ? "33%" : "0%",
                transitionDelay: "0.4s"
              }}>
                <span className="lost-tag">LOST</span>
              </div>
            </div>
            <div className="loss-bar-amount gold">¥670,000</div>
          </div>
        </div>

        <div className="loss-jab">
          <div className="loss-jab-text">
            インフレ年率2%が続いた場合、<br/>
            330,000円が、静かに消える。
          </div>
          <div className="loss-jab-amount tabular">
            <span className="minus">−</span><CountUp to={330000} duration={2200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { LossBar };
