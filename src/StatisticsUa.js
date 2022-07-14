import StatisticsItem from './StatisticsItem';
import GetValue from './GetValue';
import checkAmount from './checkAmount';
import personnelUnits from './img/pig-z1.png';
import aaWarSys from './img/aa-war-sys.png';
import afv from './img/afv.png';
import artillery from './img/artillery.png';
import atgm from './img/atgm.png';
import drone from './img/drone.png';
import helicopter from './img/military-helicopter.png';
import missile from './img/missile.png';
import mlrs from './img/mlrs.png';
import plane from './img/plane.png';
import specEq from './img/spec-mil-eq.png';
import tank from './img/tank.png';
import vehicles from './img/vehicles.png';
import warship from './img/warship.png';

function StatisticsUa() {
  const value = GetValue();
  
  return(
    <>
      <StatisticsItem 
      img={personnelUnits}
      title={'особовий склад'}
      total={value.personnel_units}
      increase={checkAmount(value.increase_personnel_units)}
      />
      <StatisticsItem 
      img={tank}
      title={'танки'}
      total={value.tanks}
      increase={checkAmount(value.increase_tanks)}
      />
      <StatisticsItem 
      img={afv}
      title={'бойові броньовані машини'}
      total={value.armoured_fighting_vehicles}
      increase={checkAmount(value.increase_armoured_fighting_vehicles)}
      />
      <StatisticsItem 
      img={artillery}
      title={'артилерійські системи'}
      total={value.artillery_systems}
      increase={checkAmount(value.increase_artillery_systems)}
      />
      <StatisticsItem 
      img={helicopter}
      title={'гелікоптери'}
      total={value.helicopters}
      increase={checkAmount(value.increase_helicopters)}
      />
      <StatisticsItem 
      img={plane}
      title={'літаки'}
      total={value.planes}
      increase={checkAmount(value.increase_planes)}
      />
      <StatisticsItem 
      img={aaWarSys}
      title={'системи протиповітряної оборони'}
      total={value.aa_warfare_systems}
      increase={checkAmount(value.increase_aa_warfare_systems)}
      />
      <StatisticsItem 
      img={mlrs}
      title={'реактивні системи залпового вогню'}
      total={value.mlrs}
      increase={checkAmount(value.increase_mlrs)}
      />
      <StatisticsItem 
      img={atgm}
      title={'тактичні ракетні комплекси'}
      total={value.atgm_srbm_systems}
      increase={checkAmount(value.increase_atgm_srbm_systems)}
      />
      <StatisticsItem 
      img={drone}
      title={'безпілотні літальні апарати'}
      total={value.uav_systems}
      increase={checkAmount(value.increase_uav_systems)}
      />
      <StatisticsItem 
      img={warship}
      title={'військові кораблі та катери'}
      total={value.warships_cutters}
      increase={checkAmount(value.increase_warships_cutters)}
      />
      <StatisticsItem 
      img={vehicles}
      title={'автотехніка та автоцистерни'}
      total={value.vehicles_fuel_tanks}
      increase={checkAmount(value.increase_vehicles_fuel_tanks)}
      />
      <StatisticsItem 
      img={specEq}
      title={'спеціальна техніка'}
      total={value.special_military_equip}
      increase={checkAmount(value.increase_special_military_equip)}
      />
      <StatisticsItem 
      img={missile}
      title={'крилаті ракети'}
      total={value.cruise_missiles}
      increase={checkAmount(value.increase_cruise_missiles)}
      />
      <div className='main-item main-item-special'>
        <a href='https://donate.thedigital.gov.ua' className='main-item-link'>Допомогти ЗСУ</a>
      </div>
    </>
  )    
}

export default StatisticsUa;