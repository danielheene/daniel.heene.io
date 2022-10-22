import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/future/image';
import clsx from 'clsx';
import { BlurhashCanvas } from 'react-blurhash';
import { ImageAssetFragment } from '@lib/types';

interface ImageProps extends Omit<NextImageProps, 'src' | 'alt' | 'altText'> {
  image: ImageAssetFragment;
  className?: string;
  wrapperClassName?: string;
  removeWrapper?: boolean;
  removeBlur?: boolean;
}

export const Image = ({
  image,
  removeWrapper = false,
  removeBlur = false,
  ...nextImageProps
}: ImageProps): JSX.Element => {
  const [ready, setReady] = React.useState<boolean>(false);
  const [unmountBlurHash, setUnmountBlurHash] = React.useState<boolean>(false);
  const style = React.useMemo(() => {
    const percentage = 100 / image.dimensions.aspectRatio;
    return {
      paddingTop: percentage.toFixed(2) + '%',
    };
  }, [image.dimensions.aspectRatio]);

  const imageElement = (
    <NextImage
      src={image.url}
      sizes='100vw'
      onLoadingComplete={() => setReady(true)}
      className={clsx(['object-cover'])}
      fill
      {...nextImageProps}
      alt={image.altText || ''}
    />
  );

  const blurElement =
    image.blurHash && !unmountBlurHash ? (
      <BlurhashCanvas
        onTransitionEnd={() => setUnmountBlurHash(true)}
        className={clsx([
          'absolute',
          'inset-0',
          'w-full',
          'h-full',
          // 'opacity-100',
          'transition',
          'transition-opacity',
          'duration-250',
          'ease-in-out',
          { 'opacity-0': ready },
          { 'pointer-events-none': ready },
        ])}
        hash={image.blurHash}
      />
    ) : null;

  return removeWrapper ? (
    <React.Fragment>
      {imageElement}
      {blurElement}
    </React.Fragment>
  ) : (
    <span
      className={clsx([
        'relative',
        'block',
        'w-screen',
        'min-h-half-screen',
        'md:min-h-0',
        'md:max-h-half-screen',
      ])}
      style={style}
    >
      {imageElement}
      {blurElement}
    </span>
  );
};
