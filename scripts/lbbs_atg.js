var atg = getTag('lbbs_mqtt_data_atg');

eval('data =' + atg);

if(typeof data == 'object') {
setTag('lbbs_level_tank1', data.level_tank1);
setTag('lbbs_temp1_tank1', data.temp1_tank1);
setTag('lbbs_temp2_tank1', data.temp2_tank1);
setTag('lbbs_temp3_tank1', data.temp3_tank1);
setTag('lbbs_temp4_tank1', data.temp4_tank1);
setTag('lbbs_temp5_tank1', data.temp5_tank1);
setTag('lbbs_temp6_tank1', data.temp6_tank1);
setTag('lbbs_temp7_tank1', data.temp7_tank1);
setTag('lbbs_temp8_tank1', data.temp8_tank1);
setTag('lbbs_meter_tank1', data.meter_tank1);


   if ( data.meter_tank1 < 1000 ){
 setTag('lbbs_average_temp_tank1', data.temp1_tank1); 
 }

   if (data.meter_tank1 > 1000 && data.meter_tank1 < 2000  ){
 setTag('lbbs_average_temp_tank1', (data.temp1_tank1 + data.temp2_tank1 )/ 2); 
 }

   if (data.meter_tank1 > 2000 && data.meter_tank1 < 3000 ){
 setTag('lbbs_average_temp_tank1', (data.temp1_tank1 + data.temp2_tank1 + data.temp3_tank1   )/3); 
 }
 
    if (data.meter_tank1 > 3000 && data.meter_tank1 < 4000  ){
 setTag('lbbs_average_temp_tank1', (data.temp1_tank1 + data.temp2_tank1 + data.temp3_tank1 + data.temp4_tank1  )/4);
 setTag('lbbs_status_temp1_tank1', 1); 
 }
 
     if (data.meter_tank1 > 4000 && data.meter_tank1 < 5000){
 setTag('lbbs_average_temp_tank1', (data.temp1_tank1 + data.temp2_tank1 + data.temp3_tank1 + data.temp4_tank1 + data.temp5_tank1  )/5); 
 }
 
      if (data.meter_tank1 > 5000 && data.meter_tank1 < 6000){
 setTag('lbbs_average_temp_tank1', (data.temp1_tank1 + data.temp2_tank1 + data.temp3_tank1 + data.temp4_tank1 + data.temp5_tank1 + data.temp6_tank1  )/ 6); 
 }
 
       if (data.meter_tank1 > 6000 && data.meter_tank1 < 7000){
 setTag('lbbs_average_temp_tank1', (data.temp1_tank1 + data.temp2_tank1 + data.temp3_tank1 + data.temp4_tank1 + data.temp5_tank1 + data.temp6_tank1 + data.temp7_tank1  )/ 7); 
 }
 
  
       if (data.meter_tank1 > 7000 && data.meter_tank1 < 9000){
 setTag('lbbs_average_temp_tank1', (data.temp1_tank1 + data.temp2_tank1 + data.temp3_tank1 + data.temp4_tank1 + data.temp5_tank1 + data.temp6_tank1 + data.temp7_tank1  + data.temp8_tank1 )/ 8); 

 }
 
setTag('lbbs_level_tank2', data.level_tank2);
setTag('lbbs_temp1_tank2', data.temp1_tank2);
setTag('lbbs_temp2_tank2', data.temp2_tank2);
setTag('lbbs_temp3_tank2', data.temp3_tank2);
setTag('lbbs_temp4_tank2', data.temp4_tank2);
setTag('lbbs_temp5_tank2', data.temp5_tank2);
setTag('lbbs_temp6_tank2', data.temp6_tank2);
setTag('lbbs_temp7_tank2', data.temp7_tank2);
setTag('lbbs_temp8_tank2', data.temp8_tank2);
setTag('lbbs_meter_tank2', data.meter_tank2);


   if ( data.meter_tank2 < 1000 )
{ setTag('lbbs_average_temp_tank2', data.temp1_tank2);
  }

   if (data.meter_tank2 > 1000 && data.meter_tank2 < 2000  )
{ setTag('lbbs_average_temp_tank2', (data.temp1_tank2 + data.temp2_tank2 )/ 2);  }

   if (data.meter_tank2 > 2000 && data.meter_tank2 < 3000 )
{ setTag('lbbs_average_temp_tank2', (data.temp1_tank2 + data.temp2_tank2 + data.temp3_tank2   )/3); 



 }    if (data.meter_tank2 > 3000 && data.meter_tank2 < 4000  )
{ setTag('lbbs_average_temp_tank2', (data.temp1_tank2 + data.temp2_tank2 + data.temp3_tank2 + data.temp4_tank2  )/4); 
 }
 
     if (data.meter_tank2 > 4000 && data.meter_tank2 < 5000)
{ setTag('lbbs_average_temp_tank2', (data.temp1_tank2 + data.temp2_tank2 + data.temp3_tank2 + data.temp4_tank2 + data.temp5_tank2  )/5); 
 }
 
      if (data.meter_tank2 > 5000 && data.meter_tank2 < 6000)
{ setTag('lbbs_average_temp_tank2', (data.temp1_tank2 + data.temp2_tank2 + data.temp3_tank2 + data.temp4_tank2 + data.temp5_tank2 + data.temp6_tank2  )/ 6); 
 }
 
       if (data.meter_tank2 > 6000 && data.meter_tank2 < 7000)
{ setTag('lbbs_average_temp_tank2', (data.temp1_tank2 + data.temp2_tank2 + data.temp3_tank2 + data.temp4_tank2 + data.temp5_tank2 + data.temp6_tank2 + data.temp7_tank2  )/ 7); 
 }
  
       if (data.meter_tank2 > 7000 && data.meter_tank2 < 8000){
 setTag('lbbs_average_temp_tank2', (data.temp1_tank2 + data.temp2_tank2 + data.temp3_tank2 + data.temp4_tank2 + data.temp5_tank2 + data.temp6_tank2 + data.temp7_tank2  + data.temp8_tank2 )/ 8); 

 }


setTag('lbbs_level_tank3', data.level_tank3);
setTag('lbbs_temp1_tank3', data.temp1_tank3);
setTag('lbbs_temp2_tank3', data.temp2_tank3);
setTag('lbbs_temp3_tank3', data.temp3_tank3);
setTag('lbbs_temp4_tank3', data.temp4_tank3);
setTag('lbbs_temp5_tank3', data.temp5_tank3);
setTag('lbbs_temp6_tank3', data.temp6_tank3);
setTag('lbbs_temp7_tank3', data.temp7_tank3);
setTag('lbbs_temp8_tank3', data.temp8_tank3);
setTag('lbbs_meter_tank3', data.meter_tank3);


   if ( data.meter_tank3 < 1000 )
{ setTag('lbbs_average_temp_tank3', data.temp1_tank3);
  }

   if (data.meter_tank3 > 1000 && data.meter_tank3 < 2000  )
{ setTag('lbbs_average_temp_tank3', (data.temp1_tank3 + data.temp2_tank3 )/ 2);  }

   if (data.meter_tank3 > 2000 && data.meter_tank3 < 3000 )
{ setTag('lbbs_average_temp_tank3', (data.temp1_tank3 + data.temp2_tank3 + data.temp3_tank3   )/3); 



 }    if (data.meter_tank3 > 3000 && data.meter_tank3 < 4000  )
{ setTag('lbbs_average_temp_tank3', (data.temp1_tank3 + data.temp2_tank3 + data.temp3_tank3 + data.temp4_tank3  )/4); 
 }
 
     if (data.meter_tank3 > 4000 && data.meter_tank3 < 5000)
{ setTag('lbbs_average_temp_tank3', (data.temp1_tank3 + data.temp2_tank3 + data.temp3_tank3 + data.temp4_tank3 + data.temp5_tank3  )/5); 
 }
 
      if (data.meter_tank3 > 5000 && data.meter_tank3 < 6000)
{ setTag('lbbs_average_temp_tank3', (data.temp1_tank3 + data.temp2_tank3 + data.temp3_tank3 + data.temp4_tank3 + data.temp5_tank3 + data.temp6_tank3  )/ 6); 
 }
 
       if (data.meter_tank3 > 6000 && data.meter_tank3 < 7000)
{ setTag('lbbs_average_temp_tank3', (data.temp1_tank3 + data.temp2_tank3 + data.temp3_tank3 + data.temp4_tank3 + data.temp5_tank3 + data.temp6_tank3 + data.temp7_tank3  )/ 7); 
 }
  
       if (data.meter_tank3 > 7000 && data.meter_tank3 < 8000){
 setTag('lbbs_average_temp_tank3', (data.temp1_tank3 + data.temp2_tank3 + data.temp3_tank3 + data.temp4_tank3 + data.temp5_tank3 + data.temp6_tank3 + data.temp7_tank3  + data.temp8_tank3 )/ 8); 

 }


}  


var atg_calculation = getTag('lbbs_mqtt_atg_calculation');

eval('data =' + atg_calculation);

if(typeof data == 'object') {
setTag('lbbs_volume_ost_1_kg', (data.volume_tank1)*(data.factor_corection_tank1)*(data.density_tank1));
setTag('lbbs_fk_tank1', data.factor_corection_tank1);
setTag('lbbs_density_tank1', data.density_tank1);
setTag('lbbs_volume_ost_1', data.volume_tank1);

setTag('lbbs_volume_ost_2_kg', (data.volume_tank2)*(data.factor_corection_tank2)*(data.density_tank2));
setTag('lbbs_fk_tank2', data.factor_corection_tank2);
setTag('lbbs_density_tank2', data.density_tank2);
setTag('lbbs_volume_ost_2', data.volume_tank2);

setTag('lbbs_volume_ost_3_kg', (data.volume_tank3)*(data.factor_corection_tank3)*(data.density_tank3));
setTag('lbbs_fk_tank3', data.factor_corection_tank3);
setTag('lbbs_density_tank3', data.density_tank3);
setTag('lbbs_volume_ost_3', data.volume_tank3);

}  
  









