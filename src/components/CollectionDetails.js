import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartContext";
import Axios from 'axios'

import './CollectionDetails.css'

const CollectionDetails = () => {
    //Get the id from url
    const { id } = useParams();

    const [collection, setCollection] = useState([]);

    //Change the button text when item is added to cart
    const [isAdded,setIsAdded] = useState(false)

    //Get the current object
    const getCollection = () => {
        Axios.get(`https://painting-app-backend.up.railway.app/allcollections/${id}`)
            .then((response) => {
                setCollection(response.data)
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getCollection();
    }, [])


    //Cart Context
    const [cart, setCart] = useContext(CartContext)

    //Add the painting to the cart
    const addToCart = (painting) => {
        setCart((currItems) => {
            // To see if the item we are adding is in the cart already
            const existingItem = currItems.find((item) => item._id === painting._id);

            if (existingItem) {
                return currItems.map((item) => {
                    // If the item already exists we increase the quantity
                    if (item._id === painting._id) {

                        UpdateButtonText();

                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                UpdateButtonText();

                return [...currItems, { ...painting, quantity: 1 }];
            }
        });
    };

    //Function to change the button text when adding an item
    const UpdateButtonText = () =>{
        setIsAdded(true)
        setTimeout(() => {
            setIsAdded(false)
        }, 800);
    }

    return (
        <div className="collection-details container ">
            <div className="collection-details-wrapper">
                <div className="collection-details-img">
                    <img src={collection.image_url} alt="image" />
                </div>
                <div className="collection-details-content">
                    <h3 className="subtext-ivy" style={{ color: '#000000' }}>{collection.name}</h3>
                    <div className="collection-details-text">
                        <p className="baskerville-p">"{collection.description}"</p>
                        <p className="baskerville-p">Style: {collection.style}</p>
                        <p className="baskerville-p">Artist: {collection.artist}</p>
                        <p className="karla-price">From: {collection.price}</p>
                        <button 
                        className="cart-button" 
                        style={{ backgroundColor: '#CDD1DB' }} 
                        onClick={() => { addToCart(collection) }}
                        >{isAdded ? 'Added!' :'Add To cart' }</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollectionDetails;