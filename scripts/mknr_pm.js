var pm_kantor_wilayah = getTag('pm_kwill');

eval('data =' + pm_kantor_wilayah);
//debugString(pm_kantor_wilayah);
if(typeof data == 'object') {
setTag('mknr_kwil_voltage_a', data.voltage_a);
setTag('mknr_kwil_voltage_b', data.voltage_b);
setTag('mknr_kwil_voltage_c', data.voltage_c);
setTag('mknr_kwil_current_a', data.current_a);
setTag('mknr_kwil_current_b', data.current_b);
setTag('mknr_kwil_current_c', data.current_c);

setTag('mknr_kwil_active_power_a', data.active_power_a);
setTag('mknr_kwil_active_power_b', data.active_power_b);
setTag('mknr_kwil_active_power_c', data.active_power_c);
setTag('mknr_kwil_total_active_power', data.total_active_power);


setTag('mknr_kwil_reactive_power_a', data.reactive_power_a);
setTag('mknr_kwil_reactive_power_b', data.reactive_power_b);
setTag('mknr_kwil_reactive_power_c', data.reactive_power_c);
setTag('mknr_kwil_total_reactive_power', data.total_reactive_power);

setTag('mknr_kwil_power_factor_a', data.power_factor_a);
setTag('mknr_kwil_power_factor_b', data.power_factor_b);
setTag('mknr_kwil_power_factor_c', data.power_factor_c);
setTag('mknr_kwil_total_power_factor', data.total_power_factor);


setTag('mknr_kwil_frequency', data.frequency/100);
setTag('mknr_kwil_total_kwh', data.total_kwh/100);
setTag('mknr_kwil_total_kvarh', (data.total_kvarh/100)*-1);

}  
  
  
  var pm_pks_mknr = getTag('pm_pks');

eval('data =' + pm_pks_mknr);
//debugString(pm_pks_mknr);
if(typeof data == 'object') {
setTag('mknr_pks_voltage_a', data.voltage_a);
setTag('mknr_pks_voltage_b', data.voltage_b);
setTag('mknr_pks_voltage_c', data.voltage_c);
setTag('mknr_pks_current_a', data.current_a);
setTag('mknr_pks_current_b', data.current_b);
setTag('mknr_pks_current_c', data.current_c);

setTag('mknr_pks_active_power_a', data.active_power_a);
setTag('mknr_pks_active_power_b', data.active_power_b);
setTag('mknr_pks_active_power_c', data.active_power_c);
setTag('mknr_pks_total_active_power', data.total_active_power);


setTag('mknr_pks_reactive_power_a', data.reactive_power_a);
setTag('mknr_pks_reactive_power_b', data.reactive_power_b);
setTag('mknr_pks_reactive_power_c', data.reactive_power_c);
setTag('mknr_pks_total_reactive_power', data.total_reactive_power);

setTag('mknr_pks_power_factor_a', data.power_factor_a);
setTag('mknr_pks_power_factor_b', data.power_factor_b);
setTag('mknr_pks_power_factor_c', data.power_factor_c);
setTag('mknr_pks_total_power_factor', data.total_power_factor);


setTag('mknr_pks_frequency', data.frequency/100);
setTag('mknr_pks_total_kwh', data.total_kwh/100);
setTag('mknr_pks_total_kvarh', data.total_kvarh/100);

}  
  
  
  var pm_cknt_mknr = getTag('pm_cknt'); 
 
eval('data =' + pm_cknt_mknr); 
//debugString(pm_cknt_mknr); 
if(typeof data == 'object') { 
setTag('mknr_cknt_voltage_a', data.voltage_a); 
setTag('mknr_cknt_voltage_b', data.voltage_b); 
setTag('mknr_cknt_voltage_c', data.voltage_c); 
setTag('mknr_cknt_current_a', data.current_a); 
setTag('mknr_cknt_current_b', data.current_b); 
setTag('mknr_cknt_current_c', data.current_c); 
 
setTag('mknr_cknt_active_power_a', data.active_power_a); 
setTag('mknr_cknt_active_power_b', data.active_power_b); 
setTag('mknr_cknt_active_power_c', data.active_power_c); 
setTag('mknr_cknt_total_active_power', data.total_active_power); 
 
 
setTag('mknr_cknt_reactive_power_a', data.reactive_power_a); 
setTag('mknr_cknt_reactive_power_b', data.reactive_power_b); 
setTag('mknr_cknt_reactive_power_c', data.reactive_power_c); 
setTag('mknr_cknt_total_reactive_power', data.total_reactive_power); 
 
setTag('mknr_cknt_power_factor_a', data.power_factor_a); 
setTag('mknr_cknt_power_factor_b', data.power_factor_b); 
setTag('mknr_cknt_power_factor_c', data.power_factor_c); 
setTag('mknr_cknt_total_power_factor', data.total_power_factor); 
 
 
setTag('mknr_cknt_frequency', data.frequency/100); 
setTag('mknr_cknt_total_kwh', data.total_kwh/100); 
setTag('mknr_cknt_total_kvarh', data.total_kvarh/100); 
 
}   
   

  
  
  
var pm_bkcw_mknr = getTag('pm_bkcw');

