import React from "react";
import MainHeader from '../../components/MainHeader';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

import './styles.scss';

const HomePage = () => {
  return (
      <>
        <MainHeader/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
      </>
  )
};

export default HomePage;
