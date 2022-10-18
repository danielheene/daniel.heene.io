import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  RefObject,
  useMemo,
} from 'react';
import ReactParallaxTilt from 'react-parallax-tilt';
import clsx, { ClassValue } from 'clsx';

import { Box } from '@components/Box';

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassValue;
  children?: ReactNode | ReactNode[];
  variant?: 'light' | 'dark';
  container?: boolean;
  tilted?: boolean;
  radius?: boolean;
  as?: keyof HTMLElementTagNameMap;
}

export const Card = forwardRef(
  (
    {
      children,
      className,
      variant = 'light',
      container = false,
      tilted = false,
      radius = true,
      ...otherProps
    }: CardProps,
    ref: RefObject<HTMLDivElement>
  ): JSX.Element => {
    const mainComponent = useMemo(
      () => (
        <Box
          ref={ref}
          {...otherProps}
          className={clsx(
            [
              (variant === 'light' || variant === 'dark') && 'glass',
              variant === 'light' && 'glass-light',
              variant === 'dark' && 'glass-dark',
              container && 'container',
              radius && 'rounded-lg',
              !container && 'p-6',
            ],
            className
          )}
          // ref={ref}
        >
          {children}
        </Box>
      ),
      [ref, otherProps, variant, container, radius, className, children]
    );

    return tilted ? (
      <ReactParallaxTilt
        perspective={1400}
        transitionSpeed={600}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        tiltReverse
        glareEnable
        glarePosition='all'
        glareMaxOpacity={0.1}
        glareColor='#987DF7'
        className='rounded-lg overflow-hidden'
      >
        {mainComponent}
      </ReactParallaxTilt>
    ) : (
      mainComponent
    );
  }
);
