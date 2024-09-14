var pac1 = getTag('dcbga1_pac1');
//debugString(pac1);
eval('data =' + pac1);
if(typeof data == 'object') {
if (data.SupplyTemperature > 23.0)
{SetTag('Supply_Temperature_PAC1_Stats',1)
};
if (data.SupplyTemperature < 23.0)
{SetTag('Supply_Temperature_PAC1_Stats',0)
};
if (data.RackInletTemperature1 > 26.0)
{SetTag('Rack_Inlet_Temperature1_PAC1_Stats',1)
};
if (data.RackInletTemperature1 < 26.0)
{SetTag('Rack_Inlet_Temperature1_PAC1_Stats',0)
};
if (data.RackInletTemperature2 > 26.0)
{SetTag('Rack_Inlet_Temperature2_PAC1_Stats',1)
};
if (data.RackInletTemperature2 < 26.0)
{SetTag('Rack_Inlet_Temperature2_PAC1_Stats',0)
};
if (data.Humidity > 70.0)
{SetTag('Humidity_PAC1_Stats',1)
};
if (data.Humidity < 70.0)
{SetTag('Humidity_PAC1_Stats',0)
};
if (data.Humidity > 75.0)
{SetTag('Humidity_PAC1_Stats',2)
};
setTag('dcbga1_pac1_mode', data.Mode);
setTag('dcbga1_pac1_supplytemperature', data.SupplyTemperature);
setTag('dcbga1_pac1_cooldemand', data.CoolDemand);
setTag('dcbga1_pac1_cooloutput', data.CoolOutput);
setTag('dcbga1_pac1_rackinlettemperature1', data.RackInletTemperature1);
setTag('dcbga1_pac1_rackinlettemperature2', data.RackInletTemperature2);
setTag('dcbga1_pac1_humidity', data.Humidity);
setTag('dcbga1_pac1_compressorpower', data.CompressorPower);
};

var pac2 = getTag('dcbga1_pac2');
//debugString(pac2);
eval('data =' + pac2);
if(typeof data == 'object') {
if (data.SupplyTemperature > 23.0)
{SetTag('Supply_Temperature_PAC2_Stats',1)
};
if (data.SupplyTemperature < 23.0)
{SetTag('Supply_Temperature_PAC2_Stats',0)
};
if (data.RackInletTemperature1 > 26.0)
{SetTag('Rack_Inlet_Temperature1_PAC2_Stats',1)
};
if (data.RackInletTemperature1 < 26.0)
{SetTag('Rack_Inlet_Temperature1_PAC2_Stats',0)
};
if (data.RackInletTemperature2 > 26.0)
{SetTag('Rack_Inlet_Temperature2_PAC2_Stats',1)
};
if (data.RackInletTemperature2 < 26.0)
{SetTag('Rack_Inlet_Temperature2_PAC2_Stats',0)
};
if (data.Humidity > 75.0)
{SetTag('Humidity_PAC2_Stats',1)
};
if (data.Humidity < 75.0)
{SetTag('Humidity_PAC2_Stats',0)
};
if (data.Humidity > 70.0)
{SetTag('Humidity_PAC2_Stats',2)
};
setTag('dcbga1_pac2_mode', data.Mode);
setTag('dcbga1_pac2_supplytemperature', data.SupplyTemperature);
setTag('dcbga1_pac2_cooldemand', data.CoolDemand);
setTag('dcbga1_pac2_cooloutput', data.CoolOutput);
setTag('dcbga1_pac2_rackinlettemperature1', data.RackInletTemperature1);
setTag('dcbga1_pac2_rackinlettemperature2', data.RackInletTemperature2);
setTag('dcbga1_pac2_humidity', data.Humidity);
setTag('dcbga1_pac2_compressorpower', data.CompressorPower);
};

var general = getTag('dcbga1_general');
//debugString(general);
eval('data =' + general);
if(typeof data == 'object') {
setTag('dcbga1_general_powerfeed', data.PowerFeed);
setTag('dcbga1_general_pac1feed', data.PAC1Feed);
setTag('dcbga1_general_pac2feed', data.PAC2Feed);
setTag('dcbga1_general_doorswitch', data.DoorSwitch);
setTag('dcbga1_general_waterleakage', data.WaterLeakage);
setTag('dcbga1_general_resetalarm', data.ResetAlarm);
setTag('dcbga1_general_resetalarmcmd', data.ResetAlarmCommand);
setTag('dcbga1_general_fm200fault', data.FM200Fault);
};

