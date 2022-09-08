//core set generation
const coreSetImages = [
   {"img":"<a href='https://scryfall.com/search?as=grid&order=name&q=%28set%3A2ed+OR+set%3Aleb+OR+set%3Alea%29' target='_blank'><img src='./Assets/coreimages/ABU.png' alt='ABU'> </a>","bg":"url(./Assets/coreBGs/ALPHA.png)"},
   {"img":"<a href='https://scryfall.com/sets/3ed?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/3E.png' alt='3E'> </a>","bg":"url(./Assets/coreBGs/3E.png)"},
   {"img":"<a href='https://scryfall.com/sets/4ed?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/4E.png' alt='4E'> </a>","bg":"url(./Assets/coreBGs/4E.png)"},
   {"img":"<a href='https://scryfall.com/sets/5ed?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/5E.png' alt='5E'> </a>","bg":"url(./Assets/coreBGs/5E.png)"},
   {"img":"<a href='https://scryfall.com/sets/6ed?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/6E.png' alt='6E'> </a>","bg":"url(./Assets/coreBGs/6E.png)"},
   {"img":"<a href='https://scryfall.com/sets/7ed?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/7E.png' alt='7E'> </a>","bg":"url(./Assets/coreBGs/7E.png)"},
   {"img":"<a href='https://scryfall.com/sets/8ed?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/8E.png' alt='8E'> </a>","bg":"url(./Assets/coreBGs/8E.png)"},
   {"img":"<a href='https://scryfall.com/sets/9ed?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/9E.png' alt='9E'> </a>","bg":"url(./Assets/coreBGs/9E.png)"},
   {"img":"<a href='https://scryfall.com/sets/10e?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/10E.png' alt='10E'> </a>","bg":"url(./Assets/coreBGs/10E.png)"},
   {"img":"<a href='https://scryfall.com/sets/m10?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/M10.png' alt='M10'> </a>","bg":"url(./Assets/coreBGs/M10.png)"},
   {"img":"<a href='https://scryfall.com/sets/m11?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/M11.png' alt='M11'> </a>","bg":"url(./Assets/coreBGs/M11.png)"},
   {"img":"<a href='https://scryfall.com/sets/m12?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/M12.png' alt='M12'> </a>","bg":"url(./Assets/coreBGs/M12.png)"},
   {"img":"<a href='https://scryfall.com/sets/m13?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/M13.png' alt='M13'> </a>","bg":"url(./Assets/coreBGs/M13.png)"},
   {"img":"<a href='https://scryfall.com/sets/m14?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/M14.png' alt='M14'> </a>","bg":"url(./Assets/coreBGs/M14.png)"},
   {"img":"<a href='https://scryfall.com/sets/m15?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/M15.png' alt='M15'> </a>","bg":"url(./Assets/coreBGs/M15.png)"},
   {"img":"<a href='https://scryfall.com/sets/ori?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/ORI.png' alt='ORI'> </a>","bg":"url(./Assets/coreBGs/ORI.png)"},
   {"img":"<a href='https://scryfall.com/sets/m19?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/M19.png' alt='M19'> </a>","bg":"url(./Assets/coreBGs/M19.png)"},
   {"img":"<a href='https://scryfall.com/sets/m20?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/M20.png' alt='M20'> </a>","bg":"url(./Assets/coreBGs/M20.png)"},
   {"img":"<a href='https://scryfall.com/sets/mma?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/MMA.png' alt='MMA'> </a>","bg":"url(./Assets/coreBGs/MM1.png)"},
   {"img":"<a href='https://scryfall.com/sets/mm2?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/MM2.png' alt='MM2'> </a>","bg":"url(./Assets/coreBGs/MM2.png)"},
   {"img":"<a href='https://scryfall.com/sets/mm3?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/MM3.png' alt='MM3'> </a>","bg":"url(./Assets/coreBGs/MM3.png)"},
   {"img":"<a href='https://scryfall.com/sets/ema?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/EMA.png' alt='EMA'> </a>","bg":"url(./Assets/coreBGs/EMA.png)"},
   {"img":"<a href='https://scryfall.com/sets/a25?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/M25.png' alt='M25'> </a>","bg":"url(./Assets/coreBGs/M25.png)"},
   {"img":"<a href='https://scryfall.com/sets/uma?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/UMA.png' alt='UMA'> </a>","bg":"url(./Assets/coreBGs/UMA.png)"},
   {"img":"<a href='https://scryfall.com/sets/m21?as=grid&order=set' target='_blank'><img src='./Assets/coreimages/M21.png' alt='M21'> </a>","bg":"url(./Assets/coreBGs/M21.png)"},

];


