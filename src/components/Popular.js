import SmallBanner from "./SmallBanner";
import Collections from "./Collections";

import { useEffect, useState } from "react";
import Axios from 'axios'

import popularBg from '../img/popular.jpg'



const Popular = () => {

    //This is to get the background image
    const imgbg = popularBg
    
    const [paintings, setPaintings] = useState([]);

    const popularPaintings = () =>{
        Axios.get('https://painting-app-backend.up.railway.app/popular')
        .then((response)=>{
            const paintings = response.data.filter((painting) => painting.artist === 'Yuri M');
            setPaintings(paintings)
        })
        .catch((err)=>{
            console.lof(err)
        })
    }

useEffect(()=>{
    popularPaintings();
},[])

    return ( 
        <div className="popular">
            <SmallBanner imgbg={imgbg} title='Popular Prints' ></SmallBanner>
            <Collections data={paintings} ></Collections>
        </div>
     );
}
 
export default Popular;