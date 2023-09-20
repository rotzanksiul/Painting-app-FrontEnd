import { useEffect, useState } from "react";
import SmallBanner from "./SmallBanner";
import Collections from "./Collections";

import Axios from 'axios'

import dealBg from '../img/bestdeals.jpg'


const Deals = () => {

    //This is to get the background image
    const imgbg = dealBg

    const [paintings,setPaintings] = useState([]);

    const dealsPaintings = ()=>{
        Axios.get('https://painting-app-backend.up.railway.app/bestdeals')
        .then((response)=>{
            const paintings = response.data.filter((painting)=> painting.price < 200  )
            setPaintings(paintings)
        })
        .catch((err)=>{
            console.error(err)
        })
    }


useEffect(()=>{
    dealsPaintings()
},[])
    return ( 
        <div className="bestdeals">
            <SmallBanner title='Our best Deals' imgbg={imgbg}></SmallBanner>
            <Collections data={paintings}></Collections>
        </div>
     );
}
 
export default Deals;