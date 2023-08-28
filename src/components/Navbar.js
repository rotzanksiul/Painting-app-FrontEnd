import './Navbar.css'
import iconImg from '../img/Yurim-icon.png'

import { PiShoppingCartSimpleThin } from 'react-icons/pi' //using react icons 
import { BiMenuAltLeft } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/ShoppingCartContext' //Getting cart info using useContext

const Navbar = () => {

    //CartContext 
    const [cart, setCart] = useContext(CartContext)

    const [showMenu, setShowMenu] = useState(false);
    const [cartCount, setCartCount] = useState(0)

    //To refresh the cart items quantity
    useEffect(() => {
        const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
        setCartCount(quantity);
    }, [cart]);


    return (
        <div className="navbar">
            <div className="brand">
                <a href='#' className="menu-icon">
                    <BiMenuAltLeft className='' onClick={() => { (setShowMenu(true)) }} />
                </a>
                <Link to={'/'}>
                    <img src={iconImg} alt="brand-icon" className='brand-image' />
                </Link>
            </div>

            <ul className='menu'>
                <li className='menu-item p-karla'><Link to={'/popular'}>Popular</Link></li>
                <li className='menu-item p-karla'><Link to={'/deals'}>Best Deals</Link></li>
                <li className='menu-item p-karla'><Link to={'/allcollections'}>Shop</Link></li>
                <li className='menu-item p-karla'><Link to={'/more'}>more</Link></li>
            </ul>

            {/* Cart icon */}
            <div className="cart">
                <Link to={'/cart'}>
                    <PiShoppingCartSimpleThin className='cart-icon' />
                    {cartCount > 0 && <span className='cart-count'>{cartCount}</span>}
                </Link>
            </div>

            {/* To show and hide the Hidden menu */}
            <div className={`hidden-menu ${showMenu ? 'show' : ''}`}>
                <div className="hidden-menu-container">
                    <div className="close">
                        <AiOutlineClose className="close-icon" onClick={() => { (setShowMenu(false)) }} />
                    </div>

                    <ul className='hidden-menu-menu' >
                        <li className='menu-item p-karla'><Link to={'/popular'} onClick={() => { (setShowMenu(false)) }}>Popular</Link></li>
                        <li className='menu-item p-karla'><Link to={'/deals'} onClick={() => { (setShowMenu(false)) }}>Best Deals</Link></li>
                        <li className='menu-item p-karla'><Link to={'/allcollections'} onClick={() => { (setShowMenu(false)) }}>Shop</Link></li>
                        <li className='menu-item p-karla'><Link to={'/more'} onClick={() => { (setShowMenu(false)) }}>more</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;