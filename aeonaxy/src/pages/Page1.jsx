import React from 'react';
import logo from '../assets/logo.png';
import { PopupWidget } from "react-calendly";




function Page1() {
    return (
        <div>

            <div className="App">
            
                <PopupWidget
                
                    url="https://calendly.com/jaskaransingh06"
                    rootElement={document.getElementById("root")}
                    text="Click here to schedule!"
                    textColor="#ffffff"
                    color="#00a2ff"
                />
            </div>
        </div>

    );
}

export default Page1;