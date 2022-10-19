import { CSSProperties } from 'react';
import clsx, { ClassValue } from 'clsx';

interface NavigationBurgerIconProps {
  className?: ClassValue;
  style?: CSSProperties;
  open?: boolean;
}

export const NavigationBurgerIcon = ({
  style,
  className,
  open,
}: NavigationBurgerIconProps): JSX.Element => {
  return (
    <>
      <svg
        viewBox='0 0 100 100'
        style={style}
        className={clsx(['burger', open && 'is-open', className])}
      >
        <path
          className='line'
          d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
        />
        <path className='line' d='M 20,50 H 80' />
        <path
          className='line'
          d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
        />
      </svg>

      <style jsx>
        {`
          .burger {
            width: 1em;
            height: 1em;
          }

          .burger path {
            fill: none;
            stroke: currentColor;
            stroke-width: 6;
            transition: stroke-dasharray 400ms cubic-bezier(0.4, 0, 0.2, 1),
              stroke-dashoffset 400ms cubic-bezier(0.4, 0, 0.2, 1);
            transition-delay: 400ms;
          }

          .burger.is-open path {
            transition-delay: 50ms;
          }

          .burger:not(.is-open) path:nth-child(1) {
            stroke-dasharray: 60 207;
          }

          .burger:not(.is-open) path:nth-child(2) {
            stroke-dasharray: 60 60;
          }

          .burger:not(.is-open) path:nth-child(3) {
            stroke-dasharray: 60 207;
          }

          .burger.is-open path:nth-child(1) {
            stroke-dasharray: 90 207;
            stroke-dashoffset: -134;
          }

          .burger.is-open path:nth-child(2) {
            stroke-dasharray: 1 60;
            stroke-dashoffset: -30;
          }

          .burger.is-open path:nth-child(3) {
            stroke-dasharray: 90 207;
            stroke-dashoffset: -134;
          }
        `}
      </style>
    </>
  );
};
