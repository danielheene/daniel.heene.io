import { Icon } from '@iconify/react';

import { Section, SectionHeader } from '@components/Section';
import { Typography } from '@components/Typography';
import { ServiceItemData, ServicesSectionData } from '@lib/types';
import useEmblaCarousel from 'embla-carousel-react';
import clsx from 'clsx';

const ServiceItem = ({
  name,
  icon,
  body,
}: Omit<ServiceItemData, '_key'>): JSX.Element => {
  return (
    <div
      className={clsx([
        'flex',
        'flex-col',
        'flex-grow-0',
        'flex-shrink-0',
        'basis-1',
        'min-w-[300px]',
        'max-w-[350px]',
        'm-12',
        'text-center',
        'text-white',
        'bg-transparent',
      ])}
    >
      <div className='rounded-full m-auto text-6xl'>
        {icon && <Icon icon={icon} />}
      </div>
      <Typography variant='section-subtitle' className='mt-8'>
        {name}
      </Typography>
      <Typography variant='body' className='mt-12 line-clamp-5'>
        {body}
      </Typography>
    </div>
  );
};

export const ServicesSection = (props: ServicesSectionData): JSX.Element => {
  const { header, entries } = props;

  return (
    <Section>
      <SectionHeader {...header} />

      <div
        className={clsx([
          'flex',
          'flex-column',
          'md:flex-row',
          'flex-wrap',
          'justify-around',
          '-mt-12',
          '-mb-12',
          'overflow-hidden',
        ])}
      >
        {entries.map(({ _key, ...itemProps }) => (
          <ServiceItem key={_key} {...itemProps} />
        ))}
      </div>
    </Section>
  );
};
