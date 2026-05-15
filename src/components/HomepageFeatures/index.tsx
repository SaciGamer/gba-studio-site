import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: ReactNode;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="homepage.main.featureItem.easyToUse.title">🎮 Easy to Use</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate id="homepage.main.featureItem.easyToUse">
        GBA Studio was designed from the ground up to be simple to install and get 
        your games up and running quickly, without hassle.
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.main.featureItem.focusOnWhatMatters.title">🎯 Focus on What Matters</Translate>,
    Svg: require('@site/static/img/gba-logo.svg').default,
    description: (
      <Translate id="homepage.main.featureItem.focusOnWhatMatters">
        With GBA Studio you can focus on the creative side — developing your ideas and 
        building your worlds. Let the environment handle repetitive tasks and organization. 
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.main.featureItem.poweredModernTechnologies.title">⚛️ Powered by Modern Technologies</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate id="homepage.main.featureItem.poweredModernTechnologies">
        GBA Studio leverages current and flexible tools, allowing you to extend or customize 
        the editor layout. You can expand features while keeping the same consistent interface.
      </Translate>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
