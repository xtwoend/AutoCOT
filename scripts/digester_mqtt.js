var digester = getTag('mqtt_data_digester');
//debugString(digester); 

eval('obj_digester =' + digester);

if(typeof obj_digester == 'object') {
	setTag( 'temp_dig1 ', obj_digester.temp_dig1);  
	setTag( 'temp_dig2 ', obj_digester.temp_dig2);  
	setTag( 'temp_dig3 ', obj_digester.temp_dig3);  
	setTag( 'temp_dig4 ', obj_digester.temp_dig4);  
	setTag( 'temp_dig5 ', obj_digester.temp_dig5);  
	setTag( 'temp_dig6 ', obj_digester.temp_dig6);  
		
	setTag( 'level_dig1 ', obj_digester.level_dig1);  
	setTag( 'level_dig2 ', obj_digester.level_dig2);  
	setTag( 'level_dig3 ', obj_digester.level_dig3); 
	setTag( 'level_dig4 ', obj_digester.level_dig4);  
	setTag( 'level_dig5 ', obj_digester.level_dig5);  
	setTag( 'level_dig6 ', obj_digester.level_dig6); 
	
	setTag( 'amp_dig1 ', obj_digester.amp_dig1);  
	setTag( 'amp_dig2 ', obj_digester.amp_dig2);  
	setTag( 'amp_dig3 ', obj_digester.amp_dig3);  
	setTag( 'amp_dig4 ', obj_digester.amp_dig4);  
	setTag( 'amp_dig5 ', obj_digester.amp_dig5);  
	setTag( 'amp_dig6 ', obj_digester.amp_dig6);  
	
	setTag( 'amp_press1 ', obj_digester.amp_press1);  
	setTag( 'amp_press2 ', obj_digester.amp_press2);  
	setTag( 'amp_press3 ', obj_digester.amp_press3); 
	setTag( 'amp_press4 ', obj_digester.amp_press4);  
	setTag( 'amp_press5 ', obj_digester.amp_press5);  
	setTag( 'amp_press6', obj_digester.amp_press6); 
	
	setTag( 'pressure_dig1 ', obj_digester.pressure_dig1);   
	setTag( 'pressure_dig2 ', obj_digester.pressure_dig2);   
	setTag( 'pressure_dig3 ', obj_digester.pressure_dig3);   
	setTag( 'pressure_dig4 ', obj_digester.pressure_dig4);   
	setTag( 'pressure_dig5 ', obj_digester.pressure_dig5);   
	setTag( 'pressure_dig6', obj_digester.pressure_dig6); 

	setTag( 'level_cot', obj_digester.level_cot);  
	setTag( 'temp_cot', obj_digester.temp_cot);  
	
	setTag( 'temp_sandtrap1 ', obj_digester.temp_sandtrap1);  
	setTag( 'temp_sandtrap2 ', obj_digester.temp_sandtrap2);  

	setTag( 'hm_dig1 ', obj_digester.hm_dig1);    
	setTag( 'hm_dig2 ', obj_digester.hm_dig2);    
	setTag( 'hm_dig3 ', obj_digester.hm_dig3);    
	setTag( 'hm_dig4 ', obj_digester.hm_dig4);    
	setTag( 'hm_dig5 ', obj_digester.hm_dig5);    
	setTag( 'hm_dig6 ', obj_digester.hm_dig6); 

	setTag( 'hm_press1 ', obj_digester.hm_press1);     
	setTag( 'hm_press2 ', obj_digester.hm_press2);     
	setTag( 'hm_press3 ', obj_digester.hm_press3);     
	setTag( 'hm_press4 ', obj_digester.hm_press4);     
	setTag( 'hm_press5 ', obj_digester.hm_press5);     
	setTag( 'hm_press6 ', obj_digester.hm_press6); 

	setTag( 'hmcot_motor1 ', obj_digester.hmcot_motor1);      
	setTag( 'hmcot_motor2 ', obj_digester.hmcot_motor2);      
	setTag( 'hmcot_motor3', obj_digester.hmcot_motor3); 
}


