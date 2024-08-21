import { useRouteError } from "react-router-dom"

const Error = () => {

    console.log(useRouteError())
    const err = useRouteError()

    return (
        <div>
            <h1>
                Oops!..
            </h1>
        <br />
            <p>Page not found</p>
            
            <p>Error Message:{err.status} {err.statusText} </p>
            
        
        </div>
    )
}

export default Error