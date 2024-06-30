import { DefaultTheme } from "vitepress";

export default [
  {
    text: 'Getting Started',
    link: '/getting-started',
  },
  {
    text: 'Related Links',
    items: [
      { text: 'Design System', link: 'https://tap30.github.io/web-components', target: '_blank' },
      { text: 'Icon Library', link: 'https://tap30.github.io/icons', target: '_blank'},
    ],
  }
] as DefaultTheme.NavItem[]
