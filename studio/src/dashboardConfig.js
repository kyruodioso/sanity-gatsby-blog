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
                  buildHookId: '5f8bcfa72ff94037c9abecda',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vmikmdn4',
                  apiId: 'b0162184-a8d8-4b47-b6f3-6e80177e8e14'
                },
                {
                  buildHookId: '5f8bcfa72ff9403fb1abedb9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-otwc4t9a',
                  apiId: 'ab0f3d90-5a0a-4884-bac3-632eb3ec4957'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kyruodioso/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-otwc4t9a.netlify.app', category: 'apps' }
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
