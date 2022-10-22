import { groq } from 'next-sanity';
import {
  fileFragment,
  imageFragment,
  navMenuFragment,
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
    customers {
      ...,
      entries[published == true] {
        ...,
        image ${imageFragment},
      }
    }
  }
`;

export const projectListQuery = groq`
 *[_type == "projects.project" && !(_id in path("drafts.**"))] {
    _id,
    _type,
    _rev,
    "path": ${urlPathFromSlugFragment},
    title,
    excerpt,
    poster ${imageFragment},
 }
`;

export const projectQuery = groq`
  *[_type == "projects.project" && !(_id in path("drafts.**")) && slug.current == $slug][0] {
    _id,
    _type,
    _rev,
    title,
    "slug": "slug.current",
    "path": ${urlPathFromSlugFragment},
    body[] {
      _key,
      _type,
      _type == "image" => ${imageFragment},
      _type != "image" => { ... },
    },
    excerpt,
    tags->{ ... },
    category->{ _type, _id, name },
    metaDescription,
    metaKeywords,
    metaTags,
    poster ${imageFragment},
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
