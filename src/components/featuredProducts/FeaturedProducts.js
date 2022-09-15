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
    .filter((item, i) => i < 4)
    .map((item, index) => <ProductCard item={item} />);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log('productlist', productList)
  return (
    <section className="featuredCollection">
      <h1>Featured Collection</h1>
      <div style={{ display: "flex" }}>
        { productList.length < 0 ? 
        <div style={{width: 100, height: 300, backgroundColor: 'red'}}>text loading</div> :
           <ul className="featuredCollection__list">{productList}</ul>
        }
       
      </div>
    </section>
  );
}
