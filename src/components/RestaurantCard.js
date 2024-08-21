
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
        <div className='card'>
            <img src={cloudinaryImageURL + cloudinaryImageId} alt='' />
            <Link to={"/restaurants/"+id}><h2>{name} </h2> </Link>
            <h5>{cuisines}</h5>
            <h6>{area} </h6>
            <span>
                <h4 style={avgRating < 4 ? {background: 'red'} : {color: 'white'} }>
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

export default RestaurantCard