var nutkernel = getTag('mqtt_data_nutkernel');

eval('data =' + nutkernel);
//debugString(nutkernel);
if(typeof data == 'object') {
setTag('level_nutsilo1', data.level_nutsilo1
);
setTag('temp1_nutsilo1', data.temp1_nutsilo1);
setTag('temp2_nutsilo1', data.temp2_nutsilo1);
setTag('temp3_nutsilo1', data.temp3_nutsilo1);

setTag('level_nutsilo2', data.level_nutsilo2);
setTag('temp1_nutsilo2', data.temp1_nutsilo2);
setTag('temp2_nutsilo2', data.temp2_nutsilo2);
setTag('temp3_nutsilo2', data.temp2_nutsilo2);

setTag('level_kernelsilo1', data.level_kernelsilo1);
setTag('temp1_kernelsilo1', data.temp1_kernelsilo1);
setTag('temp2_kernelsilo1', data.temp2_kernelsilo1);
setTag('temp3_kernelsilo1', data.temp3_kernelsilo1);

setTag('level_kernelsilo2', data.level_kernelsilo2);
setTag('temp1_kernelsilo2', data.temp1_kernelsilo2);
setTag('temp2_kernelsilo2', data.temp2_kernelsilo2);
setTag('temp3_kernelsilo2', data.temp3_kernelsilo2);

setTag('level_kernelsilo3', data.level_kernelsilo3);
setTag('temp1_kernelsilo3', data.temp1_kernelsilo3);
setTag('temp2_kernelsilo3', data.temp2_kernelsilo3);
setTag('temp3_kernelsilo3', data.temp3_kernelsilo3);

setTag('level_kernelsilo4', data.level_kernelsilo4);
setTag('temp1_kernelsilo4', data.temp1_kernelsilo4);
setTag('temp2_kernelsilo4', data.temp2_kernelsilo4);
setTag('temp3_kernelsilo4', data.temp3_kernelsilo4);

setTag( 'hm_nutsilo1',data.hm_nutsilo1);
setTag( 'hm_nutsilo2',data.hm_nutsilo2);
setTag( 'hm_kernelsilo1',data.hm_kernelsilo1);
setTag( 'hm_kernelsilo2',data.hm_kernelsilo2);
setTag( 'hm_kernelsilo3',data.hm_kernelsilo3);
setTag( 'hm_kernelsilo4',data.hm_kernelsilo4);
}  
  










