import React, { useEffect } from "react";
//store
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/features/Product/productSlice";
//component
import ProductCard from "../components/product/productCard/ProductCard";
//style
export default function Shop() {
  const dispatch = useDispatch();
  const stateProducts = useSelector((state) => state.products.products);
  const productList = stateProducts.map((item, index) => (
    <ProductCard item={item} />
  ));
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
