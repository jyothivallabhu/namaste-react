import React, { useState } from 'react'
import MenuList from './MenuList';

const RestaurantCategory = ({data,showItems, setShowIndex,showIndex}) => {
    //console.log(data);
     const itemCards = data?.itemCards

    // const [showItems,setShowItems] = useState(false)
     const handleClick = () => {
        setShowIndex()
     }
    
    return (
      <div>
            
      
            <div className='w-6/12 mx-auto my-5 p-4 bg-grey-50 shadow-lg '>
                <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                    <span className='font-bold text-2xl' >{data.title} ({data.itemCards.length})</span>
                    <span>d</span>
                </div>
          
                <div>
                    {showItems && <MenuList items={data.itemCards} />}
                </div>
                
          {/* <ul>
            {
            itemCards.map((items) =>
                        <li key={items.card.info.id}>{items.card.info.name} - Rs {items.card.info.price/100}</li>
                    )
                }
                
            </ul> */}
            </div>
            
        </div>
        
  )
}

export default RestaurantCategory