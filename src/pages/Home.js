import React from 'react'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import FeaturedProducts from '../components/featuredProducts/FeaturedProducts'
import Category from '../components/category/Category'
import Hero from '../components/hero/Hero'
export default function Home() {
    return (
        <>

            <Header />
            <Banner />
            <Category />
            <FeaturedProducts />
            <Hero />
        </>
    )
}
