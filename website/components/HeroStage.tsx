import React, { useCallback, useEffect, useState } from 'react';
import clsx, { ClassValue } from 'clsx';

import { useAppStore } from '@lib/appStore';
import { ContactProvider, HeroStageData } from '@lib/types';
import { ContactModule } from '@components/ContactServices';
import { AnimatePresence, motion } from 'framer-motion';
import { Image } from '@components/Image';

interface HeroStageProps extends HeroStageData {
  className?: ClassValue | string;
}

export const HeroStage = ({
  className,
  portrait,
  subHeadline,
  headline,
}: HeroStageProps): JSX.Element => {
  const { headerHeight, contact } = useAppStore();
  const [subHeadlineIndex, setSubHeadlineIndex] = useState<number>(0);

  const increment = useCallback(() => {
    const nextIndex = (subHeadlineIndex + 1) % subHeadline.length;
    setSubHeadlineIndex(nextIndex);
  }, [subHeadlineIndex]);

  useEffect(() => {
    const timer = setInterval(increment, 3000);
    return () => clearInterval(timer);
  }, [subHeadlineIndex]);

  return (
    <section>
      <div
        style={{
          ['--header-height' as any]: `${headerHeight}px`,
          ['--stage-height' as any]: `calc(100vh - 2 * var(--header-height))`,
        }}
        className={clsx([
          'relative',
          'container',
          'flex',
          'flex-col',
          'lg:flex-row',
          'justify-center',
          'items-start',
          'lg:items-center',
          'lg:min-h-[var(--stage-height)]',
          'mb-[var(--header-height)]',
          'gap-16',
          className,
        ])}
      >
        <div
          className={clsx([
            'order-1',
            'lg:order-2',
            'w-full',
            'sm:p-24',
            'lg:p-0',
          ])}
        >
          {portrait && (
            <div
              className={clsx([
                'w-full',
                'relative',
                'aspect-w-square',
                'aspect-h-square',
              ])}
            >
              <Image
                image={portrait}
                alt='Portrait Daniel Heene'
                className={clsx([
                  'block',
                  'w-10/12',
                  'sm:w-full',
                  'h-full',
                  'pointer-events-none',
                  'object-contain',
                  'flex-shrink-1',
                ])}
                style={{
                  maxHeight: 'calc(100vh - 2 * var(--header-height))',
                }}
              />
            </div>
          )}
        </div>
        <div
          className={clsx([
            'flex',
            'flex-col',
            'items-center',
            'justify-center',
            'order-2',
            'lg:order-1',
            'w-full',
          ])}
        >
          {headline && (
            <h1
              className={clsx([
                'font-syne',
                'font-bold',
                'text-white',
                'text-2xl',
                'sm:text-3xl',
                'lg:text-4xl',
                'relative',
                'z-10',
              ])}
            >
              {headline}
            </h1>
          )}
          <AnimatePresence mode='wait' initial={false}>
            {subHeadline.map(
              (line, index) =>
                index === subHeadlineIndex && (
                  <motion.div
                    key={index}
                    initial={{ translateY: '-200%', opacity: 0 }}
                    animate={{ translateY: '0%', opacity: 1 }}
                    exit={{ translateY: '+200%', opacity: 0 }}
                    transition={{ times: [0, 0.1, 0.9, 1] }}
                    onClick={increment}
                    className={clsx([
                      'font-syne',
                      'font-bold',
                      'text-3xl',
                      'sm:text-4xl',
                      'lg:text-5xl',
                      'text-transparent',
                      'bg-clip-text',
                      'bg-vibrant-october-silence',
                      'select-none',
                      'cursor-pointer',
                      'text-center',
                      'flex',
                      'flex-col',
                      'items-center',
                      'justify-center',
                      'self-center',
                      'h-[3em]',
                      'py-4',
                      'mt-2',
                      'relative',
                      'z-0',
                    ])}
                  >
                    <span>{line}</span>
                  </motion.div>
                )
            )}
          </AnimatePresence>
          {contact && (
            <ContactModule
              entries={contact as Record<ContactProvider, string>}
              className='relative z-10'
              selection={['mail', 'github', 'instagram', 'xing', 'linkedin']}
            />
          )}
        </div>
      </div>
    </section>
  );
};
