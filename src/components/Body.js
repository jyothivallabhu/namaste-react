import RestaurantCard, {withRating4point5Above} from "./RestaurantCard"
//import resListArr from "../utils/mockData"
import { useEffect, useState } from "react"
   import { SWIGGY_API } from "../utils/constants"
import Shimmer from "./Shimmer"
import useOnlineStatus from "../utils/useOnlineStatus"


const Body = () => {
    const [resList, setResList] = useState([])
    const[filteredResList, setFilteredResList ] = useState([])
    const [searchText, setSearchText] =useState('')
    /*  */

    const RestaurantCardWithTopRated = withRating4point5Above(RestaurantCard)
    
    useEffect(() => {
        fetchData()
        
        return () => {
            
            console.log('cleared');
            
        };
        
    }, [])
    
    const fetchData = async () => {
    
        const apiFetch = await fetch(SWIGGY_API)

        const apiRes = await apiFetch.json()
        if (apiRes) {
            //optional chaining ?
           let resListArray = apiRes?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            setResList(resListArray)
            setFilteredResList(resListArray)
        } else {
             console.log('error');
        } 
    }

     const online = useOnlineStatus()
    if (!online) return (<h1>Looks like No internet</h1>)
    
    console.log(filteredResList);

    /* if (resList.length === 0) {
        return (<Shimmer/>)
    } */
    //other way is like below shown
    return filteredResList.length === 0 ? (<Shimmer />) : (
        
        
        <div>
            <div className="body">
                <h1>
                Body
                </h1>
                
                <div className="filter">
                    <div className=" flex m-4 p -4">
                        <div>

                        
                        <input className="border border-solid border-current" type="text" name="search" value={searchText} onChange={(e) => {
                            setSearchText(e.target.value)
                    }} /> 
                        <button className="bg-blue-600 rounded px-5 " onClick={() => {
                        resListArr2 =  resList.filter(rest => rest.info.name.toLowerCase().includes(searchText.toLowerCase())) 
                        setFilteredResList(resListArr2)
                        }}>Search {searchText}</button>
                        </div>
                        <div>
                    <button className="px-3 mx-4" onClick={() => {
                       resListArr2 =  resList.filter(rest => rest.info.avgRating <4) 
                        setFilteredResList(resListArr2)
                    }}
                     >Filer by rating</button>

                        </div>
                        
                </div>

                    

                </div>
                <div className="flex flex-wrap">
                {/* <RestaurantCard resData={resListArr[2]} /> */}
                
                {
                        filteredResList.map(restaurant => {
                            return (
                                restaurant.info.avgRating >'4' ? <RestaurantCardWithTopRated  key={restaurant.info.id}  {...restaurant.info}  /> : <RestaurantCard key={restaurant.info.id}  {...restaurant.info} /> 
                            )
                        
                    })
                }

                </div>
                
                

                
            </div>
           
        </div>
    )
}

export default Body