import { ContactModule } from '@components/ContactServices';
import { NavigationItem } from '@components/Navigation';
import clsx from 'clsx';
import { Typography } from '@components/Typography';
import { Icon } from '@iconify/react';
import React from 'react';
import { useAppStore } from '@lib/appStore';

export const Footer = () => {
  const { metaNavigation, contact, assets } = useAppStore();
  return (
    <footer
      className={clsx([
        'mt-12',
        'sm:mt-16',
        'lg:mt-24',
        'mt-4',
        'sm:pt-8',
        'lg:pt-12',
      ])}
    >
      <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div
          className={clsx([
            'flex',
            'flex-col',
            'md:flex-row',
            'justify-between',
            'items-center',
            'border-b',
            'border-white/50',
            'gap-4',
            'py-6',
          ])}
        >
          <nav
            className={clsx([
              'flex',
              'flex-wrap',
              'justify-center',
              'md:justify-start',
              'gap-x-4',
              'gap-y-2',
              'md:gap-6',
            ])}
          >
            {assets?.resume && (
              <Typography
                as='a'
                variant='button-primary'
                href={assets?.resume?.url}
                target='_blank'
                rel='noopener noreferrer'
                download={assets?.resume?.originalFilename}
              >
                Resume
                <Icon icon='mdi:tray-arrow-down' className='ml-2 text-[120%]' />
              </Typography>
            )}
            {assets?.resume && (
              <Typography
                as='a'
                variant='button-primary'
                href={assets?.resume?.url}
                target='_blank'
                rel='noopener noreferrer'
                download={assets?.resume?.originalFilename}
              >
                Resume
                <Icon icon='mdi:tray-arrow-down' className='ml-2 text-[120%]' />
              </Typography>
            )}
          </nav>

          <div className='flex gap-4'>
            {contact && <ContactModule entries={contact} small />}
          </div>
        </div>
        <div
          className={clsx([
            'text-center',
            'hover:text-white',
            'text-white',
            'text-sm',
            'font-mono',
            'font-semibold',
            'py-6',
            'flex',
            'flex-col',
            'md:flex-row',
            'justify-between',
            'gap-4',
            'md:gap-8',
          ])}
        >
          {metaNavigation && (
            <nav
              className={clsx([
                'flex',
                'flex-wrap',
                'justify-center',
                'md:justify-start',
                'gap-x-4',
                'gap-y-2',
                'md:gap-6',
              ])}
              aria-label={metaNavigation.label}
            >
              {metaNavigation.entries.map((entry) => (
                <NavigationItem key={entry._key} {...entry} />
              ))}
            </nav>
          )}
          <span className='text-center'>
            © {new Date().getFullYear()} - Daniel Heene - All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
