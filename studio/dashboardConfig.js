export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f88b6e55ef9f41bea80e9ed',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-3qt6ybjy',
                  apiId: 'c2a816e3-548a-41cd-91f4-20a5c0c8456c'
                },
                {
                  buildHookId: '5f88b6e527622f1501972484',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-o5t5f277',
                  apiId: 'd1467b01-00b5-4cb2-b0fe-a95f74fdfba2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/daeyved/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-o5t5f277.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
