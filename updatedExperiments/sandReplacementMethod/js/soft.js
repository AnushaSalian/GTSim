var dataset1=[6595,3970,1900,280,1790];//dataset for bulk ensity of sand

var dataset2=[4855,1540,1740];//dataset for bulk ensity of soil

var dataset3=[[1,28.3,50.12,47.45,0.139425587],//dry density of soil
			  [2,29.39,53.42,49.91,0.171052632],
			  [3,27.36,59.94,51.65,0.341292713]];
const bulkDen=1.571;

var d=10, h=14.5, vol=1138.685;

var wa=0,dsand=0,dsoil=0,wc=0,avg,dd,arrWc=[];////water content=>wc
var repeat=0;

var p=0;
var d=".00";
var data=0;

function IsInt(num)
{
    if(Number.isInteger(num))
    {
        data=num+d;
    }
    else
    {
        data=num;
    }
}

$(function()
{
    $('input').on('input', function() {
        this.value = this.value.match(/\d*(\.\d*)?/)[0];
    });
});


function navNext()
{
    for (temp = 0; temp <= 12; temp++)
    {
        document.getElementById('canvas'+temp).style.visibility="hidden";
    }

    simsubscreennum+=1;
    document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
    document.getElementById('nextButton').style.visibility="hidden";
    magic();
}
//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
    if (document.getElementById('arrow1').style.visibility=="hidden")
        document.getElementById('arrow1').style.visibility="visible";
    else
        document.getElementById('arrow1').style.visibility="hidden";

}
//stop blinking arrow
function myStopFunction()
{
    clearInterval(myInt);
    document.getElementById('arrow1').style.visibility="hidden";
}

function blinkArrow(l,t,d,h)
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+l+"px; top:"+t+"px; height:"+h+"px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+d+"deg)"; 
	document.getElementById("arrow1").style.msTransform = "rotate("+d+"deg)";
	document.getElementById("arrow1").style.transform = "rotate("+d+"deg)";
}

function generate_table()
{
    var j=0;
    var table = document.getElementById("dataTable");
    for(var i=2;i>=0;i--)
    {
        $("#dataTable").delay()
            .queue(function (generate_table) {
                           $(this).append("<tr><td style='border:1px solid black; text-align:center;'>" + dataset3[j][0]
                               +  "</td><td style='border:1px solid black; text-align:center;'>"+dataset3[j][1]+"</td><td  style='border:1px solid black; text-align:center;'>"+dataset3[j][2]+"</td><td style='border:1px solid black; text-align:center;'>"+dataset3[j][3]+"</td><td  style='border:1px solid black; text-align:center;'>"+dataset3[j][4].toFixed(2)+"</td></tr>");
                j++;
                generate_table();
            });
    }
}


var ca;
var questions = ["The unit of density is _____ ",
"This method applies to layers not exceeding _____mm in thickness"	,
"Sand replacement method is not suitable for_______",
"The objective of the sand replacement method is to check Is, the Soil has acquired the desired dry density after compaction or not",
"The abbreviation of MDD is______"];

var options2 = [
	["Kg/m3", "m3/kg ", "kg-m3", "N-m3"],
	["150", "200","100","250"],
	["Granular Soil with a very high void ratio","Granular Soil with a very low void ratio","Granular Soil with moderate void ratio","None of the above"],//Weight of soil to corresponding volume
	["True","False"],//True
    ["Maximum dry density","Maximum depth density","Maximum density at depth","Moderate dry density "],
];

function validateAnswer_(qn, ans, left, top) {
    $("#answer").empty();
    document.getElementById("aaa").innerHTML = "";
    document.getElementById("questD").style = "position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:" + left + ";top:" + top + ";";
    document.getElementById("qu").innerHTML = questions[qn];
    if (qn == 0) document.getElementById('questD').style.width = "320px";
    if (qn == 1) document.getElementById('questD').style.width = "320px";
    if (qn == 2) document.getElementById('questD').style.width = "320px";
    if (qn == 3) document.getElementById('questD').style.width = "320px";
    if (qn == 4) document.getElementById('questD').style.width = "320px";
	var j=0;
    el = document.createElement("option");
    el.textContent = " ";
    el.value = " ";
    answer.appendChild(el);

    for (j = 0; j < options2[qn].length; j++) {
        opt = options2[qn][j];

        el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        answer.appendChild(el);
        $("#answer").change(function() {
            ca = $(this).children("option:selected").val();
            if (options2[qn][ans] == ca) {
                document.getElementById("aaa").innerHTML = "Correct Answer!";
            }
            else {
                document.getElementById("aaa").innerHTML = "Wrong! Answer is " + options2[qn][ans];
            }
            setTimeout(function() {
                document.getElementById("questD").style.visibility = "hidden";
                document.getElementById("nextButton").style.visibility = "visible";
            }, 1500);
        });
    }
}

function disableOnClick(id)
{
	document.getElementById(id).onclick="";
}

