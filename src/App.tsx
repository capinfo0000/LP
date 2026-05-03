import { Header, Hero, Empathy, Philosophy } from './components/v4/SectionsA';
import { Bridge, ChoiceBlock, CTABlock } from './components/v4/Bridges';
import { Data, Risk, Solution } from './components/v4/SectionsB';
import { Curriculum, Benefits, Story, Offer, Final, Footer } from './components/v4/SectionsC';
import { SocialProof, ThreeFutures } from './components/v4/Strips';
import { FixedCTA } from './components/v4/Motion';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Empathy />
        <Bridge>気づいてしまった以上、もう戻れない。</Bridge>
        <Philosophy />
        <Data />
        <Risk />
        <ChoiceBlock />
        <Bridge>3年後、後悔したくないなら、続きを読んでほしい。</Bridge>
        <Solution />
        <CTABlock />
        <Curriculum />
        <SocialProof />
        <Bridge>やる人と、やらない人。差が出るのは、想像より早い。</Bridge>
        <Benefits />
        <Story />
        <Offer />
        <ThreeFutures />
        <Final />
      </main>
      <Footer />
      <FixedCTA />
    </>
  );
}

export default App;
