import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import Axios from 'axios'
import './ShoppingCart.css'


const ShoppingCart = () => {

    //Get the cart items information
    const [cart, setCart] = useContext(CartContext)

    console.log(cart)

    //Get total price of the items
    const totalPrice = cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)

    //Increase the quantity of the object using ternary operator
    const increaseQty = (itemId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        )
    }

    //Decrease the quantity of the object using ternary operator
    const decreaseQty = (itemId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item._id === itemId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        )
    }

    //Remove Items
    const removeItem = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== itemId));
    }


    const sendItemsToCheckout = () => {
        // Check if the cart has items or not
        if (cart.length === 0) {
            return; 
        }

        const formattedCartItems = cart.map(item => (
            {
                id: item._id,
                quantity: item.quantity,
                price: item.price,
                name: item.name
            }
        ))

        Axios.post('https://painting-app-backend.up.railway.app/checkout', {
            items: formattedCartItems
        })
        .then(({data: {url}}) =>{
            window.location = url;
           
        })
        .catch((err)=>{
            console.log(err)
        })

    }

    return (
        <div className="cart">
            <div className="container">
                <div className="cart-wrapper">
                    {/* Using ternary operator to render the items or the empty message */}
                    {cart.length === 0 ? (
                        <div className="empty-message p-ivymode">
                            Your cart is Empty
                        </div>)
                        :
                        (
                            <div className="cart-items">
                                {cart.map((item) => (
                                    <div className="cart-item" key={item._id}>
                                        <div className="cart-item-info">
                                            <div className="cart-item-img">
                                                <img src={item.image_url} alt="item Image" />
                                            </div>
                                            <div className="cart-item-text">
                                                <p className='baskerville-p'>{item.name}</p>
                                                <p className='baskerville-p'>Artist: {item.artist}</p>
                                            </div>
                                        </div>

                                        <div className="cart-buttons">
                                            <div className="symbols">
                                                <AiOutlineMinus className='symbols-icon' onClick={() => { decreaseQty(item._id) }}></AiOutlineMinus>
                                                <span className='p-karla'>{item.quantity}</span>
                                                <AiOutlinePlus className='symbols-icon' onClick={() => { increaseQty(item._id) }}></AiOutlinePlus>
                                            </div>
                                            <div className="price-remove">
                                                <span className='karla-price'>${item.price}</span>
                                                <AiOutlineClose className='price-remove-icon' onClick={() => { removeItem(item._id) }}></AiOutlineClose>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    <div className="cart-checkout">
                        <div className="cart-checkout-box">
                            <div className="cart-subtotal">
                                <span className='baskerville-p'>Subtotal</span>
                                <span className='baskerville-p'>${totalPrice.toFixed(2)}</span>
                            </div>
                            <button className='checkout-button' onClick={()=>{sendItemsToCheckout();}}>checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;