import React from 'react';
import { Icon } from '@iconify/react';
import { codeInput } from '@sanity/code-input';
import { visionTool } from '@sanity/vision';
import { createConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { markdownSchema } from 'sanity-plugin-markdown';

import { schemaTypes } from './schemas';

import './overrides.css';

export default createConfig({
  name: 'default',
  title: 'daniel.heene.io',

  /* TODO:
    logo?: React.ComponentType
    icon?: React.ComponentType
  */

  projectId: 'ekrchhx4',
  basePath: '/studio',
  dataset: import.meta.env.SANITY_STUDIO_DATASET,

  document: {
    productionUrl: async (prev, context) => {
      const { client, dataset, document } = context;

      if (document._type === 'post') {
        // you can now use async/await 🎉
        const slug = await client.fetch(
          `*[_type == 'routeInfo' && post._ref == $postId][0].slug.current`,
          { postId: document._id }
        );

        const params = new URLSearchParams();
        params.set('preview', 'true');
        params.set('dataset', dataset);

        return `${import.meta.env.BASE_URL}/posts/${slug}?${params}`;
      }

      return prev;
    },
  },

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Home')
              .icon(() =>
                React.createElement(Icon, {
                  icon: 'carbon:home',
                })
              )
              .child(S.document().schemaType('home').documentId('home')),
            S.divider(),
            // S.listItem()
            //   .title('Projects')
            //   .child(
            //     S.list()
            //       .title('Projects')
            //       .items([
            //         S.listItem()
            //           .title('Documents')
            //           .child(
            //             S.documentList()
            //               .title('Document')
            //               .filter('_type == "project.document"')
            //           ),
            //         S.listItem()
            //           .title('Categories')
            //           .child(
            //             S.documentList()
            //               .title('Category')
            //               .filter('_type == "project.category"')
            //           ),
            //         S.listItem()
            //           .title('Tags')
            //           .child(
            //             S.documentList()
            //               .title('Tag')
            //               .filter('_type == "project.tag"')
            //           ),
            //       ])
            //   ),

            S.listItem()
              .title('Posts')
              .schemaType('post')
              .icon(() =>
                React.createElement(Icon, {
                  icon: 'mdi:file-sign',
                  width: 30,
                  height: 30,
                })
              )
              .child(S.documentTypeList('post').title('Posts')),
            S.listItem()
              .title('Projects')
              .schemaType('project')
              .icon(() =>
                React.createElement(Icon, {
                  icon: 'mdi:folder-open',
                  width: 30,
                  height: 30,
                })
              )
              .child(S.documentTypeList('project').title('Projects')),
            S.listItem()
              .title('Categories')
              .schemaType('category')
              .icon(() =>
                React.createElement(Icon, {
                  icon: 'mdi:clipboard-text-clock',
                  width: 30,
                  height: 30,
                })
              )
              .child(S.documentTypeList('category').title('Categories')),
            S.listItem()
              .title('Tags')
              .schemaType('tag')
              .icon(() =>
                React.createElement(Icon, {
                  icon: 'mdi:tag-text',
                  width: 30,
                  height: 30,
                })
              )
              .child(S.documentTypeList('tag').title('Tags')),

            S.divider(),

            S.listItem()
              .title('Settings')
              .icon(() =>
                React.createElement(Icon, {
                  icon: 'carbon:settings',
                  width: 30,
                  height: 30,
                })
              )
              .child(
                S.list()
                  .title('Settings')
                  .items([
                    S.listItem()
                      .title('Main')
                      .schemaType('settings.main')
                      .child(
                        S.document().schemaType('settings.main').title('Main')
                      ),
                    S.listItem()
                      .title('Navigation')
                      .schemaType('settings.navigation')
                      .child(
                        S.document()
                          .schemaType('settings.navigation')
                          .title('Navigation')
                      ),
                    S.listItem()
                      .title('Meta')
                      .schemaType('settings.meta')
                      .child(
                        S.document().schemaType('settings.meta').title('Meta')
                      ),
                  ])
              ),

            ...S.documentTypeListItems().filter(
              (listItem) =>
                ![
                  'home',
                  'post',
                  'project',
                  'category',
                  'tag',
                  'settings.main',
                  'settings.navigation',
                  'settings.meta',
                ].includes(listItem.getId() as string)
            ),
          ]),
    }),
    unsplashImageAsset(),
    markdownSchema(),
    codeInput(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
