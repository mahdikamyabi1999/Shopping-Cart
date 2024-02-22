import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/CartTile";

function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  useEffect(() => {
    setTotalCart(cart.reduce((acc, cur) => acc + cur.price, 0));
  }, []);
  const { cart } = useSelector((state) => state);
  console.log(cart);
  return (
    <div className="flex justify-center">
      {cart && cart.length ? (
        <>
        <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center p-3">
            {cart.map(cartItem => <CartTile cartItem={cartItem}/>)}
          </div>
        </div>
        <div className=" w-[300px]">
          <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
            <h1 className="font-bold text-lg text-red-800">Your Cart summary</h1>
            <p>
              <span className="text-gray-800 font-bold">Total items</span>
              <span>: {cart.length}</span>
            </p>
            <p>
            <span className="text-gray-800 font-bold">Total Amount</span>
              <span>: {totalCart}</span>
            </p>
          </div>
        </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col justify-center items-center">
          {" "}
          <h1 className="text-blak font-bold mb-2 text-xl">
            your Cart is empty
          </h1>
          <Link to={"/"}>
            <button className=" bg-red-950 text-white border-2 rounded-lg font-semibold p-3">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
