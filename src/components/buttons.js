import React, {Component} from 'react';

//importing from react-awesome-button
//npm install --save react-awesome-button

import "react-awesome-button/dist/styles.css";
import{
    AwesomeButton,
    AwesomeButtonSocial,
    AwesomeButtonStyles,
}
from 'react-awesome-button'

class Buttons extends Component{
    render(){
        return[
            <AwesomeButton type="primary" size="medium">Explore</AwesomeButton>,
            <AwesomeButtonSocial cssModule={AwesomeButtonStyles} type="github" size="medium" >GitHub</AwesomeButtonSocial>,
            <AwesomeButtonSocial cssModule={AwesomeButtonStyles} type="twitter" size="medium" >Twitter</AwesomeButtonSocial>,
        ]
    }
}
export default Buttons;