var ups1 = getTag('dcbga1_ups1');
//debugString(ups1);
eval('data =' + ups1);
if(typeof data == 'object') {
setTag('dcbga1_ups1_upsstatus', data.UPSStatus);
setTag('dcbga1_ups1_batterytemp', data.BatteryTemp);
setTag('dcbga1_ups1_batterycapacity', data.BatteryCapacity);
setTag('dcbga1_ups1_batterytimeremaining', data.BatteryTimeRemaining);
setTag('dcbga1_ups1_outputloadr', data.OutputLoadR);
setTag('dcbga1_ups1_outputloads', data.OutputLoadS);
setTag('dcbga1_ups1_outputloadt', data.OutputLoadT);
};

var ups2 = getTag('dcbga1_ups2');
//debugString(ups2);
eval('data =' + ups2);
if(typeof data == 'object') {
setTag('dcbga1_ups2_upsstatus', data.UPSStatus);
setTag('dcbga1_ups2_batterytemp', data.BatteryTemp);
setTag('dcbga1_ups2_batterycapacity', data.BatteryCapacity);
setTag('dcbga1_ups2_batterytimeremaining', data.BatteryTimeRemaining);
setTag('dcbga1_ups2_outputloadr', data.OutputLoadR);
setTag('dcbga1_ups2_outputloads', data.OutputLoadS);
setTag('dcbga1_ups2_outputloadt', data.OutputLoadT);
};

var ups3 = getTag('dcbga1_ups3');
//debugString(ups3);
eval('data =' + ups3);
if(typeof data == 'object') {
setTag('dcbga1_ups3_upsstatus', data.UPSStatus);
setTag('dcbga1_ups3_batterytemp', data.BatteryTemp);
setTag('dcbga1_ups3_batterycapacity', data.BatteryCapacity);
setTag('dcbga1_ups3_batterytimeremaining', data.BatteryTimeRemaining);
setTag('dcbga1_ups3_outputload', data.OutputLoad);
};

var aut1 = getTag('dcbga1_autonics1');
//debugString(aut1);
eval('data =' + aut1);
if(typeof data == 'object') {
if(data.PresentValue > 23.0)
{SetTag('Autonic1_status',1)
};
if(data.PresentValue < 23.0)
{SetTag('Autonic1_status',0)
};
setTag('dcbga1_autonics1_presentvalue', data.PresentValue);
};


var aut2 = getTag('dcbga1_autonics2');
//debugString(aut2);
eval('data =' + aut2);
if(typeof data == 'object') {
if(data.PresentValue > 75.0)
{SetTag ('Autonic2_Status',1)
};
if(data.PresentValue < 75.0)
{SetTag('Autonic2_Status',0)
};
setTag('dcbga1_autonics2_presentvalue', data.PresentValue);
};


var pmvar1 = getTag('dcbga1_pm1');


//debugString(pmvar1);

eval('data =' + pmvar1);

if(typeof data == 'object') {

setTag('dcbga1_pm1_frequency', data.Frequency);

setTag('dcbga1_pm1_voltageuln', data.VoltageUlN);

setTag('dcbga1_pm1_voltageull', data.VoltageUlL);

setTag('dcbga1_pm1_current', data.Current);

setTag('dcbga1_pm1_apparentpower', data.ApparentPower);

setTag('dcbga1_pm1_activepower', data.ActivePower);

setTag('dcbga1_pm1_totalactiveenergy', data.TotalActiveEnergy);

};



var pmvar2 = getTag('dcbga1_pm2');

//debugString(pmvar2);

eval('data =' + pmvar2);

if(typeof data == 'object') {

setTag('dcbga1_pm2_frequency', data.Frequency);

setTag('dcbga1_pm2_voltageuln', data.VoltageUlN);

setTag('dcbga1_pm2_voltageull', data.VoltageUlL);

setTag('dcbga1_pm2_current', data.Current);

setTag('dcbga1_pm2_apparentpower', data.ApparentPower);

setTag('dcbga1_pm2_activepower', data.ActivePower);

setTag('dcbga1_pm2_totalactiveenergy', data.TotalActiveEnergy);

};

 
var RackServer = getTag('dcbga1_rackserver');
//debugString(RackServer);
eval('data =' + RackServer);
if(typeof data == 'object') {
setTag('Rack_Server_Temp', data.Temperature) ;
}; 

//setTag('dcbga1_tagname', "");
//setTag('dcbga1_value', 0);
//setTag('dcbga1_test', "ResetAlarmCommand");
var tagTest = getTag('dcbga1_test');

debugString('test : ' + tagTest);
