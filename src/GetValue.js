import { useState, useEffect } from 'react';

function GetValue() {
    const [value, setValue] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://russianwarship.rip/api/v1/statistics/latest');
            const data = await response.json();

            setValue({
                date: data.data.date.split('-').reverse().join('/'),
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
    return value;
}

export default GetValue;
