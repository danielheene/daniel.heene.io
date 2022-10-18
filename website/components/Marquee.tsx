import { Children, memo, ReactNode, useId, useMemo } from 'react';

interface MarqueeProps {
  offset?: number;
  speed?: number;
  children: ReactNode | ReactNode[];
}

export const Marquee = memo(
  ({ children, offset = 0, speed = 30 }: MarqueeProps) => {
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

    return (
      <>
        <div className='marquee' style={{}}>
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
            --marquee-offset: ${offset}%;
            --marquee-speed: ${speed}s;
            --marquee-initial: calc(-25% + var(--marquee-offset));
            --marquee-final: calc(-50% + var(--marquee-offset));

            position: relative;
            overflow: hidden;
          }

          //.marquee::before,
          //.marquee::after {
          //  content: ' ';
          //  display: block;
          //  width: 50px;
          //  position: absolute;
          //  top: 0;
          //  height: 100%;
          //  z-index: 1;
          //}

          //.marquee::before {
          //  left: 0;
          //  background-image: linear-gradient(to right, black, transparent);
          //}
          //
          //.marquee::after {
          //  left: calc(100% - 50px);
          //  background-image: linear-gradient(to right, transparent, black);
          //}

          .marquee :global(.marquee-inner) {
            position: relative;
            width: fit-content;
            display: flex;
            flex-direction: row;
            transform: translate3d(var(--marquee-initial), 0, 0);
            animation: marquee var(--marquee-speed) linear infinite running;
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
