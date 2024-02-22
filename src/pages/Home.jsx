import { useEffect, useState } from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import Producttile from "../components/ProductTile";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchListOfProducts() {
    setLoading(true);
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    if (data) {
      setLoading(false);
      setProducts(data);
    }
  }
  useEffect(() => {
    fetchListOfProducts();
  }, []);
  return (
    <div>
      {loading && (
        <div className="min-h-screen w-full flex justify-center items-center">
          <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      )}
      {!loading && (
        <div className=" min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((product) => {
                return <Producttile product={product} />;
              })
            : null}
        </div>
      )}
    </div>
  );
}

export default Home;
