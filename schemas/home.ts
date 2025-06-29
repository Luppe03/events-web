export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}
