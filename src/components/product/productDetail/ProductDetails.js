import React, { useEffect, useState } from "react";
import axios from "axios";
//router
import { useParams } from "react-router";
//style
import "./ProductDetails.scss";
//store
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/features/cart/cartSlice";
const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("err", err);
      });
    setProduct(response.data);
  };

  // useEffect(() => {
  //   if (productId && productId !== "") fetchProductDetails();
  // }, [productId]);

  //const { id, title, price, image, description } = product;
  console.log(product)

  return (
    <div className="productDetails">
      {product.length === 0 ? (
        <div className="productDetails__loader">
          <div className="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div>          <span>Loading page...</span>
          </div>
        </div>
      ) : (

        <li key={product.id} id={product.id} className="productDetails__container">
          <img className="productDetails__image" src={product.image} alt={product.title} />

          <h1 className="productDetails__title">{product.title}</h1>

          <p className="productDetails__description"> {product.description}</p>
          <span className="productDetails__price"> € {product.price}</span>

          <button
            className="productDetails__button"
            onClick={() => {
              dispatch(addToCart(product));
            }}
          >
            Add to cart
          </button>
        </li>
      )
      }
    </div >
  );
};
export default ProductDetails;