const largeSetImages = [
   {"img":"<a href='https://scryfall.com/sets/leg?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/LEG.png' alt='LEG'> </a>","bg":"url(./Assets/largeBGs/LEG.png)"},
   {"img":"<a href='https://scryfall.com/sets/ice?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/ICE.png' alt='ICE'> </a>","bg":"url(./Assets/largeBGs/ICE.png)"},
   {"img":"<a href='https://scryfall.com/sets/mir?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/MIR.png' alt='MIR'> </a>","bg":"url(./Assets/largeBGs/MIR.png)"},
   {"img":"<a href='https://scryfall.com/sets/tmp?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/TMP.png' alt='TMP'> </a>","bg":"url(./Assets/largeBGs/TMP.png)"},
   {"img":"<a href='https://scryfall.com/sets/usg?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/USG.png' alt='USG'> </a>","bg":"url(./Assets/largeBGs/USG.png)"},
   {"img":"<a href='https://scryfall.com/sets/mmq?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/MMQ.png' alt='MMQ'> </a>","bg":"url(./Assets/largeBGs/MMQ.png)"},
   {"img":"<a href='https://scryfall.com/sets/inv?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/INV.png' alt='INV'> </a>","bg":"url(./Assets/largeBGs/INV.png)"},
   {"img":"<a href='https://scryfall.com/sets/ody?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/ODY.png' alt='ODY'> </a>","bg":"url(./Assets/largeBGs/ODY.png)"},
   {"img":"<a href='https://scryfall.com/sets/ons?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/ONS.png' alt='ONS'> </a>","bg":"url(./Assets/largeBGs/ONS.png)"},
   {"img":"<a href='https://scryfall.com/sets/mrd?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/MRD.png' alt='MRD'> </a>","bg":"url(./Assets/largeBGs/MRD.png)"},
   {"img":"<a href='https://scryfall.com/sets/chk?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/CHK.png' alt='CHK'> </a>","bg":"url(./Assets/largeBGs/CHK.png)"},
   {"img":"<a href='https://scryfall.com/sets/rav?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/RAV.png' alt='RAV'> </a>","bg":"url(./Assets/largeBGs/RAV.png)"},
   {"img":"<a href='https://scryfall.com/search?as=grid&order=name&q=%28set%3Atsp+OR+set%3Atsb%29' target='_blank'><img src='./Assets/largeimages/TSP.png' alt='TSP' > <img src='./Assets/largeimages/TSB.png' alt='TSB' > </a>","bg":"url(./Assets/largeBGs/TSPB.png)"},
   {"img":"<a href='https://scryfall.com/sets/lrw?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/LRW.png' alt='LRW'> </a>","bg":"url(./Assets/largeBGs/LOR.png)"},
   {"img":"<a href='https://scryfall.com/sets/shm?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/SHM.png' alt='SHM'> </a>","bg":"url(./Assets/largeBGs/SHM.png)"},
   {"img":"<a href='https://scryfall.com/sets/ala?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/ALA.png' alt='ALA'> </a>","bg":"url(./Assets/largeBGs/ALA.png)"},
   {"img":"<a href='https://scryfall.com/sets/zen?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/ZEN.png' alt='ZEN'> </a>","bg":"url(./Assets/largeBGs/ZEN.png)"},
   {"img":"<a href='https://scryfall.com/sets/roe?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/ROE.png' alt='ROE'> </a>","bg":"url(./Assets/largeBGs/ROE.png)"},
   {"img":"<a href='https://scryfall.com/sets/som?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/SOM.png' alt='SOM'> </a>","bg":"url(./Assets/largeBGs/SOM.png)"},
   {"img":"<a href='https://scryfall.com/sets/isd?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/ISD.png' alt='ISD'> </a>","bg":"url(./Assets/largeBGs/ISD.png)"},
   {"img":"<a href='https://scryfall.com/sets/avr?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/AVR.png' alt='AVR'> </a>","bg":"url(./Assets/largeBGs/AVR.png)"},
   {"img":"<a href='https://scryfall.com/sets/rtr?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/RTR.png' alt='RTR'> </a>","bg":"url(./Assets/largeBGs/RTR.png)"},
   {"img":"<a href='https://scryfall.com/sets/gtc?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/GTC.png' alt='GTC'> </a>","bg":"url(./Assets/largeBGs/GTC.png)"},
   {"img":"<a href='https://scryfall.com/sets/ths?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/THS.png' alt='THS'> </a>","bg":"url(./Assets/largeBGs/THS.png)"},
   {"img":"<a href='https://scryfall.com/sets/ktk?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/KTK.png' alt='KTK'> </a>","bg":"url(./Assets/largeBGs/KTK.png)"},
   {"img":"<a href='https://scryfall.com/sets/dtk?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/DTK.png' alt='DTK'> </a>","bg":"url(./Assets/largeBGs/DTK.png)"},
   {"img":"<a href='https://scryfall.com/sets/bfz?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/BFZ.png' alt='BFZ'> </a>","bg":"url(./Assets/largeBGs/BFZ.png)"},
   {"img":"<a href='https://scryfall.com/sets/soi?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/SOI.png' alt='SOI'> </a>","bg":"url(./Assets/largeBGs/SOI.png)"},
   {"img":"<a href='https://scryfall.com/sets/kld?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/KLD.png' alt='KLD'> </a>","bg":"url(./Assets/largeBGs/KLD.png)"},
   {"img":"<a href='https://scryfall.com/sets/akh?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/AKH.png' alt='AKH'> </a>","bg":"url(./Assets/largeBGs/AKH.png)"},
   {"img":"<a href='https://scryfall.com/sets/xln?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/XLN.png' alt='XLN'> </a>","bg":"url(./Assets/largeBGs/XLN.png)"},
   {"img":"<a href='https://scryfall.com/sets/dom?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/DOM.png' alt='DOM'> </a>","bg":"url(./Assets/largeBGs/DOM.png)"},
   {"img":"<a href='https://scryfall.com/sets/grn?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/GRN.png' alt='GRN'> </a>","bg":"url(./Assets/largeBGs/GRN.png)"},
   {"img":"<a href='https://scryfall.com/sets/rna?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/RNA.png' alt='RNA'> </a>","bg":"url(./Assets/largeBGs/RNA.png)"},
   {"img":"<a href='https://scryfall.com/sets/war?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/WAR.png' alt='WAR'> </a>","bg":"url(./Assets/largeBGs/WAR.png)"},
   {"img":"<a href='https://scryfall.com/sets/eld?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/ELD.png' alt='ELD'> </a>","bg":"url(./Assets/largeBGs/ELD.png)"},
   {"img":"<a href='https://scryfall.com/sets/thb?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/THB.png' alt='THB'> </a>","bg":"url(./Assets/largeBGs/THB.png)"},
   {"img":"<a href='https://scryfall.com/sets/iko?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/IKO.png' alt='IKO'> </a>","bg":"url(./Assets/largeBGs/IKO.png)"},
   {"img":"<a href='https://scryfall.com/sets/znr?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/ZNR.png' alt='ZNR'> </a>","bg":"url(./Assets/largeBGs/ZNR.png)"},
   {"img":"<a href='https://scryfall.com/sets/khm?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/KHM.png' alt='KHM'> </a>","bg":"url(./Assets/largeBGs/KHM.png)"},
   {"img":"<a href='https://scryfall.com/sets/stx?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/STX.png' alt='STX'> </a>","bg":"url(./Assets/largeBGs/STX.png)"},
   {"img":"<a href='https://scryfall.com/sets/afr?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/AFR.png' alt='AFR'> </a>","bg":"url(./Assets/largeBGs/AFR.png)"},
   {"img":"<a href='https://scryfall.com/sets/mid?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/MID.png' alt='MID'> </a>","bg":"url(./Assets/largeBGs/MID.png)"},
   {"img":"<a href='https://scryfall.com/sets/vow?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/VOW.png' alt='VOW'> </a>","bg":"url(./Assets/largeBGs/VOW.png)"},
   {"img":"<a href='https://scryfall.com/sets/mh1?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/MH1.png' alt='MH1'> </a>","bg":"url(./Assets/largeBGs/MH1.png)"},
   {"img":"<a href='https://scryfall.com/sets/mh2?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/MH2.png' alt='MH2'> </a>","bg":"url(./Assets/largeBGs/MH2.png)"},
   {"img":"<a href='https://scryfall.com/sets/neo?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/NEO.png' alt='NEO'> </a>","bg":"url(./Assets/largeBGs/NEO.png)"},
   {"img":"<a href='https://scryfall.com/sets/snc?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/SNC.png' alt='SNC'> </a>","bg":"url(./Assets/largeBGs/SNC.png)"},
   {"img":"<a href='https://scryfall.com/sets/dmu?as=grid&order=set' target='_blank'><img src='./Assets/largeimages/DMU.png' alt='DMU'> </a>","bg":"url(./Assets/largeBGs/DMU.png)"},
	
];

