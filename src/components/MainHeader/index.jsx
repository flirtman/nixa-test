import React from "react";
import backgroundImage from '../../assets/images/header-bg.jpg';
import './styles.scss';

import {MaineNav, MainMobileNav} from '../../components/MainNav';

const MainHeader = () => {
   return (
       <div id="main-header-wrapper" style={{backgroundImage: `url(${backgroundImage})`}}>
           <span className="xs-hidden"><MaineNav/></span>
           <span className="xs-show"><MainMobileNav/></span>
       </div>
   );
};

export default MainHeader;
