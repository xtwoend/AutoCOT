for(var j=1; j <=6; j++) {
    var agitator = 'agitator_d' + j;
    var ctr_01 = getTag(agitator);
    var amp = 'amp_dig' + j;
    if(getTag(amp) > 0) { 
        if(ctr_01 < 2) {
            ctr_01++;
        }else{
            ctr_01 = 1;
        }
        for(var i=1; i <= 2; i++) {
            var val = (ctr_01 == i)? 1: 0;
            var n = 'agitator_d'+j+'_'+i;
            setTag(n, val);
        }
    }
    setTag(agitator, ctr_01);
}
