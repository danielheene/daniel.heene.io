import { forwardRef, memo, Ref } from 'react';

import { Card } from '@components/Card';
import { Marquee } from '@components/Marquee';
import { Section, SectionHeader } from '@components/Section';
import { LogoCloudItemData, LogoCloudSectionData } from '@lib/types';

type LogoCloudItemProps = LogoCloudItemData;

const LogoCloudItem = memo(
  forwardRef(
    (props: LogoCloudItemProps, ref: Ref<HTMLDivElement>): JSX.Element => {
      const { image } = props;

      return (
        <>
          <Card
            variant='light'
            ref={ref}
            className='w-full aspect-video flex justify-center items-center'
          >
            <div
              className='logo w-full h-full'
              style={{
                maskImage: `url(${image.url})`,
                WebkitMaskImage: `url(${image.url})`,
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

type LogoCloudProps = LogoCloudSectionData;

export const LogoCloudSection = memo(
  ({ header, entries }: LogoCloudProps): JSX.Element => {
    return (
      <Section fullWidth>
        <SectionHeader {...header} />
        <Marquee>
          {entries && entries.map((e, i) => <LogoCloudItem key={i} {...e} />)}
        </Marquee>
      </Section>
    );
  }
);
