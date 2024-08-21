import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineSattus]= useState(true)
    
    useEffect(() => {
        window.addEventListener("offline", (event) => {
            setOnlineSattus(false) 
        });
        window.addEventListener("online", (event) => {
            setOnlineSattus(true) 
        });
    }, [])
    
    return onlineStatus
}

export default useOnlineStatus;