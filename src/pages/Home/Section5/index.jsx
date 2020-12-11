import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Icon from '../../../assets/images/Icon-section1.png';
import Secton4BgLeft from '../../../assets/images/secton4-bg-left.jpg';
import secton5middle1 from '../../../assets/images/secton5-middle-1.jpg';
import secton5middle2 from '../../../assets/images/secton5-middle-2.jpg';
import secton5LeftBottom from '../../../assets/images/secton5-left-bottom.jpg';
import rightCallTopFrom from '../../../assets/images/secton5-right-top.jpg';
import secton5rightBottom1 from '../../../assets/images/secton5-right-bottom1.jpg';
import secton5rightBottom2 from '../../../assets/images/secton5-right-bottom2.jpg';
import secton5LeftTop1 from '../../../assets/images/secton5-left-top1.jpg';
import secton5LeftTop2 from '../../../assets/images/secton5-left-top2.jpg';
import './styles.scss';

const Section3 = () => {
    return (
        <div className="section5-wrapper">
            <Row style={{margin: 0}}>
                <Col md={12} lg={4} className="left-call">
                    <div className="left-call-top" style={{backgroundImage: `url(${secton5LeftTop1})`}}></div>
                    <div className="left-call-top" style={{backgroundImage: `url(${secton5LeftTop2})`}}></div>
                    <div className="left-call-bottom" style={{backgroundImage: `url(${secton5LeftBottom})`}}></div>
                </Col>

                <Col md={12} lg={2} className="middle-call" style={{backgroundImage: `url(${secton5middle1})`}}></Col>
                <Col md={12} lg={2} className="middle-call" style={{backgroundImage: `url(${secton5middle2})`}}></Col>

                <Col md={12} lg={4} className="right-call">
                    <div className="right-call-top" style={{backgroundImage: `url(${rightCallTopFrom})`}}></div>
                    <div className="right-call-bottom" style={{backgroundImage: `url(${secton5rightBottom1})`}}></div>
                    <div className="right-call-bottom" style={{backgroundImage: `url(${secton5rightBottom2})`}}></div>
                </Col>
            </Row>
        </div>
    );
};

export default Section3;
