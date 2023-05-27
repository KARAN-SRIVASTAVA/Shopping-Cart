import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="max-w-6xl mx-auto sm:w-full">
  {
    cart.length > 0  ? 
    (<div className="w-full flex flex-col gap-8 sm:flex-row">


      <div className="max-w-3xl">
        {
          cart.map( (item,index) => {
            return <CartItem
            key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="max-w-3xl flex flex-col justify-between mt-5 p-4 h-[30px] sm:h-[600px]">
        <div className="flex flex-col uppercase">
          <div className="text-green-700 font-bold text-[1.365rem] ">Your Cart</div>
          <div className="text-green-700 font-bold text-[2.875rem] mt-[-12px]">Summary</div>
          <p className="font-bold text-[17px]">
            <span>Total Items : <span className="ml-1">{cart.length}</span></span>
          </p>
        </div>

        <div>
          <p className="text-slate-700 font-bold text-[17px]">Total Amount : 
          <span 
           className="ml-1 text-black text-[18px]"
           >
          ${totalAmount}
          </span>
          </p>
          <button
          className="bg-green-700 rounded-lg text-white font-bold py-3 px-20 mt-4
          hover:bg-white hover:text-green-700 border hover:border-green-600 transition-all duration-300
          "
          >
            CheckOut Now
          </button>
        </div>
      </div>

    </div>) : 

    (<div className="w-full h-screen mt-[-25px] flex justify-center items-center flex-col">
      <h1
      className="font-bold text-[20px]"
      >Cart Empty</h1>
      <Link to={"/"}>
        <button
        className="bg-green-700 rounded-lg text-white font-bold py-3 px-20 mt-4
        hover:bg-white hover:text-green-700 border hover:border-green-600 transition-all duration-300
        "
        >
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
