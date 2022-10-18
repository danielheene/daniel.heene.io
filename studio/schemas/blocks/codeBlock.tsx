import { defineField, defineType } from 'sanity';

import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-dockerfile';
import 'ace-builds/src-noconflict/mode-gcode';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/mode-graphqlschema';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-json5';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/mode-plain_text';
import 'ace-builds/src-noconflict/mode-prisma';
import 'ace-builds/src-noconflict/mode-rust';
import 'ace-builds/src-noconflict/mode-typescript';

export default defineType({
  title: 'Code',
  name: 'block.code',
  type: 'object',
  fields: [
    defineField({
      name: 'exampleUsage',
      title: 'Example usage',
      type: 'code',
      options: {
        theme: 'solarized_dark',
        language: 'js',
        languageAlternatives: [
          { title: 'Javascript', value: 'js', mode: 'javascript' },
          { title: 'JSON', value: 'json', mode: 'javascript' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'Rust', value: 'rust', mode: 'rust' },
          { title: 'SASS', value: 'sass' },
        ],
      },
    }),
  ],
});
