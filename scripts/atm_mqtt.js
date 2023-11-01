var atg = getTag('mqtt_data_atg');

eval('data =' + atg);
//debugString(nutkernel);
if(typeof data == 'object') {
setTag('trym_level_tank1', data.level_tank1);
setTag('trym_temp1_tank1', data.temp1_tank1);
setTag('trym_temp2_tank1', data.temp2_tank1);
setTag('trym_temp3_tank1', data.temp3_tank1);
setTag('trym_temp4_tank1', data.temp4_tank1);
setTag('trym_temp5_tank1', data.temp5_tank1);
setTag('trym_temp6_tank1', data.temp6_tank1);
setTag('trym_temp7_tank1', data.temp7_tank1);
setTag('trym_temp8_tank1', data.temp8_tank1)
setTag('trym_meter_tank1', data.meter_tank1);
setTag('trym_temp_buttom_tank1', data.temp_buttom_tank1);


   if ( data.meter_tank1 < 1000 ){


 setTag('trym_average_temp_tank1', data.temp1_tank1); 


 }

   if (data.meter_tank1 > 1000 && data.meter_tank1 < 2000  ){

 setTag('trym_average_temp_tank1', (data.temp1_tank1 + data.temp2_tank1 )/ 2); 

 }

   if (data.meter_tank1 > 2000 && data.meter_tank1 < 3000 ){


 setTag('trym_average_temp_tank1', (data.temp1_tank1 + data.temp2_tank1 + data.temp3_tank1   )/3); 


 }
 
    if (data.meter_tank1 > 3000 && data.meter_tank1 < 4000  ){



 setTag('trym_average_temp_tank1', (data.temp1_tank1 + data.temp2_tank1 + data.temp3_tank1 + data.temp4_tank1  )/4);
 setTag('trym_status_temp1_tank1', 1); 



 }
 
     if (data.meter_tank1 > 4000 && data.meter_tank1 < 5000){




 setTag('trym_average_temp_tank1', (data.temp1_tank1 + data.temp2_tank1 + data.temp3_tank1 + data.temp4_tank1 + data.temp5_tank1  )/5); 




 }
 
      if (data.meter_tank1 > 5000 && data.meter_tank1 < 6000){





 setTag('trym_average_temp_tank1', (data.temp1_tank1 + data.temp2_tank1 + data.temp3_tank1 + data.temp4_tank1 + data.temp5_tank1 + data.temp6_tank1  )/ 6); 





 }
 
       if (data.meter_tank1 > 6000 && data.meter_tank1 < 7000){






 setTag('trym_average_temp_tank1', (data.temp1_tank1 + data.temp2_tank1 + data.temp3_tank1 + data.temp4_tank1 + data.temp5_tank1 + data.temp6_tank1 + data.temp7_tank1  )/ 7); 






 }
 
  
       if (data.meter_tank1 > 7000 && data.meter_tank1 < 9000){







 setTag('trym_average_temp_tank1', (data.temp1_tank1 + data.temp2_tank1 + data.temp3_tank1 + data.temp4_tank1 + data.temp5_tank1 + data.temp6_tank1 + data.temp7_tank1  + data.temp8_tank1 )/ 8); 







 }
 
setTag('trym_level_tank2', data.level_tank2);
setTag('trym_temp1_tank2', data.temp1_tank2);
setTag('trym_temp2_tank2', data.temp2_tank2);
setTag('trym_temp3_tank2', data.temp3_tank2);
setTag('trym_temp4_tank2', data.temp4_tank2);
setTag('trym_temp5_tank2', data.temp5_tank2);
setTag('trym_temp6_tank2', data.temp6_tank2);
setTag('trym_temp7_tank2', data.temp7_tank2);
setTag('trym_temp8_tank2', data.temp8_tank2);
setTag('trym_meter_tank2', data.meter_tank2)
setTag('trym_temp_buttom_tank2', data.temp_buttom_tank2);


   if ( data.meter_tank2 < 1000 )
{ setTag('trym_average_temp_tank2', data.temp1_tank2);
  setTag('trym_status_temp1_tank1', 1);
  }

   if (data.meter_tank2 > 1000 && data.meter_tank2 < 2000  )
{ setTag('trym_average_temp_tank2', (data.temp1_tank2 + data.temp2_tank2 )/ 2);  }

   if (data.meter_tank2 > 2000 && data.meter_tank2 < 3000 )
{ setTag('trym_average_temp_tank2', (data.temp1_tank2 + data.temp2_tank2 + data.temp3_tank2   )/3); 



 }    if (data.meter_tank2 > 3000 && data.meter_tank2 < 4000  )
{ setTag('trym_average_temp_tank2', (data.temp1_tank2 + data.temp2_tank2 + data.temp3_tank2 + data.temp4_tank2  )/4); 
 }
 
     if (data.meter_tank2 > 4000 && data.meter_tank2 < 5000)
{ setTag('trym_average_temp_tank2', (data.temp1_tank2 + data.temp2_tank2 + data.temp3_tank2 + data.temp4_tank2 + data.temp5_tank2  )/5); 
 }
 
      if (data.meter_tank2 > 5000 && data.meter_tank2 < 6000)
{ setTag('trym_average_temp_tank2', (data.temp1_tank2 + data.temp2_tank2 + data.temp3_tank2 + data.temp4_tank2 + data.temp5_tank2 + data.temp6_tank2  )/ 6); 
 }
 
       if (data.meter_tank2 > 6000 && data.meter_tank2 < 7000)
{ setTag('trym_average_temp_tank2', (data.temp1_tank2 + data.temp2_tank2 + data.temp3_tank2 + data.temp4_tank2 + data.temp5_tank2 + data.temp6_tank2 + data.temp7_tank2  )/ 7); 
 }
  
       if (data.meter_tank2 > 7000 && data.meter_tank2 < 8000){
 setTag('trym_average_temp_tank2', (data.temp1_tank2 + data.temp2_tank2 + data.temp3_tank2 + data.temp4_tank2 + data.temp5_tank2 + data.temp6_tank2 + data.temp7_tank2  + data.temp8_tank2 )/ 8); 

 }


setTag('trym_level_tank3', data.level_tank3);
setTag('trym_temp1_tank3', data.temp1_tank3);
setTag('trym_temp2_tank3', data.temp2_tank3);
setTag('trym_temp3_tank3', data.temp3_tank3);
setTag('trym_temp4_tank3', data.temp4_tank3);
setTag('trym_temp5_tank3', data.temp5_tank3);
setTag('trym_temp6_tank3', data.temp6_tank3);
setTag('trym_temp7_tank3', data.temp7_tank3);
setTag('trym_temp8_tank3', data.temp8_tank3);
setTag('trym_meter_tank3', data.meter_tank3);
setTag('trym_temp_buttom_tank3', data.temp_buttom_tank3);

setTag('trym_level_tank4', data.level_tank4);
setTag('trym_temp1_tank4', data.temp1_tank4);
setTag('trym_temp2_tank4', data.temp2_tank4);
setTag('trym_temp3_tank4', data.temp3_tank4);
setTag('trym_temp4_tank4', data.temp4_tank4);
setTag('trym_temp5_tank4', data.temp5_tank4);
setTag('trym_temp6_tank4', data.temp6_tank4);
setTag('trym_temp7_tank4', data.temp7_tank4);
setTag('trym_temp8_tank4', data.temp8_tank4);
setTag('trym_meter_tank4', data.meter_tank4);
setTag('trym_temp_buttom_tank4', data.temp_buttom_tank4);
}  


