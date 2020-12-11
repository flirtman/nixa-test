import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import twitIcon from '../../assets/images/twitr-icon.png';
import './styles.scss';

const ControlledCarousel =  () => {
    return (
        <div className="slider-wrapper">
            <Carousel>
                <Carousel.Item>
                    <Carousel.Caption>
                        <img src={twitIcon} alt=""/>
                        <h3>AOD New York  @aod  <span>/  35 min</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus. Nullam a odio porttitor, dictum turpis vitae, pretium ante amet.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <img src={twitIcon} alt=""/>
                        <h3>AOD New York  @aod  <span>/  35 min</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus. Nullam a odio porttitor, dictum turpis vitae, pretium ante amet.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <Carousel.Caption>
                        <img src={twitIcon} alt=""/>
                        <h3>AOD New York  @aod  <span>/  35 min</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus. Nullam a odio porttitor, dictum turpis vitae, pretium ante amet.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default ControlledCarousel;
