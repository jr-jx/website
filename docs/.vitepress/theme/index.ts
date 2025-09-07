// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import '@theojs/lumen/style'
import { Notice, Underline } from '@theojs/lumen'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Notice),
    }) 
  },
  enhanceApp({ app, router, siteData }) {
  }
} satisfies Theme
