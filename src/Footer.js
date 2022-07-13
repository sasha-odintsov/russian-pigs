import './Footer.scss'
import flag from './img/flag.jpg'

function Footer(props) {
    return(
        <footer className="footer">
            <p className="footer-item">
                {props.txt}
            </p>
                <span className='footer-img-wrap'>
                    <img src={flag} alt='flag ukraine' className='footer-img'/>
                </span>
        </footer>
    )
}

export default Footer;