import { defineField, defineType } from 'sanity';

import { COL_FIELDSET_NAME, COL_FIELDSETS } from '../_constants';

export default defineType({
  title: 'Section Header',
  name: 'sectionHeader',
  type: 'object',
  initialValue: () => ({
    headline: '',
    preHeadline: '',
    subHeadline: '',
  }),
  fields: [
    defineField({
      title: 'Headline',
      name: 'headline',
      type: 'text',
      rows: 2,
    }),
    defineField({
      title: 'Pre-Headline',
      name: 'preHeadline',
      type: 'text',
      rows: 2,
      fieldset: COL_FIELDSET_NAME['6-6'],
    }),
    defineField({
      title: 'Sub-Headline',
      name: 'subHeadline',
      type: 'text',
      rows: 2,
      fieldset: COL_FIELDSET_NAME['6-6'],
    }),
  ],
  fieldsets: COL_FIELDSETS,
});
