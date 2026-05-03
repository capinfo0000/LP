// Bridge interstitial copy (all black/gold) + Choice comparison cards + CTA-only block
import { FadeRise } from './Motion';

const Bridge = ({ children }) => (
  <section className="bridge">
    <div className="container">
      <FadeRise>
        <p className="bridge-line jp-keep">{children}</p>
      </FadeRise>
    </div>
  </section>
);

const ChoiceBlock = () => (
  <section className="choice-block">
    <div className="container">
      <FadeRise>
        <div className="choice-eyebrow">— A QUIET QUESTION</div>
      </FadeRise>
      <FadeRise delay={120}>
        <h2 className="choice-q serif jp-keep">
          あなたは、<br/>どっちを選ぶ<span className="gold-period">？</span>
        </h2>
      </FadeRise>
      <FadeRise delay={180}>
        <p className="choice-sub">同じ10年。違うのは、最初の一歩だけ。</p>
      </FadeRise>

      <FadeRise delay={300}>
        <div className="choice-cards">
          <div className="choice-card choice-bad">
            <div className="choice-card-eyebrow">— PATH A · 何もしない</div>
            <div className="choice-card-arrow">↓</div>
            <h3 className="choice-card-h serif">
              静かに、<br/>目減りしていく。
            </h3>
            <div className="choice-card-fig tabular">
              <span className="arrow-mark">−</span><span className="currency">¥</span>330,000
            </div>
            <p className="choice-card-note">
              インフレ年率2%が続けば、20年後の100万円は<br/>
              実質67万円分の購買力にしかならない。
            </p>
          </div>

          <div className="choice-vs">OR</div>

          <div className="choice-card choice-good">
            <div className="choice-card-eyebrow">— PATH B · 行動する</div>
            <div className="choice-card-arrow">↑</div>
            <h3 className="choice-card-h serif">
              着実に、<br/>積み上がっていく。
            </h3>
            <div className="choice-card-fig tabular">
              <span className="sign">+</span><span className="currency">¥</span>4,000,000
            </div>
            <p className="choice-card-note">
              月3万円の積立を10年続ければ、年利5%想定で<br/>
              元本360万円が400万円超に育つ。
            </p>
          </div>
        </div>
      </FadeRise>
    </div>
  </section>
);

const CTABlock = () => (
  <section className="cta-block">
    <div className="container">
      <FadeRise>
        <div className="cta-block-eyebrow">— A FIRST STEP</div>
      </FadeRise>
      <FadeRise delay={120}>
        <h2 className="cta-block-h jp-keep">
          完璧じゃなくていい。<br/>
          まず、<em>始めること</em>。
        </h2>
      </FadeRise>
      <FadeRise delay={240}>
        <a href="#offer" className="cta-block-btn">
          講座の詳細を見る <span className="arrow">→</span>
        </a>
      </FadeRise>
    </div>
  </section>
);

export { Bridge, ChoiceBlock, CTABlock };
