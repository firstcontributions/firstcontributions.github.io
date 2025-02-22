import React,{useEffect, useState} from 'react'
import './ScrollUpButton.css'
import scrollUp from "./scroll-up.svg";

export default function ScrollUpButton() {
    const [currentYPos,setCurrentYPos] = useState(window.pageYOffset);
    const offsetHeight = window.innerHeight - 80
    useEffect(()=>{
        function updatePosition(){
            setCurrentYPos(window.pageYOffset);
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
       },[])

       const scrollUpFn = ()=> window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return (
         currentYPos >= offsetHeight ? <div className="Scroll-Up-Wrapper">
            <img className="Scroll-Up"
                onClick={scrollUpFn}
                src={scrollUp} alt="Scroll Up!" width="64" height="64" />
        </div>:<></>
    )
}