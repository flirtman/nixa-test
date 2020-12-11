import React from "react";
import MainHeader from '../../components/MainHeader';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Slider from '../../components/Slider';
import Section5 from './Section5';
import SplitSection from '../../components/SplitSection';

import './styles.scss';

const HomePage = () => {
  return (
      <>
        <MainHeader/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Slider/>
        <Section5/>
        <SplitSection/>
      </>
  )
};

export default HomePage;
