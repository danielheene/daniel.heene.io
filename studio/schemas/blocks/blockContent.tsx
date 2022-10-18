import { Icon } from '@iconify/react';
import { defineType } from 'sanity';

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      // lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          // { type: 'externalLink', icon: ExternalLinkIcon },
          // { type: 'internalLink', icon: LinkIcon },
        ],
      },
    },
    {
      type: 'image',
      icon: <Icon icon='cil:image' />,
    },
    {
      type: 'code',
      name: 'code',
      icon: <Icon icon='ci:code' />,
      options: {
        theme: 'github',
        darkTheme: 'github',
        language: 'javascript',
        languageAlternatives: [
          { title: 'Javascript', value: 'javascript', mode: 'javascript' },
          { title: 'Typescript', value: 'typescript', mode: 'typescript' },
          { title: 'HTML', value: 'html', mode: 'html' },
          { title: 'CSS', value: 'css', mode: 'css' },
          { title: 'Rust', value: 'rust', mode: 'rust' },
        ],
      },
    },
  ],
});
