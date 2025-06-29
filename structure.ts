import { StructureBuilder } from 'sanity/desk'
import { definePlugin } from 'sanity'

export const structure = (S: StructureBuilder) => {
  return S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('event').title('Events'),
      S.documentTypeListItem('home').title('Home'),
    ])
}

export const structureToolPlugin = definePlugin(() => ({
  name: 'structure',
  tools: [
    {
      name: 'desk',
      title: 'Desk',
      structure,
    },
  ],
}))
