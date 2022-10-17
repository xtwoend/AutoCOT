var clarification = getTag('mqtt_data_clarification');



eval('data =' + clarification);

//debugString(nutkernel);

if(typeof data == 'object') {

setTag('vacum1', data.vacum1);
setTag('vacum2', data.vacum2);
setTag('level_oiltank1', data.level_oiltank1);
setTag('level_oiltank2', data.level_oiltank2);

setTag('temp_cst1', data.temp_cst1);
setTag('temp_cst2', data.temp_cst2);
setTag('temp_sludge1', data.temp_sludge1);
setTag('temp_sludge2', data.temp_sludge2);

setTag('temp_oiltank1', data.temp_oiltank1);
setTag('temp_oiltank2', data.temp_oiltank2);
setTag('temp_buffertank', data.temp_buffertank);

setTag('amp_sludge1', data.amp_sludge1);

setTag('amp_sludge2', data.amp_sludge2);
setTag('amp_sludge3', data.amp_sludge3);
setTag('amp_sludge4', data.amp_sludge4);
setTag('amp_sludge5', data.amp_sludge5);

setTag('amp_sludge6', data.amp_sludge6);

setTag('rpm_sludge1', data.rpm_sludge1);
setTag('rpm_sludge2', data.rpm_sludge2);
setTag('rpm_sludge3', data.rpm_sludge3);
setTag('rpm_sludge4', data.rpm_sludge4);
setTag('rpm_sludge5', data.rpm_sludge5);
setTag('rpm_sludge6', data.rpm_sludge6);

setTag('inlet_cyclone1', data.inlet_cyclone1);

setTag( 'outlet_cyclone1',data.outlet_cyclone1);
setTag( 'inlet_cyclone2',data.inlet_cyclone2);
setTag( 'outlet_cyclone2',data.outlet_cyclone2);
setTag( 'inlet_cyclone3',data.Inlet_cyclone3);
setTag( 'outlet_cyclone3',data.outlet_cyclone3);
setTag( 'inlet_cyclone4',data.inlet_cyclone4);
setTag('outlet_cyclone4', data.outlet_cyclone4);



setTag( 'temp_inlet_recpit',data.temp_inlet_recpit);

setTag( 'temp_center_recpit',data.temp_center_recpit);

setTag( 'temp_outlet_recpit',data.temp_outlet_recpit);


setTag( 'level_buffertank',data.level_buffertank);


setTag('hm_cst1', data.hm_cst1);


setTag( 'hm_cst2',data.hm_cst2);


setTag( 'hm_vacuumpump1',data.hm_vacuum1);

setTag( 'hm_vacuumpump2',data.hm_vacuum2);


setTag( 'hm_sludge1',data.hm_sludge1);

setTag( 'hm_sludge2',data.hm_sludge2);

setTag( 'hm_sludge3',data.hm_sludge3);

setTag('hm_sludge4', data.hm_sludge4);


setTag( 'hm_sludge5',data.hm_sludge5);


setTag( 'hm_sludge6',data.hm_sludge6);



setTag( 'hm_sandcyclone1',data.hm_cyclone1);


setTag('hm_sandcyclone2', data.hm_cyclone2);

setTag( 'hm_sandcyclone3',data.hm_cyclone3);



setTag('hm_sandcyclone4', data.hm_cyclone4);


setTag( 'hm_oiltank1',data.hm_oilpump1);



setTag('hm_oiltank2', data.hm_oilpump2);


}  
  