//-------------------------------------function magic starts here----------------------------------------------------
function magic() 
{
	if (simsubscreennum == 1) 
	{
		repeat++;
        document.getElementById('canV').style.visibility = "hidden";
        document.getElementById('canh').style.visibility = "hidden";
        document.getElementById('cand').style.visibility = "hidden";
		
		blinkArrow(490,250,180,30);
		document.getElementById('a2').onclick=function() 
		{
            myStopFunction();
            disableOnClick("a2");
            document.getElementById('a2').style.animation="move1 1s forwards";
            setTimeout(function () 
			{
                document.getElementById('can1').innerHTML = "Height of calibrating container = <u>14 .5cm</u>";
                setTimeout(function() 
				{
                    document.getElementById('a2').style.visibility = "hidden";
                    document.getElementById('a8').style.visibility = "visible";
                    document.getElementById('a9').style.visibility = "visible";
					blinkArrow(350,140,270,30);
                    document.getElementById('a8').onclick = function() 
					{
						disableOnClick("a8");
						step1();
					}
					document.getElementById('a9').onclick = function() 
					{
						disableOnClick("a9");
						step1();
					}
				}, 300);
			},1100);
		}
	}
	else if(simsubscreennum == 2) 
	{
        document.getElementById('cap1').style.visibility = "hidden";
        document.getElementById('canh').style.visibility = "hidden";
        document.getElementById('cand').style.visibility = "hidden";
        document.getElementById('cal').style.visibility = "hidden";
        document.getElementById('q').style.visibility = "hidden";
        document.getElementById('ch').style.visibility = "hidden";
        document.getElementById('re').style.visibility = "hidden";
        document.getElementById('result').style.visibility = "hidden";
        document.getElementById('w1').style.visibility = "hidden";
        document.getElementById('value').style.visibility = "hidden";
        document.getElementById('tx').style.visibility = "hidden";

		blinkArrow(400,300,180,30);
        document.getElementById('b2').onclick = function () 
		{
            myStopFunction();
			disableOnClick("b2");
            document.getElementById('canV').style.visibility = "";
            document.getElementById('b2').style.animation = "move4 1s forwards";
            document.getElementById('cal').style.visibility = "hidden";
            setTimeout(function () 
			{
                document.getElementById('123').style.visibility = "hidden";
                document.getElementById('b5').style.visibility = "visible";
                setTimeout(function () 
				{
                    myStopFunction();
					blinkArrow(90,150,180,30);
                    document.getElementById('b5').onclick = function () 
					{
                        myStopFunction();
						disableOnClick("b5");
                        document.getElementById('b5').style.animation = "move41 1s  forwards";
                        document.getElementById('b2').style.visibility = "hidden";
                        setTimeout(function () 
						{
                            document.getElementById('b6').style.visibility = "visible";
                            setTimeout(function () 
							{
								document.getElementById('123').style.visibility = "visible";
								document.getElementById('ba1').style.visibility = "visible";
								document.getElementById('bb1').style.visibility = "visible";
                                document.getElementById('b5').style.visibility = "hidden";
                                document.getElementById('b6').style.visibility = "hidden";
								blinkArrow(522,417,90,30);
								document.getElementById('ba1').onclick = function () 
								{
                                    myStopFunction();
                                    disableOnClick("ba1");
                                    document.getElementById('v3').innerHTML = "0.005";
                                    document.getElementById("123").style.backgroundColor = "lightgrey";
									setTimeout(function () 
									{
										blinkArrow(628,417,90,30);
                                        document.getElementById('bb1').onclick = function () 
										{
                                            myStopFunction();
                                            disableOnClick("bb1");
                                            document.getElementById('v3').innerHTML = "0.000";
                                            document.getElementById("123").style.backgroundColor = "lightgrey";
											setTimeout(function () 
											{
                                               blinkArrow(50,300,180,30);
                                                document.getElementById('b1').onclick = function ()
												{
                                                    myStopFunction();
													disableOnClick("b1");
													document.getElementById('b1').style.visibility = "hidden";
													document.getElementById('b8').style.visibility = "visible";
                                                    document.getElementById('b8').style.animation = "move5 1s  forwards";
                                                    setTimeout(function () 
													{
                                                        document.getElementById('ba1').style.visibility = "hidden";
                                                        document.getElementById('b8').style.visibility = "hidden";
                                                        document.getElementById('b7').style.visibility = "visible";
                                                        document.getElementById('can3').innerHTML = "Weight of Sand Pouring Cylinder with sand, W<sub>1</sub> =  <u>6595g</u>";
                                                        document.getElementById('v3').innerHTML = "6595";
														setTimeout(function()
														{
															validateAnswer_(2, 0, "50px", "180px");
														},1200);
                                                    }, 1300);
                                                }
                                            }, 1000);
                                        }
                                        
                                    }, 500);
                                }
						}, 800);
					}, 1000);
				}
			}, 500);
		}, 1000);
	}
} 

	else if (simsubscreennum == 3) 
	{
		document.getElementById('123').style.visibility = "hidden";
		document.getElementById('can3').style.visibility = "hidden";
		document.getElementById('v3').style.visibility = "hidden";
		document.getElementById('b7').style.visibility = "hidden";
		document.getElementById('ba1').style.visibility = "hidden";
		document.getElementById('bb1').style.visibility = "hidden";
		document.getElementById('b1').style.visibility = "hidden";
		document.getElementById("noteDiv").style.visibility="visible";
		document.getElementById("note").innerHTML="Measure weight of calibrating cantainer without sand";
		document.getElementById('c1').style="position: absolute; left: 132.5px; top: 310px; visibility :visible";
		setTimeout(function()
		{
			document.getElementById("1").style.backgroundColor = "lightgrey";
			document.getElementById('v4').innerHTML = "0.001";
			document.getElementById("noteDiv").style.visibility="hidden";
			document.getElementById('c1').style.visibility = "visible";
			blinkArrow(635,435,90,30);
			document.getElementById('cb').onclick = function() 
			{
				myStopFunction();
				disableOnClick("cb");
				document.getElementById('v4').innerHTML = "0.000";
				setTimeout(function () 
				{
					blinkArrow(130,380,180,30);
					document.getElementById('c1').onclick = function ()
					{
						myStopFunction();
						disableOnClick("c1");
						document.getElementById('c1').style.animation = "moveCalibratingContainer 1s  forwards";
						setTimeout(function () 
						{
							document.getElementById('c1').style.visibility = "visible";
							document.getElementById('c10').style.visibility = "hidden";
							document.getElementById('cb').style.visibility = "hidden";
							document.getElementById('can40').innerHTML = "Weight of empty calibrating container, W<sub>3</sub> =  <u>1900g</u>";
							document.getElementById('v4').innerHTML = "1900.00";
							setTimeout(function()
							{
								document.getElementById('v4').style.visibility = "hidden";
								document.getElementById('can40').style.visibility = "hidden";
								document.getElementById("noteDiv").style.visibility="visible";
								document.getElementById('c1').style="position: absolute; left: 132.5px; top: 310px; visibility :visible";
								document.getElementById("note").innerHTML="Measure weight of calibrating container with sand";
								setTimeout(function()
								{
									document.getElementById("noteDiv").style.visibility="hidden";
									document.getElementById('c2').style.visibility = "visible";
									document.getElementById('1').style.visibility = "hidden";
									document.getElementById('cb').style.visibility = "hidden";
									document.getElementById('ca').style.visibility = "hidden";
									blinkArrow(160,230,0,40);
									document.getElementById('c2').onclick = function() 
									{
										myStopFunction();
										disableOnClick("c2");
										document.getElementById('c2').style.animation = "move6 1s forwards";
										setTimeout(function () 
										{
											document.getElementById('c2').style.visibility = "visible"
											setTimeout(function () 
											{
												document.getElementById('c1').style.visibility = "hidden";
												document.getElementById('c2').style.visibility = "hidden";
												document.getElementById('c3').style.visibility = "visible";
												document.getElementById('c5').style.visibility = "visible";
												setTimeout(function () 
												{
													blinkArrow(30,350,180,35);
													document.getElementById('c5').onclick = function() 
													{
														myStopFunction();
														disableOnClick("c5");
														document.getElementById('c5').style.animation = "move7 2s  forwards";
														setTimeout(function () 
														{
															blinkArrow(50,350,180,30);
															document.getElementById('c5').onclick = function () 
															{
																myStopFunction();
																disableOnClick("c5");
																document.getElementById('c5').style.animation = "move8 1s  forwards";
																setTimeout(function () 
																{
																	document.getElementById('c5').style.visibility = "hidden";
																	setTimeout(function()
																	{
																		document.getElementById("noteDiv").style.visibility="hidden";
																		document.getElementById('c3').style.visibility = "hidden";
																		document.getElementById('c5').style.visibility = "hidden";
																		document.getElementById('c7').style.visibility = "visible";
																		document.getElementById('1').style.visibility = "visible";
																		document.getElementById('v4').style.visibility = "visible";
																		document.getElementById('v4').innerHTML = "0.0009";
																		document.getElementById('cb').style.visibility = "visible";
																		setTimeout(function () 
																		{
																			blinkArrow(635,440,90,30);
																			document.getElementById('cb').onclick = function () 
																			{
																				myStopFunction();
																				disableOnClick("cb");
																				document.getElementById('v4').innerHTML = "00.00";
																				setTimeout(function () 
																				{
																					blinkArrow(130,430,180,30);
																					document.getElementById('c7').onclick = function () 
																					{
																						myStopFunction();
																						disableOnClick("c7");
																						document.getElementById('c7').style.animation = "moveCalibratingContainer 1s  forwards";
																						setTimeout(function ()
																						{
																							document.getElementById('c7').style.visibility = "visible";
																							document.getElementById('c10').style.visibility = "hidden";
																							document.getElementById('c11').style.visibility = "hidden";
																							document.getElementById('can4').innerHTML = "weight of calibrating container with sand, (W<sub>2</sub>) = <u>3970 g</u>";
																							document.getElementById('v4').innerHTML = "3970.00";
																							setTimeout(function()
																							{
																								validateAnswer_(1, 0, "50px", "170px");
																							},1500);
																						}, 2000);
																					}
																				}, 1000);
																			}
																		}, 1000);
																	},1000);
																}, 1000);
															}
														}, 2000);
													}
												}, 500);
											}, 1000);
										}, 1500);
									}
								},3000);
							},2000);
						},1200);
					}
				}, 1000);
			}
		},4000);		
	} 

	else if (simsubscreennum == 4) 
	{
		document.getElementById('c7').style.visibility = "hidden";
		document.getElementById('1').style.visibility = "hidden";
		document.getElementById('v4').style.visibility = "hidden";
		document.getElementById('cb').style.visibility = "hidden";
		document.getElementById('c1').style.visibility = "hidden";
		document.getElementById('c2').style.visibility = "hidden";
		document.getElementById('c11').style.visibility = "hidden";
		document.getElementById('c10').style.visibility = "hidden";
		blinkArrow(650,350,360,35);
		document.getElementById('c22').onclick = function () 
		{
			myStopFunction();
			disableOnClick("c22");
			document.getElementById('v4a').style.visibility = "visible";
			document.getElementById('c22').style.animation = "move10 1s  forwards";
			setTimeout(function () 
			{
				myStopFunction();
				document.getElementById('c111').style.visibility = "visible";
				document.getElementById('c22').style.visibility = "hidden";
				document.getElementById('cc5').style.visibility = "visible";
				setTimeout(function () 
				{
					blinkArrow(30,350,180,35);
					document.getElementById('cc5').onclick = function () 
					{
						myStopFunction();
						disableOnClick("cc5");
						document.getElementById('cc5').style.animation = "move11 1s  forwards";
						setTimeout(function () 
						{
							document.getElementById('cc5').style.visibility = "visible";
								setTimeout(function () 
								{
									blinkArrow(50,350,180,30);
									document.getElementById('cc5').onclick = function () 
									{
										myStopFunction();
										disableOnClick("cc5");
										document.getElementById('cc5').style.animation = "move12 1s  forwards";
										setTimeout(function () 
										{
											document.getElementById('cc5').style.visibility = "hidden";
											document.getElementById('c111').style.visibility = "hidden";
											document.getElementById('c9').style.visibility = "visible";
											document.getElementById('c22').style.visibility = "visible";
											setTimeout(function () 
											{
												document.getElementById('c8').style.visibility = "hidden";
												document.getElementById('c22').style.visibility = "hidden";
												document.getElementById("c18").style.visibility = "visible";
												document.getElementById("ca11").style.visibility = "visible";
												document.getElementById("cb1").style.visibility = "visible";
												document.getElementById("c18").style.backgroundColor = "lightgrey";
												document.getElementById('v4a').innerHTML = "0.003";
												setTimeout(function () 
												{
													blinkArrow(635,440,90,30);
													document.getElementById('cb1').onclick = function () 
													{
														myStopFunction();
														disableOnClick("cb1");
														document.getElementById('v4a').innerHTML = "00.00";
														document.getElementById("c18").style.backgroundColor = "lightgrey";
														document.getElementById('c14').style.visibility = "visible";
														setTimeout(function () 
														{
															blinkArrow(50,360,180,35);
															document.getElementById('c9').onclick = function () 
															{
																myStopFunction();
																disableOnClick("c9");
																document.getElementById('c9').style.animation = "move13 0.5s  forwards";
																document.getElementById('c11').style.visibility = "hidden";
																setTimeout(function () 
																{
																	document.getElementById('c13').style.visibility = "visible";
																	document.getElementById('c14').style.visibility = "visible";
																	document.getElementById('c9').style.visibility = "hidden";
																	setTimeout(function () 
																	{
																		blinkArrow(490,150,270,30);
																		document.getElementById('c13').onclick = function () 
																		{
																			myStopFunction();
																			disableOnClick("c13");
																			document.getElementById('c13').style.animation = "move133 1s  forwards";
																			document.getElementById('c14').style.visibility = "visible";
																			setTimeout(function () 
																			{
																				document.getElementById('c14').style.visibility = "hidden";
																				document.getElementById('v4').style.visibility = "hidden";
																				document.getElementById('c13').style.visibility = "hidden";
																				document.getElementById('c15').style.visibility = "visible";
																				document.getElementById('p4').style.visibility = "visible";
																				document.getElementById('v4a').innerHTML = "280.00";
																				setTimeout(function()
																				{
																					document.getElementById('p4-1').innerHTML = "Weight of calibrating container with sand, W<sub>2</sub>=  <u>3970  g</u>";
																					document.getElementById('p4-2').innerHTML = "Weight of empty calibrating container , W<sub>3</sub> =  <u>1900  g</u>";
																					document.getElementById('p4-3').innerHTML = "Weight of sand in cone portion, W<sub>4</sub> =  <u>280  g</u>";
																					document.getElementById('p4-4').innerHTML = "Weight of sand in calibrating container without cone portion, W<sub>5</sub> or W<sub>a</sub> = W<sub>2</sub>-W<sub>3</sub>-W<sub>4</sub> =  <u>1790  g</u>";
																					document.getElementById('nextButton').style.visibility = "visible";
																				},700);
																			}, 500);
																		}
																	}, 800);
																}, 1000);
															}
														}, 500);
													}
												}, 1500);
											}, 500);
										}, 1100);
									}
								}, 1100);
						}, 500);     
					}
				}, 1500);
			}, 1000);
		}
	}

	else if(simsubscreennum == 5)
	{
		document.getElementById('v4a').style.visibility = "hidden";
		document.getElementById('c18').style.visibility = "hidden";
		document.getElementById('ca11').style.visibility = "hidden";
		document.getElementById('cb1').style.visibility = "hidden";
		document.getElementById('c15').style.visibility = "hidden";
		document.getElementById('can4').style.visibility = "hidden";
		document.getElementById('v4').style.visibility = "hidden";
		document.getElementById('p4').style.visibility = "hidden";
		
		document.getElementById("t2").innerHTML=dataset1[0]+" g";
		document.getElementById("t3").innerHTML=dataset1[1]+" g";
		document.getElementById("t4").innerHTML=dataset1[2]+" g";
		document.getElementById("t5").innerHTML=dataset1[3]+" g";
		wa=dataset1[1] - dataset1[2] - dataset1[3];
		document.getElementById("t6").innerHTML=wa+" g";

		dsand = wa/vol;
		
		document.getElementById("chk1").onclick=function()
		{
			var id=document.getElementById("wd");
			var mark=document.getElementById("mark1");
			var chk=document.getElementById("chk1");
			var res=document.getElementById("res1");
			evaluateAnswer(id, dsand, mark, chk, res);
		}
	}

	else if(simsubscreennum == 6)
	{
		document.getElementById('mark1').style.visibility="hidden";
		document.getElementById('d2').style=" position: absolute; left: 300px; top: 200px; cursor:pointer; ";
		blinkArrow(350,275,180,30);
		document.getElementById('d2').onclick = function () 
		{
			myStopFunction();
			disableOnClick("d2");
			document.getElementById('1').style.visibility = "hidden";
			document.getElementById('d18').style.visibility = "hidden";
			document.getElementById('ca').style.visibility = "hidden";
			document.getElementById('cb').style.visibility = "hidden";
			document.getElementById('d2').style.animation = "mixSoil 1.5s 2";
			setTimeout(function () 
			{
				document.getElementById('d4').style.visibility = "visible";
				setTimeout(function () 
				{
					document.getElementById('d2').style.visibility = "hidden";
					document.getElementById('d1').style.visibility = "hidden";
					document.getElementById('d6').style.visibility = "visible";
					setTimeout(function () 
					{
						blinkArrow(430,350,360,30);
						document.getElementById('d6').onclick = function ()
						{
							myStopFunction();
							disableOnClick("d6");
							document.getElementById('d6').style.animation = "move24 1s  forwards";
							setTimeout(function () 
							{
								document.getElementById('d6').style.visibility = "visible";
								setTimeout(function () 
								{
									document.getElementById('d7').style.visibility = "visible";
									setTimeout(function () 
									{
										document.getElementById('d5').style.visibility = "visible";
										document.getElementById('d7').style.visibility = "hidden";
										setTimeout(function () 
										{
											document.getElementById('d5').style.visibility = "hidden";
											document.getElementById('d8').style.visibility = "visible";
											document.getElementById('d7').style.visibility = "visible";
											setTimeout(function () 
											{
												document.getElementById('d7').style.visibility = "hidden";
												document.getElementById('d5').style.visibility = "visible";
												setTimeout(function () 
												{
													document.getElementById('d5').style.visibility = "hidden";
													document.getElementById('d9').style.visibility = "visible";
													setTimeout(function () 
													{
														document.getElementById('d7').style.visibility = "visible";
														document.getElementById('d5').style.visibility = "hidden";
														setTimeout(function () 
														{
															document.getElementById('d7').style.visibility = "hidden";
															document.getElementById('d5').style.visibility = "visible";
															setTimeout(function () 
															{
																document.getElementById('d5').style.visibility = "hidden";
																document.getElementById('d10').style.visibility = "visible";
																document.getElementById('d13').style.visibility = "visible";
																document.getElementById('d17').style.visibility = "visible";
																step51();
															}, 1000);
														}, 1000);
													}, 1000);
												}, 1000);
											}, 1000);
										}, 1000);
									}, 1000);
								}, 500);
							}, 500);
						}
					}, 600);
				}, 2500);
			}, 1000);
		}
	} 
	
	else if(simsubscreennum == 7)
	{
		document.getElementById('d28').style.visibility = "hidden";
		document.getElementById('d19').style.visibility = "hidden";
		document.getElementById('pl').style.visibility = "hidden";
		document.getElementById('pll').style.visibility = "hidden";
		document.getElementById('d18').style.visibility = "hidden";
		document.getElementById('da').style.visibility = "hidden";
		document.getElementById('db').style.visibility = "hidden";
		
		document.getElementById("t11").innerHTML=dataset1[0]+" g";
		document.getElementById("t12").innerHTML=bulkDen+" g/cc";
		document.getElementById("t13").innerHTML=dataset2[0]+" g";
		document.getElementById("t14").innerHTML=dataset2[1]+" g";
		document.getElementById("t15").innerHTML=dataset1[0]-dataset2[0]+" g";

		dsoil = dsand*(dataset2[1]/(dataset1[0]-dataset2[0]));
		
		document.getElementById("chk2").onclick=function()
		{
			var id=document.getElementById("wd2");
			var mark=document.getElementById("mark2");
			var chk=document.getElementById("chk2");
			var res=document.getElementById("res2");
			evaluateAnswer(id, dsoil, mark, chk, res);
		}
	}
	
	else if (simsubscreennum == 8) 
	{
		document.getElementById('mark2').style.visibility = "hidden";
		weighContainer(6,"0.004","28.30","Weight of container with lid, (W<sub>1</sub>)");
	} 

	else if (simsubscreennum == 9) 
	{
		document.getElementById('trial').style="visibility:visible; left: 700px; top:90px; position: absolute;font-weight: bold;text-transform: uppercase;";
        document.getElementById('trial').innerHTML="Trial : "+repeat;
		document.getElementById('wm6').style.visibility = "hidden";
		document.getElementById('on6').style.visibility = "hidden";
		document.getElementById('tare6').style.visibility = "hidden";
		document.getElementById('container6').style.visibility = "hidden";
		document.getElementById("p6-1").style.visibility = "hidden";
		document.getElementById("p6-2").style.visibility = "hidden";
		document.getElementById("e2").style.visibility = "visible";
		document.getElementById("e3").style.visibility = "visible";
		document.getElementById("e4").style.visibility = "visible";
		document.getElementById("e5").style.visibility = "visible";
		document.getElementById("e6").style.visibility = "visible";
		document.getElementById("e10").style.visibility = "visible";
		blinkArrow(590,250,270,30);
		document.getElementById('e2').onclick = function () 
		{
			myStopFunction();
			disableOnClick("e2");
			document.getElementById('e2').style.animation = "moveTrowel71 1s  forwards";
			document.getElementById('e2').style.visibility = "visible";
			setTimeout(function () 
			{
				document.getElementById('e2').style.visibility = "hidden";
				document.getElementById('e3').style.visibility = "hidden";
				document.getElementById('e7').style="position: absolute; left:310px; top: 330px;";
				document.getElementById('e7').style.visibility = "visible";
				setTimeout(function () 
				{
					blinkArrow(410,360,270,30);
					document.getElementById('e7').onclick = function () 
					{
						myStopFunction();
						disableOnClick("e7");
						document.getElementById('e7').style.animation = "moveTrowel72 1s forwards";
						setTimeout(function () 
						{
							blinkArrow(180,330,270,30);
							document.getElementById('e7').onclick = function () 
							{
								myStopFunction();
								disableOnClick("e7");
								document.getElementById('e7').style="position:absolute; left:110px; top: 280px;";
								document.getElementById('e7').style.animation = "rotMv3 2s  forwards";
								setTimeout(function () 
								{
									document.getElementById('e711').style.visibility = "visible";
									document.getElementById('container7').style.visibility = "visible";
									document.getElementById('e7').style.visibility = "hidden";
									setTimeout(function () 
									{
										document.getElementById('e711').style.visibility = "hidden";
										document.getElementById('e3').style.visibility = "hidden";
										document.getElementById('e4').style.visibility = "hidden";
										document.getElementById('e5').style.visibility = "hidden";
										document.getElementById('e6').style.visibility = "hidden";
										document.getElementById('e10').style.visibility = "hidden";
										setTimeout(function()
										{
											weighContainer(7,"0.001","50.12","Weight of wet soil with lid, (W<sub>2</sub>)");
										},500);
									}, 800);
								}, 1500);
							}
						},1200);
					}
				}, 500);
			}, 1100);
		}
	}

	else if (simsubscreennum == 10) 
	{
		document.getElementById('wm7').style.visibility = "hidden";
		document.getElementById('on7').style.visibility = "hidden";
		document.getElementById('tare7').style.visibility = "hidden";
		document.getElementById('container7').style.visibility = "hidden";
		document.getElementById("p7-1").style.visibility = "hidden";
		document.getElementById("p7-2").style.visibility = "hidden";
		document.getElementById("nextButton").style.visibility = "hidden";
		
		document.getElementById("13-11").style.visibility = "visible";
		document.getElementById("incDoor13-1").style = "visibility:visible;";
		document.getElementById("13-12").innerHTML = "&nbsp;110";
		blinkArrow(90,235,270,30);
		document.getElementById("13-11").onclick = function () 
		{
			myStopFunction();
			$('.door').toggleClass('doorOpen');
			document.getElementById("13-11").onclick = "";
			setTimeout(function () 
			{
				document.getElementById("13-11").style.visibility = "hidden";
			}, 350);
			setTimeout(function () 
			{
				blinkArrow(75,485,180,30);
				document.getElementById("13-3a").onclick = function ()
				{
					myStopFunction();
					document.getElementById("13-3a").onclick = "";
					document.getElementById("13-3a").style.animation = "placeContainerinOven 1.5s forwards";
					setTimeout(function () 
					{
						blinkArrow(430,255,0,30);
						document.getElementById("incDoor13-1").onclick = function () 
						{
							myStopFunction();
							document.getElementById("incDoor13-1").onclick = "";
							$('.door').toggleClass('doorOpen');
							setTimeout(function () 
							{
								document.getElementById("13-11").style.visibility = "visible";
								var temp = 110;
								blinkArrow(200,147,270,25);
								document.getElementById("13-13").onclick = function () 
								{
									if (temp < 115) 
									{
										temp++;
										document.getElementById("13-12").innerHTML =temp;
									}
									if (temp >= 115) 
									{
										myStopFunction();
										document.getElementById("13-13").onclick = "";
										setTimeout(function () 
										{
											document.getElementById("13-2").style.visibility = "visible";
											$("#13-3").fadeIn(1000);
											setTimeout(function () 
											{
												$("#13-3").fadeOut(2000);
												setTimeout(function () 
												{
													document.getElementById("13-2").style.visibility = "hidden";
													takeOutCaontainer();
												},2000);
											}, 2000);
										},1500);
									}
								}
							}, 1150);
						}
					}, 1500);
				}
			}, 1500);
		}
	} 

	else if(simsubscreennum == 11) 
	{
		document.getElementById("13-1").style.visibility = "hidden";
		document.getElementById("13-11").style.visibility = "hidden";
		document.getElementById("13-2").style.visibility = "hidden";
		document.getElementById("13-3").style.visibility = "hidden";
		document.getElementById("13-3").style.visibility = "hidden";
		document.getElementById("sheet11").style.visibility = "visible";
		weighContainer(9,"0.007","45.75","Weight of dry soil with lid, (W<sub>3</sub>)");
	}

	else if(simsubscreennum == 12)
	{
		document.getElementById('wm9').style.visibility = "hidden";
		document.getElementById('on9').style.visibility = "hidden";
		document.getElementById('tare9').style.visibility = "hidden";
		document.getElementById('container9').style.visibility = "hidden";
		document.getElementById("p9-1").style.visibility = "hidden";
		document.getElementById("p9-2").style.visibility = "hidden";
		document.getElementById("nextButton").style.visibility = "hidden";
		$("#13-33").fadeIn(1000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility = "visible";
		},1500);
	}

	else if(simsubscreennum == 13)
	{
		document.getElementById('trial').style.visibility = "hidden";
		document.getElementById('wm9').style.visibility = "hidden";
		document.getElementById('on9').style.visibility = "hidden";
		document.getElementById('tare9').style.visibility = "hidden";
		document.getElementById('container9').style.visibility = "hidden";
		document.getElementById("p9-1").style.visibility = "hidden";
		document.getElementById("p9-2").style.visibility = "hidden";
		document.getElementById("nextButton").style.visibility = "hidden";

		document.getElementById("t21").innerHTML=dsoil.toFixed(2);
		document.getElementById("t21Sand").innerHTML=dsand.toFixed(2);
		generate_table();
				
		avg=((dataset3[0][4]+dataset3[1][4]+dataset3[2][4])/3);
		dd = dsoil/(1+avg);
		
		document.getElementById("chk3").onclick=function()
		{
			var id=document.getElementById("wd3");
			var mark=document.getElementById("mark3");
			var chk=document.getElementById("chk3");
			var res=document.getElementById("res3");
			evaluateAnswer(id, dd, mark, chk, res);
		}
	}

}

function step1()
{
	document.getElementById('a8').onclick="";
	document.getElementById('a9').onclick="";
	myStopFunction();
	document.getElementById('a8').style.animation = "move2 1s forwards";
	document.getElementById('a9').style.animation = "move3 1s forwards";
	setTimeout(function () 
	{
		document.getElementById('can2').innerHTML = "Internal Diameter of calibrating container = <u>10cm</u>";
		setTimeout(function () 
		{
			document.getElementById('a8').style.visibility = "hidden";
			document.getElementById('a9').style.visibility = "hidden";
			document.getElementById('can1').style.visibility = "hidden";
			document.getElementById('can2').style.visibility = "hidden";
			document.getElementById('a1').style.visibility = "hidden";
			
			document.getElementById('cal').style.visibility = "visible";
			document.getElementById('canh').style.visibility = "visible";
			document.getElementById('cand').style.visibility = "visible";
			document.getElementById('can3').style.visibility = "visible";
			document.getElementById('tx').style.visibility = "visible";
			document.getElementById('q').style.visibility = "visible";
			document.getElementById('ch').style.visibility = "visible";
			document.getElementById('cap1').style.visibility = "visible";

			document.getElementById('ch').onclick = function() 
			{
				if (document.getElementById('tx').value == "") 
				{
					alert("Enter the value to proceed");
				}
				else 
				{
					var n = 1138.685;
					if (document.getElementById('tx').value == n) {
						document.getElementById('w1').style.visibility = "hidden";
						document.getElementById('result').style.visibility = "visible";
						document.getElementById('ch').style.visibility = "hidden";
						document.getElementById('re').style.visibility = "hidden";
						validateAnswer_(0, 0, "300px", "400px");
					} 
					else 
					{
						document.getElementById('result').style.visibility = "hidden";
						document.getElementById('ch').style.visibility = "visible";
						document.getElementById('re').style.visibility = "visible";
						document.getElementById('w1').style.visibility = "visible";
						document.getElementById('re').onclick = function () {
							step38();
						};
					}
					function step38()
					{
						document.getElementById('tx').style.visibility = "hidden";
						document.getElementById('w1').style.visibility = "hidden";
						document.getElementById('q').style.visibility = "hidden";
						document.getElementById('re').style.visibility = "hidden";
						document.getElementById('ch').style.visibility = "hidden";
						document.getElementById('value').style.visibility = "visible";
						validateAnswer_(0, 0, "300px", "360px");
					}
				}
			}
		},1000);
	}, 2000);
}


