import React from 'react';
import { GetStaticProps, NextPage } from 'next';

import { HeroStage } from '@components/HeroStage';
import { CustomersSection } from '@components/CustomersSection';
import { QualificationsSection } from '@components/QualificationsSection';
import { ServicesSection } from '@components/ServicesSection';
import Sanity, { appConfigQuery, homeQuery } from '@lib/sanity';
import { HomeData } from '@lib/types';
import { ProjectTeaserSection } from '@components/ProjectTeaserSection';

interface Props extends HomeData {}

const HomePage: NextPage = (props: Props) => {
  const { heroStage, qualifications, customers, services, projectTeaser } =
    props;

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

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  try {
    const SanityClient = Sanity.getClient(preview);
    const appConfig = await SanityClient.fetch(appConfigQuery);
    const data = await SanityClient.fetch(homeQuery);

    return {
      props: {
        ...data,
        appConfig,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
      props: null,
    };
  }
};

export default HomePage;
