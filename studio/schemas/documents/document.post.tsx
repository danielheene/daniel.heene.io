import { defineField, defineType } from 'sanity';

export default defineType({
  type: 'document',
  title: 'Post',
  name: 'post',
  groups: [
    {
      title: 'Main',
      name: 'main',
    },
    {
      title: 'Meta',
      name: 'meta',
    },
  ],
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      group: 'main',
    }),
    defineField({
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text',
      group: 'main',
    }),
    defineField({
      title: 'Poster',
      name: 'poster',
      type: 'image',
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'blockContent',
    }),
    defineField({
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
    }),
    defineField({
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      title: 'Meta',
      name: 'metaDefault',
      type: 'meta.defaults',
      group: 'meta',
    }),
  ],
});
