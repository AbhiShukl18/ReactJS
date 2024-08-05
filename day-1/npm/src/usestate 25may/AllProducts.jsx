import { useEffect, useState } from "react";
import axios from "axios";
import "./allproduct.css";
import Api from "../axiosConfig";
import { useNavigate } from "react-router-dom";
function AllProducts() {
  const router = useNavigate();
  const [allproducts, setallproducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(4000);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    filterProducts();
  }, [minPrice, maxPrice, allproducts]);

  const filterProducts = () => {
    const filtered = allproducts.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    console.log(filtered,"filtered")
    setFilteredProducts(filtered);
    
  };

  async function GetProducts() {
    setLoader(true);

    try {
      const response = await Api.get("/product/get-all-product");
      setLoader(false);

      // console.log(response);
      setallproducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetProducts(); ///calling function(api)
  }, []);

  return (
    <>
      <link rel="stylesheet" href="allproduct.css" />
      <div>
        <h1>All Products</h1>
        {loader ? (
          <div>
            <h2>Loading...</h2>
          </div>
        ) : (
          <div class="main-section">
            <div className="section1">
            <h3>Filter by Price</h3>
            <div>
              <label>
                Min Price:
                <input
                  type="range"
                  min="0"
                  max="3500"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                />
                <span>{minPrice}</span>
              </label>
            </div>
            <div>
              <label>
                Max Price:
                <input
                  type="range"
                  min="0"
                  max="4000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <span>{maxPrice}</span>
              </label>
              </div>
            </div>
            <div className="section2">
            {filteredProducts?.map((prod) => (
              <div id="box">
                <img
                  onClick={() => router(`/product/${prod._id}`)}
                  src={prod.image}
                />
                <div id="content">
                  <p>Name: {prod.name} </p>
                  <p>Price: ₹{prod.price} </p>
                  {/* <p>Id: {prod.id} </p>
                    <p>Rating: {prod.rating.rate} ★</p>
                    <p>Count: {prod.rating.count} </p> */}
                  <button>Add to Cart</button>
                </div>
              </div>
            ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AllProducts;
