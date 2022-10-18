import { groq } from 'next-sanity';

export const navigationsFragment = groq`
  *[_type == "navigation"] {
     ...,
    'id': id.current,
    entries[] {
      _type,
      _key,
      label,
      mode,
      variant == 'external' => {
        'url': externalUrl,
        blank,
      },
      variant == 'internal' => {
        'url': internalUrl,
      },
      variant == 'reference' => {
        ref->
      },
      variant == 'file' => {
        ...file { ...asset->{ url, size, mimeType, originalFilename } },
        forceDownload,
      },
    }
  }
`;
