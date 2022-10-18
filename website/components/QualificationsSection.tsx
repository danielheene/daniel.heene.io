import { useMemo } from 'react';
import clsx from 'clsx';

import { Card } from '@components/Card';
import { Section, SectionHeader } from '@components/Section';
import { QualificationItemData, QualificationsSectionData } from '@lib/types';

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

  const spacer = useMemo(() => <div className='w-full lg:w-1/2' />, []);

  return (
    <>
      {!isOdd && spacer}
      <div className='w-full lg:w-1/2 px-4'>
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
            <h3 className='font-syne font-bold text-3xl text-primary-700 mb-1'>
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
      {isOdd && spacer}
    </>
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
          'before:bg-[#d7dfff]'
        )}
      >
        <div className='flex flex-wrap -mx-4'>
          {entries.map((resume, index) => (
            <QualificationEntry key={resume._key} index={index} {...resume} />
          ))}
        </div>
      </div>
    </Section>
  );
};
