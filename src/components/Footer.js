import './Footer.css'
import Row from './Row'

import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import brandIcon from '../img/Yurim-icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer margin-section">
            <Row></Row>
            <Link to={'/'} className="footer-brand">
                <img src={brandIcon} alt="Brand" className='brand-image' />
            </Link>
            <div className="footer-icons">
                <a href="https://www.instagram.com/"><FaInstagram className='footer-icon' /></a>
                <a href="https://www.facebook.com/"><FaFacebook className='footer-icon' /></a>
                <a href="https://outlook.live.com/owa/"><AiOutlineMail className='footer-icon' /></a>
            </div>
            <div className="footer-links">
                <p className='p-karla' style={{ fontWeight: '250' }}>Studio</p>
                <p className='p-karla' style={{ fontWeight: '250' }}>Wholesale</p>
                <p className='p-karla' style={{ fontWeight: '250' }}>Contact</p>
                <p className='p-karla' style={{ fontWeight: '250' }}>Returns</p>
                <p className='p-karla' style={{ fontWeight: '250' }}>FAQ</p>
            </div>
            <div className="footer-text p-karla" style={{ fontWeight: '250' }}>
                all artwork is the sole property of Yuri M and is Held under copyright, even
                after purchase.
            </div>
        </div>
    );
}

export default Footer;