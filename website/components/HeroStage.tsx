import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/future/image';
import clsx, { ClassValue } from 'clsx';

import { useAppStore } from '@lib/appStore';
import { ContactProvider, HeroStageData } from '@lib/types';
import { ContactServices } from '@components/ContactServices';
import { AnimatePresence, motion } from 'framer-motion';
import { Section } from '@components/Section';

interface HeroStageProps extends HeroStageData {
  className?: ClassValue | string;
}

export const HeroStage = ({
  className,
  portrait,
  subHeadline,
  headline,
}: HeroStageProps): JSX.Element => {
  const { headerHeight, settings } = useAppStore();
  const { contactServices } = settings;
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
    <Section>
      <div
        style={{
          ['--header-height' as any]: `${headerHeight}px`,
        }}
        className={clsx([
          'relative',
          'grid',
          'grid-cols-1',
          'xl:grid-cols-2',
          'justify-center',
          'items-center',
          'gap-32',
          'py-[var(--header-height)]',
          'min-h-screen',
          className,
        ])}
      >
        <div className='flex flex-col items-center justify-center'>
          {headline && (
            <h1
              className={clsx([
                'font-syne',
                'font-bold',
                'text-white',
                'text-3xl',
                'sm:text-4xl',
                'lg:text-5xl',
              ])}
            >
              {headline}
            </h1>
          )}
          <AnimatePresence mode='wait' initial={false}>
            {subHeadline.map(
              (line, index) =>
                index === subHeadlineIndex && (
                  <motion.button
                    key={index}
                    initial={{ translateY: '-200%', opacity: 0 }}
                    animate={{ translateY: '0%', opacity: 1 }}
                    exit={{ translateY: '+200%', opacity: 0 }}
                    transition={{ times: [0, 0.1, 0.9, 1] }}
                    onClick={increment}
                    className={clsx([
                      'font-syne',
                      'font-bold',
                      'text-4xl',
                      'sm:text-6xl',
                      'lg:text-6xl',
                      'text-transparent',
                      'bg-clip-text',
                      'bg-vibrant-october-silence',
                      'select-none',
                      'cursor-pointer',
                      'h-[2.5em]',
                      'py-4',
                      'mt-2',
                    ])}
                  >
                    {line}
                  </motion.button>
                )
            )}
          </AnimatePresence>
          {contactServices && (
            <ContactServices
              entries={contactServices as Record<ContactProvider, string>}
              key={contactServices._key}
              selection={['mail', 'github', 'instagram', 'xing', 'linkedin']}
            />
          )}
        </div>
        <div
          className={clsx([
            'flex',
            'flex-col',
            'justify-center',
            'items-center',
          ])}
        >
          {portrait && (
            <Image
              src={portrait.url}
              sizes='100vw'
              width={portrait.metadata.dimensions.width}
              height={portrait.metadata.dimensions.height}
              alt=''
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                maxHeight: 'calc(100vh - 2 * var(--header-height))',
                pointerEvents: 'none',
                flexShrink: 1,
                objectFit: 'contain',
              }}
            />
          )}
        </div>
      </div>
    </Section>
  );
};
