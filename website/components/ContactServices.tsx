import clsx from 'clsx';
import { ContactProvider, ContactService } from '@lib/types';
import { resolveContactService } from '@lib/utils';
import { Icon } from '@iconify/react';
import React, { useMemo } from 'react';

interface ContactServicesProps {
  entries: Record<string, string>;
  selection: string[];
}

export const ContactServices = ({
  entries,
  selection = [],
}: ContactServicesProps): JSX.Element => {
  /**
   *
   */
  const services = useMemo(
    () =>
      Object.entries(entries)
        .filter(([key, _]) => selection.includes(key))
        .sort((a, b) => {
          const aPos = Object.keys(entries).findIndex((i) => i === a[0]);
          const bPos = Object.keys(entries).findIndex((i) => i === b[0]);

          return aPos > bPos ? +1 : -1;
        }),
    [entries]
  );

  return (
    <div
      className={clsx(['flex', 'flex-row', 'justify-center', 'py-2', 'gap-3'])}
    >
      {services.map(([key, value]) => {
        const { urlPrefix, icon }: ContactService = resolveContactService(
          key as ContactProvider
        );

        return (
          <a
            key={key}
            href={`${urlPrefix as string}/${value}`}
            target='_blank'
            rel='noopener noreferrer'
            className={clsx(
              'block',
              'text-3xl',
              'p-2',
              'transition-colors',
              'hover:scale-115',
              'hover:text-orange-400'
            )}
          >
            <Icon icon={icon} />
          </a>
        );
      })}
    </div>
  );
};