function takeOutCaontainer()
{
	blinkArrow(90,235,270,30);
    document.getElementById("13-11").onclick=function()
    {
        myStopFunction();
        $('.door').toggleClass('doorOpen');
        document.getElementById("13-11").onclick="";
        setTimeout(function()
        {
            document.getElementById("13-11").style.visibility="hidden";
            setTimeout(function()
            {
				blinkArrow(75,250,180,30);
                document.getElementById("13-3a").onclick=function()
                {
                    myStopFunction();
                    document.getElementById("13-3a").onclick="";
                    document.getElementById("13-3a").style.animation="placeContainerBack 1.5s forwards";
                    setTimeout(function()
                    {
						blinkArrow(430,255,0,30);
                        document.getElementById("incDoor13-1").onclick=function()
                        {
                            myStopFunction();
                            document.getElementById("incDoor13-1").onclick="";
                            $('.door').toggleClass('doorOpen');
                            setTimeout(function()
                            {
                                document.getElementById("13-11").style.visibility="visible";
                                document.getElementById("13-2").style.visibility="hidden";
								setTimeout(function()
								{
									validateAnswer_(4, 0, "420px", "180px");
								},500);
                            },1150);
                        }
                    },1500);
                }
            },1500);
        },350);
    }
}

function weighContainer(can,randVal,weight,statement)
{
	document.getElementById('wm'+can).style.visibility = "visible";
	document.getElementById("wm"+can).style.backgroundColor = "lightgrey";
	document.getElementById('on'+can).style.visibility = "visible";
	document.getElementById('tare'+can).style.visibility = "visible";
	document.getElementById('p'+can+'-1').innerHTML = randVal;
	blinkArrow(635,440,90,30);
	document.getElementById('tare'+can).onclick = function () 
	{
		myStopFunction();
		document.getElementById('tare'+can).onclick = " ";
		document.getElementById('p'+can+'-1').innerHTML = "00.00";
		setTimeout(function () 
		{
			blinkArrow(115,445,180,30);
			document.getElementById('container'+can).onclick = function () 
			{
				myStopFunction();
				document.getElementById('container'+can).onclick = "";
				document.getElementById('container'+can).style.animation = "moveContainer 1s  forwards";
				setTimeout(function () 
				{
					document.getElementById('p'+can+'-1').innerHTML = weight;
					setTimeout(function()
					{
						document.getElementById('p'+can+'-2').style.visibility = "visible";
						document.getElementById('p'+can+'-2').innerHTML = statement+"= <u>"+weight+"</u> g";
						document.getElementById('nextButton').style.visibility = "visible";
					},1000);
				},1200);
			}
		},500);
	}
}

