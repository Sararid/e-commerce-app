import React from "react";
import Banner from "../components/banner/Banner";
import FeaturedProducts from "../components/featuredProducts/FeaturedProducts";
import Category from "../components/category/Category";
import Footer from "../components/footer/Footer";
export default function Home() {
  return (
    <>
      <Banner />
      <Category />
      <FeaturedProducts />
      <Footer />
    </>
  );
}
