import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

type EditorCard = {
  title: ReactNode;
  description: ReactNode;
  image: string;
  alt: {id: string; message: string};
  linkText: ReactNode;
  to: string;
};

const editorCards: EditorCard[] = [
  {
    title: <Translate id="homepage.editor.gameWorld.title">Build scenes in Game World</Translate>,
    description: <Translate id="homepage.editor.gameWorld.description">Arrange scenes, actors and triggers on a visual canvas, with navigation and resource estimates close at hand.</Translate>,
    image: '/img/screenshots/gba-studio/game-world-overview.png',
    alt: {id: 'homepage.editor.gameWorld.alt', message: 'Game World editor with scene navigation, canvas, minimap and ROM estimate'},
    linkText: <Translate id="homepage.editor.readGuide">Explore this editor</Translate>,
    to: '/docs/getting-started/editor-tour',
  },
  {
    title: <Translate id="homepage.editor.music.title">Compose in the Music editor</Translate>,
    description: <Translate id="homepage.editor.music.description">Inspect tracker modules and shape patterns with a piano roll, channel controls and song arrangement.</Translate>,
    image: '/img/screenshots/gba-studio/music-editor-workspace.png',
    alt: {id: 'homepage.editor.music.alt', message: 'Music editor with piano roll, channels, instruments and song arrangement'},
    linkText: <Translate id="homepage.editor.readGuide">Explore this editor</Translate>,
    to: '/docs/guides/music-editor',
  },
  {
    title: <Translate id="homepage.editor.autotiles.title">Configure autotiles in Settings</Translate>,
    description: <Translate id="homepage.editor.autotiles.description">Set up reusable terrain tiles once, then paint connected edges and corners in your scenes.</Translate>,
    image: '/img/screenshots/gba-studio/settings-workspace.png',
    alt: {id: 'homepage.editor.autotiles.alt', message: 'Settings page showing the Autotiles editor and terrain tile configuration'},
    linkText: <Translate id="homepage.editor.readGuide">Explore this editor</Translate>,
    to: '/docs/guides/tiles-and-auto-tiles',
  },
];

export default function HomepageEditorShowcase(): ReactNode {
  return (
    <section className={styles.showcase} aria-labelledby="homepage-editor-showcase-title">
      <div className="container">
        <Heading as="h2" id="homepage-editor-showcase-title" className={styles.heading}>
          <Translate id="homepage.editor.heading">A closer look at the editors</Translate>
        </Heading>
        <div className={styles.grid}>
          {editorCards.map((card, index) => (
            <article className={styles.card} key={index}>
              <Link to={card.to} className={styles.imageLink}>
                <img src={card.image} alt={translate(card.alt)} className={styles.image} loading="lazy" />
              </Link>
              <div className={styles.cardBody}>
                <Heading as="h3">{card.title}</Heading>
                <p>{card.description}</p>
                <Link to={card.to} className={styles.cardLink}>
                  {card.linkText} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
