import StatisticsItem from './StatisticsItem';
import GetValue from './GetValue';
import checkAmount from '/checkAmount';
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

function Statistics() {
  const value = GetValue();
  
  return(
    <>
      <StatisticsItem 
      img={personnelUnits}
      title={'personnel units'}
      total={value.personnel_units}
      increase={checkAmount(value.increase_personnel_units)}
      />
      <StatisticsItem 
      img={tank}
      title={'tank'}
      total={value.tanks}
      increase={checkAmount(value.increase_tanks)}
      />
      <StatisticsItem 
      img={afv}
      title={'armoured fighting vehicles'}
      total={value.armoured_fighting_vehicles}
      increase={checkAmount(value.increase_armoured_fighting_vehicles)}
      />
      <StatisticsItem 
      img={artillery}
      title={'artillery systems'}
      total={value.artillery_systems}
      increase={checkAmount(value.increase_artillery_systems)}
      />
      <StatisticsItem 
      img={helicopter}
      title={'helicopters'}
      total={value.helicopters}
      increase={checkAmount(value.increase_helicopters)}
      />
      <StatisticsItem 
      img={plane}
      title={'planes'}
      total={value.planes}
      increase={checkAmount(value.increase_planes)}
      />
      <StatisticsItem 
      img={aaWarSys}
      title={'AA warfare systems'}
      total={value.aa_warfare_systems}
      increase={checkAmount(value.increase_aa_warfare_systems)}
      />
      <StatisticsItem 
      img={mlrs}
      title={'MLRS'}
      total={value.mlrs}
      increase={checkAmount(value.increase_mlrs)}
      />
      <StatisticsItem 
      img={atgm}
      title={'ATGM/SRBM systems'}
      total={value.atgm_srbm_systems}
      increase={checkAmount(value.increase_atgm_srbm_systems)}
      />
      <StatisticsItem 
      img={drone}
      title={'UAV systems'}
      total={value.uav_systems}
      increase={checkAmount(value.increase_uav_systems)}
      />
      <StatisticsItem 
      img={warship}
      title={'warships and cutters'}
      total={value.warships_cutters}
      increase={checkAmount(value.increase_warships_cutters)}
      />
      <StatisticsItem 
      img={vehicles}
      title={'vehicles and fuel tanks'}
      total={value.vehicles_fuel_tanks}
      increase={checkAmount(value.increase_vehicles_fuel_tanks)}
      />
      <StatisticsItem 
      img={specEq}
      title={'special military equipment'}
      total={value.special_military_equip}
      increase={checkAmount(value.increase_special_military_equip)}
      />
      <StatisticsItem 
      img={missile}
      title={'cruise missiles'}
      total={value.cruise_missiles}
      increase={checkAmount(value.increase_cruise_missiles)}
      />
      <div className='main-item main-item-special'>
        <a href='https://donate.thedigital.gov.ua' className='main-item-link'>Support the army</a>
      </div>
    </>
  )    
}

export default Statistics;