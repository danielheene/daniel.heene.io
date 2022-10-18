import { NextSeo } from 'next-seo';
import { ReactNode } from 'react';
// import { useSeoProps } from '@lib/seo';

interface ErrorLayoutProps {
  seo?: Partial<typeof NextSeo>;
  children?: ReactNode | ReactNode[];
}

export function ErrorLayout({ children, seo }: ErrorLayoutProps) {
  // const seoProps = useSeoProps({
  //   title: 'daniel.heene.io ─ Whoops!',
  //   ...seo,
  // });

  return (
    <>
      {/*<NextSeo {...seoProps} />*/}
      <div className='flex flex-col justify-center px-8'>
        <main className='relative h-screen pt-24 sm:pt-16 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8'>
          {children}
        </main>
      </div>
    </>
  );
}
