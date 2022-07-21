import React from "react";
//style
import './Category.scss'

export default function Category() {
    return (
        <section className="category">
            <h1>            BROWSE OUR CATEGORIES
            </h1>
            <div className="categoryContainer">
                <div>
                    <div className="categoryContainer__item">Men clothes</div>
                    <div className="categoryContainer__item">Electronics</div>
                </div>
                <div>
                    <div className="categoryContainer__item">Jewelery</div>
                    <div className="categoryContainer__item">Women clothes</div>
                </div>
            </div>
        </section>

    );
}
