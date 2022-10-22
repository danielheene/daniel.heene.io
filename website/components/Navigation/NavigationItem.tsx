import { NavigationItem as NavigationItemType } from '@lib/types';
import Link from 'next/link';
import { memo, useMemo } from 'react';
import clsx from 'clsx';

type NavigationItemProps = NavigationItemType;
export const NavigationItem = memo(
  (props: NavigationItemProps): JSX.Element => {
    const { mode, variant } = props;
    const styles = useMemo(
      () =>
        clsx(
          mode === 'default' && [
            'relative',
            'font-medium',
            'font-mono',
            'text-white',
            // 'hover:text-primary-700',
            'px-1',
            'before:absolute',
            'before:-bottom-0.5',
            'before:left-0',
            'before:h-px',
            'before:w-full',
            'before:origin-left',
            'before:scale-x-0',
            'before:bg-white',
            'before:transition-all',
            'before:duration-100',
            'hover:before:scale-x-100',
            'hover:no-underline',
          ],
          mode === 'primary' && [
            'inline-flex',
            'cursor-pointer',
            'items-center',
            'justify-center',
            'rounded-xl',
            'border-2',
            'border-primary',
            'bg-primary',
            'px-4',
            'py-2.5',
            'text-lg',
            'font-semibold',
            'text-white',
            'shadow-sm',
            'hover:border-primary-accent',
            'hover:bg-primary-accent',
            'focus:outline-none',
            'focus:ring-2',
            'focus:ring-orange-400/80',
            'focus:ring-offset-0',
            'disabled:opacity-30',
            'disabled:hover:border-primary',
            'disabled:hover:bg-primary',
            'disabled:hover:text-white',
            'dark:focus:ring-white/80',
          ],
          mode === 'outlined' && [
            'inline-flex',
            'cursor-pointer',
            'items-center',
            'justify-center',
            'rounded-xl',
            'border-2',
            'border-muted-1',
            'bg-transparent',
            'px-4',
            'py-2.5',
            'text-lg',
            'font-semibold',
            'text-text',
            'shadow-sm',
            'hover:text-white',
            'focus:text-white',
            'focus:outline-none',
            'focus:ring-2',
            'focus:ring-orange-400/80',
            'focus:ring-offset-0',
            'disabled:opacity-30',
            'disabled:hover:text-text',
            'dark:focus:ring-white/80',
          ],
          mode === 'ghost' && [
            'inline-flex',
            'cursor-pointer',
            'items-center',
            'justify-center',
            'rounded-xl',
            'border-2',
            'border-transparent',
            'bg-transparent',
            'px-4',
            'py-2.5',
            'text-lg',
            'font-semibold',
            'text-text',
            'hover:bg-heading/5',
            'focus:bg-heading/5',
            'focus:outline-none',
            'focus:ring-2',
            'focus:ring-heading/80',
            'focus:ring-offset-0',
            'disabled:opacity-30',
            'disabled:hover:bg-transparent',
            'disabled:hover:text-text',
          ]
        ),
      []
    );

    switch (variant) {
      case 'internal': {
        const { _key, url, label } = props;
        return (
          <Link key={_key} href={url}>
            <a className={styles}>{label}</a>
          </Link>
        );
      }
      case 'external': {
        const { _key, url, label, blank, forceDownload } = props;
        return (
          <a
            key={_key}
            href={url}
            className={styles}
            target={blank && '_blank'}
            rel={blank && 'noopener noreferrer'}
            download={forceDownload}
          >
            {label}
          </a>
        );
      }
      case 'file': {
        const { _key, url, label, blank, originalFilename, forceDownload } =
          props;
        return (
          <Link key={_key} href={url}>
            <a
              className={styles}
              download={(forceDownload && originalFilename) || forceDownload}
              target={blank && '_blank'}
              rel={blank && 'noopener noreferrer'}
            >
              {label}
            </a>
          </Link>
        );
      }
      default: {
        return null;
      }
    }
  }
);
