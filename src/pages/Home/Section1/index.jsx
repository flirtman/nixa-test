import React from 'react';
import Icon from '../../../assets/images/Icon-section1.png';
import './styles.scss';

const Section1 = () => {
    return (
        <div className="section1-wrapper">
            <img src={Icon} alt="A NEW GENERATION OF VINTAGE BIKE" className="section-icon"/>
            <h1>A NEW GENERATION OF VINTAGE BIKE</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
        </div>
    );
};

export default Section1;