function step51()
{
	setTimeout(function () 
	{
		blinkArrow(350,260,180,30);
		document.getElementById('d13').onclick = function ()
		{
			myStopFunction();
			disableOnClick("d13");
			document.getElementById('d13').style.animation = "move22 2s  forwards";
			setTimeout(function ()
			{
				document.getElementById('d10').style.visibility = "hidden";
				document.getElementById('d13').style.visibility = "hidden";
				document.getElementById('d5').style.visibility = "visible";
				document.getElementById('pll').style.visibility = "visible";
				setTimeout(function () 
				{
					blinkArrow(315,260,180,30);
					document.getElementById('d5').onclick = function () 
					{
						myStopFunction();
						disableOnClick("d5");
						document.getElementById('d5').style.animation = "move23 1.5s forwards";
						setTimeout(function () 
						{
							document.getElementById('d5').style.visibility = "hidden";
							document.getElementById('d14').style.visibility = "visible";
							document.getElementById('d13').style.visibility = "visible";
							step511();
						},1500);
					}
				},500);
			}, 2000);
		}
	},500);					
}

function step511()
{
	document.getElementById('d13').style.animation = "move25 2s  forwards";
	setTimeout(function () 
	{
		document.getElementById('d8').style.visibility = "hidden";
		document.getElementById('d13').style.visibility = "hidden";
		document.getElementById('d5').style.visibility = "visible";
		setTimeout(function ()
		{
			document.getElementById('d5').style.visibility = "hidden";
			document.getElementById('d16').style.visibility = "visible";
			document.getElementById('d13').style.visibility = "visible";
			setTimeout(function () 
			{
				document.getElementById('d13').style.animation = "move26 2s forwards";
				setTimeout(function () 
				{
					document.getElementById('d10').style.visibility = "hidden";
					document.getElementById('d9').style.visibility = "hidden";
					document.getElementById('d13').style.visibility = "hidden";
					document.getElementById('d5').style.visibility = "visible";
					document.getElementById('d16').style.visibility = "visible";
					document.getElementById('d15').style.visibility = "visible";
					setTimeout(function () 
					{
						document.getElementById('d5').style.visibility = "hidden";
						document.getElementById('d24').style.visibility = "visible";
						document.getElementById('d25').style.visibility = "visible";
						document.getElementById('d6').style.visibility = "visible";
						setTimeout(function () 
						{
							blinkArrow(100,290,270,30);
							document.getElementById('d25').onclick = function () 
							{
								myStopFunction();
								disableOnClick("d25");
								document.getElementById('d25').style.animation = "move27 2s  forwards";
								setTimeout(function () 
								{
									document.getElementById('d26').style.visibility = "visible";
									document.getElementById('d25').style.visibility = "hidden";
									document.getElementById('d17').style.visibility = "hidden";
									blinkArrow(565,140,180,30);
									document.getElementById('d29').style.visibility = "visible";
									step52();
								},600);
							}
						}, 1500);
					}, 500);
				}, 1100);
			}, 1500);
		}, 600);
	}, 500);
}

