import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Internal Link',
  name: 'internalLink',
  type: 'object',
  fields: [
    defineField({
      title: 'Internal Link',
      name: 'internalLink',
      type: 'reference',
      to: [{ type: 'home' }],
    }),
  ],
});
