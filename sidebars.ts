import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'installation',
    'build',
    {
      type: 'category',
      label: 'Getting started',
      items: [
        'getting-started/first-project',
        'getting-started/editor-tour',
        'getting-started/project-structure',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/engine-overview',
        'concepts/scenes-and-resources',
        'concepts/visual-scripting',
        'concepts/event-lifecycle',
        'concepts/butano-pipeline',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/scenes-and-layers',
        'guides/actors-and-interactions',
        'guides/dialogue-and-audio',
        'guides/variables-and-conditions',
        'guides/camera-and-fades',
        'guides/triggers-and-input',
        'guides/controls',
        'guides/physics',
        'guides/event-organization',
        'guides/scripts-and-parameters',
        'guides/prefabs',
        'guides/sprite-animation',
        'guides/tiles-and-auto-tiles',
        'guides/dialogue',
        'guides/music-editor',
        'guides/sound-effects',
        'guides/save-and-load',
        'guides/ui-and-fonts',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/events',
        'reference/resource-schemas',
        'reference/script-graph',
        'reference/input-and-runtime',
        'reference/limits-and-compatibility',
      ],
    },
    {
      type: 'category',
      label: 'Release',
      items: [
        'build-and-release/build',
        'build-and-release/emulator',
        'build-and-release/hardware',
        'build-and-release/debugging-builds',
        'build-and-release/runtime-monitor',
        'release/checklist',
      ],
    },
    'contributing',
  ],
};

export default sidebars;
