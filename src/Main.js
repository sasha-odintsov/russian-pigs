import './Main.scss';
import { useState, useEffect } from 'react';
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

function Main() {
  const [value, setValue] = useState({});
  const checkAmount = (value) => value ? `(+${value})` : false;

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://russianwarship.rip/api/v1/statistics/latest');
      const data = await response.json();
      console.log(data)

      setValue({
        date: data.data.date,
        day: data.data.day,
        aa_warfare_systems: data.data.stats.aa_warfare_systems,
        armoured_fighting_vehicles: data.data.stats.armoured_fighting_vehicles,
        artillery_systems: data.data.stats.artillery_systems,
        atgm_srbm_systems: data.data.stats.atgm_srbm_systems,
        cruise_missiles: data.data.stats.cruise_missiles,
        helicopters: data.data.stats.helicopters,
        mlrs: data.data.stats.mlrs,
        planes: data.data.stats.planes,
        personnel_units: data.data.stats.personnel_units,
        special_military_equip: data.data.stats.special_military_equip,
        tanks: data.data.stats.tanks,
        uav_systems: data.data.stats.uav_systems,
        vehicles_fuel_tanks: data.data.stats.vehicles_fuel_tanks,
        warships_cutters: data.data.stats.warships_cutters,
        increase_aa_warfare_systems: data.data.increase.aa_warfare_systems,
        increase_armoured_fighting_vehicles: data.data.increase.armoured_fighting_vehicles,
        increase_artillery_systems: data.data.increase.artillery_systems,
        increase_atgm_srbm_systems: data.data.increase.atgm_srbm_systems,
        increase_cruise_missiles: data.data.increase.cruise_missiles,
        increase_helicopters: data.data.increase.helicopters,
        increase_mlrs: data.data.increase.mlrs,
        increase_planes: data.data.increase.planes,
        increase_personnel_units: data.data.increase.personnel_units,
        increase_special_military_equip: data.data.increase.special_military_equip,
        increase_tanks: data.data.increase.tanks,
        increase_uav_systems: data.data.increase.uav_systems,
        increase_vehicles_fuel_tanks: data.data.increase.vehicles_fuel_tanks,
        increase_warships_cutters: data.data.increase.warships_cutters
      })
    }
    getData()
  }, [])
  return (
    <div className='content-wrapper'>
      <header className='header'>
        <div className='header-primary-wrap'>
          <p>
            General Staff of the Armed Forces of Ukraine informs
          </p>
          <h1>
            The total losses of the russian occupier
          </h1>
        </div>
        <div className='header-secondary-wrap'>
          <p>{value.date}</p>
          {/* <p>{value.date.split('-').join(' ')}</p> */}
          <p>{value.day}th day of war</p>
        </div>
      </header>
      <main className='main-content'>
        <div className='main-item'>
          <div className='main-item-disc'>
            <div className='main-item-disc-icon-wrap'>
              <img src={personnelUnits} alt='personnel units' className='main-item-disc-icon'/>
            </div>
            <div className='main-item-disc-title'>personnel units</div>
          </div>
          <div className='main-item-amound'>{value.personnel_units} {checkAmount(value.increase_personnel_units)}</div>
        </div>
        <div className='main-item'>
          <div className='main-item-disc'>
            <div className='main-item-disc-icon-wrap'>
              <img src={tank} alt='tank' className='main-item-disc-icon'/>
            </div>
            <div className='main-item-disc-title'>tanks</div>
          </div>
          <div className='main-item-amound'>{value.tanks} {checkAmount(value.increase_tanks)}</div>
        </div>
        <div className='main-item'>
          <div className='main-item-disc'>
            <div className='main-item-disc-icon-wrap'>
              <img src={afv} alt='afv' className='main-item-disc-icon'/>
            </div>
            <div className='main-item-disc-title'>armoured fighting vehicles</div>
          </div>
          <div className='main-item-amound'>{value.armoured_fighting_vehicles} {checkAmount(value.increase_armoured_fighting_vehicles)}</div>
        </div>
        <div className='main-item'>
          <div className='main-item-disc'>
            <div className='main-item-disc-icon-wrap'>
              <img src={artillery} alt='artillery' className='main-item-disc-icon'/>
            </div>
            <div className='main-item-disc-title'>artillery systems</div>
          </div>
          <div className='main-item-amound'>{value.artillery_systems} {checkAmount(value.increase_artillery_systems)}</div>
        </div>
        <div className='main-item'>
          <div className='main-item-disc'>
            <div className='main-item-disc-icon-wrap'>
              <img src={helicopter} alt='helicopter' className='main-item-disc-icon'/>
            </div>
            <div className='main-item-disc-title'>helicopters</div>
          </div>
          <div className='main-item-amound'>{value.helicopters} {checkAmount(value.increase_helicopters)}</div>
        </div>
        <div className='main-item'>
          <div className='main-item-disc'>
            <div className='main-item-disc-icon-wrap'>
              <img src={plane} alt='plane' className='main-item-disc-icon'/>
            </div>
            <div className='main-item-disc-title'>planes</div>
          </div>
          <div className='main-item-amound'>{value.planes} {checkAmount(value.increase_planes)}</div>
        </div>
        <div className='main-item'>
          <div className='main-item-disc'>
            <div className='main-item-disc-icon-wrap'>
              <img src={aaWarSys} alt='warfare system' className='main-item-disc-icon'/>
            </div>
            <div className='main-item-disc-title'>AA warfare systems</div>
          </div>
          <div className='main-item-amound'>{value.aa_warfare_systems} {checkAmount(value.increase_aa_warfare_systems)}</div>
        </div>
        <div className='main-item'>
          <div className='main-item-disc'>
            <div className='main-item-disc-icon-wrap'>
              <img src={mlrs} alt='mlrs' className='main-item-disc-icon'/>
            </div>
            <div className='main-item-disc-title'>MLRS</div>
          </div>
          <div className='main-item-amound'>{value.mlrs} {checkAmount(value.increase_mlrs)}</div>
        </div>
        <div className='main-item'>
          <div className='main-item-disc'>
            <div className='main-item-disc-icon-wrap'>
              <img src={atgm} alt='atgm' className='main-item-disc-icon'/>
            </div>
            <div className='main-item-disc-title'>ATGM/SRBM systems</div>
          </div>
          <div className='main-item-amound'>{value.atgm_srbm_systems} {checkAmount(value.increase_atgm_srbm_systems)}</div>
        </div>
        <div className='main-item'>
          <div className='main-item-disc'>
            <div className='main-item-disc-icon-wrap'>
              <img src={drone} alt='drone' className='main-item-disc-icon'/>
            </div>
            <div className='main-item-disc-title'>UAV systems</div>
          </div>
          <div className='main-item-amound'>{value.uav_systems} {checkAmount(value.increase_uav_systems)}</div>
        </div>
        <div className='main-item'>
          <div className='main-item-disc'>
            <div className='main-item-disc-icon-wrap'>
              <img src={warship} alt='warship' className='main-item-disc-icon'/>
            </div>
            <div className='main-item-disc-title'>warships and cutters</div>
          </div>
          <div className='main-item-amound'>{value.warships_cutters} {checkAmount(value.increase_warships_cutters)}</div>
        </div>
        <div className='main-item'>
          <div className='main-item-disc'>
            <div className='main-item-disc-icon-wrap'>
              <img src={vehicles} alt='vehicle' className='main-item-disc-icon'/>
            </div>
            <div className='main-item-disc-title'>vehicles and fuel tanks</div>
          </div>
          <div className='main-item-amound'>{value.vehicles_fuel_tanks} {checkAmount(value.increase_vehicles_fuel_tanks)}</div>
        </div>
        <div className='main-item'>
          <div className='main-item-disc'>
            <div className='main-item-disc-icon-wrap'>
              <img src={specEq} alt='special military equipment' className='main-item-disc-icon'/>
            </div>
            <div className='main-item-disc-title'>special military equipment</div>
          </div>
          <div className='main-item-amound'>{value.special_military_equip} {checkAmount(value.increase_special_military_equip)}</div>
        </div>
        <div className='main-item'>
          <div className='main-item-disc'>
            <div className='main-item-disc-icon-wrap'>
              <img src={missile} alt='missile' className='main-item-disc-icon'/>
            </div>
            <div className='main-item-disc-title'>cruise missiles</div>
          </div>
          <div className='main-item-amound'>{value.cruise_missiles} {checkAmount(value.increase_cruise_missiles)}</div>
        </div>
      </main>
    </div>
  );
}

export default Main;
