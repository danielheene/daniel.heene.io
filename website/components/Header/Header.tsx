import React, { useRef } from 'react';
import clsx from 'clsx';

import { Box } from '@components/Box';
import { Logo } from '@components/Logo';
import {
  NavigationMenuButton,
  NavigationDropdown,
} from '@components/Navigation';
import { useAppStore } from '@lib/appStore';
import { useOnResizeCallback } from '@lib/hooks';

export const Header = (): JSX.Element => {
  const headerRef = useRef<HTMLDivElement>();
  const { setHeaderHeight, showNavigation, setShowNavigation, settings } =
    useAppStore();

  useOnResizeCallback(
    () => {
      if (headerRef.current) {
        const { height } = headerRef.current.getBoundingClientRect();
        setHeaderHeight(height);
      }
    },
    [],
    true
  );

  return (
    <Box
      as='header'
      ref={headerRef}
      className={clsx([
        'fixed',
        'container',
        'flex',
        'flex-row',
        'items-center',
        'justify-between',
        'p-6',
        '-translate-x-1/2',
        'left-1/2',
        showNavigation ? 'z-menu-button' : 'z-header',
      ])}
    >
      <Logo size='text-header' />

      <NavigationMenuButton
        className={clsx([
          'xl:hidden',
          'relative',
          'text-header',
          'z-menu-button',
        ])}
        isOpen={showNavigation}
        onClick={() => setShowNavigation(!showNavigation)}
      />
      <NavigationDropdown />
    </Box>
  );
};
