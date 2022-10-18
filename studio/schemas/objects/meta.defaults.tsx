import { Icon } from '@iconify/react';
import { deburr, kebabCase } from 'lodash';
import { defineField, defineType } from 'sanity';

import { COL_FIELDSETS } from '../_constants';

export default defineType({
  title: 'SEO',
  name: 'meta.defaults',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: '',
      hidden: ({ document }) => document?._type.includes('settings'),
    }),
    defineField({
      title: 'Title Template',
      name: 'titleTemplate',
      type: 'string',
      initialValue: '',
      hidden: ({ document }) => !document?._type.includes('settings'),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      initialValue: {
        current: '',
      },
      options: {
        source: (doc) => doc.title as string,
        slugify: (input) => kebabCase(deburr(input as string)),
        maxLength: 96,
      },
      hidden: ({ document }) => document?._type.includes('settings'),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'string',
      initialValue: '',
    }),
    defineField({
      title: 'Keywords',
      name: 'keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      title: 'Meta Tags',
      name: 'metaTags',
      type: 'array',
      of: [
        {
          title: 'Entry',
          name: 'metaTag',
          type: 'object',
          fields: [
            {
              title: 'Type',
              name: 'type',
              type: 'string',
              initialValue: 'name',
              options: {
                layout: 'dropdown',
                list: [
                  {
                    title: 'name',
                    value: 'name',
                  },
                  {
                    title: 'property',
                    value: 'property',
                  },
                  {
                    title: 'httpEquiv',
                    value: 'httpEquiv',
                  },
                ],
              },
            },
            {
              title: 'Type Value',
              name: 'value',
              type: 'string',
              initialValue: '',
            },
            {
              title: 'Content Value',
              name: 'content',
              type: 'string',
              initialValue: '',
            },
          ],
          preview: {
            select: {
              type: 'type',
              value: 'value',
              content: 'content',
            },
            prepare(props: { type: string; value: string; content: string }) {
              const { type, value, content } = props;

              return {
                title: `<meta ${type}='${value}' content='${content}' />`,
                media: <Icon icon='carbon:tag' />,
              };
            },
          },
        },
      ],
    }),
  ],
  fieldsets: COL_FIELDSETS,
});