eval('data =' + pm_bkcw_mknr);
//debugString(pm_bkcw_mknr);
if(typeof data == 'object') {
setTag('mknr_bkcw_voltage_a', data.voltage_a);
setTag('mknr_bkcw_voltage_b', data.voltage_b);
setTag('mknr_bkcw_voltage_c', data.voltage_c);
setTag('mknr_bkcw_current_a', data.current_a);
setTag('mknr_bkcw_current_b', data.current_b);
setTag('mknr_bkcw_current_c', data.current_c);

setTag('mknr_bkcw_active_power_a', data.active_power_a);
setTag('mknr_bkcw_active_power_b', data.active_power_b);
setTag('mknr_bkcw_active_power_c', data.active_power_c);
setTag('mknr_bkcw_total_active_power', data.total_active_power);


setTag('mknr_bkcw_reactive_power_a', data.reactive_power_a);
setTag('mknr_bkcw_reactive_power_b', data.reactive_power_b);
setTag('mknr_bkcw_reactive_power_c', data.reactive_power_c);
setTag('mknr_bkcw_total_reactive_power', data.total_reactive_power);

setTag('mknr_bkcw_power_factor_a', data.power_factor_a);
setTag('mknr_bkcw_power_factor_b', data.power_factor_b);
setTag('mknr_bkcw_power_factor_c', data.power_factor_c);
setTag('mknr_bkcw_total_power_factor', data.total_power_factor);


setTag('mknr_bkcw_frequency', data.frequency/100);
setTag('mknr_bkcw_total_kwh', data.total_kwh/100);
setTag('mknr_bkcw_total_kvarh', data.total_kvarh/100);

}  
  
  
  var pm_knde_mknr = getTag('pm_knde');

eval('data =' + pm_knde_mknr);
//debugString(pm_kantor_wilayah);
if(typeof data == 'object') {
setTag('mknr_knde_voltage_a', data.voltage_a);
setTag('mknr_knde_voltage_b', data.voltage_b);
setTag('mknr_knde_voltage_c', data.voltage_c);
setTag('mknr_knde_current_a', data.current_a);
setTag('mknr_knde_current_b', data.current_b);
setTag('mknr_knde_current_c', data.current_c);

setTag('mknr_knde_active_power_a', data.active_power_a);
setTag('mknr_knde_active_power_b', data.active_power_b);
setTag('mknr_knde_active_power_c', data.active_power_c);
setTag('mknr_knde_total_active_power', data.total_active_power);


setTag('mknr_knde_reactive_power_a', data.reactive_power_a);
setTag('mknr_knde_reactive_power_b', data.reactive_power_b);
setTag('mknr_knde_reactive_power_c', data.reactive_power_c);
setTag('mknr_knde_total_reactive_power', data.total_reactive_power);

setTag('mknr_knde_power_factor_a', data.power_factor_a);
setTag('mknr_knde_power_factor_b', data.power_factor_b);
setTag('mknr_knde_power_factor_c', data.power_factor_c);
setTag('mknr_knde_total_power_factor', data.total_power_factor);


setTag('mknr_knde_frequency', data.frequency/100);
setTag('mknr_knde_total_kwh', (data.ttotal_kwh/100)*-1);
setTag('mknr_knde_total_kvarh', (data.total_kvarh/100)*-1);

}  
  


var pm_knla_mknr = getTag('pm_knla');

