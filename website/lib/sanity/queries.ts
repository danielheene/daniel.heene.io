import { groq } from 'next-sanity';
import {
  fileFragment,
  imageFragment,
  navMenuFragment,
  projectTeaserFragment,
  urlPathFromSlugFragment,
} from './fragments';

export const homeQuery = groq`
 *[_type == "singleton.home"][0] {
    ...,
    heroStage {
      ...,
      portrait ${imageFragment},
    },
    services {
      ...
    },
    projectTeaser {
      header,
      projectOne-> ${projectTeaserFragment},
      projectTwo-> ${projectTeaserFragment},
      projectThree-> ${projectTeaserFragment},
      projectFour-> ${projectTeaserFragment}
    },
    customers {
      ...,
      entries[published == true] {
        ...,
        image ${imageFragment},
      }
    }
  }
`;

export const pathsQuery = `
  *[defined(slug) && !(_id in path("drafts.**"))] {
    "urlPath": ${urlPathFromSlugFragment},
  }
`;

export const projectUrlsQuery = groq`
 *[_type == "projects.project" && !(_id in path("drafts.**"))] {
    "urlPath": ${urlPathFromSlugFragment},
 }
`;

export const projectQuery = groq`
  *[_type == "projects.project" && !(_id in path("drafts.**")) && slug.current == $slug][0] {
    _id,
    _type,
    _rev,
    title,
    "slug": slug.current,
    "urlPath": ${urlPathFromSlugFragment},
    body[] {
      _key,
      _type,
      _type == "object.image" => ${imageFragment},
      _type != "object.image" => { ... },
    },
    excerpt,
    tags->{ ... },
    "category": category->name,
    metaDescription,
    metaKeywords,
    metaTags,
    poster ${imageFragment},
  }
`;

export const pageQuery = groq`
  *[_type == "singleton.**" && !(_id in path("drafts.**")) && slug.current == $slug][0] {
    _id,
    _type,
    _rev,
    title,
    "urlPath": ${urlPathFromSlugFragment},
    body[] {
      _key,
      _type,
      _type == "object.image" => ${imageFragment},
      _type != "object.image" => { ... },
    },
    metaDescription,
    metaKeywords,
    metaTags
  }
`;

export const mainNavigationQuery = groq`
  *[_type == "settings.navigation" && defined(main) && !(_id in path("drafts.**"))][0]{...main} ${navMenuFragment}
`;

export const metaNavigationQuery = groq`
  *[_type == "settings.navigation" && defined(meta) && !(_id in path("drafts.**"))][0]{...meta} ${navMenuFragment}
`;

export const appConfigQuery = groq`
  {
    ...*[_type == "settings.main" && !(_id match "drafts.*")][0] {
      contact,
      features,
      assets {
        publicKey ${fileFragment},
        resume ${fileFragment},
      }
    },
    ...*[_type == "settings.meta" && !(_id match "drafts.*")][0] {
      titleTemplate,
      metaDescription,
      metaKeywords,
      metaTags
    },
    "mainNavigation": ${mainNavigationQuery},
    "metaNavigation": ${metaNavigationQuery},
  }
`;
