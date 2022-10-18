import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'External Link',
  name: 'externalLink',
  type: 'object',
  fields: [
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
    }),
    defineField({
      title: 'New Tab',
      name: 'blank',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});
