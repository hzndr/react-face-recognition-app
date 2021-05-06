import React from 'react'

const Navigation = ({onRouteChange, isSignedIn}) => {
    
        if(isSignedIn){
            return (
        <nav className="flex justify-end">
            <p onClick={() => onRouteChange("signout")} className={linkStyle}>Sign Out</p>
        </nav>
            );
        } else {
        return (
            <nav className="flex justify-end">
            <p onClick={() => onRouteChange("signin")} className={linkStyle}>Sign In</p>
            <p onClick={() => onRouteChange("register")} className={linkStyle}>Register</p>
            </nav>
    );
}
}

const linkStyle = "f4 link dim black underline pa3 pointer";


export default Navigation;