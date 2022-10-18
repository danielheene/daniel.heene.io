import { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';

import { Gradient } from './Gradient';

const canvasId = 'gradient-background';

interface IGradient extends Gradient {
  initGradient: (selector: string) => void;
  connect: () => Promise<void>;
  play: () => void;
  pause: () => void;
}

type GradientColors = [string, string, string, string];

interface GradientBackgroundProps {
  darkenTop?: boolean;
  transitionIn?: boolean;
  colors?: GradientColors;
  width?: number;
  height?: number;
}

export const GradientBackground = ({
  darkenTop = false,
  transitionIn = true,
  colors = ['#ea33df', '#312c90', '#7126af', '#e77d60'],
  width = 1920 * 2,
  height = 1080 * 2,
}: GradientBackgroundProps): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>();
  const gradientRef = useRef<IGradient>();

  useEffect(() => {
    (async () => {
      if (!gradientRef.current && canvasRef.current) {
        gradientRef.current = new Gradient() as IGradient;
        gradientRef.current.initGradient(`#${canvasId}`);
        await gradientRef.current.connect();
        setIsPlaying(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (isPlaying && gradientRef.current) {
      gradientRef.current.play();
    } else {
      gradientRef.current.pause();
    }
  }, [isPlaying]);

  const colorProperties = useMemo(() => {
    return colors.reduce(
      (previousValue, currentValue, currentIndex) =>
        Object.assign(previousValue, {
          [`--gradient-color-${currentIndex + 1}`]: currentValue,
        }),
      {}
    ) as CSSProperties;
  }, []);

  const dataDarkenTopProp = darkenTop ? { 'data-darken-top': 'true' } : {};
  const dataTransitionInProp = transitionIn
    ? { 'data-transition-in': 'true' }
    : {};

  return (
    <>
      <div className='fixed block inset-0 w-screen h-screen z-[-10] isolate'>
        <div
          style={{
            background:
              'url(https://grainy-gradients.vercel.app/noise.svg) center center',
            filter: 'contrast(200%) brightness(-800%)',
          }}
          className='w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 z-[-5] animate-spin duration-[3s] opacity-80 contrast-200 -brightness-200'
        />
        <canvas
          id={canvasId}
          ref={canvasRef}
          {...dataDarkenTopProp}
          {...dataTransitionInProp}
          style={{ ...colorProperties, mixBlendMode: 'multiply' }}
          className='fixed block inset-0 w-screen h-screen z-[-10]'
        />
      </div>
    </>
  );
};
