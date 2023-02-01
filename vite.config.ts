import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { getLanguage, highlight } from 'highlight.js';

const { resolve } = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
    extensions: [
      '.ts',
      '.js',
      '.vue',
      '.jsx',
      '.tsx',
      '.css',
      '.scss',
      '.md',
      '.json'
    ]
  },
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    vueJsx({}),
    Markdown({
      markdownItSetup(md) {
        md.options.highlight = function (str, lang) {
          if (lang && getLanguage(lang)) {
            const { name } = getLanguage(lang);
            return `<div class="c3-doc-card ${name}">${highlight(lang, str, true).value
              }</div>`;
          }
        };
      }
    })
    // Markdown()
  ],
  build: {
    target: 'es2015',
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        mobile: resolve(__dirname, 'mobile.html')
      }
    }
  }
});
