import { defineArrayMember, defineField, defineType } from 'sanity';
import { COL_FIELDSETS, FieldConfig } from '../_shared';

export default defineType({
  title: 'Project',
  name: 'projects.project',
  type: 'document',
  groups: [
    {
      title: 'Main',
      name: 'main',
      default: true,
    },
    {
      title: 'Body',
      name: 'body',
    },
    {
      title: 'Meta',
      name: 'meta',
    },
  ],
  fields: [
    defineField({
      title: 'Published',
      name: 'published',
      type: 'boolean',
      initialValue: true,
      group: 'main',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      group: ['main', 'meta'],
    }),
    defineField({
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
        metadata: ['blurhash', 'palette'],
      },
      group: 'main',
    }),
    defineField({
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text',
      rows: 4,
      group: 'main',
    }),
    defineField({
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{ type: 'projects.category' }],
      group: 'main',
    }),
    defineField({
      title: 'Tags',
      name: 'tags',
      type: 'array',
      initialValue: [],
      of: [{ type: 'projects.tag' }],
      group: 'main',
    }),
    defineField({
      title: 'Resources',
      name: 'resources',
      type: 'array',
      initialValue: [],
      group: 'main',
      of: [
        defineArrayMember({
          name: 'resource',
          type: 'object',
          fields: [
            defineField({
              title: 'Name',
              name: 'name',
              type: 'string',
            }),
            defineField({
              title: 'URL',
              name: 'url',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'block.content',
      group: 'body',
    }),
    defineField({ ...FieldConfig.SlugInput, group: 'meta' }),
    defineField({ ...FieldConfig.MetaDescription, group: 'meta' }),
    defineField({ ...FieldConfig.MetaKeywords, group: 'meta' }),
    defineField({ ...FieldConfig.MetaTags, group: 'meta' }),
  ],
  fieldsets: COL_FIELDSETS,
});
