import { removeCart } from "../CartSlice";
import { useDispatch } from "react-redux";

function CartTile({ cartItem }) {
  const dispatch = useDispatch();
  function handelRemoveCart() {
    dispatch(removeCart(cartItem.id));
  }
  return (
    <div className="flex items-center p-5  mt-2 mb-2 rounded-3xl bg-white">
      <div className="flex p-3 ">
        <img
          src={cartItem?.image}
          alt={cartItem.title}
          className="h-28 rounded-lg "
        />
        <div className="ml-10 self-start space-y-5">
          <h1 className="text-xl text-black font-bold">{cartItem?.title}</h1>
          <p className="text-black font-extrabold text-2xl">
            {cartItem?.price}
          </p>
        </div>
      </div>
      <div>
        <button
          onClick={handelRemoveCart}
          className=" bg-[#068488] text-white rounded-lg font-semibold p-3 w-40 h-20"
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
}

export default CartTile;
