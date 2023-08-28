import Banner from './components/Banner'
import Slider from './components/Slider'
import Story from './components/Story';

import { useEffect, useState } from 'react';
import Axios from 'axios'

const Home = () => {

  const toPopular = '/popular'
  const toDeals = '/deals'

  const [popularPaintings, setPopularPaintings] = useState([]);
  const [dealsPaintings, setDealsPaintings] = useState([]);

  //Requests to get the Paintings
  const getPaintings = (() => {
    Axios.get('http://localhost:3001/')
      .then((response) => {
        //To get the popular slider pictures
        const popularPaintings = response.data.filter((painting) => painting.artist === 'Yuri M');
        setPopularPaintings(popularPaintings)
        //To get the best deals slider pictures
        const dealsPaintings = response.data.filter((painting) => painting.price < 200)
        setDealsPaintings(dealsPaintings)

      })
      .catch((err) => {
        console.log(err)
      })
  })

  useEffect(() => {
    getPaintings();

  }, [])

  return (
    <div className="home">
      <Banner></Banner>
      <div className="container">
        <Slider data={popularPaintings} title='Popular Paintings' route={toPopular} ></Slider>
      </div>
      <Story></Story>
      <div className="container">
        <Slider data={dealsPaintings} title='Best Deals' route={toDeals} ></Slider>
      </div>
    </div>);
}

export default Home;