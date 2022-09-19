import React from "react";
//style
import "./Banner.scss";
//route
import { Link } from "react-router-dom";
export default function Banner() {
    return (
        <div className="bannerContainer">
            <div className="bannerContainer__item">Shop for your favorite item</div>

            <Link to="/shop">
                <button className="bannerContainer__button">Shop now</button>
            </Link>
        </div>
    );
}
