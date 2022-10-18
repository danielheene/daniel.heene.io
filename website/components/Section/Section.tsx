import { ReactNode } from 'react';
import clsx from 'clsx';

import { Box } from '@components/Box';

interface SectionProps {
  children: ReactNode | ReactNode[];
  fullWidth?: boolean;
}

export const Section = (props: SectionProps): JSX.Element => {
  const { children, fullWidth = false } = props;

  return (
    <>
      <Box
        as='section'
        className={clsx(
          'section',
          'relative',
          'w-screen',
          'pt-32',
          'first-of-type:pt-0'
        )}
      >
        <div
          className='section-spacer container'
          aria-hidden={true}
          tabIndex={-1}
        />

        <Box
          className={clsx(
            'section-content',
            'py-32',
            !fullWidth && 'container'
          )}
        >
          {children}
        </Box>
      </Box>
      <style jsx>
        {`
          :global(.section + .section > .section-spacer::before) {
            content: ' ';
            display: block;
            width: 100%;
            border-top: 1px solid;
          }
        `}
      </style>
    </>
  );
};
