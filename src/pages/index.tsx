import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HeroAbout from '@site/src/components/HeroAbout';
import Summary from '@site/src/components/Summary';
import Credits from '@site/src/components/Credits';
import Stats from '@site/src/components/Stats';
import FeaturesBlocks from '@site/src/components/FeaturesBlocks';
import FeaturesZigzag from '@site/src/components/FeaturesZigzag';
import Newsletter from '@site/src/components/Newsletter';
// import 'aos/dist/aos.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  /*useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 350,
      easing: 'ease-out-sine',
    });
  });*/

  return (

        <Layout
            title={`CrashKiOS - KMM Crash Reporting`}
            description="Symbolicated crash reporting for Kotlin Multiplatform Mobile, supporting Firebase Crashlytics and Bugsnag">
          <div className="preflight-wrapper">
          <HeroAbout/>
          <Summary/>
          {/*<HeroHome />*/}
          {/*<Process/>*/}
          <Stats/>
          <FeaturesZigzag/>
          <FeaturesBlocks/>
          <Newsletter/>
            <Credits/>
          </div>

        </Layout>

  );
}
