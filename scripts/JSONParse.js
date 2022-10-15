//Data KTWM COT PUMP
var mqttdata_ktwm = getTag('dataMQTT_cotpump_ktwm');

debugString(mqttdata_ktwm);

eval('obj_ktwm =' + mqttdata_ktwm);

if(typeof obj_ktwm == 'object') {
	setTag( 'level_ktwm', obj_ktwm.Level);
	setTag( 'temp_ktwm', obj_ktwm.Temp);
	setTag( 'mode_ktwm', obj_ktwm.Auto_State);
	setTag( 'pump1_ktwm', obj_ktwm.Pump1_Speed);
	setTag( 'pump2_ktwm', obj_ktwm.Pump2_Speed);
	setTag( 'pump3_ktwm', obj_ktwm.Pump3_State);
}


//var mqttdata_ktwm= getTag('dataMQTT_cotpump_ktwm');

//debugString(mqttdata_ktwm);

//eval('obj_ktwm =' + mqttdata_ktwm );

//setTag( 'level_ktwm', obj_ktwm.Level);
//setTag( 'temp_ktwm', obj_ktwm.Temp);
//setTag( 'mode_ktwm', obj_ktwm.Auto_State);
//setTag( 'pump1_ktwm', obj_ktwm.Pump1_Speed);
//setTag( 'pump2_ktwm', obj_ktwm.Pump2_Speed);
//setTag( 'pump3_ktwm', obj_ktwm.Pump3_State);



//Data LMDM COT PUMP
//var mqttdata_lmdm= getTag('dataMQTT_cotpump_lmdm');

//debugString(mqttdata_lmdm);

//eval('obj_lmdm =' + mqttdata_lmdm );

//setTag( 'level_lmdm', obj_lmdm.Level);
//setTag( 'temp_lmdm', obj_lmdm.Temp);
//setTag( 'mode_lmdm', obj_lmdm.Auto_State);
//setTag( 'pump1_lmdm', obj_lmdm.Pump1_Speed);
//setTag( 'pump2_lmdm', obj_lmdm.Pump2_Speed);
//setTag( 'pump3_lmdm', obj_lmdm.Pump3_State);



//Data LMDM COT PUMP
var mqttdata_lmdm = getTag('dataMQTT_cotpump_lmdm');

debugString(mqttdata_lmdm);

eval('obj_lmdm =' + mqttdata_lmdm);

if(typeof obj_lmdm === 'object') {
	setTag( 'level_lmdm', obj_lmdm.Level);
	setTag( 'temp_lmdm', obj_lmdm.Temp);
	setTag( 'mode_lmdm', obj_lmdm.Auto_State);
	setTag( 'pump1_lmdm', obj_lmdm.Pump1_Speed);
	setTag( 'pump2_lmdm', obj_lmdm.Pump2_Speed);
	setTag( 'pump3_lmdm', obj_lmdm.Pump3_State);
}


//Data KSCMM DIGESTER PRESS
//var mqttdata_scmm = getTag('dataMQTT_digester_scmm');

//debugString(mqttdata_scmm);
//eval('obj_scmm =' + mqttdata_scmm );

//setTag( 'Pressure_scmm', obj_scmm.Pressure);

//setTag( 'Level_scmm', obj_scmm.Level);

//setTag( 'Temperature_scmm', obj_scmm.Temperature);

//setTag( 'RPM_scmm', obj_scmm.RPM);

//setTag( 'RunningHour_scmm', obj_scmm.RunningHour);
//setTag( 'RunningMinute_scmm', obj_scmm.RunningMinute);
//setTag( 'RunningSecon_scmm', obj_scmm.RunningSecon);
