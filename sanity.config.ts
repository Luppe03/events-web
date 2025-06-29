import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'My Events',
  projectId: 'l5sjfic4',
  dataset: 'production',
  plugins: [
    structureTool({
      // definiera strukturen inline
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('event').title('Events'),
            S.documentTypeListItem('home').title('Home'),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
