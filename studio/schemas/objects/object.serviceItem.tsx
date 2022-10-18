import { Icon } from '@iconify/react';
import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Service Item',
  name: 'block.serviceItem',
  type: 'object',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Icon',
      name: 'icon',
      type: 'string',
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'text',
      rows: 4,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      icon: 'icon',
    },
    prepare: ({ title, icon }) => {
      return {
        title,
        media: <Icon icon={icon || 'ci:error-outline'} />,
      };
    },
  },
});