function step52()
{
	setTimeout(function () 
	{
		myStopFunction();
		blinkArrow(100,290,270,30);
		document.getElementById('d26').onclick = function ()
		{
			myStopFunction();
			disableOnClick("d26");
			document.getElementById('d26').style.animation = "move28 2s  forwards";
			setTimeout(function ()
			{
				document.getElementById('d26').style.visibility = "visible";
				setTimeout(function () 
				{
					document.getElementById('d29').style.visibility = "hidden";
					document.getElementById('d18').style.visibility = "visible";
					document.getElementById('d27').style.visibility = "visible";
					document.getElementById('d4').style.visibility = "hidden";
					document.getElementById('pll').style.visibility = "hidden";
					document.getElementById('d24').style.visibility = "hidden";
					document.getElementById('d6').style.visibility = "hidden";
					document.getElementById('d26').style.visibility = "hidden";
					document.getElementById('d12').style.visibility = "hidden";
					document.getElementById('d2').style.visibility = "hidden";
					document.getElementById('d14').style.visibility = "hidden";
					document.getElementById('d15').style.visibility = "hidden";
					document.getElementById('d16').style.visibility = "hidden";
					document.getElementById('da').style.visibility = "visible";
					document.getElementById('db').style.visibility = "visible";
					document.getElementById('v5').innerHTML = "0.003";
					document.getElementById("d18").style.backgroundColor = "lightgrey";
					setTimeout(function () 
					{
						blinkArrow(635,440,90,30);
						document.getElementById('db').onclick = function ()
						{
							myStopFunction();
							disableOnClick("db");
							document.getElementById('v5').innerHTML = "00.00";
							setTimeout(function () 
							{
								blinkArrow(100,270,180,30);
								document.getElementById('d27').onclick = function () 
								{
									myStopFunction();
									disableOnClick("d27");
									document.getElementById('d27').style.animation = "move29 1s  forwards";
									setTimeout(function () 
									{
										document.getElementById('d28').style.visibility = "visible";
										document.getElementById('d29').style.visibility = "visible";
										document.getElementById('d27').style.visibility = "hidden";
										document.getElementById('d29').style.visibility = "hidden";
										setTimeout(function () 
										{
											// document.getElementById('can5').innerHTML = "Weight of sand pouring cylinder with sand after poured in to the hole, W<sub>6</sub> = 4855g";
											document.getElementById('can5').innerHTML = "Weight of sand pouring cylinder with leftover sand after in-situ procedure, W<sub>6</sub> = 4855g";
											document.getElementById('v5').innerHTML = "4855.00";
											setTimeout(function () 
											{
												document.getElementById('d27').style.visibility = "hidden";
												// document.getElementById('can5').style.visibility = "hidden";
												document.getElementById('d24').style.visibility = "hidden";
												document.getElementById('d28').style.visibility = "hidden";
												document.getElementById('pl').style.visibility = "visible";
												document.getElementById('v5').innerHTML = "0.001";
												setTimeout(function()
												{
													blinkArrow(630,440,90,30);
													document.getElementById('db').onclick = function () 
													{
														myStopFunction();
														disableOnClick("db");
														document.getElementById('v5').innerHTML = "00.00";
														setTimeout(function () 
														{
															blinkArrow(140,430,180,30);
															document.getElementById('pl').onclick = function () 
															{
																myStopFunction();
																document.getElementById('pl').style.animation = "move9 1s  forwards";
																setTimeout(function () 
																{
																	document.getElementById('pl').style.visibility = "visible";
																	document.getElementById('v5').innerHTML = "1540.00";
																	document.getElementById('can500').innerHTML = "Weight of wet soil from the hole, W<sub>w</sub>=  <u>1540.00g</u> <br><br> Weight of Sand Pouring Cylinder with sand, W<sub>1</sub> =  6595g";
																	setTimeout(function()
																	{
																		document.getElementById('can5000').innerHTML = "Weight of sand in hole, W<sub>b</sub> = (W<sub>1</sub> - W<sub>6</sub>) =  <u>1740g</u>";
																		setTimeout(function()
																		{
																			validateAnswer_(3, 0, "100px", "200px");
																		},500);
																	},500);
																}, 1500);
															}
														}, 1000);
													}	
												},500);
											},1500);
										},600);
									},1000);
								}
							}, 1500);
						}
					}, 1100);	
				}, 1100);
			}, 500);
		}
	}, 1500);
}

