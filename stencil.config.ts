import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'proto-tinker-wc',
  sourceMap: false,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist',
      copy: [
        { src: 'public/tokens.css', dest: 'tokens.css' }
      ]
    },
    {
      type: 'www',
      copy: [
        { src: 'public/tokens.css', dest: 'tokens.css' }
      ]
    },
    {
      type: 'www',
      copy: [
        { src: 'public/utils.css', dest: 'utils.css' }
      ]
    },
  ],
};
