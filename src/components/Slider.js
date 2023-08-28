import { Link } from 'react-router-dom';
import React from 'react'; 
import { AiOutlineLeft , AiOutlineRight } from 'react-icons/ai'
import './Slider.css';

const Slider = ({ data, title, route }) => {

  // Get only 4 objects
  const imagesData = data.slice(1, 6)
  
  //Allows to interact with the properties or methods of a DOM element
  const scrollRef = React.useRef(null);

  //This the function to move the scroll position
  const scroll = (direction) => {
    //to manipulate the scroll position of the element
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 250
    } else {
      current.scrollLeft += 250
    }
  }

  return (
    <div className="slider container margin-section"> 
    <h2 className='subtext-ivy'>{title}</h2>

      <div className="slider-images " > 
        <div className="slider-images-container" ref={scrollRef}>  
          {imagesData.map((image, index) => ( 
            <div className="slider-images-card " key={image._id} > 
              <img src={image.image_url} alt={`slider image ${index}`} />
            </div>
          ))}
        </div>
        <button className='slider-arrow left-arrow' onClick={()=>{ scroll('left')}}> <AiOutlineLeft/></button>
        <button className='slider-arrow right-arrow' onClick={()=>{scroll('right')}}><AiOutlineRight/></button>
      </div>
      <Link  to={route} className='custom-button' style={{backgroundColor: '#CDD1DB'}}>View Collection</Link>
    </div>
  );
};

export default Slider;