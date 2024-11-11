export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'miniZZZ',
      description: 'miniZZZ 是仿照游戏「绝区零」 绳网风格的 web应用. ',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'miniZZZ',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.png',
        dark: '/logo.png',
      },
      nav: [],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/llds66/miniZZZ',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2024',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/llds66/miniZZZ',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'QQ 交流群',
        icon: 'basil:qq-outline',
        to: 'https://qm.qq.com/q/N0OB93X6CY',
        target: '_blank',
      }, {
        title: 'Discord',
        icon: 'ic:twotone-discord',
        to: 'https://discord.gg/DWp2QcW7Xh',
        target: '_blank',
      }, {
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/llds66/miniZZZ',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/llds66/miniZZZ/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});