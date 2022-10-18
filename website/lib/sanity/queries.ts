import { groq } from 'next-sanity';
import { navigationsFragment } from '@lib/sanity/fragments';

export const homeQuery = groq`
    {
      "data": *[_type == "home"][0] {
        ...,
        heroStage {
          ...,
          portrait { ..., ...asset-> },
        },
        services {
          ...
        },
        logoCloud {
          ...,
          entries[published == true] {
            ...,
            image { ..., ...asset-> },
          }
        }
      },
      "navigations": ${navigationsFragment},
      "settings": *[_type == "settings" && _id == "settings"][0] {
        ...,
        "publicKey": publicKey.asset->,
        "resume": resume.asset->
      },
    }
  `;
