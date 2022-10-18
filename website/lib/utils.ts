import { format, parse } from 'date-fns';
import React from 'react';
import { ContactProvider, ContactService } from '@lib/types';

export const sortDateAscending = (a, b) => {
  return +new Date(a) - +new Date(b);
};

export const sortDateDescending = (a, b) => {
  return +new Date(b) - +new Date(a);
};

export const formatDate = (dateString: string, formatString: string) =>
  !!dateString
    ? format(parse(dateString, 'yyyy-MM-dd', new Date()), formatString)
    : null;

export function isBrowser() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}

export function mergeRefs<T = any>(
  refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}

export const useIsomorphicLayoutEffect = isBrowser()
  ? React.useLayoutEffect
  : React.useEffect;

export const replaceNewlinesWithBr = (
  message: string = '',
  replacer: string = '<br />'
) =>
  message
    .trimStart()
    .trimEnd()
    .replace(/(\r\n|\n\r|\r|\n){2}(\r\n|\n\r|\r|\n)+/g, replacer + replacer)
    .replace(/(\r\n|\n\r|\r|\n)/g, replacer)
    .replace(/\s\s+/g, ' ');

export const removeSpecialChars = (message: string = '') =>
  message
    .trimStart()
    .trimEnd()
    .replace('<br>', ' ')
    .replace('<br />', ' ')
    .replace(/\s\s+/g, ' ');

const CONTACT_SERVICES: ContactService[] = [
  {
    name: 'github',
    label: 'GitHub',
    urlPrefix: 'https://github.com/',
    icon: 'simple-icons:github',
  },
  {
    name: 'whatsapp',
    label: 'WhatsApp',
    urlPrefix: 'https://wa.me/',
    icon: 'simple-icons:whatsapp',
  },
  {
    name: 'instagram',
    label: 'Instagram',
    urlPrefix: 'https://www.instagram.com/',
    icon: 'simple-icons:instagram',
  },
  {
    name: 'discord',
    label: 'Discord',
    urlPrefix: 'https://discord.com/users/',
    icon: 'simple-icons:discord',
  },
  {
    name: 'mail',
    label: 'Mail',
    urlPrefix: 'mailto:',
    icon: 'simple-icons:maildotru',
  },
  {
    name: 'phone',
    label: 'Phone',
    urlPrefix: 'tel:',
    icon: 'carbon:phone-filled',
  },
  {
    name: 'linkedin',
    label: 'LinkedIn',
    urlPrefix: 'https://www.linkedin.com/in/',
    icon: 'simple-icons:linkedin',
  },
  {
    name: 'xing',
    label: 'Xing',
    urlPrefix: 'https://www.xing.com/profile/',
    icon: 'simple-icons:xing',
  },
];

export const resolveContactService = (
  service: ContactProvider,
): ContactService => {
  return CONTACT_SERVICES.find((s) => s.name === service);
};
