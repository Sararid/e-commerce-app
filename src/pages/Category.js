import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//style
import '../../src/components/category/Category.scss'
//component
import ProductCard from "../components/product/productCard/ProductCard";
function Category() {
  let { category } = useParams();
  console.log(category);
  const [product, setProduct] = useState([]);

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .catch((err) => {
        console.log("err", err);
      });
    setProduct(response.data);
  };

  useEffect(() => {
    if (category && category !== "") fetchProductDetails();
  }, []);

  return (
    <div
    className="parent"
    >
      {product.map((item) => {
        return <ProductCard item={item} />;
      })}
    </div>
  );
}

export default Category;
