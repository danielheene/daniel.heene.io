import { Icon } from '@iconify/react';
import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Navigation',
  name: 'settings.navigation',
  type: 'document',
  icon: () => <Icon icon='carbon:catalog' />,
  liveEdit: false,
  fields: [
    defineField({
      title: 'Label',
      name: 'label',
      type: 'string',
    }),
    defineField({
      title: 'Identifier',
      name: 'id',
      type: 'slug',
    }),
    defineField({
      title: 'Entries',
      name: 'entries',
      type: 'array',
      of: [
        {
          type: 'navigationItem',
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Navigation',
    }),
  },
});
