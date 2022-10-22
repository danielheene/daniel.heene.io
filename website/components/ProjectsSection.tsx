import { Section, SectionHeader } from '@components/Section';
import clsx from 'clsx';
import { memo } from 'react';

interface ProjectItemProps {
  square?: boolean;
  url: string;
  category: string;
  title: string;
  caption: string;
}

export const ProjectItem = memo(
  ({
    square,
    url,
    category,
    title,
    caption,
  }: ProjectItemProps): JSX.Element => (
    <div
      className={clsx([
        'relative',
        'group',
        'cursor-pointer',
        'col-span-5',
        'aspect-w-16',
        'aspect-h-9',
        'overflow-hidden',
        'rounded-lg',
        square
          ? ['xl:col-span-2', 'xl:aspect-w-1', 'xl:aspect-h-1']
          : ['xl:col-span-3'],
      ])}
    >
      <img
        className={clsx([
          'w-full',
          'object-cover',
          'transition-transform',
          'duration-500',
          'group-hover:scale-105',
        ])}
        src={url}
      />

      <div className='absolute p-4 md:p-8'>
        <p
          className={clsx([
            'font-bold',
            'font-jetbrains-mono',
            'text-sm',
            'text-primary-600',
            'uppercase',
            'tracking-tighter',
          ])}
        >
          {category}
        </p>
        <p
          className={clsx([
            'text-2xl',
            'md:text-3xl',
            'font-extrabold',
            'text-white',
            'font-inter',
            'shadow-black',
            'drop-shadow-2xl',
          ])}
        >
          {title}
        </p>

        <div
          className={clsx([
            'absolute',
            'p-12',
            'md:p-20',
            'pt-24',
            '-left-12',
            '-right-12',
            '-bottom-12',
            'bg-gradient-to-b',
            'from-transparent',
            'to-zinc-900/75',
            'opacity-0',
            'transition-all',
            'group-hover:opacity-100',
            'duration-500',
            'scale-90',
            'group-hover:scale-100',
            'origin-bottom',
          ])}
        >
          <div
            className={clsx([
              'translate-y-8',
              'transform',
              'opacity-0',
              'transition-all',
              'group-hover:translate-y-0',
              'group-hover:opacity-100',
            ])}
          >
            <p
              className={clsx([
                'text-sm',
                'md:text-xl',
                'font-mono',
                'font-medium',
                'text-white',
                'tracking-tighter',
                'break-words',
                'hyphens',
                'line-clamp-3',
              ])}
            >
              {caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
);

export const ProjectsSection = (props): JSX.Element => {
  const { header, entries } = props;

  return (
    <Section>
      <SectionHeader {...header} />
      <div className='grid grid-cols-5 gap-8'>
        <ProjectItem
          title='New Article'
          category='Development'
          caption='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?'
          url='https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2952&amp;q=80'
        />
        <ProjectItem
          square
          title='New Article'
          category='Development'
          caption='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?'
          url='https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2902&amp;q=80'
        />
        <ProjectItem
          square
          title='New Article'
          category='Development'
          caption='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?'
          url='https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3131&amp;q=80'
        />
        <ProjectItem
          title='New Article'
          category='Development'
          caption='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?'
          url='https://images.unsplash.com/photo-1463288889890-a56b2853c40f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3132&amp;q=80'
        />
      </div>
    </Section>
  );
};
