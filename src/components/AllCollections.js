import SmallBanner from './SmallBanner';
import Collections from './Collections';
import { useEffect, useState } from 'react';

import Axios from 'axios'
import collectionbg from '../img/collection.jpg'

const AllCollections = () => {

    //This is to get the background image
    const imgbg = collectionbg

    const [paintings, setPaintings] = useState([])

    const getPaintings = ()=>{
        Axios.get('http://localhost:3001/allcollections')
        .then((response)=>{
            setPaintings(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getPaintings();
    },[])

    return ( 
        <div className="allcollections">
            <SmallBanner title='Our Collections' imgbg={imgbg}></SmallBanner>
            {paintings ? <Collections data={paintings}></Collections> : <div className="loading-message"> <p className='p-karla loading'>Loading...</p></div>}
        </div>
     );
}
 
export default AllCollections;