import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
//context

import axios from "axios";
//icon
import { isInCart } from "../../cart/Cart";
//router
import { Link } from "react-router-dom";
import { useParams } from "react-router";
//style
import './ProductDetails.scss';

//store
import { useSelector, useDispatch } from 'react-redux';
import { increment } from "../../../redux/features/cart/cartSlice";
const ProductDetails = () => {
    const { productId } = useParams();
    console.log(productId)
    const dispatch = useDispatch();


    // const { data } = useContext(ProductsContext);
    const [product, setProduct] = useState([]);

    const fetchProductDetails = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("err", err);
            });
        setProduct(response.data);
    };

    console.log(product)
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails();

    }, [productId]);

    const { id, title, price, category, image, description } = product;
    return (
        <div className="productDetails">
            {Object.keys(product).length === 0 ? (
                <Spinner animation="border" />
            ) : (
                <li key={id} id={id} className="productDetails__container">
                    <div className="productDetails__card">
                        <img className="productDetails__image" src={image} alt={title} width={"200px"} height={'200px'} />
                    </div>
                    <div className="productDetails__subcard">
                        <h1 className="productDetails__title">{title}</h1>
                        <span className="productDetails__subtitle"> {category} </span>
                        <span className="productDetails__price"> € {price}</span>
                        <p className="productDetails__description"> {description}</p>
                        <p>{description} </p>
                        <button onClick={() => { dispatch(increment(product)) }}>addd</button>
                        {/* {!isInCart(product, cartItems) && (
                            <button
                                className="productDetails__btn"
                                onClick={() => addProduct(product)}
                            >
                                Add to cart
                            </button>
                        )}
                        {isInCart(product, cartItems) && (

                            <button
                                className="productDetails__btn"
                                onClick={() => increase(product)}
                            >
                                Add more
                            </button>
                        )} */}
                        {/* <Link to="/cart">
                            <button className="productDetails__btn">Go to Cart</button>
                        </Link> */}
                    </div>
                </li>
            )}

        </div>
    );
};
export default ProductDetails;