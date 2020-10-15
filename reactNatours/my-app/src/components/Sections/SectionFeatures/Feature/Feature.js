import React from "react";


import { withBaseIcon } from 'react-icons-kit';
import {basic_compass} from 'react-icons-kit/linea/basic_compass'


const Feature = props => {

    const SideIconContainer = withBaseIcon({ size: 60, style: { display: 'inlineBlock', backgroundClip: 'text', backgroundImage: 'linearGradient(to right, ##7ed56f, ##28b485)'} });
    
    return (
        <div className="feature-box">
            <SideIconContainer className="feature-box__icon" icon={basic_compass}></SideIconContainer>
            <h3 onClick={props.clicked} className="heading-tertiary">{props.title}</h3>
            <p>{props.description}</p>
        </div>
        );
    };
    
export default Feature;
