import { useMemo } from 'react';
import clsx from 'clsx';

import { Card } from '@components/Card';
import { Section, SectionHeader } from '@components/Section';
import { QualificationItemData, QualificationsSectionData } from '@lib/types';
import { useIntersectionObserver } from '@lib/hooks';

interface QualificationEntryProps extends QualificationItemData {
  index: number;
}

const QualificationEntry = ({
  index,
  title,
  employer,
  location,
  start,
  end,
  body,
}: QualificationEntryProps): JSX.Element => {
  const isOdd = !(index % 2);
  const [isInView, ref] = useIntersectionObserver({});

  return (
    <div className='grid grid-cols-2'>
      <div
        ref={ref}
        className={clsx([
          'col-span-full',
          'lg:col-span-1',
          isOdd ? 'lg:col-start-1' : 'lg:col-start-2',
          'px-4',
          'animate-in',
          'fade-in',
          'slide-in-from-bottom',
          'fill-mode-forwards',
          'duration-700',
          isInView ? 'running' : 'paused',
        ])}
      >
        <div
          className={clsx(
            [
              'lg:max-w-[460px]',
              'xl:max-w-[540px]',
              'w-full',
              'ml-auto',
              'pl-8',
              'sm:pl-11',
              'lg:pl-0',
              'lg:pr-0',
              'relative',
              'pb-12',
            ],
            isOdd && ['lg:text-right', 'lg:mr-5'],
            !isOdd && ['lg:ml-5'],
            'text-white'
          )}
        >
          <span
            className={clsx(
              [
                'absolute',
                'top-1',
                'left-0',
                'w-4',
                'h-4',
                'rounded-full',
                'bg-vibrant-deep-blue',
              ],
              isOdd && ['lg:left-auto', 'lg:-right-11'],
              !isOdd && ['lg:-left-11']
            )}
          />
          <Card variant='light' tilted>
            <h3
              className={clsx(
                'font-syne',
                'font-bold',
                'text-3xl',
                'mb-1',
                'text-white/30',
                'bg-clip-text',
                'bg-vibrant-october-silence'
              )}
            >
              {title}
            </h3>
            <p className='font-syne font-semibold text-gray-200 mb-3'>
              {employer} | {location}
            </p>
            <span
              className={clsx([
                'inline-flex',
                'items-center',
                'justify-center',
                'py-2',
                'px-4',
                'rounded-full',
                'bg-vibrant-deep-blue',
                'text-white',
                'text-xs',
                'font-bold',
                'mb-5',
              ])}
            >
              {end ? `${start} - ${end}` : `since ${start}`}
              {/*{start} - {end}*/}
            </span>
            <p className='font-medium text-base text-white/70'>{body}</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

type QualificationsSectionProps = QualificationsSectionData;

export const QualificationsSection = (
  props: QualificationsSectionProps
): JSX.Element => {
  const { entries, header } = props;

  return (
    <Section>
      <SectionHeader {...header} />

      <div
        className={clsx(
          'relative',
          'pt-12',
          'before:content[" "]',
          'before:absolute',
          'before:top-0',
          'before:block',
          'before:left-2',
          'before:lg:left-1/2',
          'before:w-[1px]',
          'before:h-full',
          'before:bg-[#D7DFFF80]'
        )}
      >
        {entries.map((resume, index) => (
          <QualificationEntry key={resume._key} index={index} {...resume} />
        ))}
      </div>
    </Section>
  );
};