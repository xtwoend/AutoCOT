

var scmm_score = getTag('mqtt_data_scooring'); 
 
eval('data =' + scmm_score); 

if(typeof data == 'object') { 

 if (data.group == 'DIGESTER PRESS 1' ){
 setTag('scmm_avg_score_dp1', data.score_total/data.score_count); 
 setTag('scmm_score_count_dp1', data.score_count); 
 setTag('scmm_score_total_dp1', data.score_total);
 setTag('scmm_current_score_dp1', data.score);
 }
 

  if (data.group == 'DIGESTER PRESS 2' ){

 setTag('scmm_avg_score_dp2', data.score_total/data.score_count); 
 setTag('scmm_score_count_dp2', data.score_count); 

 setTag('scmm_score_total_dp2', data.score_total);
   setTag('scmm_current_score_dp2', data.score);
 }
 
  if (data.group == 'DIGESTER PRESS 3' ){

 setTag('scmm_avg_score_dp3', data.score_total/data.score_count); 
 setTag('scmm_score_count_dp3', data.score_count); 

 setTag('scmm_score_total_dp3', data.score_total);
   setTag('scmm_current_score_dp3', data.score);

 }
 
  if (data.group == 'DIGESTER PRESS 4' ){

 setTag('scmm_avg_score_dp4', data.score_total/data.score_count); 
 setTag('scmm_score_count_dp4', data.score_count); 

 setTag('scmm_score_total_dp4', data.score_total);
   setTag('scmm_current_score_dp4', data.score);
 }
 
  if (data.group == 'DIGESTER PRESS 5' ){

 setTag('scmm_avg_score_dp5', data.score_total/data.score_count); 
 setTag('scmm_score_count_dp5', data.score_count); 

 setTag('scmm_score_total_dp5', data.score_total);
   setTag('scmm_current_score_dp5', data.score);
 }
 
  if (data.group == 'DIGESTER PRESS 6' ){

 setTag('scmm_avg_score_dp6', data.score_total/data.score_count); 
 setTag('scmm_score_count_dp6', data.score_count); 

 setTag('scmm_score_total_dp6', data.score_total);
   setTag('scmm_current_score_dp6', data.score);
 }
 
  
 
   if (data.group == 'SAND TRAP TANK NO.1' ){


 setTag('scmm_avg_score_stt1', data.score_total/data.score_count); 
  setTag('scmm_current_score_stt1', data.score);
 }
 
    if (data.group == 'SAND TRAP TANK NO.2' ){



 setTag('scmm_avg_score_stt2', data.score_total/data.score_count); 
setTag('scmm_current_score_stt2', data.score);

 }
 
 setTag('scmm_score_all_stt', 'scmm_avg_score_stt1' + 'scmm_avg_score_stt2');

     if (data.group == 'TEMP COT' ){




 setTag('scmm_avg_score_cot', data.score_total/data.score_count); 
setTag('scmm_current_score_cot', data.score);


 }

 
 
  if (data.group == 'KERNEL SILO 1' ){

 setTag('scmm_avg_score_ks1', data.score_total/data.score_count); 
 setTag('scmm_current_score_ks1', data.score);
 }

 


  if (data.group == 'KERNEL SILO 2' ){


 setTag('scmm_avg_score_ks2', data.score_total/data.score_count); 
 setTag('scmm_current_score_ks2', data.score);
 }
 
  if (data.group == 'KERNEL SILO 3' ){


 setTag('scmm_avg_score_ks3', data.score_total/data.score_count); 
 setTag('scmm_current_score_ks3', data.score);
 }
 
  if (data.group == 'KERNEL SILO 4' ){


 setTag('scmm_avg_score_ks4', data.score_total/data.score_count); 
 setTag('scmm_current_score_ks4', data.score);
 }
 
  
 if (data.group == 'NUT SILO 1' ){


 setTag('scmm_avg_score_ns1', data.score_total/data.score_count); 
 setTag('scmm_current_score_ns1', data.score);
 }


 



  if (data.group == 'NUT SILO 2' ){



 setTag('scmm_avg_score_ns2', data.score_total/data.score_count); 
setTag('scmm_current_score_ns2', data.score);

 }

 

  if (data.group == 'NUT SILO 3' ){



 setTag('scmm_avg_score_ns3', data.score_total/data.score_count); 
setTag('scmm_current_score_ns3', data.score);

 }

 

  if (data.group == 'NUT SILO 4' ){



 setTag('scmm_avg_score_ns4', data.score_total/data.score_count); 
setTag('scmm_current_score_ns4', data.score);

 }

 

if (data.group == 'CST NO.1' ){




 setTag('scmm_avg_score_cst1', data.score_total/data.score_count); 
setTag('scmm_current_score_cst1', data.score);


 }




 





  if (data.group == 'CST NO.2' ){





 setTag('scmm_avg_score_cst2', data.score_total/data.score_count); 
setTag('scmm_current_score_cst2', data.score);



 }



if (data.group == 'SLUDGE TANK NO.1' ){





 setTag('scmm_avg_score_sludgetank1', data.score_total/data.score_count); 
setTag('scmm_current_score_sludgetank1', data.score);



 }





 






  if (data.group == 'SLUDGE TANK NO.2' ){






 setTag('scmm_avg_score_sludgetank2', data.score_total/data.score_count); 
setTag('scmm_current_score_sludgetank2', data.score);




 }



  if (data.group == 'BUFFER TANK' ){







 setTag('scmm_avg_score_buffertank', data.score_total/data.score_count); 
setTag('scmm_current_score_buffertank', data.score);





 }


 
 
if (data.group == 'OIL TANK NO.1' ){





 setTag('scmm_avg_score_oiltank1', data.score_total/data.score_count); 

setTag('scmm_current_score_oiltank1', data.score);


 }





 






  if (data.group == 'OIL TANK NO.2' ){






 setTag('scmm_avg_score_oiltank2', data.score_total/data.score_count); 

setTag('scmm_current_score_oiltank2', data.score);




 }



if (data.group == 'VACUUM DRIER NO.1' ){






 setTag('scmm_avg_score_vd1', data.score_total/data.score_count); 
setTag('scmm_current_score_vd1', data.score);




 }






if (data.group == 'VACUUM DRIER NO.2' ){







 setTag('scmm_avg_score_vd2', data.score_total/data.score_count); 
setTag('scmm_current_score_vd2', data.score);





 }







if (data.group == 'SLUDGE CENTRIFUDGE NO.1' ){



 setTag('scmm_avg_score_sc1', data.score_total/data.score_count); 
setTag('scmm_current_score_sc1', data.score);

 }



 
 




  if (data.group == 'SLUDGE CENTRIFUDGE NO.2' ){




 setTag('scmm_avg_score_sc2', data.score_total/data.score_count); 
setTag('scmm_current_score_sc2', data.score);




 }


 


  if (data.group == 'SLUDGE CENTRIFUDGE NO.3' ){




 setTag('scmm_avg_score_sc3', data.score_total/data.score_count); 
setTag('scmm_current_score_sc3', data.score);




 }


 


  if (data.group == 'SLUDGE CENTRIFUDGE NO.4' ){




 setTag('scmm_avg_score_sc4', data.score_total/data.score_count); 
setTag('scmm_current_score_sc4', data.score);




 }


  if (data.group == 'SLUDGE CENTRIFUDGE NO.5' ){





 setTag('scmm_avg_score_sc5', data.score_total/data.score_count); 
setTag('scmm_current_score_sc5', data.score);





 }



 



  if (data.group == 'SLUDGE CENTRIFUDGE NO.6' ){





 setTag('scmm_avg_score_sc6', data.score_total/data.score_count); 
setTag('scmm_current_score_sc6', data.score);





 }

 
 
  if (data.group == 'RECOVERY PIT INLET' ){






 setTag('scmm_avg_score_recpit_inlet', data.score_total/data.score_count); 

setTag('scmm_current_score_recpit_inlet', data.score);





 }

 
   if (data.group == 'RECOVERY PIT CENTER' ){







 setTag('scmm_avg_score_recpit_center', data.score_total/data.score_count); 
setTag('scmm_current_score_recpit_center', data.score);






 }

 
   if (data.group == 'RECOVERY PIT OUTLET' ){

 setTag('scmm_avg_score_recpit_outlet', data.score_total/data.score_count); 
setTag('scmm_current_score_recpit_outlet', data.score);



 }

 
}  

