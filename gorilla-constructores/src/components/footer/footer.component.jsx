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
                    <img src={GorilaLogo} className="footer-logo" alt="Gorila Constructores" />
                </div>
                <div className="column2">
                    <div className="footer-title">
                        <p>Contáctanos</p>
                    </div>
                    <div>
                        <div className="footer-sub-title footer-text-contain">
                            <p>Telélefono</p>
                        </div>
                        <div className="footer-text footer-text-contain">
                            <p>(442) xxx xxxx</p>
                        </div>
                    </div>
                    <div>
                        <div className="footer-sub-title footer-text-contain">
                            <p>Dirección</p>
                        </div>
                        <div className="footer-text footer-text-contain">
                            <p>Calle de las flores #140 <br/> Col. Los Pasteles. CP. 00000 <br/> Querétaro, Qro</p>
                        </div>
                    </div>
                </div>
                <div className="column3">
                    <div className="footer-title">
                        <p>Redes Sociales</p>
                    </div>
                    <div className='container-img'>
                        <a href=""><img src={FacebookIcon} alt='Facebook' className="footer-icon"/></a>
                        <a href=""><img src={InstagramIcon} alt='Instagram' className="footer-icon"/></a>
                        <a href=""><img src={TwitterIcon} alt='Twitter' className="footer-icon"/></a>
                    </div>
                </div>
            </div>        
        </>
    );
}

export default Footer;