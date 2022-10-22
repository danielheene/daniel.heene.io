import { Children, memo, ReactNode, useId, useMemo } from 'react';
import { CSSRuleObject } from 'tailwindcss/types/config';

interface MarqueeProps {
  offset?: number;
  speed?: number;
  reverse?: boolean;
  children: ReactNode | ReactNode[];
}

export const Marquee = memo(
  ({ children, offset = 25, speed = 10, reverse = false }: MarqueeProps) => {
    const marqueeId = useId();
    const adjustedChildren = useMemo(() => {
      const items = Array.from({ length: 4 }, (_, multiplier) =>
        Children.toArray(children).map((child, index) => {
          const key = [
            marqueeId.toString().padStart(4, '0'),
            multiplier.toString().padStart(4, '0'),
            index.toString().padStart(4, '0'),
          ].join('');

          return (
            <div key={key} className='marquee-item'>
              {child}
            </div>
          );
        })
      );

      return [...items];
    }, [children]);

    const styles: CSSRuleObject = useMemo(
      () => ({
        ['--marquee-offset']: `${offset}%`,
        ['--marquee-speed']: `${speed}s`,
        ['--marquee-initial']: `calc(-25% + var(--marquee-offset))`,
        ['--marquee-final']: `calc(-50% + var(--marquee-offset))`,
        ['--marquee-direction']: `${reverse ? 'reverse' : 'normal'}`,
      }),
      [offset, speed, reverse]
    );

    return (
      <>
        <div className='marquee' style={styles}>
          <div className='marquee-inner' role='marquee'>
            {adjustedChildren}
          </div>
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translate3d(var(--marquee-initial), 0, 0);
            }

            100% {
              transform: translate3d(var(--marquee-final), 0, 0);
            }
          }

          .marquee {
            position: relative;
            overflow: hidden;
          }

          .marquee :global(.marquee-inner) {
            position: relative;
            width: fit-content;
            display: flex;
            flex-direction: row;
            transform: translate3d(var(--marquee-initial), 0, 0);
            animation: marquee var(--marquee-speed) linear infinite running;
            animation-direction: var(--marquee-direction);
          }

          .marquee :global(.marquee-item) {
            margin: 1rem !important;
            flex-shrink: 0 !important;
            flex-grow: 0 !important;
            width: 16rem;
          }
        `}</style>
      </>
    );
  }
);
