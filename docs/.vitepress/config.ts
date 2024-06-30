import {defineConfig} from 'vitepress';
import sidebar from "./sidebar";
import socialLinks from "./socialLinks";
import nav from "./nav";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Tapsi Toast',
  description: 'Queue and display toast notifications with ease',
  base: "/toast/",
  vite:{},
  themeConfig: {
    sidebar,
    socialLinks,
    nav
  },
});
