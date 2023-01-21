var atg = getTag('mqtt_data_atg');

eval('data =' + atg);
//debugString(nutkernel);
if(typeof data == 'object') {
setTag('trym_level_tank4', data.level_tank4);
setTag('trym_temp1_tank4', data.temp1_tank4);
setTag('trym_temp2_tank4', data.temp2_tank4);
setTag('trym_temp3_tank4', data.temp3_tank4);
setTag('trym_temp4_tank4', data.temp4_tank4);
setTag('trym_meter_tank4', data.meter_tank4);
setTag('meter_tank4', data.meter_tank4);
}  
  










