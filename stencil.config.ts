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
        { src: 'styles/tokens.css', dest: 'tokens.css' },
        { src: 'styles/props.css', dest: 'props.css' },
      ]
    },
    {
      type: 'www',
      copy: [
        { src: 'styles/tokens.css', dest: 'tokens.css' },
        { src: 'styles/utils.css', dest: 'utils.css' },
        { src: 'styles/props.css', dest: 'props.css' },
      ]
    },
  ],
};
