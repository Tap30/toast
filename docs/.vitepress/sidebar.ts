import fs from 'fs';
import { DefaultTheme } from "vitepress";

export default [
  { text: 'Getting Started', link: '/getting-started' },
  {
    text: 'API References',
    collapsed: false,
    items: [
      { text: 'CSS Parts', link: 'https://tap30.github.io/web-components/references/css-parts.html#tap-toast', target: '_blank' },
      { text: 'Properties', link: '/references/properties' },
    ],
  },
] as DefaultTheme.SidebarItem[]
