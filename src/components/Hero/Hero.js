import React from "react";
import { NavLink } from "react-router-dom";
import "./Hero.scss";
export default function Hero() {
    return (
        <div className="hero">
            <div className="hero__titles">

                <h1>Women clothes</h1>
                <h2>30% off Summer Collection</h2>
                <NavLink to="/shop" className="hero__button">
                    buy now
                </NavLink>
            </div>
        </div>
    );
}
