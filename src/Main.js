import './Main.scss';
import Header from './Header';
import Statistics from './Statistic';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className='content-wrapper'>
      <div className='lang-link'>
        ENG <Link to='/ua'>UA</Link> 
      </div>
      <Header 
      txtDscr={'General Staff of the Armed Forces of Ukraine informs'}
      txtTitle={'The total losses of the russian occupier'}
      txtDay={'th day of war'}
      />
      <main className='main-content'>
        <Statistics />
      </main>
      <Footer txt={'Slava Ukraine!'}/>
    </div>
  );
}

export default Main;
