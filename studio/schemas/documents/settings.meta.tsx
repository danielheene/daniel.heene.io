import { Icon } from '@iconify/react';
import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Meta',
  name: 'settings.meta',
  type: 'document',
  icon: () => <Icon icon='carbon:tag' />,
  liveEdit: false,
  fields: [
    defineField({
      title: 'Meta',
      name: 'meta',
      type: 'meta.defaults',
      options: {
        global: true,
      },
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Meta',
    }),
  },
});
