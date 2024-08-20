import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'


          

const AppLayout = () => {
    return (
        <>
            <div id="container "> 
          <Header />
          <Body />
                {/* <RestaurantCard resData={ resListArr[0] } />
                <RestaurantCard resData={resListArr[1]} />
                <RestaurantCard resData={ resListArr[2] } /> */}
                {/* {
                    resListArr.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    )
                       
                    )
                }

                {
                    resListArr.map((reslist) => 
                        (<RestaurantCard key={reslist.info.id} resData={ reslist} />)
                    )
                } */}
            </div>
        </>
        
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)

    
/*     
const heading = React.createElement("div", { id: "parent" }, React.createElement("h1", {id:"child"}, 'Heading'))
    const heading2 = React.createElement("h1",{},"React App test")
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render([heading,heading2]) */