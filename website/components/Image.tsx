import React, { memo, useMemo } from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/future/image';
import clsx from 'clsx';
import { ImageAssetFragment } from '@lib/types';

interface ImageProps extends Omit<NextImageProps, 'src' | 'alt' | 'altText'> {
  image: ImageAssetFragment;
  className?: string;
  removeBlur?: boolean;
  blur?: number;
  dpr?: number;
  quality?: number;
  saturation?: number;
  sharpen?: number;
  alt?: string;
}

export const Image = memo(
  ({
    image,
    blur,
    dpr,
    quality,
    sharpen,
    saturation,
    className,
    sizes = '100vw',
    loading = 'lazy',
    ...props
  }: ImageProps): JSX.Element => {
    const url = useMemo(() => {
      if (!image?.url) return null;
      const url = new URL(image.url);

      if (saturation) url.searchParams.set('sat', saturation.toString());
      if (quality) url.searchParams.set('q', quality.toString());
      if (sharpen) url.searchParams.set('sharpen', sharpen.toString());
      if (dpr) url.searchParams.set('dpr', dpr.toString());
      if (blur) url.searchParams.set('blur', blur.toString());

      return url.toString();
    }, [image, sharpen, saturation, quality, dpr, blur]);

    return url ? (
      <NextImage
        src={url}
        sizes={sizes}
        loading={loading}
        blurDataURL={image.previewImage}
        placeholder={!!image.previewImage ? 'blur' : undefined}
        className={clsx('object-cover', className)}
        fill
        {...props}
        alt={props?.alt ?? image?.originalFilename ?? ''}
      />
    ) : null;
  }
);
