import { useEffect, useState } from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import Producttile from "../components/ProductTile";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState('');
  async function fetchListOfProducts() {
    try {
      setLoading(true);
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    if (data) {
      setLoading(false);
      setProducts(data);
    }
      
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
        setError(`${error.message}`);
      }, 3000);
    }
    
  }
  useEffect(() => {
    fetchListOfProducts();
  }, []);
  return (
    <div >
      {loading && (
        <div className="min-h-screen w-full flex justify-center items-center">
          <InfinitySpin
            visible={true}
            width="200"
            color="#ffff"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      )}
      {error === '' ? null : <div className="flex flex-col justify-center items-center mt-72 text-4xl font-semibold text-white"><h1>Something went Wrong</h1><br /><h1>{error}</h1></div>}
      {!loading && (
        <div className=" min-h-[80vh] grid mt-20 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
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
