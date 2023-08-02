import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Digimaly Seller Docs",
  description: "The Official Digimaly Seller Documentation",
  base: "/seller",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs' },
      { text: 'Digimaly', link: 'https://digimaly.com' }
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Welcome', link: '/docs' },
          { text: 'Pricing and Fees', link: '/pricing-and-fees' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/digimaly' },
      { icon: 'github', link: 'https://github.com/digimaly' }
    ]
  }
})
