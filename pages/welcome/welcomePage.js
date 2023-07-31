"use client"
import React from "react";
import backgroundImage from "./background.jpg";

const WelcomePage = () => {
    return (
        <>
            <div className="welcome-page">
                <div
                    className="background-image"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
                <div className="content">
                    <h1>Welcome to My Website</h1>
                    <p>Thank you for visiting. Enjoy your stay!</p>
                </div>
            </div>
        </>
    );
};

export default WelcomePage;

