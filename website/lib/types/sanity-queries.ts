export type MetaTag = {
  type: 'name' | 'property' | 'httpEquiv';
  value: string;
  content: string;
};

export type MetaDataConfig = {
  titleTemplate: string;
  description: string;
  keywords: string[];
  tags: MetaTag[];
};

export interface AppConfigData {
  features: {
    hireMeWidget: boolean;
    easterEggWidget: boolean;
  };
  contact: ContactModuleData;
  assets: {
    resume: FileAssetFragment;
    publicKey: FileAssetFragment;
  };
  mainNavigation: Navigation;
  metaNavigation: Navigation;
  meta: MetaDataConfig;
}

export type ImagePalette = {
  readonly _type: 'sanity.imagePalette';

  darkMuted?: ImageSwatch;
  darkVibrant?: ImageSwatch;
  dominant?: ImageSwatch;
  lightMuted?: ImageSwatch;
  lightVibrant?: ImageSwatch;
  muted?: ImageSwatch;
  vibrant?: ImageSwatch;
};

export type ImageSwatch = {
  readonly _type: 'sanity.imagePaletteSwatch';

  background: string;
  foreground: string;
  population: number;
  title?: string;
};

export type ImageDimensions = {
  readonly _type: 'sanity.imageDimensions';
  height: number;
  width: number;
  aspectRatio: number;
};

export type FileAssetFragment = {
  readonly _id: string;
  readonly _rev: string;

  extension: string;
  mimeType: string;
  originalFilename: string;
  url: string;
  size: number;
} | null;

export type ImageAssetFragment = {
  readonly _type: 'image';
  readonly _id: string;
  readonly _rev: string;

  extension: string;
  mimeType: string;
  originalFilename: string;
  altText?: string;
  url: string;
  size: number;
  blurHash: string;
  palette: ImagePalette;
  dimensions: ImageDimensions;
} | null;

export type NavigationItemVariant = 'external' | 'internal' | 'file';
export type NavigationItemMode = 'default' | 'primary' | 'outlined' | 'ghost';

export type NavigationItem = {
  readonly _key: string;
  readonly _type: 'object.navigationItem';
} & (
  | {
      variant: 'external';
      label: string;
      mode: NavigationItemMode;
      url: string;
      blank: boolean;
      forceDownload: boolean;
    }
  | {
      variant: 'internal';
      label: string;
      mode: NavigationItemMode;
      url: string;
    }
  | {
      variant: 'file';
      label: string;
      mode: NavigationItemMode;
      url: string;
      originalFilename: string;
      forceDownload: boolean;
      blank: boolean;
    }
);

export type Navigation = {
  label: string;
  entries: NavigationItem[];
};

export type ContactProvider =
  | 'github'
  | 'whatsapp'
  | 'instagram'
  | 'discord'
  | 'mail'
  | 'phone'
  | 'linkedin'
  | 'xing';

export type ContactModuleData = Record<ContactProvider, string>;

export type ContactItem = {
  name: ContactProvider;
  label: string;
  urlPrefix: string;
  icon: string;
};

export type QualificationItemData = {
  readonly _type: 'block.qualification';
  readonly _key: string;

  title: string;
  employer: string;
  location: string;
  start: string;
  end: string;
  body: string;
};

export type ServiceItemData = {
  readonly _type: 'block.serviceItem';
  readonly _key: string;

  name: string;
  icon: string;
  body: string;
};

export type CustomerItemData = {
  readonly _type: 'block.customerItem';
  readonly _key: string;

  published: boolean;
  name: string;
  image: ImageAssetFragment;
};

export type ProjectItemData = {
  readonly _type: 'object.projectItem';
  readonly _key: string;

  published: boolean;
  name: string;
  image: ImageAssetFragment;
};

export type ProjectData = {
  readonly _type: 'projects.project';
  readonly _key: string;

  header;

  published: boolean;
  name: string;
  image: ImageAssetFragment;
};

export type SectionHeaderData = {
  readonly _type: 'sectionHeader';
  readonly _key: string;

  headline?: string;
  preHeadline?: string;
  subHeadline?: string;
};

export type HeroStageData = {
  headline?: string;
  subHeadline?: string[];
  portrait: ImageAssetFragment;
};

export type CustomersSectionData = {
  readonly _type: 'section.customers';
  readonly _key: string;

  header: SectionHeaderData;
  entries: CustomerItemData[];
};

export type ServicesSectionData = {
  readonly _type: 'section.services';
  readonly _key: string;

  header: SectionHeaderData;
  entries: ServiceItemData[];
};

export type QualificationsSectionData = {
  readonly _type: 'section.qualifications';
  readonly _key: string;

  header: SectionHeaderData;
  entries: QualificationItemData[];
};

export type ProjectsSectionData = {
  readonly _type: 'section.projects';
  readonly _key: string;

  header: SectionHeaderData;
  entries: ServiceItemData[];
};

export type SectionData = QualificationsSectionData | CustomersSectionData;

export type HomeData = {
  title: string;
  heroStage: HeroStageData;
  customers: CustomersSectionData;
  qualifications: QualificationsSectionData;
  services: ServicesSectionData;
};
