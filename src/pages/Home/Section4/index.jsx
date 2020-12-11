import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Icon from '../../../assets/images/Icon-section1.png';
import Secton4BgLeft from '../../../assets/images/secton4-bg-left.jpg';
import Secton4BgRight from '../../../assets/images/secton4-bg-right.jpg';
import IconSection4 from '../../../assets/images/Icon-section4.png';
import IconSection4Middle from '../../../assets/images/Icon-section4-middle.png';
import secton4BgMiddle from '../../../assets/images/secton4-bg-middle.jpg';
import './styles.scss';

const Section3 = () => {
    return (
        <div className="section4-wrapper">
            <Row style={{margin: 0}}>
                <Col md={12} lg={4} style={{backgroundImage: `url(${Secton4BgLeft})`}} className="right-call">
                    <img src={IconSection4} alt={''}/>
                </Col>
                <Col md={12} lg={4} className="left-call">
                    <div className="right-call-top">
                        <img src={IconSection4Middle} alt={''} style={{width: '23px', height: '41px', marginBottom: '30px'}}/>
                        <h2>retrò Bike - M. Hulot</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.
                        </p>
                        <hr/>
                    </div>
                    <div className="right-call-bottom" style={{backgroundImage: `url(${secton4BgMiddle})`}}>
                        <div className="triangle-down"></div>
                    </div>
                </Col>
                <Col md={12} lg={4} style={{backgroundImage: `url(${Secton4BgRight})`}} className="right-call">
                </Col>
            </Row>
        </div>
    );
};

export default Section3;
