import byteSize from 'byte-size';
import { defineField, defineType } from 'sanity';

import { SanityPreviewWithPublishedLabel } from '../../components';
import { COL_FIELDSETS } from '../_constants';

export default defineType({
  title: 'Logo Cloud',
  name: 'section.logoCloud',
  type: 'object',
  options: {
    modal: {
      type: 'dialog',
    },
  },
  fieldsets: [...COL_FIELDSETS],
  fields: [
    defineField({
      title: 'Section Header',
      name: 'header',
      type: 'sectionHeader',
    }),
    defineField({
      title: 'Entries',
      name: 'entries',
      type: 'array',
      of: [
        {
          name: 'block.logoCloudItem',
          type: 'object',
          fields: [
            defineField({
              title: 'Published',
              name: 'published',
              type: 'boolean',
              initialValue: true,
            }),
            defineField({
              title: 'Name',
              name: 'name',
              type: 'string',
              initialValue: '',
            }),
            defineField({
              title: 'Logo',
              name: 'image',
              type: 'image',
            }),
          ],
          components: {
            preview: SanityPreviewWithPublishedLabel,
          },
          preview: {
            select: {
              name: 'name',
              imageUrl: 'image.asset.url',
              dimensions: 'image.asset.metadata.dimensions',
              fileSize: 'image.asset.size',
              published: 'published',
            },
            prepare({
              name,
              imageUrl,
              published,
              dimensions,
              fileSize,
            }: {
              name: string;
              imageUrl: string;
              published: boolean;
              dimensions: { width: number; height: number };
              fileSize: number;
            }) {
              const { width, height } = dimensions || {};
              const pixels = `${width}x${height}`;
              const size = fileSize ? byteSize(fileSize as number) : '';

              return {
                title: name,
                subtitle: !!pixels && !!size ? `${pixels} • ${size}` : '',
                media: (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={imageUrl} style={{ background: 'white' }} alt='' />
                ),
                published,
              };
            },
          },
        },
      ],
    }),
  ],
});
