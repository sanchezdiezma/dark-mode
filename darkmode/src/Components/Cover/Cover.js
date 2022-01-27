import React from "react";
import { CoverContainer } from "./Cover.elements.js";
import { CoverWrapper } from "./Cover.elements.js";
import { InfoContainer } from "./Cover.elements.js";
import { CustomButton } from "./Cover.elements.js";
import { BsSun, BsMoon } from 'react-icons/bs';



const Cover = (props) => {

    let icono = props.theme === 'light' ? <BsSun/> : <BsMoon/>;
    let leyenda = props.theme === 'light' ? <h1>Light Mode</h1> : <h1>Dark Mode</h1>;
    return (
        <>
            <CoverContainer>
            <CoverWrapper>
            <InfoContainer>
            {icono}
            <h1>Hello I'm in</h1>
            {leyenda}
            <CustomButton>Get Started</CustomButton>
            </InfoContainer>
            </CoverWrapper>
            </CoverContainer>
        </>
            
            
            
            );
        }

        export default Cover;







    
    