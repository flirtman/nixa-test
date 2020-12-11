import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Icon from '../../../assets/images/Icon-section1.png';
import Secton3Bg from '../../../assets/images/secton3-bg.jpg';
import IconSection3 from '../../../assets/images/Icon-section3.png';
import IconSection3Left from '../../../assets/images/Icon-section3-left.png';
import LeftCallBottomBg from '../../../assets/images/section3-left-call-bottom-bg.jpg';
import './styles.scss';

const Section3 = () => {
    return (
        <div className="section3-wrapper">
            <Row style={{margin: 0}}>
                <Col md={12} lg={4} className="left-call">
                    <div className="right-call-top">
                        <img src={IconSection3Left} alt={''} style={{width: '32px', height: '32px', marginBottom: '30px'}}/>
                        <h2>La Boriosa</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.
                        </p>
                        <hr/>
                    </div>
                    <div className="right-call-bottom" style={{backgroundImage: `url(${LeftCallBottomBg})`}}>
                        <div className="triangle-down"></div>
                    </div>
                </Col>
                <Col md={12} lg={8} style={{backgroundImage: `url(${Secton3Bg})`}} className="right-call">
                    <img src={IconSection3} alt={''}/>
                </Col>
            </Row>
        </div>
    );
};

export default Section3;
