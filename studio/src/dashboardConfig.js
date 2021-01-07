export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff743c6ae3e1f3e226e6885',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vjhquvx8',
                  apiId: '37e43f52-bbe2-4b87-b63c-1b8ae49a5707'
                },
                {
                  buildHookId: '5ff743c63bfacf30b930472d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rwtstepr',
                  apiId: '797f56e2-8abc-48d4-becc-01d4ae5bff25'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fsteve218/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rwtstepr.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