const smallSetImages = [
   {"img":"<a href='https://scryfall.com/sets/arn?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/ARN.png' alt='ARN'> </a>","bg":"url(./Assets/smallBGs/ARN.png)"},
   {"img":"<a href='https://scryfall.com/sets/atq?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/ATQ.png' alt='ATQ'> </a>","bg":"url(./Assets/smallBGs/ATQ.png)"},
   {"img":"<a href='https://scryfall.com/sets/drk?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/DRK.png' alt='DRK'> </a>","bg":"url(./Assets/smallBGs/DRK.png)"},
   {"img":"<a href='https://scryfall.com/sets/fem?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/FEM.png' alt='FEM'> </a>","bg":"url(./Assets/smallBGs/FEM.png)"},
   {"img":"<a href='https://scryfall.com/sets/hml?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/HML.png' alt='HML'> </a>","bg":"url(./Assets/smallBGs/HML.png)"},
   {"img":"<a href='https://scryfall.com/sets/all?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/ALL.png' alt='ALL'> </a>","bg":"url(./Assets/smallBGs/ALL.png)"},
   {"img":"<a href='https://scryfall.com/sets/vis?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/VIS.png' alt='VIS'> </a>","bg":"url(./Assets/smallBGs/VIS.png)"},
   {"img":"<a href='https://scryfall.com/sets/wth?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/WTH.png' alt='WTH'> </a>","bg":"url(./Assets/smallBGs/WTH.png)"},
   {"img":"<a href='https://scryfall.com/sets/sth?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/STH.png' alt='STH'> </a>","bg":"url(./Assets/smallBGs/STH.png)"},
   {"img":"<a href='https://scryfall.com/sets/exo?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/EXO.png' alt='EXO'> </a>","bg":"url(./Assets/smallBGs/EXO.png)"},
   {"img":"<a href='https://scryfall.com/sets/ulg?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/ULG.png' alt='ULG'> </a>","bg":"url(./Assets/smallBGs/ULG.png)"},
   {"img":"<a href='https://scryfall.com/sets/uds?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/UDS.png' alt='UDS'> </a>","bg":"url(./Assets/smallBGs/UDS.png)"},
   {"img":"<a href='https://scryfall.com/sets/nem?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/NEM.png' alt='NEM'> </a>","bg":"url(./Assets/smallBGs/NEM.png)"},
   {"img":"<a href='https://scryfall.com/sets/pcy?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/PCY.png' alt='PCY'> </a>","bg":"url(./Assets/smallBGs/PCY.png)"},
   {"img":"<a href='https://scryfall.com/sets/pls?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/PLS.png' alt='PLS'> </a>","bg":"url(./Assets/smallBGs/PLS.png)"},
   {"img":"<a href='https://scryfall.com/sets/apc?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/APC.png' alt='APC'> </a>","bg":"url(./Assets/smallBGs/APC.png)"},
   {"img":"<a href='https://scryfall.com/sets/tor?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/TOR.png' alt='TOR'> </a>","bg":"url(./Assets/smallBGs/TOR.png)"},
   {"img":"<a href='https://scryfall.com/sets/jud?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/JUD.png' alt='JUD'> </a>","bg":"url(./Assets/smallBGs/JUD.png)"},
   {"img":"<a href='https://scryfall.com/sets/lgn?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/LGN.png' alt='LGN'> </a>","bg":"url(./Assets/smallBGs/LGN.png)"},
   {"img":"<a href='https://scryfall.com/sets/scg?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/SCG.png' alt='SCG'> </a>","bg":"url(./Assets/smallBGs/SCG.png)"},
   {"img":"<a href='https://scryfall.com/sets/dst?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/DST.png' alt='DST'> </a>","bg":"url(./Assets/smallBGs/DST.png)"},
   {"img":"<a href='https://scryfall.com/sets/5dn?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/5DN.png' alt='5DN'> </a>","bg":"url(./Assets/smallBGs/5DN.png)"},
   {"img":"<a href='https://scryfall.com/sets/bok?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/BOK.png' alt='BOK'> </a>","bg":"url(./Assets/smallBGs/BOK.png)"},
   {"img":"<a href='https://scryfall.com/sets/sok?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/SOK.png' alt='SOK'> </a>","bg":"url(./Assets/smallBGs/SOK.png)"},
   {"img":"<a href='https://scryfall.com/sets/gpt?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/GPT.png' alt='GPT'> </a>","bg":"url(./Assets/smallBGs/GPT.png)"},
   {"img":"<a href='https://scryfall.com/sets/dis?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/DIS.png' alt='DIS'> </a>","bg":"url(./Assets/smallBGs/DIS.png)"},
   {"img":"<a href='https://scryfall.com/sets/csp?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/CSP.png' alt='CSP'> </a>","bg":"url(./Assets/smallBGs/CSP.png)"},
   {"img":"<a href='https://scryfall.com/sets/plc?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/PLC.png' alt='PLC'> </a>","bg":"url(./Assets/smallBGs/PLC.png)"},
   {"img":"<a href='https://scryfall.com/sets/fut?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/FUT.png' alt='FUT'> </a>","bg":"url(./Assets/smallBGs/FUT.png)"},
   {"img":"<a href='https://scryfall.com/sets/mor?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/MOR.png' alt='MOR'> </a>","bg":"url(./Assets/smallBGs/MOR.png)"},
   {"img":"<a href='https://scryfall.com/sets/eve?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/EVE.png' alt='EVE'> </a>","bg":"url(./Assets/smallBGs/EVE.png)"},
   {"img":"<a href='https://scryfall.com/sets/con?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/CONF.png' alt='CON'> </a>","bg":"url(./Assets/smallBGs/CONF.png)"},
   {"img":"<a href='https://scryfall.com/sets/arb?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/ARB.png' alt='ARB'> </a>","bg":"url(./Assets/smallBGs/ARB.png)"},
   {"img":"<a href='https://scryfall.com/sets/wwk?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/WWK.png' alt='WWK'> </a>","bg":"url(./Assets/smallBGs/WWK.png)"},
   {"img":"<a href='https://scryfall.com/sets/mbs?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/MBS.png' alt='MBS'> </a>","bg":"url(./Assets/smallBGs/MBS.png)"},
   {"img":"<a href='https://scryfall.com/sets/nph?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/NPH.png' alt='NPH'> </a>","bg":"url(./Assets/smallBGs/NPH.png)"},
   {"img":"<a href='https://scryfall.com/sets/dka?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/DKA.png' alt='DKA'> </a>","bg":"url(./Assets/smallBGs/DKA.png)"},
   {"img":"<a href='https://scryfall.com/sets/dgm?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/DGM.png' alt='DGM'> </a>","bg":"url(./Assets/smallBGs/DGM.png)"},
   {"img":"<a href='https://scryfall.com/sets/bng?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/BNG.png' alt='BNG'> </a>","bg":"url(./Assets/smallBGs/BNG.png)"},
   {"img":"<a href='https://scryfall.com/sets/jou?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/JOU.png' alt='JOU'> </a>","bg":"url(./Assets/smallBGs/JOU.png)"},
   {"img":"<a href='https://scryfall.com/sets/frf?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/FRF.png' alt='FRF'> </a>","bg":"url(./Assets/smallBGs/FRF.png)"},
   {"img":"<a href='https://scryfall.com/sets/ogw?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/OGW.png' alt='OGW'> </a>","bg":"url(./Assets/smallBGs/OGW.png)"},
   {"img":"<a href='https://scryfall.com/sets/emn?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/EMN.png' alt='EMN'> </a>","bg":"url(./Assets/smallBGs/EMN.png)"},
   {"img":"<a href='https://scryfall.com/sets/aer?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/AER.png' alt='AER'> </a>","bg":"url(./Assets/smallBGs/AER.png)"},
   {"img":"<a href='https://scryfall.com/sets/hou?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/HOU.png' alt='HOU'> </a>","bg":"url(./Assets/smallBGs/HOU.png)"},
   {"img":"<a href='https://scryfall.com/sets/rix?as=grid&order=set' target='_blank'><img src='./Assets/smallimages/RIX.png' alt='RIX'> </a>","bg":"url(./Assets/smallBGs/RIX.png)"},
];