var atg_calculation = getTag('mqtt_atg_calculation');

eval('data =' + atg_calculation);
//debugString(nutkernel);
if(typeof data == 'object') {
setTag('trym_volume_ost_1_kg', (data.volume_tank1)*(data.factor_corection_tank1)*(data.density_tank1));
setTag('trym_fk_tank1', data.factor_corection_tank1);
setTag('trym_density_tank1', data.density_tank1);
setTag('trym_volume_ost_1', data.volume_tank1);

setTag('trym_volume_ost_2_kg', (data.volume_tank2)*(data.factor_corection_tank2)*(data.density_tank2));
setTag('trym_fk_tank2', data.factor_corection_tank2);
setTag('trym_density_tank2', data.density_tank2);
setTag('trym_volume_ost_2', data.volume_tank2);

setTag('trym_volume_ost_3_kg', (data.volume_tank3)*(data.factor_corection_tank3)*(data.density_tank3));
setTag('trym_fk_tank3', data.factor_corection_tank3);
setTag('trym_density_tank3', data.density_tank3);
setTag('trym_volume_ost_3', data.volume_tank3);

setTag('trym_volume_ost_4_kg', (data.volume_tank4)*(data.factor_corection_tank4)*(data.density_tank4));
setTag('trym_fk_tank4', data.factor_corection_tank4);
setTag('trym_density_tank4', data.density_tank4);
setTag('trym_volume_ost_4', data.volume_tank4);
}  
  









