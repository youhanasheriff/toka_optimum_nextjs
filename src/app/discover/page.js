"use client";

import React from "react";
import addIcon from "@/assets/add.svg";
import Image from "next/image";

import products from "@/utils/dummy_products";

import "./discover.css";

const OriginalDiscoverMain = () => {
  return (
    <>
      <h2>Our products</h2>
      <p>
        We provide the best water purification management system for your home
        and office. We provide the best water purification management system for
        your home and office
      </p>
      <button className="add-product-btn">
        ADD <Image src={addIcon} />
      </button>
    </>
  );
};

const Discover = () => {
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleProductClick = (product) => {
    const productElement = (
      <div key={product.id} class="product-details">
        <img src={product.image.src} alt={product.name} />
        <div className="tank-details">
          <h3>
            Fish Name: <span>{product.fishName}</span>
          </h3>
          <hr />
          <p>
            PH: <span>{product.ph}</span>
          </p>
          <p>
            Temperature: <span>{product.temperature}</span>
          </p>
          <p>
            Turbidity:<span>{product.turbidity}</span>
          </p>
          <hr />
          <button
            onClick={() => {
              setSelectedProduct(null);
            }}
          >
            Back
          </button>
        </div>
      </div>
    );

    setSelectedProduct(productElement);
  };

  return (
    <>
      <main class="discover-hero">
        {selectedProduct ?? <OriginalDiscoverMain />}
      </main>
      <section class="products">
        {products.map((product) => {
          return (
            <div
              className="product-container"
              onClick={() => handleProductClick(product)}
            >
              <img src={product.image.src} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Discover;
