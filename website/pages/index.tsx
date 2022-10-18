import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';

import { HeroStage } from '@components/HeroStage';
import { LogoCloudSection } from '@components/LogoCloudSection';
import { QualificationsSection } from '@components/QualificationsSection';
import { ServicesSection } from '@components/ServicesSection';
import { DefaultLayout } from '@layouts/Default.layout';
import Sanity, { homeQuery } from '@lib/sanity';
import {
  HeroStageData,
  LogoCloudSectionData,
  NextPageWithLayout,
  QualificationsSectionData,
  ServicesSectionData,
  Settings,
} from '@lib/types';

// import { LayoutGroup } from 'framer-motion';

interface HomeData {
  introLine: string;
  services: ServicesSectionData;
  qualifications: QualificationsSectionData;
  logoCloud: LogoCloudSectionData;
  heroStage: HeroStageData;
}

interface Props extends HomeData {
  data: HomeData;
  navigations: [];
  settings: Partial<Settings>;
}

const HomePage: NextPageWithLayout = ({
  data,
  navigations,
  settings,
}: Props) => {
  const { heroStage, qualifications, logoCloud, services } = data;
  // const { hireMe } = settings;

  // console.log(data, navigations, settings);

  return (
    <>
      {heroStage && <HeroStage {...heroStage} />}

      <ServicesSection {...services} />
      <QualificationsSection {...qualifications} />
      <LogoCloudSection {...logoCloud} />
      {/*{hireMe && <HireMeMemoji />}*/}
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const SanityClient = Sanity.getClient(preview);
  const { data, settings, navigations } = await SanityClient.fetch(homeQuery);

  // console.log(JSON.stringify(data, null, 2));

  return {
    props: {
      data,
      navigations,
      settings,
    },
    revalidate: process.env.NODE_ENV === 'production' ? 300 : 5,
  };
};

export default HomePage;
