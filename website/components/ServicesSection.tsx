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
        'embla__slide',
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
      <Typography variant='section-subheading' className='mt-8'>
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
  const [ref] = useEmblaCarousel({
    slidesToScroll: 1,
    loop: true,
    align: 'center',
    skipSnaps: false,
  });

  return (
    <Section>
      <SectionHeader {...header} />

      <div
        ref={ref}
        className={clsx([
          'embla',
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
        <div className={clsx('embla__container', 'flex')}>
          {entries.map(({ _key, ...itemProps }) => (
            <ServiceItem key={_key} {...itemProps} />
          ))}
        </div>
      </div>
    </Section>
  );
};
