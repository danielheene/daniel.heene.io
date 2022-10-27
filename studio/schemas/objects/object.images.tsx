import { defineArrayMember, defineType } from 'sanity';

export default defineType({
  title: 'Images',
  name: 'object.images',
  type: 'object',
 fields: [
   {
     name: 'entries',
     type: 'array',
     of: [
       defineArrayMember({
         type: 'object.image',
       }),
     ],
   }
 ]
});
