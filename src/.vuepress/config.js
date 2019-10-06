module.exports = {
    theme: '@vuepress/blog',
    title: 'Math & Code',
    themeConfig: {
        nav: [
            {
                text: 'Blog',
                link: '/'
            },
            {
                text: 'Tags',
                link: '/tag/'
            }
        ],
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/benscrane'
                }
            ],
            copyright: [
                {
                    text: 'MIT Licensed | Copyright © 2019-present Ben Crane',
                    link: ''
                }
            ]
        }
    }
}