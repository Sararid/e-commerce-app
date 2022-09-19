import React from "react";
import { Link } from "react-router-dom";
//style
import "./Footer.scss";

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero__section">
                30%
                Off Online
            </div>
            <h1 className="hero__title">LIFESTYLE RANDA</h1>
            <h3 className="hero__subtitle">Free shipping for order above 50€</h3>
            <Link to="shop"> <button className="hero__button">More here</button></Link>
        </div>
    );
}
