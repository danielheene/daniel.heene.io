import { defineField, defineType } from 'sanity';

import { COL_FIELDSET_NAME, COL_FIELDSETS } from '../_constants';

export default defineType({
  type: 'document',
  name: 'project',
  title: 'Project',
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
      title: 'Resources',
      name: 'resources',
      type: 'array',
      of: [
        {
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
        },
      ],
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'blockContent',
    }),
    defineField({
      title: 'Start Date',
      name: 'startDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      fieldset: COL_FIELDSET_NAME['6-6'],
    }),
    defineField({
      title: 'End Date',
      name: 'endDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      fieldset: COL_FIELDSET_NAME['6-6'],
    }),
    defineField({
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      title: 'Meta',
      name: 'metaDefault',
      type: 'meta.defaults',
      group: 'meta',
    }),
  ],
  fieldsets: COL_FIELDSETS,
});
