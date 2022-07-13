import './Footer.scss'
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
        <footer className="footer">
            <p className="footer-item">
                {props.txt}
            </p>
            {/* <div className='lang-link'>
        ENG <Link to='/ua'>UA</Link> 
      </div> */}
        </footer>
    )
}

export default Footer;