//import { useEffect,useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import ResCategory from "./ResCategory"
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react"

const RestaurantMenu = () => {
   
    const [showIndex, setShowIndex] = useState(null)
    const { resId } = useParams()
    console.log(resId);
    
    const resInfo = useRestaurantMenu(resId)
    
     if(resInfo === null) return <Shimmer/>
   
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    //const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories[0]?.itemCards
    
    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    //rest.info.name.toLowerCase().includes(searchText.toLowerCase())
 
    const allCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    
      const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);
 

    return  (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h2 className="text-lg font-bold">{cuisines.join(', ') } - {costForTwoMessage}</h2> 
            

            {
                categories.map((category, index) => {
                    return (<RestaurantCategory key={category?.card?.card.title} data={category?.card.card} showItems={(index === showIndex ? true : false)}  
                        setShowIndex= {()=>setShowIndex(index)} showIndex ={showIndex}
                    />)
                })
            }

            
                    
            {/* <ul>
            {
            itemCards.map((items) =>
                        <li key={items.card.info.id}>{items.card.info.name} - Rs {items.card.info.defaultPrice/100}</li>
                    )
                }
                
            </ul> */}

        </div>
    )
}

export default RestaurantMenu