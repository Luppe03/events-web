import type { Rule } from 'sanity';

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: Rule) => Rule.required() },
    { name: 'description', title: 'Description', type: 'text', validation: (Rule: Rule) => Rule.required() },
    { name: 'date', title: 'Date', type: 'datetime', validation: (Rule: Rule) => Rule.required() },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, validation: (Rule: Rule) => Rule.required() },
    { name: 'location', title: 'Location', type: 'string', validation: (Rule: Rule) => Rule.required() },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
