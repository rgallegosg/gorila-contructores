import GorilaLogo from '../../assets/images/footer/gorilla_icon_white.png';
import FacebookIcon from '../../assets/icons/facebook.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import './footer.style.css';

const Footer = () => {
    return (
        <>
            <div className='wrapper'>
                <div className="column1">
                    <p>Contactanos</p>
                </div>
                <div className="column2">
                    <p>Desarrollado por ...</p>
                </div>
                <div className="column3">
                    <p>Social Media</p>
                </div>
            </div>
            <div className="footer-container">
                <div className="footer-logo-container">
                <img src={GorilaLogo} className="footer-logo" alt="Gorila Constructores" />
                </div>
                <div className="social-network-container">
                    <img src={FacebookIcon} alt='Facebook' className="footer-icon"/>
                    <img src={InstagramIcon} alt='Instagram' className="footer-icon"/>
                    <img src={TwitterIcon} alt='Twitter' className="footer-icon"/>
                </div>
                <div className="footer-title">
                    <p>Gorila Constructores</p>
                    <a href='/contactanos'>Cóntactanos</a>
                </div>
                <div>
                    Gorilla constructores 2024 &copy;
                </div>
            </div>
        </>
    );
}

export default Footer;