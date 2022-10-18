import blockContent from './blocks/blockContent';
import category from './documents/document.category';
import post from './documents/document.post';
import project from './documents/document.project';
import tag from './documents/document.tag';
import settingsMain from './documents/settings.main';
import settingsMeta from './documents/settings.meta';
import settingsNavigation from './documents/settings.navigation';
import home from './documents/singleton.home';
import metaDefaults from './objects/meta.defaults';
import contactServices from './objects/object.contactServices';
import externalLink from './objects/object.externalLink';
import internalLink from './objects/object.internalLink';
import navigationItem from './objects/object.navigationItem';
import sectionHeader from './objects/object.sectionHeader';
import serviceItem from './objects/object.serviceItem';
import sectionLogoCloud from './objects/section.logoCloud';
import sectionQualifications from './objects/section.qualifications';
import sectionServices from './objects/section.services';

export const schemaTypes = [
  /* meta */
  metaDefaults,

  /* blocks */
  blockContent,
  contactServices,
  externalLink,
  internalLink,
  navigationItem,
  sectionHeader,
  serviceItem,
  sectionLogoCloud,
  sectionServices,
  sectionQualifications,

  /* documents */
  category,
  post,
  project,
  tag,
  home,
  settingsMain,
  settingsMeta,
  settingsNavigation,
];
