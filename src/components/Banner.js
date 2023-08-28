
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <header className="banner bg">
            <div className="content-wrapper">
                <div className="content-headtext">
                    <p className="subtext-karla">The</p>
                    <p className="headtext-ivy ">Artful Odyssey</p>
                    <p className="p-karla-white">Best Prints and paintings available now</p>
                </div>
                <div className="content-button">
                    <Link to={'/allcollections'} className="custom-button">
                        View The collection
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Banner;
