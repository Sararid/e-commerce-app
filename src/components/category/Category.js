import React from "react";
//style
import "./Category.scss";
//route
import { Link } from "react-router-dom";

export default function Category() {
    return (
        <section className="category">
            <h1> BROWSE OUR CATEGORIES</h1>
            <div className="categoryContainer">
                <div>
                    <Link to="/category/men's clothing">
                        <div className="categoryContainer__item">Men clothes</div>
                    </Link>
                    <Link to="/category/women's clothing">
                        <div className="categoryContainer__item">Women clothes</div>
                    </Link>
                    <Link to="/category/jewelery">
                        <div className="categoryContainer__item">Jewelery</div>
                    </Link>
                    <Link to="/category/electronics">
                        <div className="categoryContainer__item">Electronics</div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
