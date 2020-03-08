export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e6463f61a16811cf00978e2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2wk2wf6r',
                  apiId: '0b75439d-7002-4b4e-8e49-ab716d3cc201'
                },
                {
                  buildHookId: '5e6463f600040312950236d6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fgbju28g',
                  apiId: '93db8530-d3ae-4428-8e45-e2cca590c0cb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shaurov/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fgbju28g.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