function evaluateAnswer(id, ans, mark, chk, res)
{
	if(!id.value || !id.value!=" ")
	{
		alert("Enter the value to proceed ");
	}
	else
	{
		n = id.value;
		if(Math.round(n) == Math.round(ans))
		{
			mark.style="visibility:visible; color:green; font-size:22px;";
			var right="&#10004;";
			mark.innerHTML=right;
			chk.style.visibility="hidden";
			res.style.visibility="hidden";
			id.style.color="black";
			id.disabled=true;
			id.style.backgroundColor="white";
			document.getElementById("nextButton").style.visibility="visible";
			check();
		}
		else
		{
			res.disabled=false;
			var wrong="&#10008;";
			mark.style="visibility:visible; color:red; font-size:22px;";
			mark.innerHTML=wrong;
		}
	}	
	res.onclick=function()
	{
		chk.style.visibility="hidden";
		res.style.visibility="hidden";
		id.value=ans.toFixed(2);
		id.style.color="black";
		id.disabled=true;
		id.style.backgroundColor="white";
		mark.style.visibility="hidden";
		document.getElementById("nextButton").style.visibility="visible";
		check();
	}
}

function check()
{
	if(simsubscreennum==13)
	{
		document.getElementById("inference").style.visibility="visible";
		document.getElementById("nextButton").style.visibility="hidden";
	}
}