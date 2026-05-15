import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageSocial from '@site/src/components/HomepageSocial';
import { useColorMode } from "@docusaurus/theme-common";
import Heading from '@theme/Heading';

import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const { colorMode } = useColorMode();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={clsx(styles.heroContent)}>
          <div className={clsx(styles.heroLeft)}>
            <p className="hero__subtitle">
              <Translate
                id="homepage.main.description"
                values={{
                  quick: <strong><Translate id="homepage.main.description.quick">quick</Translate></strong>,
                  easy: <strong><Translate id="homepage.main.description.easy">easy</Translate></strong>,
                  dragDrop: <strong><Translate id="homepage.main.description.dragDrop">drag and drop</Translate></strong>,
                  gameCreator: <strong><Translate id="homepage.main.description.gameCreator">game creator</Translate></strong>,
                }}
              >
                {'A {quick} and {easy} to use {dragDrop} retro {gameCreator} for your favourite handheld video game system.'}
              </Translate>
            </p>
            <p>Available on Windows.
              {/* , Mac and Linux.*/}
            </p> 
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="https://sacigamer.itch.io/gba-studio"
              >
                Download on Itch.io
              </Link>
            </div>
          </div>
          {/* <div className={clsx(styles.heroRight)}>
            <div className={clsx(styles.hero3D)}>
              <GB3D colorMode={colorMode} />
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );

  // return (
  //   <header className={clsx('hero hero--primary', styles.heroBanner)}>
  //     <div className="container">
  //       <Heading as="h1" className="hero__title">
  //         {siteConfig.title}
  //       </Heading>
  //       <p className="hero__subtitle">{siteConfig.tagline}</p>
  //       <div className={styles.buttons}>
  //         <Link
  //           className="button button--secondary button--lg"
  //           to="/docs/intro">
  //           GBA Docs Tutorial - 5min ⏱️
  //         </Link>
  //       </div>
  //     </div>
  //   </header>
  // );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <HomepageSocial />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
