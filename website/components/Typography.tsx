import React, {
  createRef,
  ElementType,
  ForwardedRef,
  forwardRef,
  memo,
  useMemo,
} from 'react';
import clsx, { ClassValue } from 'clsx';

import { Box } from '@components/Box';
import { mergeRefs } from '@lib/utils';

type TypographyVariant =
  | 'heading'
  | 'sub-heading'
  | 'section-heading'
  | 'section-subheading'
  | 'section-caption'
  | 'body'
  | 'body-small'
  | 'nav-item'
  | 'nav-item-primary';

interface TypographyProps {
  as?: ElementType;
  children: React.ReactNode | React.ReactNode[];
  variant: `${TypographyVariant}`;
  className?: ClassValue;
}

export const Typography = memo(
  forwardRef(
    (props: TypographyProps, forwardedRef: ForwardedRef<HTMLSpanElement>) => {
      const { as, children, className, variant, ...boxProps } = props;

      const localRef = createRef<HTMLSpanElement>();
      const mergedRef = mergeRefs([localRef, forwardedRef]);

      const classList = useMemo(() => {
        switch (variant) {
          case 'heading':
            return clsx([
              'font-space-grotesk',
              'font-medium',
              'text-4xl',
              'md:text-6xl',
              'lg:text-8xl',
              className,
            ]);
          case 'sub-heading':
            return clsx([
              'font-inter',
              'font-semibold',
              'text-lg',
              'lg:text-2xl',
              className,
            ]);
          case 'section-heading':
            return clsx([
              'font-syne',
              'font-bold',
              'text-4xl',
              'md:text-6xl',
              'lg:text-8xl',
              className,
            ]);
          case 'section-subheading':
            return clsx([
              'font-syne',
              'font-bold',
              'text-xl',
              'md:text-2xl',
              'lg:text-4xl',
              className,
            ]);
          case 'section-caption':
            return clsx([
              'font-recursive',
              'font-semibold',
              'text-sm',
              'md:text-md',
              'uppercase',
              className,
            ]);
          case 'body':
            return clsx([
              'font-inter',
              'font-normal',
              'text-lg',
              'lg:text-2xl',
              'leading-relaxed',
              className,
            ]);
        }
      }, [variant, className]);

      return (
        <Box
          as={as || 'span'}
          ref={mergedRef}
          className={classList}
          {...boxProps}
        >
          {children}
        </Box>
      );
    }
  )
);
