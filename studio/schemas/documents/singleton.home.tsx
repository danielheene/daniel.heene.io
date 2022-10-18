import { Icon } from '@iconify/react';
import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Home',
  name: 'home',
  type: 'document',
  icon: () => <Icon icon='carbon:home' />,
  groups: [
    {
      name: 'main',
      title: 'Main',
      default: true,
    },
    {
      name: 'services',
      title: 'Services',
    },
    {
      name: 'qualifications',
      title: 'Qualifications',
    },
    {
      name: 'customers',
      title: 'Customers',
    },
    {
      title: 'Meta',
      name: 'meta',
    },
  ],
  fields: [
    defineField({
      title: 'Hero Stage',
      name: 'heroStage',
      type: 'object',
      group: 'main',
      fields: [
        defineField({
          title: 'Headline',
          name: 'headline',
          type: 'text',
          rows: 2,
          // fieldset: COL_FIELDSET_NAME['6-6'],
        }),
        defineField({
          title: 'Sub Headline',
          name: 'subHeadline',
          type: 'array',
          of: [{ type: 'string' }],
          // rows: 2,
          // fieldset: COL_FIELDSET_NAME['6-6'],
        }),
        defineField({
          title: 'Portrait',
          name: 'portrait',
          type: 'image',
        }),
      ],
    }),
    defineField({
      title: 'Services',
      name: 'services',
      type: 'section.services',
      group: 'services',
    }),
    defineField({
      title: 'Qualifications',
      name: 'qualifications',
      type: 'section.qualifications',
      group: 'qualifications',
    }),
    defineField({
      title: 'Logo Cloud',
      name: 'logoCloud',
      type: 'section.logoCloud',
      group: 'customers',
    }),
    defineField({
      title: 'Meta',
      name: 'metaDefault',
      type: 'meta.defaults',
      group: 'meta',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Home',
    }),
  },
});
