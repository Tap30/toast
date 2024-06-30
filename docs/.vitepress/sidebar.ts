import fs from 'fs';
import { DefaultTheme } from "vitepress";

export default [
  { text: 'Getting Started', link: '/getting-started' },
  {
    text: 'API References',
    collapsed: false,
    items: [
      { text: 'Properties', link: '/references/properties' },
      { text: 'Max Concurrent Toasts', link: '/references/max-concurrent-toasts' },
      { text: 'CSS Parts', link: 'https://tap30.github.io/web-components/references/css-parts.html#tap-toast', target: '_blank' },
    ],
  },
] as DefaultTheme.SidebarItem[]
