import { toast } from "react-hot-toast";
import {RiDeleteBin6Line} from "react-icons/ri"
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice"
const CartItem = ({item,ItemIndex}) => {
 
  const dispatch = useDispatch();

  const removeFromCart = () =>{
  dispatch(remove(item.id));
  toast.error("Item Removed")
  }
  return(
    <div className="w-full">
      <div className="flex gap-12 border-b-[2px] border-slate-700 mt-5 pb-4">

        <div>
          <img
          className="aspect-[1.1/1] h-[200px]"
          src={item.image} alt="" />
        </div>

        <div className="flex flex-col gap-5 mt-4">
          <h1
          className="font-bold text-xl"
          >{item.title}</h1>
          <h1>{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
          <div className="flex justify-between align-baseline">
          <div className="text-green-600 font-semibold flex items-center">
            <p >
              ${item.price}
            </p>
          </div>
          <RiDeleteBin6Line
          fontSize={40}
          className="bg-red-300 rounded-full p-2"
          onClick={removeFromCart}
          />
          </div>
        </div>

      </div>
    </div>
  )
};

export default CartItem;
