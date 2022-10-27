import { Section, SectionHeader } from '@components/Section';
import { Image } from '@components/Image';
import clsx, { ClassValue} from 'clsx';
import { memo } from 'react';
import { ProjectTeaserData, ProjectTeaserSectionData } from '@lib/types';
import Link from 'next/link';
import { useIntersectionObserver } from '@lib/hooks';

interface ProjectItemProps extends ProjectTeaserData {
  layout?: 'square' | 'fullwidth' | 'default';
  fullWidth?: boolean;
  className?: ClassValue,
}

export const ProjectItem = memo(
  ({
    layout = 'default',
    poster,
    category,
    title,
    urlPath,
    excerpt,
    className,
  }: ProjectItemProps): JSX.Element => {
    const [isInView, ref] = useIntersectionObserver({ triggerOnce: true });

    return (
      <Link href={urlPath}>
        <a
          ref={ref}
          className={clsx([
            'relative',
            'overflow-hidden',
            'group',
            'cursor-pointer',
            'col-span-5',
            'aspect-w-16',
            'aspect-h-9',
            layout === 'default'
              ? ['xl:col-span-3']
              : layout === 'square'
              ? ['xl:col-span-2', 'xl:aspect-w-1', 'xl:aspect-h-1']
              : [],
            'rounded-lg',
            'animate-in',
            'fade-in',
            'slide-in-from-bottom',
            'fill-mode-forwards',
            'duration-500',
            isInView ? 'running' : 'paused',
            className,
          ])}
        >
          <Image
            image={poster}
            sizes={
              layout === 'square'
                ? `
              (max-width: 1280px) 100vw,
              33vw`
                : `
              (max-width: 1280px) 100vw,
              66vw`
            }
            className={clsx([
              'transition-all',
              'duration-500',
              // 'grayscale',
              'group-hover:scale-105',
              // 'group-hover:grayscale-0',
              'rounded-lg',
            ])}
          />

          <div className='absolute'>
            <header
              className={clsx([
                'flex',
                'flex-col',
                'gap-2',
                'p-4',
                'md:p-8',
                'drop-shadow-2xl',
                'drop-shadow',
                // 'bg-gradient-to-b',
                // 'from-zinc-900/90',
                // 'via-zinc-900/45',
                // 'to-transparent',
                'rounded-lg',
              ])}
            >
              <p
                className={clsx([
                  'block',
                  'h-5',
                  'font-extrabold',
                  'font-jetbrains-mono',
                  'text-sm',
                  'text-transparent',
                  'bg-clip-text',
                  'bg-vibrant-october-silence',
                  'uppercase',
                  'tracking-tight',
                  'inset-1',
                  'drop-shadow-xl',
                ])}
              >
                {category}
              </p>
              <p
                className={clsx([
                  'text-2xl',
                  'md:text-3xl',
                  'font-bold',
                  'text-white',
                  'font-inter',
                  // 'shadow-black',
                  // 'drop-shadow-2xl',
                  'drop-shadow-xl',
                ])}
              >
                {title}
              </p>
            </header>

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
                'via-zinc-900/70',
                'to-zinc-900/95',
                'opacity-0',
                'transition-all',
                'group-hover:opacity-100',
                'duration-500',
                'scale-90',
                'group-hover:scale-100',
                'origin-bottom',
                'rounded-lg',
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
                    'font-medium',
                    'text-white',
                    'tracking-tighter',
                    'break-words',
                    'hyphens',
                    'line-clamp-2',
                  ])}
                >
                  {excerpt}
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    );
  }
);

export const ProjectTeaserSection = (
  props: ProjectTeaserSectionData
): JSX.Element => {
  const { header, projectOne, projectTwo, projectThree, projectFour } = props;

  return (
    <Section>
      <SectionHeader {...header} />
      <div className='grid grid-cols-5 gap-8 mx-16'>
        {projectOne && (
          <ProjectItem
            {...projectOne}
            layout={!!projectTwo ? 'default' : 'fullwidth'}
          />
        )}
        {projectTwo && (
          <ProjectItem
            {...projectTwo}
            className="delay-200"
            layout={!!projectOne ? 'square' : 'fullwidth'}
          />
        )}
        {projectThree && (
          <ProjectItem
            {...projectThree}
            className="delay-400"
            layout={!!projectFour ? 'default' : 'fullwidth'}
          />
        )}
        {projectFour && (
          <ProjectItem
            {...projectFour}
            className="delay-600"
            layout={!!projectThree ? 'square' : 'fullwidth'}
          />
        )}
      </div>
    </Section>
  );
};
