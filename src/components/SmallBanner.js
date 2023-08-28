
//This component will contain the small banner

const SmallBanner = ({title, imgbg}) => {

    const bannerStyle = {
        backgroundImage: `url(${imgbg})`
    }

    return ( 
        <div className="small-banner small-bg" style={bannerStyle}>
            <p className="headtext-ivy" style={{zIndex: '100'}} >{title}</p>
        </div>
     );
}
 
export default SmallBanner;