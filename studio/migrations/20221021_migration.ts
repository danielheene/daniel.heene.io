const data = {
  mutations: [
    {
      createOrReplace: {
        _id: 'settings.main',
        _type: 'settings.main',
        assets: {},
      },
    },
    {
      createOrReplace: {
        _id: 'settings.navigation',
        _type: 'settings.navigation',
        assets: {},
      },
    },
    {
      createOrReplace: {
        _id: 'settings.meta',
        _type: 'settings.meta',
        assets: {},
      },
    },
    {
      createOrReplace: {
        _id: 'singleton.home',
        _type: 'singleton.home',
        meta: {
          description: '',
          keywords: [],
        },
        heroStage: {
          portrait: {
            _sanityAsset:
              'image@file://./images/22f87b304c237ebca079f78c40de8f63d3c46852-3648x5472.png',
            _type: 'image',
          },
        },
        logoCloud: {
          header: {
            headline: '',
            preHeadline: '',
            subHeadline: '',
          },
          entries: [],
        },
        qualifications: {
          header: {
            headline: '',
            preHeadline: '',
            subHeadline: '',
          },
          entries: [],
        },
        services: {
          header: {
            headline: '',
            preHeadline: '',
            subHeadline: '',
          },
          entries: [],
        },
      },
    },
  ],
};

export {};
