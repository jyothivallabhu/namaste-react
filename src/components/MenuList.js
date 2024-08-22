import { CDN_URL } from "../utils/constants"
const MenuList = ({ items }) => {
    return (
        <div>
            {
            items.map((item) =>
                <div key={item.card.info.id} className="p-2 border-b-2 text-left flex justify-between ">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>Rs {item.card.info.price / 100}</span>
                        </div>
                        <p>{item.card.info.description}</p>
                     </div>
                    

                    <div className="w-3/12 p-4" >
                        

                        <div className="absolute">
                            <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">Add+</button>
                        </div>
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/7/84f9bac7-44a4-497f-b47d-4bfa8f2c4778_dbd43460-c455-47b7-ae87-6ae1384039ca.jpg_compressed" className="w-full rounded h-[150px]" />
                        
                    </div>
                    
                </div>
                

                
                    )
                }
                
            </div>
    )
}

export default MenuList