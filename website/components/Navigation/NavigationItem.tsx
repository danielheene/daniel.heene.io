import { NavigationItem as NavigationItemType } from '@lib/types';
import Link from 'next/link';
import { memo } from 'react';
import { Typography } from '@components/Typography';
import { Icon } from '@iconify/react';

type NavigationItemProps = NavigationItemType;
export const NavigationItem = memo(
  (props: NavigationItemProps): JSX.Element => {
    const { mode, variant } = props;

    switch (variant) {
      case 'internal': {
        const { _key, url, label } = props;
        return (
          <Link key={_key} href={url} passHref>
            <Typography as='a' variant={`button-${mode}`}>
              {label}
            </Typography>
          </Link>
        );
      }
      case 'external': {
        const { _key, url, label, blank, forceDownload } = props;
        return (
          <Typography
            as='a'
            variant={`button-${mode}`}
            key={_key}
            href={url}
            target={blank ? '_blank' : undefined}
            rel={blank ? 'noopener noreferrer' : undefined}
            download={forceDownload}
          >
            {label}
            {forceDownload && (
              <Icon icon='mdi:tray-arrow-down' className='ml-2 text-[120%]' />
            )}
          </Typography>
        );
      }
      case 'file': {
        const { _key, url, label, blank, originalFilename, forceDownload } =
          props;
        return (
          <Link key={_key} href={url} passHref>
            <Typography
              as='a'
              variant={`button-${mode}`}
              download={
                !!originalFilename && !!forceDownload
                  ? originalFilename
                  : !!forceDownload
              }
              target={blank ? '_blank' : undefined}
              rel={blank ? 'noopener noreferrer' : undefined}
            >
              {label}
              {forceDownload && (
                <Icon icon='mdi:tray-arrow-down' className='ml-2 text-[120%]' />
              )}
            </Typography>
          </Link>
        );
      }
      default: {
        return null;
      }
    }
  }
);
