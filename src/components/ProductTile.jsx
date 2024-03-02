import {useDispatch} from 'react-redux'
import { addToCart } from '../CartSlice';
import { removeCart } from '../CartSlice';
import {useSelector} from 'react-redux';


function Producttile({product}) {
  const {cart} = useSelector(state => state);
  const dispatch = useDispatch();
  function handelRemoveCart() {
    dispatch(removeCart(product.id))
  }
  function hnadleAddToCart() {
    dispatch(addToCart(product))
  }
  
  return (
    <div>
      <div className="group flex flex-col items-center bg-white  gap-3 p-4 h-[360px] mt-10 md:ml-5 rounded-xl">
        <div className="h-[180px]">
          <img src={product?.image} alt={product?.title} className=" object-cover h-full w-full" />
        </div>
        <div>
          <h1 className="w-40  truncate mt-3 text-gray-700 font-semibold text-base">{product?.title}</h1>
          </div>
          <div className="flex items-center justify-center w-full mt-5">
            <button onClick={cart.some((item) => item.id === product.id ) ? handelRemoveCart : hnadleAddToCart} className=" bg-[#068488] text-white  rounded-lg font-semibold p-3">{cart.some(item => item.id === product.id ) ? 'Remove From Cart' : 'Add To Cart'}</button>
          </div>
      </div>
    </div>
  )
}

export default Producttile
