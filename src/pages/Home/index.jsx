import React from "react";
import MainHeader from '../../components/MainHeader';
import Section1 from './Section1';
import Section2 from './Section2';

import './styles.scss';

const HomePage = () => {
  return (
      <>
        <MainHeader/>
        <Section1/>
        <Section2/>
      </>
  )
};

export default HomePage;
