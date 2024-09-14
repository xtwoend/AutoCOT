var atg = getTag('scmm_mqtt_data_atg');


eval('data =' + atg);


if(typeof data == 'object') {

setTag('scmm_level_tank1', data.level_percent_tank1);
setTag('scmm_temp1_tank1', data.temp1_tank1);
setTag('scmm_temp2_tank1', data.temp2_tank1);
setTag('scmm_temp3_tank1', data.temp3_tank1);
setTag('scmm_temp4_tank1', data.temp4_tank1);
setTag('scmm_temp5_tank1', data.temp5_tank1);
setTag('scmm_temp6_tank1', data.temp6_tank1);
setTag('scmm_temp7_tank1', data.temp7_tank1);
setTag('scmm_temp8_tank1', data.temp8_tank1);
setTag('scmm_meter_tank1', data.level_mm_tank1);
setTag('scmm_average_temp_tank1', data.avg_temp_tank1);

setTag('scmm_level_tank2', data.level_percent_tank2);
setTag('scmm_temp1_tank2', data.temp1_tank2);
setTag('scmm_temp2_tank2', data.temp2_tank2);
setTag('scmm_temp3_tank2', data.temp3_tank2);
setTag('scmm_temp4_tank2', data.temp4_tank2);
setTag('scmm_temp5_tank2', data.temp5_tank2);
setTag('scmm_temp6_tank2', data.temp6_tank2);
setTag('scmm_temp7_tank2', data.temp7_tank2);
setTag('scmm_temp8_tank2', data.temp8_tank2);
setTag('scmm_meter_tank2', data.level_mm_tank2);
setTag('scmm_average_temp_tank2', data.avg_temp_tank2);

}