function getRandomCoreSetImage() {
	var index = 0;
	index = Math.floor(Math.random()*coreSetImages.length);

	document.getElementById("coresetimage").innerHTML = coreSetImages[index].img;
    document.getElementById("coreBg").style.backgroundImage = coreSetImages[index].bg;


	//below is just text
	//document.getElementById("number").innerHTML = Math.floor(Math.random()*25+1);
}

//large set generation
function getRandomLargeSetImage() {
	var index = 0;
	index = Math.floor(Math.random()*largeSetImages.length);

	document.getElementById("largesetimage").innerHTML = largeSetImages[index].img;
    document.getElementById("largeBg").style.backgroundImage = largeSetImages[index].bg;
	//document.getElementById("number").innerHTML = Math.floor(Math.random()*48+1);
}

function getRandomLargeSetImage2() {
	var index = 0;
	index = Math.floor(Math.random()*largeSetImages.length);

	document.getElementById("largesetimage2").innerHTML = largeSetImages[index].img;
    document.getElementById("largeBg2").style.backgroundImage = largeSetImages[index].bg;
	//document.getElementById("number2").innerHTML = Math.floor(Math.random()*48+1);
}

//small set generation


function getRandomSmallSetImage() {
	var index = 0;
	index = Math.floor(Math.random()*smallSetImages.length);

	document.getElementById("smallsetimage").innerHTML = smallSetImages[index].img;
    document.getElementById("smallBg").style.backgroundImage = smallSetImages[index].bg;
	//document.getElementById("number").innerHTML = Math.floor(Math.random()*46+1);
}

