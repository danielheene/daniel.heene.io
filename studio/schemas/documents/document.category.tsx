import { defineField, defineType } from 'sanity';

export default defineType({
  type: 'document',
  name: 'category',
  title: 'Category',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Poster',
      name: 'poster',
      type: 'image',
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'blockContent',
    }),
  ],
});
