import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Icon from '../../../assets/images/Icon-section1.png';
import Secton2Bg from '../../../assets/images/secton2-bg.jpg';
import IconSection2 from '../../../assets/images/Icon-section2.png';
import IconSection2Right from '../../../assets/images/Icon-section2-right.png';
import LeftCallBottomBg from '../../../assets/images/left-call-bottom-bg.jpg';
import './styles.scss';

const Section2 = () => {
    return (
        <div className="section2-wrapper">
            <Row style={{margin: 0}}>
                <Col md={12} lg={8} style={{backgroundImage: `url(${Secton2Bg})`}} className="left-call">
                    <img src={IconSection2} alt={''}/>
                </Col>
                <Col md={12} lg={4} className="right-call">
                    <div className="left-call-top">
                        <img src={IconSection2Right} alt={''} style={{width: '41px', height: '30px', marginBottom: '30px'}}/>
                        <h2>Vintage Oliva</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.
                        </p>
                        <hr/>
                    </div>
                    <div className="left-call-bottom" style={{backgroundImage: `url(${LeftCallBottomBg})`}}>
                        <div className="triangle-down"></div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Section2;
