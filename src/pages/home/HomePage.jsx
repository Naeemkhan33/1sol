import React from 'react';
import SectionAggregate from './sections/SectionAggregate';
import { SectionBanner } from './sections/SectionBanner';
import SectionCallToAction from './sections/SectionCallToAction';
import SectionData from './sections/SectionData';
import SectionPartners from './sections/SectionPartners';
import SectionSupporters from './sections/SectionSupporters';
import SectionWorkProcess from './sections/SectionWorkProcess';

const HomePage = () => {
  return (
    <main>
      <SectionBanner />
      <SectionSupporters />
      <SectionPartners />
      <SectionData />
      <SectionWorkProcess />
      <SectionAggregate />
      <SectionCallToAction />
    </main>
  );
};

export default HomePage;
