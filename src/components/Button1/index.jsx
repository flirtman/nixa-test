import React from 'react';
import {Nav} from "react-bootstrap";
import './styles.scss';

const Button1 = (props) => {
    console.log(props);
    return (
        <span className="button1">
            <Nav.Link href={props.link} className={props.veriant}>{props.lable}</Nav.Link>
        </span>
    );
};

export default Button1;
