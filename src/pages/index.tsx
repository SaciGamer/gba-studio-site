import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageSocial from '@site/src/components/HomepageSocial';
import HomepageEditorShowcase from '@site/src/components/HomepageEditorShowcase';

import styles from './index.module.css';
import Translate, {translate} from '@docusaurus/Translate';
import {useEffect, useRef, useState} from 'react';

function HomepageHeader() {
  const heroImageRef = useRef<HTMLImageElement>(null);
  const [heroPointer, setHeroPointer] = useState({x: 0, y: 0});
  useEffect(() => {
    const updateFromPointer = (clientX: number, clientY: number) => {
      const bounds = heroImageRef.current?.getBoundingClientRect();
      if (!bounds) return;
      const clamp = (value: number) => Math.max(-1, Math.min(1, value));
      setHeroPointer({
        x: clamp((clientX - bounds.left - bounds.width / 2) / (window.innerWidth / 2)),
        y: clamp((clientY - bounds.top - bounds.height / 2) / (window.innerHeight / 2)),
      });
    };
    const handleMouseMove = (event: globalThis.MouseEvent) => updateFromPointer(event.clientX, event.clientY);
    const handleMouseLeave = () => setHeroPointer({x: 0, y: 0});
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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
            <p className={styles.availability}>Available on Windows.
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
          <div className={styles.heroRight}>
            <div
              className={styles.heroVisual}
              style={{
                transform: `translate3d(${heroPointer.x * 6}px, ${heroPointer.y * 5}px, 36px) rotateX(${-heroPointer.y * 6}deg) rotateY(${heroPointer.x * 7}deg) scale(${1 + (Math.abs(heroPointer.x) + Math.abs(heroPointer.y)) * 0.006})`,
              }}
            >
              <img
                ref={heroImageRef}
                className={styles.heroImage}
                src="/img/gba-logo.png"
                alt={translate({id: 'homepage.hero.imageAlt', message: 'Retro handheld console illustration with the GBA Studio logo'})}
                style={{filter: `drop-shadow(${-heroPointer.x * 16}px ${28 + heroPointer.y * 8}px 26px rgb(0 0 0 / 34%))`}}
              />
              <span
                aria-hidden="true"
                className={styles.heroLight}
                style={{
                  background: `radial-gradient(ellipse at ${50 - heroPointer.x * 3}% ${50 - heroPointer.y * 3}%, transparent 84%, rgb(255 255 255 / 38%) 94%, rgb(255 226 170 / 24%) 100%), radial-gradient(ellipse 50% 29% at ${78 - heroPointer.x * 2}% ${26 - heroPointer.y * 2}%, rgb(255 255 255 / 42%) 0%, rgb(255 226 170 / 23%) 28%, rgb(255 226 170 / 13%) 52%, rgb(255 226 170 / 5%) 76%, transparent 100%), radial-gradient(ellipse at center, transparent 34%, rgb(18 16 28 / 20%) 70%, rgb(18 16 28 / 46%) 100%)`,
                }}
              />
            </div>
          </div>
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
        <HomepageEditorShowcase />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
