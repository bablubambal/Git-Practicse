import React, { useState,useEffect } from 'react'


const useScreen = () => {
    const [ screenSize,setScreenSize] = useState()

    const checkScreensize = ()=>{
        if(window.innerWidth >1300) return setScreenSize("Xtralarge")
        if(window.innerWidth >992) return setScreenSize("large")
        // if(window.innerWidth < 992 && window.innerWidth>600)  return setScreenSize("medium")
        if( window.innerWidth>600)  return setScreenSize("medium")
        if( window.innerWidth<600)  return setScreenSize("small")
    }

    useEffect(()=>{
        checkScreensize();
        window.addEventListener("resize",checkScreensize);
        return ()=>{
            window.removeEventListener("resize")
        }
    },[])



  return screenSize;
}

export default useScreen
