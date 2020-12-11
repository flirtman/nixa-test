import React from "react";
import Logo from '../../assets/images/logo.png';

import './styles.scss';

const Subscribe = () => {
    return (
      <div className="subscribe-wrapper">
          <img src={Logo} alt="Logo"/>
          <h2>Stay on the saddle!</h2>
          <form>
              <input type="text" placeholder="enter your email..." name="email"/>
              <button type="submit">GO</button>
          </form>
      </div>
    );
};

export default Subscribe;
