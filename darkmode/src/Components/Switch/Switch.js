import React, { useState } from "react";
import { SwitchContainer } from "./Switch.elements";
import { SwitchWrapper } from "./Switch.elements";
import { SwitchBGC } from "./Switch.elements";
import { ButtonSwitch } from "./Switch.elements";



const Switch = (props) => {

    const [position, setPosition] = useState (false);

    const changeMode = () => {

       if (props.theme === 'light') {
           props.setTheme('dark');
           changePosition();
       } else {
           props.setTheme('light');
           changePosition ();
           
       }

    };

    const changePosition = () => {
        setPosition (!position);
    };
    return (
        <>
            <SwitchContainer>
                <SwitchWrapper>
                    <SwitchBGC>
                        <ButtonSwitch 
                        onClick = {() => changeMode ()}
                        position = {position}

                        ></ButtonSwitch>
                    </SwitchBGC>
                </SwitchWrapper>
            </SwitchContainer>
        </>
    );
};

export default Switch;
    