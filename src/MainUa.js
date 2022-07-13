import { Link } from 'react-router-dom';
import Header from './Header';
import StatisticsUa from './StatisticsUa';
import Footer from './Footer';

const MainUa = () => {  
  return(
    <>
      <div className='lang-link-wrap'>
        <Link to='/' className='lang-link'>ENG</Link> UA 
      </div>
      <div className='content-wrapper'>
        <Header 
        txtDscr={'Генеральний штаб ЗС України інформує'}
        txtTitle={'Загальні бойові втрати російського окупанта'}
        txtDay={'-й день війни'}
        />
        <main className='main-content'>
          <StatisticsUa />
        </main>
        <Footer txt={'Слава Україні!'}/>
      </div>
    </>
  )    
}

export default MainUa;