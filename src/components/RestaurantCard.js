
import { Link } from "react-router-dom";
import { cloudinaryImageURL } from "../utils/constants";


const RestaurantCard = ({
    cloudinaryImageId,
    id,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
    
    return (
        <div className='m-4 w-[250px]  block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 '>
            <img className="" src={cloudinaryImageURL + cloudinaryImageId} alt='' />
            <Link to={"/restaurants/"+id} className="text-lg font-bold"><h2>{name} </h2> </Link>
            <h5>{cuisines.join(', ')}</h5>
            <h6>{area} </h6>
            <span >
                <h4 className="px-5 w-16 rounded" style={avgRating < 4 ? {background: 'red'} : {background: 'green', color:'white'} }>
                    {avgRating}
                </h4>
            </span>
            <h4>{costForTwoString} </h4>
            <h4>
                {lastMileTravelString}
            </h4>
        </div>
    )
}

export const withRating4point5Above = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white p-2 m-2 rounded">Top Rated</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}
    

export default RestaurantCard