import { Icon } from '@iconify/react';
import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Navigation Item',
  name: 'navigationItem',
  type: 'object',
  preview: {
    select: {
      title: 'label',
      variant: 'variant',
    },
    prepare(props: { title: string; variant: string }) {
      const { title, variant } = props;

      let icon;
      if (variant === 'external') {
        icon = 'octicon:link-external-16'
      }
      if (variant === 'internal') {
        icon = 'octicon:link-16'
      }
      if (variant === 'reference') {
        icon = 'carbon:data-reference'
      }
      if (variant === 'file') {
        icon = 'carbon:zip-reference'
      }

      return {
        title,
        media: <Icon icon={icon} />,
      };
    },
  },
  fields: [
    defineField({
      title: 'Variant',
      name: 'variant',
      type: 'string',
      initialValue: 'internal',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          {
            title: 'External Link',
            value: 'external',
          },
          {
            title: 'Internal Link',
            value: 'internal',
          },
          {
            title: 'Internal Reference',
            value: 'reference',
          },
          {
            title: 'File Link',
            value: 'file',
          },
        ],
      },
    }),
    defineField({
      title: 'Label',
      name: 'label',
      type: 'string',
      initialValue: '',
    }),
    defineField({
      title: 'Link Layout Mode',
      name: 'mode',
      type: 'string',
      initialValue: 'default',
      options: {
        layout: 'radio',
        direction: 'vertical',
        list: [
          {
            title: 'Default',
            value: 'default',
          },
          {
            title: 'Primary',
            value: 'primary',
          },
          {
            title: 'Ghost',
            value: 'ghost',
          },
        ],
      },
    }),
    defineField({
      title: 'External URL',
      name: 'externalUrl',
      type: 'url',
      hidden: ({ parent }) => parent?.variant !== 'external',
    }),
    defineField({
      title: 'Open in new Tab',
      name: 'blank',
      type: 'boolean',
      initialValue: true,
      hidden: ({ parent }) => parent?.variant !== 'external',
      options: {
        layout: 'checkbox',
      },
    }),
    defineField({
      title: 'Internal URL',
      name: 'internalUrl',
      type: 'string',
      hidden: ({ parent }) => parent?.variant !== 'internal',
    }),
    defineField({
      title: 'Internal Reference',
      name: 'ref',
      type: 'reference',
      initialValue: {},
      to: [
        { type: 'home' },
        { type: 'post' },
        { type: 'project' },
        { type: 'category' },
        { type: 'tag' },
      ],
      hidden: ({ parent }) => parent?.variant !== 'reference',
      options: {
        disableNew: true,
      } as any, // TODO: fix later - current options typing requires filter config
    }),
    defineField({
      title: 'File Link',
      name: 'file',
      type: 'file',
      initialValue: {},
      hidden: ({ parent }) => parent?.variant !== 'file',
    }),
    defineField({
      title: 'Force Download',
      name: 'forceDownload',
      type: 'boolean',
      initialValue: false,
      hidden: ({ parent }) => parent?.variant !== 'file',
    }),
  ],
});
