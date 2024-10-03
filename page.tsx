"use client";

import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
}

const ProductDetails = ({ params }: { params: { productID: string } }) => {
  const { productID } = params;
  const [product, setProduct] = useState<Product | null>(null);

  //Fetch details for the specified productID
  const fetchProductDetails = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${productID}`
      );
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error, "error while fetching data");
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [productID]);

  if (!product) {
    return (
      <div>
        <h2>Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="bg-slate-500 w-96 text-center my-20 p-10 mx-20">
      <h1>
        <b>Product Details of :</b> {product.title}
      </h1>
      <hr />
      <br />
      <h2>
        <b>Product ID</b> : {product.id}
      </h2>
      <br />
      <h2>
        <b>product name :</b> {product.title}
      </h2>
      <br />
      <h2>
        <b>Product description : </b>
        {product.description}
      </h2>
    </div>
  );
};

export default ProductDetails;
