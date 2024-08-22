import { useDispatch, useSelector } from "react-redux"
import MenuList from "./MenuList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);
    
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(clearCart())
    }


    return (
        <div>
            <div className="text-center m-4 p-4 ">
                <h1 className="text-2xl font-bold r">Cart</h1>
                

                {cartItems.length ===0 ? (<h1>Cart is empty</h1>) : (<button className="bg-black text-white m-2 p-2"  onClick={handleDelete}> Clear </button>)  }
                
                <div className="w-8/12 m-auto">
                    <MenuList items={cartItems} />
                </div>

            </div>
            
        </div>
    )
}

export default Cart