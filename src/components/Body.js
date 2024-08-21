import RestaurantCard from "./RestaurantCard"
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
                    <div className="search">
                        <input type="text" name="search" value={searchText} onChange={(e) => {
                            setSearchText(e.target.value)
                    }} /> 
                        <button onClick={() => {
                        resListArr2 =  resList.filter(rest => rest.info.name.toLowerCase().includes(searchText.toLowerCase())) 
                        setFilteredResList(resListArr2)
                        }}>Search { searchText}</button>
                </div>

                    <button className="filter-btn" onClick={() => {
                       resListArr2 =  resList.filter(rest => rest.info.avgRating <4) 
                        setFilteredResList(resListArr2)
                    }}
                     >Filer by rating</button>

                </div>
                <div className="restaurant-list">
                {/* <RestaurantCard resData={resListArr[2]} /> */}
                
                {
                    filteredResList.map(restaurant => {
                       return (<RestaurantCard key={restaurant.info.id}  {...restaurant.info} />)
                    })
                }

                </div>
                
                

                
            </div>
           
        </div>
    )
}

export default Body