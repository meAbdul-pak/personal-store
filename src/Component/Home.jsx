import HeroSlider from "./HeroSlider";
import ProductCard from "./ProductCard";
import products from "../data/products";
import { Link } from "react-router-dom";

const Home = () => {

  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <HeroSlider />

      <div className="section-title">

        <h2>Featured Products</h2>

        <div className="product-container">

          {featuredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

        <Link to="/products" className="view-all-btn">
          View All Products →
        </Link>

      </div>
    </>
  );
};

export default Home;