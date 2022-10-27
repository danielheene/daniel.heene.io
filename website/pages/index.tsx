import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';

import { HeroStage } from '@components/HeroStage';
import { CustomersSection } from '@components/CustomersSection';
import { QualificationsSection } from '@components/QualificationsSection';
import { ServicesSection } from '@components/ServicesSection';
import { DefaultLayout } from '@layouts/Default.layout';
import Sanity, { appConfigQuery, homeQuery } from '@lib/sanity';
import { HomeData, NextPageWithLayout } from '@lib/types';
import { ProjectTeaserSection } from '@components/ProjectTeaserSection';

interface Props extends HomeData {}

const HomePage: NextPageWithLayout = (props: Props) => {
  const { heroStage, qualifications, customers, services, projectTeaser } = props;

  return (
    <>
      {heroStage && <HeroStage {...heroStage} />}
      {services && <ServicesSection {...services} />}
      {projectTeaser && <ProjectTeaserSection {...projectTeaser} />}
      {qualifications && <QualificationsSection {...qualifications} />}
      {customers && <CustomersSection {...customers} />}
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const SanityClient = Sanity.getClient(preview);
  const appConfig = await SanityClient.fetch(appConfigQuery);
  const data = await SanityClient.fetch(homeQuery);

  console.log(JSON.stringify(data, null, 2));

  return {
    props: {
      ...data,
      appConfig,
    },
    revalidate: process.env.NODE_ENV === 'production' ? 300 : 5,
  };
};

export default HomePage;
