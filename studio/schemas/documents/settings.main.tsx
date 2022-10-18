import { Icon } from '@iconify/react';
import { defineField, defineType } from 'sanity';

import { COL_FIELDSET_NAME, COL_FIELDSETS } from '../_constants';

export default defineType({
  title: 'Main',
  name: 'settings.main',
  type: 'document',
  icon: () => <Icon icon='carbon:settings' />,
  liveEdit: false,
  initialValue: () => ({
    pageTitle: '',
    hireMe: false,
    contactServices: {
      github: '',
      whatsapp: '',
      instagram: '',
      discord: '',
      mail: '',
      phone: '',
      linkedin: '',
      xing: '',
    },
    resume: null,
    publicKey: null,
  }),
  fields: [
    defineField({
      title: 'hireMe',
      name: 'hireMe',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      title: 'Contact Services',
      name: 'contactServices',
      type: 'contactServices',
    }),
    defineField({
      title: 'Resume / CV',
      name: 'resume',
      type: 'file',
      fieldset: COL_FIELDSET_NAME['6-6'],
    }),
    defineField({
      title: 'Public Signature / GPG Key',
      name: 'publicKey',
      type: 'file',
      fieldset: COL_FIELDSET_NAME['6-6'],
    }),
  ],
  fieldsets: [...COL_FIELDSETS],
  preview: {
    prepare: () => ({
      title: 'Main',
    }),
  },
});