eval('data =' + pm_knla_mknr);
//debugString(pm_knla_mknr);
if(typeof data == 'object') {
setTag('mknr_knla_voltage_a', data.voltage_a);
setTag('mknr_knla_voltage_b', data.voltage_b);
setTag('mknr_knla_voltage_c', data.voltage_c);
setTag('mknr_knla_current_a', data.current_a);
setTag('mknr_knla_current_b', data.current_b);
setTag('mknr_knla_current_c', data.current_c);

setTag('mknr_knla_active_power_a', data.active_power_a);
setTag('mknr_knla_active_power_b', data.active_power_b);
setTag('mknr_knla_active_power_c', data.active_power_c);
setTag('mknr_knla_total_active_power', data.total_active_power);


setTag('mknr_knla_reactive_power_a', data.reactive_power_a);
setTag('mknr_knla_reactive_power_b', data.reactive_power_b);
setTag('mknr_knla_reactive_power_c', data.reactive_power_c);
setTag('mknr_knla_total_reactive_power', data.total_reactive_power);

setTag('mknr_knla_power_factor_a', data.power_factor_a);
setTag('mknr_knla_power_factor_b', data.power_factor_b);
setTag('mknr_knla_power_factor_c', data.power_factor_c);
setTag('mknr_knla_total_power_factor', data.total_power_factor);


setTag('mknr_knla_frequency', data.frequency/100);
setTag('mknr_knla_total_kwh', data.total_kwh/100);
setTag('mknr_knla_total_kvarh', data.total_kvarh/100);

}  
  
var pm_perum_mknr = getTag('pm_perum');

eval('data =' + pm_perum_mknr);
//debugString(pm_perum_mknr);
if(typeof data == 'object') {
setTag('mknr_perum_voltage_a', data.voltage_a);
setTag('mknr_perum_voltage_b', data.voltage_b);
setTag('mknr_perum_voltage_c', data.voltage_c);
setTag('mknr_perum_current_a', data.current_a);
setTag('mknr_perum_current_b', data.current_b);
setTag('mknr_perum_current_c', data.current_c);

setTag('mknr_perum_active_power_a', data.active_power_a);
setTag('mknr_perum_active_power_b', data.active_power_b);
setTag('mknr_perum_active_power_c', data.active_power_c);
setTag('mknr_perum_total_active_power', data.total_active_power);


setTag('mknr_perum_reactive_power_a', data.reactive_power_a);
setTag('mknr_perum_reactive_power_b', data.reactive_power_b);
setTag('mknr_perum_reactive_power_c', data.reactive_power_c);
setTag('mknr_perum_total_reactive_power', data.total_reactive_power);

setTag('mknr_perum_power_factor_a', data.power_factor_a);
setTag('mknr_perum_power_factor_b', data.power_factor_b);
setTag('mknr_perum_power_factor_c', data.power_factor_c);
setTag('mknr_perum_total_power_factor', data.total_power_factor);


setTag('mknr_perum_frequency', data.frequency/100);
setTag('mknr_perum_total_kwh', data.total_kwh/100);
setTag('mknr_perum_total_kvarh', data.total_kvarh/100);

}  
  

var pm_gh_mknr = getTag('pm_gh'); 
 
eval('data =' + pm_gh_mknr); 
//debugString(pm_gh_mknr); 
if(typeof data == 'object') { 
setTag('mknr_gh_voltage_a', data.voltage_a); 
setTag('mknr_gh_voltage_b', data.voltage_b); 
setTag('mknr_gh_voltage_c', data.voltage_c); 
setTag('mknr_gh_current_a', data.current_a); 
setTag('mknr_gh_current_b', data.current_b); 
setTag('mknr_gh_current_c', data.current_c); 
 
setTag('mknr_gh_active_power_a', data.active_power_a); 
setTag('mknr_gh_active_power_b', data.active_power_b); 
setTag('mknr_gh_active_power_c', data.active_power_c); 
setTag('mknr_gh_total_active_power', data.total_active_power); 
 
 
setTag('mknr_gh_reactive_power_a', data.reactive_power_a); 
setTag('mknr_gh_reactive_power_b', data.reactive_power_b); 
setTag('mknr_gh_reactive_power_c', data.reactive_power_c); 
setTag('mknr_gh_total_reactive_power', data.total_reactive_power); 
 
setTag('mknr_gh_power_factor_a', data.power_factor_a); 
setTag('mknr_gh_power_factor_b', data.power_factor_b); 
setTag('mknr_gh_power_factor_c', data.power_factor_c); 
setTag('mknr_gh_total_power_factor', data.total_power_factor); 
 
 
setTag('mknr_gh_frequency', data.frequency/100); 
setTag('mknr_gh_total_kwh', data.total_kwh/100); 
setTag('mknr_gh_total_kvarh', data.total_kvarh/100); 
 
}   
   


var pm_engine_mknr = getTag('pm_engine'); 
 
eval('data =' + pm_engine_mknr); 
//debugString(pm_gh_mknr); 
if(typeof data == 'object') { 
 
setTag('mknr_engine_total_kwh', data.total_kwh/1000000); 
setTag('mknr_engine_total_kvarh', data.total_kvarh/1000000);
 
}   
   