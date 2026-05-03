// Sections C: Curriculum, Benefits (with mega numbers), Story, Offer (dramatic pricing), Final, Footer

const Curriculum = () => {
  const months = [
    { n: "01", roman: "MONTH ONE", title: "基礎構築：お金の見える化",
      modules: ["家計の完全把握ワーク","固定費の洗い出しと削減プラン作成","「削るもの」「残すもの」の価値観整理","インフレ・通貨リスクの基礎知識","個別Zoom相談（家計ヒアリング）"] },
    { n: "02", roman: "MONTH TWO", title: "実践：投資の第一歩",
      modules: ["インデックス投資の基礎と選び方","証券口座の開設サポート","月1〜3万円から始める積立設計","NISAの賢い活用法","分散投資の具体的なポートフォリオ作成"] },
    { n: "03", roman: "MONTH THREE", title: "定着：継続できる仕組み化",
      modules: ["自動積立の設定と運用モニタリング","長期投資で成功するメンタル管理","ライフイベント別の資金計画","10年後のシミュレーション作成","卒業後も続けられる習慣化メソッド"] },
  ];
  return (
    <section className="section section-curriculum" id="curriculum">
      <div className="container">
        <div className="section-head">
          <div className="num-big tabular">06</div>
          <div className="label-stack">
            <div className="label-en">— CURRICULUM · 3ヶ月の構成</div>
            <div className="label-jp">段階的に学び、確実に身につく。</div>
          </div>
          <div className="you-tag">— これは、あなたの話だ。</div>
        </div>

        <div className="curr-h">
          <FadeRise><h2 className="serif jp-keep">3ヶ月で、<br/>人生が変わる<em>。</em></h2></FadeRise>
          <FadeRise delay={100}>
            <p className="muted" style={{ fontSize: 17, marginTop: 16, maxWidth: "32ch" }}>
              段階的に学び、確実に身につく実践カリキュラム。
            </p>
          </FadeRise>
        </div>

        <div className="timeline">
          <div className="timeline-axis"></div>
          {months.map((m, idx) => (
            <FadeRise key={m.n} delay={idx * 100} className="tl-item">
              <div className="tl-marker"></div>
              <div className="tl-month tabular">{m.n}<span className="small">— {m.roman}</span></div>
              <div className="tl-content">
                <h3 className="serif">第{parseInt(m.n)}ヶ月「{m.title}」</h3>
                <ul className="tl-modules">
                  {m.modules.map((mod, i) => (
                    <li key={i}>
                      <span className="num tabular">{String(i + 1).padStart(2, "0")}</span>
                      <span>{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeRise>
          ))}
        </div>

        <div className="curr-mega">
          <FadeRise>
            <p className="serif curr-mega-h">
              3ヶ月後、<em>あなたは別人になっている</em>。
            </p>
          </FadeRise>
          <FadeRise delay={120}>
            <p className="curr-mega-sub">知識も、行動も、そして未来への確信も。</p>
          </FadeRise>
          <div className="section-end-cta">
            <a href="#offer" className="text-cta">
              講座の詳細を見る <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const main = [
    { num: "BEN.01", icon: "scale", en: "Cost Optimization", title: "年間10〜30万円の固定費削減",
      body: "通信費、保険、サブスクの見直しで実現。推しへの投資は減らさずに。",
      fig: "30", figPrefix: "−¥", figUnit: "万 / 年" },
    { num: "BEN.02", icon: "seed", en: "Compound Growth", title: "月3万円の積立で10年後に400万円以上",
      body: "年利5%想定。少額でも時間を味方につければ、大きく育つ。",
      fig: "400", figPrefix: "+¥", figUnit: "万 / 10年" },
    { num: "BEN.03", icon: "horizon", en: "Guilt-Free Living", title: "推しも旅行も諦めない、罪悪感ゼロの生活",
      body: "設計型節約で、使っていい場所と削る場所が明確になる。",
      fig: null },
    { num: "BEN.04", icon: "shield", en: "Inflation Defense", title: "インフレに負けない資産防衛力",
      body: "円だけに依存しない、分散投資の基礎が身につく。",
      fig: null },
  ];
  const extras = [
    { en: "On-Demand", title: "動画講座見放題", body: "いつでも復習可能" },
    { en: "1-on-1", title: "個別Zoom相談", body: "あなた専用の提案" },
    { en: "Community", title: "専用コミュニティ", body: "仲間と一緒に成長" },
  ];
  return (
    <section className="section section-benefits" id="benefits">
      <div className="container">
        <div className="section-head">
          <div className="num-big tabular">07</div>
          <div className="label-stack">
            <div className="label-en">— BENEFITS · 持ち帰るもの</div>
            <div className="label-jp">具体的な成果と、一生使える知識。</div>
          </div>
          <div className="you-tag">— これは、あなたの話だ。</div>
        </div>

        <div className="bene-h">
          <FadeRise><h2 className="serif jp-keep">この講座で、<br/>あなたが得られるもの<em>。</em></h2></FadeRise>
          <FadeRise delay={100}>
            <p className="muted" style={{ fontSize: 17, marginTop: 16 }}>具体的な成果と、一生使える知識。</p>
          </FadeRise>
        </div>

        <div className="benefits-main">
          {main.map((b, i) => (
            <FadeRise key={b.num} delay={i * 80} className="benefit-main">
              <span className="benefit-num">{b.num}</span>
              <div className="icon"><Icon name={b.icon} size={32} /></div>
              <div className="benefit-eyebrow">— {b.en}</div>
              <h3 className="serif">{b.title}</h3>
              <p>{b.body}</p>
              {b.fig && (
                <div className="benefit-fig tabular">
                  <span className="sign">{b.figPrefix.replace(/[¥]/, "")}</span>
                  <span className="currency">¥</span>{b.fig}
                  <span style={{ fontFamily: "var(--serif)", fontSize: "0.32em", marginLeft: 8, color: "var(--ink-3)" }}>
                    {b.figUnit}
                  </span>
                </div>
              )}
            </FadeRise>
          ))}
        </div>

        <div className="benefits-extras">
          <div className="extras-eyebrow">— ADDITIONAL · 追加特典</div>
          <div className="extras-row">
            {extras.map((e, i) => (
              <FadeRise key={i} delay={i * 80} className="extra">
                <div className="extra-num">+ {String(i + 1).padStart(2, "0")}</div>
                <div className="extra-en">— {e.en}</div>
                <h4 className="serif">{e.title}</h4>
                <p>{e.body}</p>
              </FadeRise>
            ))}
          </div>
        </div>

        <div className="section-end-cta" style={{ marginTop: 64 }}>
          <a href="#offer" className="text-cta">
            講座の詳細を見る <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const Story = () => {
  const stages = [
    { when: "3ヶ月後", title: "朝、通帳を見るのが楽しみになった",
      body: "少しずつ増えていく資産。推しのグッズを買った日も、罪悪感がない。だって、ちゃんと積み立ても続けているから。",
      portrait: { name: "K.M.", date: "2026年5月", role: "第3期受講生", variant: 1 } },
    { when: "6ヶ月後", title: "友達に相談される存在に",
      body: "「お金のこと、どうしてる？」と聞かれるようになった。自分の経験を伝えると、みんな真剣に聞いてくれる。",
      portrait: null },
    { when: "1年後", title: "将来への不安が、確信に変わった",
      body: "資産は30万円以上に。このペースなら、10年後には本当に達成できる。未来が、楽しみになってきた。",
      portrait: { name: "S.T.", date: "2025年11月", role: "第2期受講生", variant: 2 } },
    { when: "3年後", title: "選択肢が、圧倒的に増えた",
      body: "転職も、独立も、留学も。やりたいことを選べる自由がある。お金が全てじゃない。でも、お金があると人生の自由度が上がる。",
      portrait: null },
  ];
  return (
    <section className="section section-story" id="story">
      <div className="container">
        <div className="section-head">
          <div className="num-big tabular">09</div>
          <div className="label-stack">
            <div className="label-en">— FEATURE · これからの物語</div>
            <div className="label-jp">受講生たちが歩んだ道のり。</div>
          </div>
          <div className="you-tag">— これは、あなたの話だ。</div>
        </div>

        <div className="story-intro">
          <FadeRise><h2 className="story-title serif jp-keep">あなたの、<br/>これからの物語<em>。</em></h2></FadeRise>
          <FadeRise delay={100}>
            <p className="muted" style={{ fontSize: 17 }}>
              受講生たちが歩んだ、<br/>未来への道のり。
            </p>
          </FadeRise>
        </div>

        <div className="story-stages-grid">
          {stages.map((s, i) => (
            <FadeRise key={i} delay={i * 80} className={"stage-card " + (s.portrait ? "with-portrait" : "no-portrait")}>
              {s.portrait && <Portrait {...s.portrait} />}
              <div className="stage-text">
                <div className="stage-when">{s.when}</div>
                <h3 className="serif">{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </FadeRise>
          ))}
        </div>

        <div className="story-mega">
          <FadeRise>
            <p className="serif story-mega-h">
              これは、<em>特別な人の話じゃない</em>。<br/>
              ただ、「今日から始めた」人の話だ。
            </p>
          </FadeRise>
          <FadeRise delay={150}>
            <p className="story-mega-sub">次は、あなたの番。</p>
          </FadeRise>
        </div>
      </div>
    </section>
  );
};

const Offer = () => {
  const includes = [
    "3ヶ月間の動画講座（見放題）",
    "個別Zoomヒアリング＆固定費削減提案",
    "オンライン授業（月2回）",
    "専用コミュニティ参加権",
    "30日間返金保証",
    "受講生同士の交流で、モチベーション維持",
    "質問し放題（コミュニティ内)",
    "卒業後も見返せる動画講座",
  ];
  return (
    <section className="section section-offer" id="offer">
      <div className="container">
        <div className="section-head">
          <div className="num-big tabular">10</div>
          <div className="label-stack">
            <div className="label-en">— ENROLLMENT · 参加要項</div>
            <div className="label-jp">人生を変える3ヶ月への投資。</div>
          </div>
        </div>

        <div className="offer-h">
          <FadeRise><h2 className="serif jp-keep">今すぐ、<br/>一歩を踏み出す<em>。</em></h2></FadeRise>
          <FadeRise delay={100}>
            <p className="muted" style={{ fontSize: 17, marginTop: 16 }}>人生を変える3ヶ月間の投資。</p>
          </FadeRise>
        </div>

        <div className="offer-grid">
          <div className="offer-includes">
            <div className="includes-eyebrow">PROGRAM INCLUDES</div>
            <h3 className="serif">プログラムに含まれるもの</h3>
            <ul className="includes-list">
              {includes.map((it, i) => (
                <li key={i}>
                  <span className="num tabular">{String(i + 1).padStart(2, "0")}</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="offer-pricing">
            <div className="pricing-badge">期間限定</div>
            <div className="refund-stamp">
              <div className="stamp-num">30</div>
              <div className="stamp-text">日間返金保証</div>
            </div>
            <div className="pricing-eyebrow">SPECIAL OFFER</div>

            <div className="pricing-row">
              <div className="pricing-label">— 通常価格</div>
              <div className="pricing-strike tabular">¥150,000</div>
            </div>
            <div className="pricing-divider"></div>
            <div className="pricing-now">
              <div className="now-eyebrow">— 今回限りの特別価格</div>
              <div className="now-amt"><span className="yen">¥</span><CountUp to={100000} duration={1800} /></div>
              <div className="now-meta">税込・買い切り</div>
            </div>

            <div className="pricing-perday">
              <div className="perday-amt tabular"><span className="yen">¥</span><CountUp to={1100} duration={1500} /><span className="perday-unit">／日</span></div>
              <p className="perday-note">
                1日あたり、たった約1,100円。<br/>
                コーヒー1杯分の投資で、一生使える知識と、将来への安心が手に入ります。
              </p>
            </div>

            <a href="#final" className="btn-primary pricing-cta">
              今すぐ申し込む <span className="arrow">→</span>
            </a>

            <ul className="pricing-assurances">
              <li>
                <div className="assure-label">30日間返金保証</div>
                <div className="assure-body">満足できなければ全額返金いたします</div>
              </li>
              <li>
                <div className="assure-label">期間限定</div>
                <div className="assure-body">募集は今回のみ</div>
              </li>
              <li>
                <div className="assure-label">30名限定</div>
                <div className="assure-body">少人数制で丁寧に</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Final = () => (
  <section className="final-section" id="final">
    <div className="container">
      <div className="section-head">
        <div className="num-big tabular">12</div>
        <div className="label-stack">
          <div className="label-en">— BEGIN · 最終メッセージ</div>
          <div className="label-jp">10年後のあなたへ。</div>
        </div>
      </div>

      <div className="final-grid">
        <FadeRise>
          <h2 className="serif jp-keep">10年後の自分に、<br/>感謝されるために<em>。</em></h2>
        </FadeRise>
        <div className="final-actions">
          <FadeRise delay={100}>
            <p className="final-sub">未来は、今日の一歩から始まる。</p>
          </FadeRise>
          <FadeRise delay={200}>
            <p className="final-sub2">
              1年後、3年後、10年後のあなたが、<br/>
              「あの時、始めておいてよかった」と思える日が来る。
            </p>
          </FadeRise>
          <FadeRise delay={300}>
            <a href="#offer" className="btn-primary final-cta">今すぐ参加する <span className="arrow">→</span></a>
          </FadeRise>
          <FadeRise delay={400}>
            <ul className="final-indicators">
              <li><span className="ind-num">01</span>期間限定募集</li>
              <li><span className="ind-num">02</span>30名様限定</li>
              <li><span className="ind-num">03</span>30日間返金保証</li>
            </ul>
          </FadeRise>
        </div>
      </div>

      <div className="final-letter">
        <div className="letter-eyebrow">— A LAST LETTER</div>
        <FadeRise>
          <p className="serif">
            最後に、あなたに伝えたい。<br/>
            完璧じゃなくていい。まず、始めること。<br/>
            1年後、「あの時やっておけば…」と後悔しないために。<br/>
            推しも、趣味も、未来も。全部、叶えよう。
          </p>
        </FadeRise>
        <FadeRise delay={150}>
          <p className="serif letter-final">
            今日が、<em>あなたの人生が変わる日</em>。
          </p>
        </FadeRise>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-inner">
        <div>
          <div className="brand" style={{ marginBottom: 16 }}>
            <Icon name="circle-mark" size={20} />
            <span className="brand-name">節約資産形成</span>
          </div>
          <p className="muted small" style={{ maxWidth: "36ch" }}>
            我慢しない節約で、好きなことを楽しみながら確実に資産を築く3ヶ月プログラム。
          </p>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>講座</h4>
            <ul>
              <li><a href="#curriculum">カリキュラム</a></li>
              <li><a href="#offer">参加要項</a></li>
              <li><a href="#story">受講生の声</a></li>
              <li><a href="#solution">講座の特徴</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>運営</h4>
            <ul>
              <li><a href="#">運営者について</a></li>
              <li><a href="#">お問い合わせ</a></li>
              <li><a href="#">ニュースレター</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>規定</h4>
            <ul>
              <li><a href="#">特定商取引法に基づく表記</a></li>
              <li><a href="#">プライバシーポリシー</a></li>
              <li><a href="#">利用規約</a></li>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer-disclaimer">
        ※本講座はポートフォリオ用の架空商品です。実在の商品・サービスとは一切関係ありません。
      </p>
      <div className="footer-legal">
        <span>© 2024 節約資産形成オンライン講座. All rights reserved.</span>
        <span className="sans-en">EDITORIAL EDITION · MMXXVI</span>
      </div>
    </div>
  </footer>
);

window.Curriculum = Curriculum;
window.Benefits = Benefits;
window.Story = Story;
window.Offer = Offer;
window.Final = Final;
window.Footer = Footer;
