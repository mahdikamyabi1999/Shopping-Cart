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
  return (
    <div className="flex justify-center">
      {cart && cart.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-5xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3 mt-12">
              {cart.map((cartItem) => (
                <CartTile cartItem={cartItem} />
              ))}
            </div>
          </div>
          <div className=" bg-white  w-[300px] h-[300px] mr-24 mt-24 p-5 rounded-[45px]">
            <div className="flex flex-col  justify-center items-center gap-y-3">
              <h1 className="font-bold  text-xl text-black">
                Your Cart summary
              </h1>
              <div className="flex flex-col gap-y-2 mt-10 items-center">
                <p>
                  <span className="text-black text-xl font-bold">
                    Total items
                  </span>
                  <span className=" text-lg">: {cart.length}</span>
                </p>
                <p>
                  <span className="text-gray-800 text-xl font-bold">
                    Total Amount
                  </span>
                  <span className=" text-lg">: {totalCart.toFixed()}</span>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col justify-center items-center">
          {" "}
          <h1 className="text-white font-bold mb-8 text-3xl">
            Your Cart is empty
          </h1>
          <Link to={"/"}>
            <button className=" bg-[#068488] w-36 h-16 text-white rounded-2xl font-semibold p-3">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
