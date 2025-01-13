import React from "react";

import LogoImage from "../assets/logo.png";

import "./styles/SigningPage.css"

function SigningPage() {

    return(
        <div className="signing-page-container">           
            <img src={LogoImage} alt="" className="logo"/>
            <h3>SOME FRUITS</h3>

            <form action="">
                <input type="email" className="input-type-1" Placeholder="Email" />
                <input type="password" className="input-type-1" Placeholder="Password"/>
                <input type="submit" className="input-type-2" value="SIGN UP"/>

                <p>Already have an account? <a href="">Sign in here</a></p>
            </form>
        </div>
    )
}

export default SigningPage;