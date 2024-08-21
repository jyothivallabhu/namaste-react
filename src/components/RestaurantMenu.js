//import { useEffect,useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"


const RestaurantMenu = () => {
   
    
    const {resId} =useParams()

    const resInfo = useRestaurantMenu(resId)

   
    
//     useEffect(() => {
//     fetchMenu()
//     }, [])
    
//     const fetchMenu = async() => {
// const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4801969&lng=78.4171028&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")

//         const json = await data.json()
//         //console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards)
//         setResInfo(json?.data)
    //     }
    
    
     if(resInfo === null) return <Shimmer/>
   
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
    
    return  (
        <div className="restaurant-menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(', ')}</h2>
            <h4>{costForTwoMessage}</h4>
            <ul>
                {
                    itemCards.map((items) => 
                        <li key={items.card.info.id}>{items.card.info.name} - Rs {items.card.info.price/100}</li>
                    )
                }
                
                <li>Pizza</li>
                <li>Chicken</li>
                <li>FriedRice</li>
            </ul>

        </div>
    )
}

export default RestaurantMenu