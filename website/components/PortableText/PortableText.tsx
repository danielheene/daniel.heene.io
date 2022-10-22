import {
  defaultComponents,
  mergeComponents,
  NodeType,
  PortableText as PortableTextComponent,
  PortableTextComponents,
  PortableTextProps,
} from '@portabletext/react';
import React, { useMemo } from 'react';
import { Image } from '@components/Image';
import clsx from 'clsx';

export const PortableText = (props: PortableTextProps) => {
  const { value } = props;

  const components: PortableTextComponents = useMemo(
    () =>
      mergeComponents(defaultComponents, {
        block: {},
        // types: {
          // 'block.image': ({ value, index, isInline, renderNode }) => (
          //   <Image key={value._key} image={value} />
          // ),
          // 'block.code': ({ value, index, isInline, renderNode }) => (
          //   <pre key={value._key}>
          //     <code>{value}</code>
          //   </pre>
          // ),
        // },
      }),

    []
  );

  return (
    <article
      className={clsx([
        'container',
        'prose',
        'lg:prose-xl',
        'prose-base',
        'w-full',
        'p-12',
        'max-w-full',
        'rounded-lg',
        'bg-white/10',
        'backdrop-blur-2xl',
        'prose',
        'prose-base',
        'dark:prose-invert',
        'prose-a:text-primary',
        // 'prose-strong:text-white',
        // 'prose:text-white',
      ])}
    >
      <PortableTextComponent
        value={value}
        components={components}
        onMissingComponent={(
          message: string,
          options: { type: string; nodeType: NodeType }
        ) => console.log(message, options)}
      />
    </article>
  );
};
