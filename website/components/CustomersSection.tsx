import { forwardRef, memo, Ref, useMemo } from 'react';

import { Card } from '@components/Card';
import { Marquee } from '@components/Marquee';
import { Section, SectionHeader } from '@components/Section';
import { CustomerItemData, CustomersSectionData } from '@lib/types';

const CustomersItem = memo(
  forwardRef(
    (props: CustomerItemData, ref: Ref<HTMLDivElement>): JSX.Element => {
      const { image } = props;

      return (
        <>
          <Card
            variant='light'
            ref={ref}
            className='w-full flex justify-center items-center'
          >
            <div
              className='logo w-full h-full aspect-w-20 aspect-h-7'
              style={{
                maskImage: image?.url ? `url(${image.url})` : undefined,
                WebkitMaskImage: image?.url ? `url(${image.url})` : undefined,
              }}
            />
          </Card>

          <style jsx>
            {`
              .logo {
                background-color: #fff;
                mask-position: center;
                mask-size: contain;
                mask-repeat: no-repeat;
                max-width: 80%;
                max-height: 65%;
              }
            `}
          </style>
        </>
      );
    }
  )
);

export const CustomersSection = memo(
  ({ header, entries }: CustomersSectionData): JSX.Element => {
    const items = useMemo(
      () => entries.map((e, i) => <CustomersItem key={i} {...e} />),
      [entries]
    );

    return (
      <Section fullWidth>
        <SectionHeader {...header} />
        <Marquee>{items}</Marquee>
        <Marquee reverse>{items}</Marquee>
      </Section>
    );
  }
);
