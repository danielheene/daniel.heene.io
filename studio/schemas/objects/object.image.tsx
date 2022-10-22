import { defineField, defineType } from 'sanity';
import { ImagePosition } from '../../components/ImagePosition';

export default defineType({
  title: 'Image',
  name: 'object.image',
  type: 'image',
  options: {
    hotspot: true,
    storeOriginalFilename: true,
    metadata: ['blurhash', 'palette'],
  },
  fields: [
    defineField({
      title: 'Position',
      name: 'position',
      type: 'string',
      components: {
        input: ImagePosition,
      },
    }),
    defineField({
      title: 'Credits',
      name: 'credits',
      type: 'text',
      rows: 3,
    }),
  ],
});
