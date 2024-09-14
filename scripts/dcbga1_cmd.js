
var tagText = getTag('dcbga1_tagname');
var tagValue = getTag('dcbga1_value');
debugString('seq ' + tagText);

if(tagText != null && tagText != '' && tagText != ' ' && tagText != undefined && tagValue != undefined){
var sqlText = "UPDATE bgadcappdb.CommandData SET TagName = '" + tagText + "', Value = " + tagValue + " WHERE Id = 1;";


debugString(sqlText);
setSql(sqlText, {dbgroup:"dcbga1_db"});
//sleep(10000);
//var sqlText1 = 'UPDATE bgadcappdb.CommandData SET TagName = null, Value = null WHERE Id = 1;';




//debugString(sqlText1);

//setSql(sqlText1, {dbgroup:"dcbga1_db"});
setTag('dcbga1_tagname', '');
setTag('dcbga1_value', 0);
//debugString(sqlText1);

};