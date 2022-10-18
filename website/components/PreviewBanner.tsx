import React from 'react';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import clsx from 'clsx';

import { isBrowser } from '@lib/utils';
import { log } from 'next-axiom';

export default function PreviewBanner() {
  const [hover, setHover] = React.useState<boolean>(false);
  const router = useRouter();

  const handleDisableClick = React.useCallback(() => {
    if (isBrowser) {
      fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?disable=1`)
        .then(({ ok }) => {
          if (ok) router.reload();
        })
        .catch(log.error);
    }
  }, [router]);

  return (
    <div
      className={clsx([
        'relative',
        'left-0',
        'right-0',
        'top-0',
        'flex',
        'justify-center',
        'items-center',
        'bg-red-700',
        'h-8',
        'w-screen',
        'z-50',
      ])}
    >
      <button
        className={clsx([
          'relative',
          'inline-flex',
          'flex-row',
          'items-center',
          'justify-center',
          'gap-x-2',
          'px-8',
          'h-8',
          'text-white',
          'text-lg',
          'font-mono',
          'font-bold',
        ])}
        onClick={handleDisableClick}
        onMouseEnter={() => setHover(true)}
        onMouseMove={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span className='leading-[0px]'>PREVIEW MODE</span>
        {hover && (
          <Icon
            icon='ant-design:close-outlined'
            className={clsx([
              'absolute',
              'right-0',
              'top-1/2',
              '-translate-y-1/2',
              'text-[150%]',
              'animate-fade',
            ])}
          />
        )}
      </button>
    </div>
  );
}
