import { defineField, defineType } from 'sanity';
import { COL_FIELDSETS } from '../_constants';
import { ContactServicesInput } from '../../components';

export default defineType({
  name: 'contactServices',
  title: 'Contact Services',
  type: 'object',
  components: {
    input: ContactServicesInput,
  },
  fieldsets: [...COL_FIELDSETS],
  // initialValue: () => ({
  //   github: '',
  //   whatsapp: '',
  //   instagram: '',
  //   discord: '',
  //   mail: '',
  //   phone: '',
  //   linkedin: '',
  //   xing: '',
  // }),
  fields: [
    defineField({
      name: 'github',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      type: 'string',
    }),
    defineField({
      name: 'discord',
      type: 'string',
    }),
    defineField({
      name: 'mail',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      type: 'string',
    }),
    defineField({
      name: 'xing',
      type: 'string',
    }),
  ],
});
