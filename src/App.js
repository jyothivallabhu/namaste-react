import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import Error from './components/Error'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import About from './components/About'
import RestaurantMenu from './components/RestaurantMenu'
//import Grocery from './components/Grocery'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Cart from './components/Cart'

const Grocery = lazy(()=> import('./components/Grocery'))
          
const AppLayout = () => {
    return (
        <>
        <div id="container "> 
          <Provider  store={appStore } >
          <Header />
          <Outlet />
                {/* <RestaurantCard resData={ resListArr[0] } /> */}
                {/* {
                    resListArr.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    )
                }
              */}
            </Provider>
            </div>
        </>
        
        
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
    {
        path: "/",
        element : <Body />
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "contact",
            element : <About />
          }
        ]
      },
      {
        path: "restaurants/:resId",
        element :<RestaurantMenu />
      },
      {
        path: "Contact",
        element : <About />
      },
      {
        path: "grocery",
        element: <Suspense fallback={<h1>Loading</h1>} > <Grocery /></Suspense>  
      },
      {
        path: "cart",
        element: <Cart />
      }
      
    ],
    errorElement  : <Error />
   
  },
   
  
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter } />)

    
/*     
const heading = React.createElement("div", { id: "parent" }, React.createElement("h1", {id:"child"}, 'Heading'))
    const heading2 = React.createElement("h1",{},"React App test")
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render([heading,heading2]) */