import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

import './Collections.css'


const Collections = ({ data }) => {

    const [cart, setCart] = useContext(CartContext)

    //State variable to track the item Id for which button the text should be changed
    const [updatedItemId, setUpdatedItemId] = useState(null);

    //Add the painting to the cart
    const addToCart = (painting) => {
        setCart((currItems) => {
            // To see if the item we are adding is in the cart already
            const existingItem = currItems.find((item) => item._id === painting._id);

            if (existingItem) {
                return currItems.map((item) => {
                    // If the item already exists we increase the quantity
                    if (item._id === painting._id) {

                        UpdateButtonText(painting._id);

                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                UpdateButtonText(painting._id);

                return [...currItems, { ...painting, quantity: 1 }];
            }
        });

    };

    //Function to change the button text when adding an item
    const UpdateButtonText = (itemId) => {
        setUpdatedItemId(itemId);
        setTimeout(() => {
            setUpdatedItemId(null);
        }, 1000);
    }

    return (
        <div className="collections">
            <div className="collection-container">
                <div className="collection-wrapper">
                    {
                        data.map((painting, index) => (
                            <div className="card" key={painting._id}>
                                <div className="card-image">
                                    <img src={painting.image_url} alt="card image" />
                                    {/* Image Buttons */}
                                    <div className="card-image-buttons">
                                        <button className='cart-button'
                                            onClick={() => { addToCart(painting) }}
                                        >{updatedItemId === painting._id ? 'Added!' : 'Add to Cart'}</button>
                                        <Link to={`/allcollections/${painting._id}`} className='cart-button'>Quick View</Link>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <p className='baskerville-p'>{painting.name}</p>
                                    <p className='karla-price'>${painting.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Collections; 