function getRandomSmallSetImage2() {
	var index = 0;
	index = Math.floor(Math.random()*smallSetImages.length);
	
	document.getElementById("smallsetimage2").innerHTML = smallSetImages[index].img;
    document.getElementById("smallBg2").style.backgroundImage = smallSetImages[index].bg;
	//document.getElementById("number2").innerHTML = Math.floor(Math.random()*46+1);
}

function getRandomSmallSetImage3() {
	var index = 0;
	index = Math.floor(Math.random()*smallSetImages.length);

	document.getElementById("smallsetimage3").innerHTML = smallSetImages[index].img;
    document.getElementById("smallBg3").style.backgroundImage = smallSetImages[index].bg;
	//document.getElementById("number3").innerHTML = Math.floor(Math.random()*46+1);
}
	
function getRandomSmallSetImage4() {
	var index = 0;
	index = Math.floor(Math.random()*smallSetImages.length);

	document.getElementById("smallsetimage4").innerHTML = smallSetImages[index].img;
    document.getElementById("smallBg4").style.backgroundImage = smallSetImages[index].bg;
	//document.getElementById("number4").innerHTML = Math.floor(Math.random()*46+1);
}
//Multiple Generators
function getAllSets() {
    getRandomCoreSetImage();
    getRandomLargeSetImage();
    getRandomLargeSetImage2();
	getRandomSmallSetImage();
    getRandomSmallSetImage2();
    getRandomSmallSetImage3();
	getRandomSmallSetImage4();
}
function getAllLargeSets() {
    getRandomLargeSetImage();
    getRandomLargeSetImage2();
}
function getAllSmallSets() {
	getRandomSmallSetImage();
    getRandomSmallSetImage2();
    getRandomSmallSetImage3();
	getRandomSmallSetImage4();
}