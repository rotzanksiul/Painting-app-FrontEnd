import './Row.css'
import image1 from '../img/row/row1.jpg'
import image2 from '../img/row/row2.jpg'
import image3 from '../img/row/row3.jpg'
import image4 from '../img/row/row4.jpg'
import image5 from '../img/row/row5.jpg'

//This component goes inside the Footer.

const Row = () => {

    const images = [image1, image2, image3, image4, image5]

    return (
        <div className="row margin-section">
            <h2 className='subtext-karla' style={{ color: '#000000' }}>Behind the Scenes</h2>
            <div className="row-images">
                {images.map((image, index) => (
                    <div className="row-image" key={index}>
                        <img src={image} alt="row image" className="image" />
                    </div>
                ))
                }
            </div>
        </div>
    );
}

export default Row;