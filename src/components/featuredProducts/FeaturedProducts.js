import React, { useEffect } from "react";
//store
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/features/Product/productSlice";
import ProductCard from "../product/productCard/ProductCard";
//style
import "./FeaturedProducts.scss";

export default function FeaturedProducts() {
  const dispatch = useDispatch();
  const stateProducts = useSelector((state) => state.products.products);
  const productList = stateProducts
    .filter((i) => i < 4)
    .map((item) => <ProductCard item={item} />);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <section className="featuredCollection">
      <h1>Featured Collection</h1>
      <div style={{ display: "flex" }}>
        <ul className="featuredCollection__list">{productList}</ul>
      </div>
    </section>
  );
}
