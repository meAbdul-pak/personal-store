import { useState } from "react";
import ProductCard from "./ProductCard";
import Categories from "./Categories";
import products from "../data/products";

function Products() {

  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = products.filter((product) => {
    return (
      product.category === selectedCategory || selectedCategory === ""
    );
  });

  

  return (
    <div className="products-page">

      <div className="main-layout">

        <Categories
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />

        <div className="product-container">

          {filteredProducts.length > 0 ? (filteredProducts.map((product) => (<ProductCard key={product.id} product={product}/>))

          ) : (

            <p>Oops! Products nahi mile.</p>

          )}

        </div>

      </div>

    </div>
  );
}

export default Products;