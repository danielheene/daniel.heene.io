export const fileFragment = `
  {
    ...asset-> {
      originalFilename,
      url,
      extension,
      mimeType,
      size
    }
  }
`;

export const imageFragment = `
  {
    crop,
    hotspot,
    ...asset-> {
      originalFilename,
      url,
      extension,
      mimeType,
      size,
      ...metadata {
        blurHash,
        palette,
        dimensions
      }
    }
  }
`;

export const urlPathFromSlugFragment = `
  select(
    string::startsWith(_type, "singleton") => "/",
    string::startsWith(_type, "projects") => "/projects/",
    string::startsWith(_type, "blog") => "/blog/",
  ) + slug.current
`;

export const navItemFragment = `
  {
    _type,
    _key,
    label,
    mode,
    variant,
    variant == 'external' => {
      url,
      forceDownload,
      blank
    },
    variant == 'internal' => {
      ...ref-> {
        "url": ${urlPathFromSlugFragment},
      }
    },
    variant == 'file' => {
      ...file ${fileFragment},
      forceDownload,
      blank
    }
  }
`;

export const navMenuFragment = `
  {
    label,
    entries[] ${navItemFragment}
  }
`;
