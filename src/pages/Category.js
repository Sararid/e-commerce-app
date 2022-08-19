import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
function Category() {

    let { category } = useParams();
    console.log(category)
    const [product, setProduct] = useState([]);

    const fetchProductDetails = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/category/${category}`)
            .catch((err) => {
                console.log("err", err);
            });
        setProduct(response.data);
    };

    console.log(product)
    useEffect(() => {
        if (category && category !== "") fetchProductDetails();
    }, []);



    return (
        <div>Category</div>
    )
}

export default Category