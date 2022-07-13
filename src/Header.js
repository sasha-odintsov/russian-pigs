import zsu from './img/zsu.png';
import './Header.scss'
import GetValue from './GetValue';

function Header({txtDscr, txtTitle, txtDay}) {
    const value = GetValue();

    return(
        <header className='header'>
        <div className='header-primary-wrap'>
          <div className='header-logo-wrap'>
            <img src={zsu} alt="zsu logo" className='header-logo'/>
          </div>
          <div className='header-title-wrap'>
            <p className='header-title-disc'>
              {txtDscr}
            </p>
            <h1 className='header-title'>
              {txtTitle}
            </h1>
          </div>
        </div>
        <div className='header-secondary-wrap'>
          <p className='header-date'>{value.date}</p>
          <p className='header-day'>{value.day}{txtDay}</p>
        </div>
      </header>
    )
}

export default Header;