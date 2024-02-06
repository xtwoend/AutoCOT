
var jsonString = getTag("mqtt_data_fossnir");
eval('data =' + jsonString);

if(typeof data == 'object')
{
	var Condensate = data['Condensate']; // next ke data selanjutnya
	if(Condensate && typeof Condensate == 'object'){
	
		var NOS = Condensate['NOS'];
		if(NOS && typeof NOS == 'object'){
			//var condensate_nos_result = NOS.result
			//var condensate_nos_date = NOS.date
		setTag('condensate_nos_date', NOS.date );
		setTag('condensate_nos_result', NOS.result );
			
			//debugString('result:' + condensate_nos_result);
			//debugString('date:' + condensate_nos_date);
		}
		
		var DM = Condensate['Oil/DM'];	
		if(DM && typeof DM == 'object')
		{			
		//var condensate_dm_result = DM.result			
		//var condensate_dm_date = DM.date	
		setTag('condensate_oildm_date', DM.date );

		setTag('condensate_oildm_result', DM.result );
			
		}
		
		var WM = Condensate['Oil/WM'];
		if(WM && typeof WM == 'object'){
			//var condensate_wm_result = WM.result
			//var condensate_wm_date = WM.date
		setTag('condensate_oilvm_date', WM.date );


		setTag('condensate_oilvm_result', WM.result );
		}
		
		var VM = Condensate['VM'];

		if(VM && typeof VM == 'object'){

			//var condensate_wm_result = WM.result

			//var condensate_wm_date = WM.date

		setTag('condensate_vm_date', VM.date );



		setTag('condensate_vm_result', VM.result );

		}
	
		// .... lanjut
	}
	
	
	
	
	var Effluent = data['Effluent']; // next ke data selanjutnya

	if(Effluent && typeof Effluent == 'object'){

	

		var NOS = Effluent['NOS'];

		if(NOS && typeof NOS == 'object'){

			//var condensate_nos_result = NOS.result

			//var condensate_nos_date = NOS.date

		setTag('effluent_nos_date', NOS.date );

		setTag('effluent_nos_result', NOS.result );

			

			//debugString('result:' + condensate_nos_result);

			//debugString('date:' + condensate_nos_date);

		}

		

		var DM = Effluent['Oil/DM'];	

		if(DM && typeof DM == 'object')

		{			

		//var condensate_dm_result = DM.result			

		//var condensate_dm_date = DM.date	

		setTag('effluent_oildm_date', DM.date );


		setTag('effluent_oildm_result', DM.result );

			

		}

		

		var WM = Effluent['Oil/WM'];

		if(WM && typeof WM == 'object'){

			//var condensate_wm_result = WM.result

			//var condensate_wm_date = WM.date

		setTag('effluent_oilvm_date', WM.date );



		setTag('effluent_oilvm_result', WM.result );

		}

		

		var VM = Effluent['VM'];


		if(VM && typeof VM == 'object'){


			//var condensate_wm_result = WM.result


			//var condensate_wm_date = WM.date


		setTag('effluent_vm_date', VM.date );




		setTag('effluent_vm_result', VM.result );


		}

	

		// .... lanjut

	}

	
		var EBP = data['Empty Bunch Press']; // next ke data selanjutnya



		if(EBP && typeof EBP == 'object'){



	



		var NOS = EBP['NOS'];



		if(NOS && typeof NOS == 'object'){



			//var condensate_nos_result = NOS.result



			//var condensate_nos_date = NOS.date



		setTag('ebp_nos_date', NOS.date );



		setTag('ebp_nos_result', NOS.result );



			



			//debugString('result:' + condensate_nos_result);



			//debugString('date:' + condensate_nos_date);



		}



		



		var DM = EBP['Oil/DM'];	



		if(DM && typeof DM == 'object')



		{			



		//var condensate_dm_result = DM.result			



		//var condensate_dm_date = DM.date	



		setTag('ebp_oildm_date', DM.date );




		setTag('ebp_oildm_result', DM.result );



			



		}



		



		var WM = EBP['Oil/WM'];



		if(WM && typeof WM == 'object'){



			//var condensate_wm_result = WM.result



			//var condensate_wm_date = WM.date



		setTag('ebp_oilvm_date', WM.date );





		setTag('ebp_oilvm_result', WM.result );



		}



		



		var VM = EBP['VM'];




		if(VM && typeof VM == 'object'){




			//var condensate_wm_result = WM.result




			//var condensate_wm_date = WM.date




		setTag('ebp_vm_date', VM.date );






		setTag('ebp_vm_result', VM.result );




		}



	



	var EBS = data['Empty Bunch Stalk']; // next ke data selanjutnya



	if(EBS && typeof EBS == 'object'){



	



		var NOS = EBS['NOS'];



		if(NOS && typeof NOS == 'object'){



			//var condensate_nos_result = NOS.result



			//var condensate_nos_date = NOS.date



		setTag('ebs_nos_date', NOS.date );



		setTag('ebs_nos_result', NOS.result );



			



			//debugString('result:' + condensate_nos_result);



			//debugString('date:' + condensate_nos_date);



		}



		



		var DM = EBS['Oil/DM'];	



		if(DM && typeof DM == 'object')



		{			



		//var condensate_dm_result = DM.result			



		//var condensate_dm_date = DM.date	



		setTag('ebs_oildm_date', DM.date );




		setTag('ebs_oildm_result', DM.result );



			



		}



		



		var WM = EBS['Oil/WM'];



		if(WM && typeof WM == 'object'){



			//var condensate_wm_result = WM.result



			//var condensate_wm_date = WM.date



		setTag('ebs_oilvm_date', WM.date );





		setTag('ebs_oilvm_result', WM.result );



		}



		



		var VM = EBS['VM'];




		if(VM && typeof VM == 'object'){




			//var condensate_wm_result = WM.result




			//var condensate_wm_date = WM.date




		setTag('ebs_vm_date', VM.date );






		setTag('ebs_vm_result', VM.result );




		}



	



		// .... lanjut



	}
		
	
	
	
	var KS = data['Kernel Silo']; // next ke data selanjutnya



	if(KS && typeof KS == 'object'){



	



		var NOS = KS['NOS'];



		if(NOS && typeof NOS == 'object'){



			//var condensate_nos_result = NOS.result



			//var condensate_nos_date = NOS.date



		setTag('ks_nos_date', NOS.date );



		setTag('ks_nos_result', NOS.result );



			



			//debugString('result:' + condensate_nos_result);



			//debugString('date:' + condensate_nos_date);



		}



		



		var DM = KS['Oil/DM'];	



		if(DM && typeof DM == 'object')



		{			



		//var condensate_dm_result = DM.result			



		//var condensate_dm_date = DM.date	



		setTag('ks_oildm_date', DM.date );




		setTag('ks_oildm_result', DM.result );



			



		}



		



		var WM = KS['Oil/WM'];



		if(WM && typeof WM == 'object'){



			//var condensate_wm_result = WM.result



			//var condensate_wm_date = WM.date



		setTag('ks_oilvm_date', WM.date );





		setTag('ks_oilvm_result', WM.result );



		}



		



		var VM = KS['VM'];




		if(VM && typeof VM == 'object'){




			//var condensate_wm_result = WM.result




			//var condensate_wm_date = WM.date




		setTag('ks_vm_date', VM.date );






		setTag('ks_vm_result', VM.result );




		}



	



		// .... lanjut



	}

	
	
		var NEPC = data['Nut ex. Press Cake']; // next ke data selanjutnya



	if(NEPC && typeof NEPC == 'object'){



	



		var NOS = NEPC['NOS'];



		if(NOS && typeof NOS == 'object'){



			//var condensate_nos_result = NOS.result



			//var condensate_nos_date = NOS.date



		setTag('nepc_nos_date', NOS.date );



		setTag('nepc_nos_result', NOS.result );



			



			//debugString('result:' + condensate_nos_result);



			//debugString('date:' + condensate_nos_date);



		}



		



		var DM = NEPC['Oil/DM'];	



		if(DM && typeof DM == 'object')



		{			



		//var condensate_dm_result = DM.result			



		//var condensate_dm_date = DM.date	



		setTag('nepc_oildm_date', DM.date );




		setTag('nepc_oildm_result', DM.result );



			



		}



		



		var WM = NEPC['Oil/WM'];



		if(WM && typeof WM == 'object'){



			//var condensate_wm_result = WM.result



			//var condensate_wm_date = WM.date



		setTag('nepc_oilvm_date', WM.date );





		setTag('nepc_oilvm_result', WM.result );



		}



		



		var VM = NEPC['VM'];




		if(VM && typeof VM == 'object'){




			//var condensate_wm_result = WM.result




			//var condensate_wm_date = WM.date




		setTag('nepc_vm_date', VM.date );






		setTag('nepc_vm_result', VM.result );




		}



	



		// .... lanjut



	}

	
		var PCF = data['Press Cake Fibre']; // next ke data selanjutnya



	if(PCF && typeof PCF == 'object'){



	



		var NOS = PCF['NOS'];



		if(NOS && typeof NOS == 'object'){



			//var condensate_nos_result = NOS.result



			//var condensate_nos_date = NOS.date



		setTag('pcf_nos_date', NOS.date );



		setTag('pcf_nos_result', NOS.result );



			



			//debugString('result:' + condensate_nos_result);



			//debugString('date:' + condensate_nos_date);



		}



		



		var DM = PCF['Oil/DM'];	



		if(DM && typeof DM == 'object')



		{			



		//var condensate_dm_result = DM.result			



		//var condensate_dm_date = DM.date	



		setTag('pcf_oildm_date', DM.date );




		setTag('pcf_oildm_result', DM.result );



			



		}



		



		var WM = PCF['Oil/WM'];



		if(WM && typeof WM == 'object'){



			//var condensate_wm_result = WM.result



			//var condensate_wm_date = WM.date



		setTag('pcf_oilvm_date', WM.date );





		setTag('pcf_oilvm_result', WM.result );



		}



		



		var VM = PCF['VM'];




		if(VM && typeof VM == 'object'){




			//var condensate_wm_result = WM.result




			//var condensate_wm_date = WM.date




		setTag('pcf_vm_date', VM.date );






		setTag('pcf_vm_result', VM.result );




		}



	



		// .... lanjut



	}

	
		var SC = data['Sludge Centrifuge']; // next ke data selanjutnya



	if(SC && typeof SC == 'object'){



	



		var NOS = SC['NOS'];



		if(NOS && typeof NOS == 'object'){



			//var condensate_nos_result = NOS.result



			//var condensate_nos_date = NOS.date



		setTag('sc_nos_date', NOS.date );



		setTag('sc_nos_result', NOS.result );



			



			//debugString('result:' + condensate_nos_result);



			//debugString('date:' + condensate_nos_date);



		}



		



		var DM = SC['Oil/DM'];	



		if(DM && typeof DM == 'object')



		{			



		//var condensate_dm_result = DM.result			



		//var condensate_dm_date = DM.date	



		setTag('sc_oildm_date', DM.date );




		setTag('sc_oildm_result', DM.result );



			



		}



		



		var WM = SC['Oil/WM'];



		if(WM && typeof WM == 'object'){



			//var condensate_wm_result = WM.result



			//var condensate_wm_date = WM.date



		setTag('sc_oilvm_date', WM.date );





		setTag('sc_oilvm_result', WM.result );



		}



		



		var VM = SC['VM'];




		if(VM && typeof VM == 'object'){




			//var condensate_wm_result = WM.result




			//var condensate_wm_date = WM.date




		setTag('sc_vm_date', VM.date );






		setTag('sc_vm_result', VM.result );




		}



	



		// .... lanjut



	}

	
	
		var TBS = data['TBS']; // next ke data selanjutnya



	if(TBS && typeof TBS == 'object'){



	



		var NOS = TBS['NOS'];



		if(NOS && typeof NOS == 'object'){



			//var condensate_nos_result = NOS.result



			//var condensate_nos_date = NOS.date



		setTag('tbs_nos_date', NOS.date );



		setTag('tbs_nos_result', NOS.result );



			



			//debugString('result:' + condensate_nos_result);



			//debugString('date:' + condensate_nos_date);



		}



		



		var DM = TBS['Oil/DM'];	



		if(DM && typeof DM == 'object')



		{			



		//var condensate_dm_result = DM.result			



		//var condensate_dm_date = DM.date	



		setTag('tbs_oildm_date', DM.date );




		setTag('tbs_oildm_result', DM.result );



			



		}



		



		var WM = TBS['Oil/WM'];



		if(WM && typeof WM == 'object'){



			//var condensate_wm_result = WM.result



			//var condensate_wm_date = WM.date



		setTag('tbs_oilvm_date', WM.date );





		setTag('tbs_oilvm_result', WM.result );



		}



		



		var VM = TBS['VM'];




		if(VM && typeof VM == 'object'){




			//var condensate_wm_result = WM.result




			//var condensate_wm_date = WM.date




		setTag('tbs_vm_date', VM.date );






		setTag('tbs_vm_result', VM.result );




		}



	



		// .... lanjut



	}

	
		var CST = data['UF CST']; // next ke data selanjutnya



	if(CST && typeof CST == 'object'){



	



		var NOS = CST['NOS'];



		if(NOS && typeof NOS == 'object'){



			//var condensate_nos_result = NOS.result



			//var condensate_nos_date = NOS.date



		setTag('cst_nos_date', NOS.date );



		setTag('cst_nos_result', NOS.result );



			



			//debugString('result:' + condensate_nos_result);



			//debugString('date:' + condensate_nos_date);



		}



		



		var DM = CST['Oil/DM'];	



		if(DM && typeof DM == 'object')



		{			



		//var condensate_dm_result = DM.result			



		//var condensate_dm_date = DM.date	



		setTag('cst_oildm_date', DM.date );




		setTag('cst_oildm_result', DM.result );



			



		}



		



		var WM = CST['Oil/WM'];



		if(WM && typeof WM == 'object'){



			//var condensate_wm_result = WM.result



			//var condensate_wm_date = WM.date



		setTag('cst_oilvm_date', WM.date );





		setTag('cst_oilvm_result', WM.result );



		}



		



		var VM = CST['VM'];




		if(VM && typeof VM == 'object'){




			//var condensate_wm_result = WM.result




			//var condensate_wm_date = WM.date




		setTag('cst_vm_date', VM.date );






		setTag('cst_vm_result', VM.result );




		}



	



		// .... lanjut



	}

	
		var UFF = data['Underflow Fatfit']; // next ke data selanjutnya



	if(UFF && typeof UFF == 'object'){



	



		var NOS = UFF['NOS'];



		if(NOS && typeof NOS == 'object'){



			//var condensate_nos_result = NOS.result



			//var condensate_nos_date = NOS.date



		setTag('fatfit_nos_date', NOS.date );



		setTag('fatfit_nos_result', NOS.result );



			



			//debugString('result:' + condensate_nos_result);



			//debugString('date:' + condensate_nos_date);



		}



		



		var DM = UFF['Oil/DM'];	



		if(DM && typeof DM == 'object')



		{			



		//var condensate_dm_result = DM.result			



		//var condensate_dm_date = DM.date	



		setTag('fatfit_oildm_date', DM.date );




		setTag('fatfit_oildm_result', DM.result );



			



		}



		



		var WM = UFF['Oil/WM'];



		if(WM && typeof WM == 'object'){



			//var condensate_wm_result = WM.result



			//var condensate_wm_date = WM.date



		setTag('fatfit_oilvm_date', WM.date );





		setTag('fatfit_oilvm_result', WM.result );



		}



		



		var VM = UFF['VM'];




		if(VM && typeof VM == 'object'){




			//var condensate_wm_result = WM.result




			//var condensate_wm_date = WM.date




		setTag('fatfit_vm_date', VM.date );






		setTag('fatfit_vm_result', VM.result );




		}



	



		// .... lanjut



	}

	
	}

	
}
