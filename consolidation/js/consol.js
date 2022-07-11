//Elapsed time  (min), √t, Dial gauge reading (div)
var dataset=[[0.00, 0, 430],
			[0.25, 0.5, 422],
			[1.00, 1, 408],
			[2.25, 1.5, 392],
			[4.00, 2, 381],
			[6.25, 2.5, 373],
			[9.00, 3, 369],
			[12.25, 3.5, 366],
			[16.00, 4, 365],
			[20.25, 4.5, 364],
			[25.00, 5, 363],
			[36.00, 6, 363],
			[49.00, 7, 363],
			[64.00, 8, 363],
			[81.00, 9, 362]];
			
var repeat=0;

// $(function()
// {
	// $('input').on('input', function() {
		// this.value = this.value.match(/\d*(\.\d*)?/)[0];
	// });
// });

var questions=["The type of soil used to conduct the vane shear test is _________ .",
			   "Top of shear vanes should be atleast _______ below the top surface ",
			   "The diameter of the vane is ______ ."];
			   
var options2=[["Loam","Alluvial","Clay","Silt"],//Clay
			  ["10mm","1.2cm","12mm","10cm"],//10mm
			  ["10mm","12.5mm","1.3cm","2mm"]];//12.5mm

function validateFormativeQA(qn,ans,left,top)
{
	$("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}

function create_totalTable(arr) 
{
	var j=0;
    var table = document.getElementById("totalTable");
    for(var i=2;i>=0;i--)
    {
		$("#totalTable").delay()
		.queue(function (create_totalTable) 
		{
			$(this).append("<tr><td style=\"border:1px solid black; padding:5px;\">" + (j+1) + "</td><td style=\"border:1px solid black; padding:5px;\">" + dataset[0][arr[j]] + "</td><td style=\"border:1px solid black; padding:5px;\">"+ dataset[1][arr[j]] +"</td><td style=\"border:1px solid black; padding:5px;\">"+ (dataset[1][arr[j]] - dataset[0][arr[j]]) +"</td></tr>");
			j++;
			create_totalTable(arr);
        });
	}
}

function create_totalTable2(arr) 
{
	var j=0;
    var table = document.getElementById("totalTable2");
    for(var i=2;i>=0;i--)
    {
		$("#totalTable2").delay()
		.queue(function (create_totalTable2) 
		{
			$(this).append("<tr><td style=\"border:1px solid black; padding:5px;\">" + (j+1) + "</td><td style=\"border:1px solid black; padding:5px;\">" + dataset[0][arr[j]] + "</td><td style=\"border:1px solid black; padding:5px;\">"+ dataset[1][arr[j]] +"</td><td style=\"border:1px solid black; padding:5px;\">"+ (dataset[1][arr[j]] - dataset[0][arr[j]]) +"</td><td style=\"border:1px solid black; padding:5px;\">"+ dataset[2][arr[j]] +"</td><td style=\"border:1px solid black; padding:5px;\"><input type=\"text\" style=\"width:50px;\"></td><td style=\"border:1px solid black; padding:5px;\"><input type=\"text\" style=\"width:50px;\"></td></tr>");
			j++;
			create_totalTable2(arr);
        });
	}
}

let h=7.5, d=3.8, H=1.25, D=1.25;
function create_totalTable3(arr) 
{
	var j=0;
    var table = document.getElementById("totalTable2");
	let tf=0;
    for(var i=2;i>=0;i--)
    {
		$("#totalTable2").delay()
		.queue(function (create_totalTable3) 
		{
			tf=(((dataset[2][arr[j]])/(Math.PI*d*d*((H/2)+(D/6))))*10).toFixed(2);
			//=(E9/((22/7)*B4*B4*((0.5*B5)+(B4/6))))
			console.log(tf);
			$(this).append("<tr><td style=\"border:1px solid black; padding:5px;\">" + (j+1) + "</td><td style=\"border:1px solid black; padding:5px;\">" + dataset[0][arr[j]] + "</td><td style=\"border:1px solid black; padding:5px;\">"+ dataset[1][arr[j]] +"</td><td style=\"border:1px solid black; padding:5px;\">"+ (dataset[1][arr[j]] - dataset[0][arr[j]]) +"</td><td style=\"border:1px solid black; padding:5px;\">"+ dataset[2][arr[j]] +"</td><td style=\"border:1px solid black; padding:5px;\">"+ tf +"</td><td style=\"border:1px solid black; padding:5px;\">"+ (tf*0.0981).toFixed(2) +"</td></tr>");
			j++;
			create_totalTable3(arr);
        });
	}
	setTimeout(function()
	{
		document.getElementById("p15-1").style.visibility="visible";
	},1000);
}

function clearTableRows(tableId)
{
	var rows = document.getElementById(tableId).rows;
	var i = rows.length;
	while (--i) 
	{
		rows[i].parentNode.removeChild(rows[i]);
	}
}


function navNext()
{
	for(temp=0;temp<15;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

function animatearrow()
{
    if (document.getElementById('arrow1').style.visibility=="hidden")
        document.getElementById('arrow1').style.visibility="visible";
    else
        document.getElementById('arrow1').style.visibility="hidden";
}

function highlight(id)
{
    if (document.getElementById(id).style.visibility=="hidden")
        document.getElementById(id).style.visibility="visible";
    else
        document.getElementById(id).style.visibility="hidden";
}

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
let topVal=470.5;
function placeLoad(){
	
}

function magic()
{
	if(simsubscreennum==1)
	{
		blinkArrow(520,270,360,40);
		document.getElementById('1-5').onclick=function()
		{
			myStopFunction();
			document.getElementById('1-5').onclick="";
			document.getElementById('1-5').style.transformOrigin="100% 80%";
			document.getElementById('1-5').style.animation = "valveturn-2 1s forwards ";
			setTimeout(function(){
				document.getElementById('1-5').style.visibility="hidden";
				document.getElementById('1-6').style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById('1-9').style.visibility="visible";
					document.getElementById('1-10').style.visibility="visible";
					document.getElementById('1-10').style.transformOrigin="100% 80%";
					document.getElementById('1-10').style.animation = "water-4 2.5s forwards ";
					setTimeout(function()
					{
						document.getElementById('1-9').style.visibility="hidden";
						document.getElementById('1-6').style.visibility="hidden";
						setTimeout(function()
						{
							document.getElementById("1-12").style.visibility="visible";
							blinkArrow(300,335,360,40);
							document.getElementById('1-12').onclick=function()
							{
								myStopFunction();
								document.getElementById('1-12').onclick="";
								document.getElementById('1-12').style.visibility="hidden";
								document.getElementById('1-13').style.visibility="visible";
								document.getElementById('1-13').style.animation = "mixSoil 1.5s 2 forwards ";
								setTimeout(function()
								{
									document.getElementById('1-14').style.visibility="visible";
									document.getElementById('1-7').style.visibility="hidden";
									document.getElementById('1-10').style.visibility="hidden";
									document.getElementById('1-11').style.visibility="hidden";
									document.getElementById('1-13').style.visibility="hidden";
									setTimeout(function()
									{
										document.getElementById("nextButton").style.visibility="visible";
									},500);
								},3000);
							}
						},500);
					},2500);
				},250);
			},1000);
		}
	}
	
	else if(simsubscreennum == 2)
	{
		document.getElementById("1-8").style.visibility="hidden";
		document.getElementById("1-14").style.visibility="hidden";
		setTimeout(function()
		{
			blinkArrow(70,420,180,30);
			document.getElementById("2-4").addEventListener('click',function(){
				myStopFunction();
				document.getElementById("2-4").style.visibility="hidden";
				document.getElementById("2-6").style.visibility="visible";
				document.getElementById("2-6").style.animation="placePorousStone 1.5s forwards";
				setTimeout(function(){
					document.getElementById("2-6").style.animation="";
					document.getElementById("2-6").style.visibility="hidden";
					document.getElementById("2-1").style.visibility="hidden";
					document.getElementById("2-2").style.visibility="visible";
					setTimeout(function(){
						document.getElementById("2-5").style.visibility="visible";
						blinkArrow(70,420,180,30);
						document.getElementById("2-5").addEventListener('click',function(){
							myStopFunction();
							document.getElementById("2-5").style.visibility="hidden";
							document.getElementById("2-6").style.visibility="visible";
							document.getElementById("2-6").style.animation="placePorousStone 1.5s forwards";
							setTimeout(function(){
								document.getElementById("2-6").style.visibility="hidden";
								document.getElementById("2-2").style.visibility="hidden";
								document.getElementById("2-3").style.visibility="visible";
								setTimeout(function(){		
								document.getElementById("nextButton").style.visibility="visible";
								},200);
							},1450);
						});
					},250);
				},1450);
			});
			
		},350);
	}
	else if(simsubscreennum == 3)
	{
		document.getElementById("2-3").style.visibility="hidden";
		setTimeout(function()
		{
			blinkArrow(380,490,90,30);
			document.getElementById("3-0on").onclick=function()
			{
				myStopFunction();
				document.getElementById("3-0on").onclick="";
				document.getElementById("3-0on").style.visibility="hidden";
				weightOfContainer(3);
			}
		},300);
	}
	
	else if(simsubscreennum == 4)
	{
		document.getElementById("nextButton").style.visibility = "hidden";	
		setTimeout(function()
		{
			document.getElementById("4-3").style.visibility="visible";
			blinkArrow(265,320,270,30);
			document.getElementById("4-3").onclick=function()
			{
				myStopFunction();
				document.getElementById("4-3").onclick="";
				document.getElementById("4-3").style.animation="moveSpatula1 0.4s forwards";
				setTimeout(function()
				{
					document.getElementById("4-3").style.animation="";
					document.getElementById("4-3").style.visibility="hidden";
					document.getElementById("4-0").style="position:absolute; left:210px; top:394px; width:79px; height:23px; background-color:#BB834C; border-radius: 100px / 30px; ";
					document.getElementById("4-4").style.visibility="visible";
					document.getElementById("4-4").style.animation="moveSpatula2 1.5s forwards";
					setTimeout(function()
					{
						document.getElementById("4-4").style="position:absolute; left:395px; top:305px;";
						document.getElementById("4-4").style.animation="rotateSpatula 0.5s forwards";
						setTimeout(function()
						{
							document.getElementById("4-4").style.visibility="hidden";
							document.getElementById("4-3").style.visibility="visible";
							document.getElementById("4-5").style="position:absolute; left: 485px; top: 401.5px; width: 50px; height: 15px; background-color: rgb(187, 131, 76); border-radius: 50%; visibility: visible;";
							setTimeout(function()
							{
								document.getElementById("4-3").style.visibility="hidden";
								document.getElementById("4-0").style="position:absolute; left:210px; top:398px; width:79px; height:23px; background-color:#BB834C; border-radius: 100px / 30px; ";
								document.getElementById("4-4").style.visibility="visible";
								document.getElementById("4-4").style="position:absolute; left:145px; top:355px;";
								document.getElementById("4-4").style.animation="moveSpatula2 1.5s forwards";
								setTimeout(function()
								{
									document.getElementById("4-4").style="position:absolute; left:395px; top:305px;";
									document.getElementById("4-4").style.animation="rotateSpatula 0.5s forwards";
									setTimeout(function()
									{
										document.getElementById("4-4").style.visibility="hidden";
										document.getElementById("4-3").style.visibility="visible";
										document.getElementById("4-5").style="position:absolute; left: 475px; top: 397.5px; width: 70px; height: 22px; background-color: rgb(187, 131, 76); border-radius: 50%; visibility: visible;";
										setTimeout(function()
										{
											document.getElementById("4-3").style.visibility="hidden";
											document.getElementById("4-0").style="position:absolute; left:211.5px; top:402px; width:75.5px; height:23px; background-color:#BB834C; border-radius: 100px / 30px; ";
											document.getElementById("4-4").style.visibility="visible";
											document.getElementById("4-4").style="position:absolute; left:145px; top:355px;";
											document.getElementById("4-4").style.animation="moveSpatula2 1.5s forwards";
											setTimeout(function()
											{
												document.getElementById("4-4").style="position:absolute; left:390px; top:308px;";
												document.getElementById("4-4").style.animation="rotateSpatula 0.5s forwards";
												setTimeout(function()
												{
													document.getElementById("4-5").style.visibility="visible"; 
													document.getElementById("4-4").style.visibility="hidden";
													document.getElementById("4-5").style="position:absolute; left: 465px; top: 395px; width: 90px; height: 25px; background-color: rgb(187, 131, 76); border-radius: 50%; visibility: visible;";
													setTimeout(function()
													{
														document.getElementById("4-3").style.visibility="hidden";
														document.getElementById("4-0").style="position:absolute; left:211.5px; top:402px; width:71.5px; height:23px; background-color:#BB834C; border-radius: 100px / 30px; ";
														document.getElementById("4-4").style.visibility="visible";
														document.getElementById("4-4").style="position:absolute; left:145px; top:355px;";
														document.getElementById("4-4").style.animation="moveSpatula2 1.5s forwards";
														setTimeout(function()
														{
															document.getElementById("4-4").style="position:absolute; left:390px; top:308px;";
															document.getElementById("4-4").style.animation="rotateSpatula 0.5s forwards";
															setTimeout(function()
															{
																document.getElementById("4-5").style.visibility="visible"; 
																document.getElementById("4-4").style.visibility="hidden";
																document.getElementById("4-5").style="position:absolute; left: 450px; top: 392px; width: 117px; height: 25px; background-color: rgb(187, 131, 76); border-radius: 50%; visibility: visible;";
																setTimeout(function()
																{
																	document.getElementById("nextButton").style.visibility="visible";
																},500);	
															},500);//
														},1500);
													},500);
												},500);//
											},1500);
										},500);
									},500);//
								},1500);
							},500);
						},500);//
					},1500);
				},400);
			}
		},500);
	}
	else if(simsubscreennum == 5)
	{
		document.getElementById("4-5").style.visibility = "hidden";
		weightOfContainer(5);
	}
	else if(simsubscreennum == 6)
	{
		document.getElementById("6-2P1").onclick=function()
		{
			document.getElementById("6-2P1").onclick="";
			placeApparatusInOrder("6-1S","6-1F","6-1P",120,"Porous stone is placed at the bottom");
			document.getElementById("6-2F1").onclick=function()
			{
				document.getElementById("6-2F1").onclick="";
				placeApparatusInOrder("6-1S","6-1P","6-1F",240,"Filter paper is placed on top of poruos stone");
				document.getElementById("6-2S").onclick=function()
				{
					document.getElementById("6-2S").onclick="";
					placeApparatusInOrder("6-1P","6-1F","6-1S",360,"Specimen ring is placed on top of filter paper");
					document.getElementById("6-2F2").onclick=function()
					{
						document.getElementById("6-2F2").onclick="";
						placeApparatusInOrder("6-1S","6-1P","6-1F",480,"Filter paper is placed on top of specimen ring");
						document.getElementById("6-2P2").onclick=function()
						{
							document.getElementById("p6-1").style.visibility="hidden";
							document.getElementById("6-2P2").onclick="";
							placeApparatusInOrder("6-1S","6-1F","6-1P",600,"Porous stone is placed on top of filter paper <br>Consolidometer is assembled correctly");
							setTimeout(function()
							{
								document.getElementById("nextButton").style.visibility="visible";
							},2700);
						}
					}
				}
			}
		}
	}
	else if(simsubscreennum == 7)
	{
		document.getElementById("6-1P").style.visibility="hidden";
		setTimeout(function()
		{
			blinkArrow(450,170,180,30);
			document.getElementById("7-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("7-2").onclick="";
				document.getElementById("7-2").style.animation="moveLid 0.75s forwards";
				setTimeout(function()
				{
					document.getElementById("7-3").style.visibility="visible";
					document.getElementById("p7-2").style.visibility="visible";
					setTimeout(function()
					{
						document.getElementById("nextButton").style.visibility="visible";
					},1250);
				},750);
			}
		},500);
	}
	else if(simsubscreennum == 8)
	{
		document.getElementById("7-3").style.visibility="hidden";
		document.getElementById("p7-2").style.visibility="hidden";
		setTimeout(function()
		{
			blinkArrow(500,290,180,30);
			document.getElementById("8-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("8-2").onclick="";
				document.getElementById("8-2").style.animation="movePPad 0.75s forwards";
				setTimeout(function()
				{
					document.getElementById("p8-1").innerHTML="Pressure pad is fixed properly";
					setTimeout(function()
					{
						document.getElementById("nextButton").style.visibility="visible";
					},200);
				},750);
			}
		},500);
	}
	else if(simsubscreennum===9)
	{
		blinkArrow(615,390,0,30);
		document.getElementById("9-2").onclick=function()
		{
			myStopFunction();
			document.getElementById("9-2").style.animation="moveMould 0.8s forwards";
			setTimeout(function(){
				document.getElementById("nextButton").style.visibility="visible";
			},1100);
		}
	}
	else if(simsubscreennum===10)
	{
		setTimeout(function()
		{
			blinkArrow(360,410,310,30);
			document.querySelector('#connect').addEventListener("click",function()
			{
				myStopFunction();
				document.getElementById("10-2").style.visibility="visible";
				document.getElementById("10-2").style.animation="connect 0.35s forwards";
				setTimeout(function(){
					document.getElementById("10-2").style.visibility="hidden";
					document.getElementById("10-3").style.visibility="visible";
					setTimeout(function(){
						document.getElementById("nextButton").style.visibility="visible";
					},400);
				},250);
			});
		},500);
	}
	else if(simsubscreennum==11){
		document.getElementById("10-3").style.visibility="hidden";
		setTimeout(function()
		{
			blinkArrow(120,205,180,35);
			document.getElementById("11-2").addEventListener("click",function()
			{
				myStopFunction();
				document.getElementById("11-2").onclick="";
				document.getElementById("11-2").style.animation="placeDialGuage 1s forwards";
				setTimeout(function(){
					document.querySelector("#nextButton").style.visibility="visible";
				},1250);
			});
		},500);
	}
	else if(simsubscreennum==12){
		const loadDiv=document.getElementById('12-3');
		let count=0;
		let rep=setInterval(function()
		{
			count++;
			document.getElementById('12-2').style.visibility="visible";
			blinkArrow(505,480,270,35);
			document.getElementById("12-2").addEventListener("click",function()
			{
				myStopFunction();
				document.getElementById("12-2").onclick="";
				document.getElementById('12-2').style.visibility="hidden";
				topVal=topVal-5;
				const loadImg=document.createElement('img');
				loadImg.src="images/weight.png";
				loadImg.style.position="absolute";
				loadImg.style.left="112.5px";
				loadImg.style.top=topVal+"px";
				loadDiv.append(loadImg);
				
			});
		},1000);
		if(count>=5)
			clearInterval(rep);
	}
}		

function weightOfContainer(id)
{
	document.getElementById(id+"-1").style.visibility="visible";
	document.getElementById("p"+id+"-1").innerHTML="000.01";
	document.getElementById(id+"-0").style.backgroundColor="lightgrey";
	setTimeout(function()
	{
		blinkArrow(488.5,490,90,30);
		document.getElementById(id+"-1").onclick=function()
		{
			myStopFunction();
			document.getElementById(id+"-1").onclick="";
			document.getElementById(id+"-1").style.visibility="hidden";
			document.getElementById("p"+id+"-1").innerHTML="000.00";
			setTimeout(function()
			{
				blinkArrow(65,435,180,35);
				document.getElementById(id+"-2").onclick=function()
				{
					myStopFunction();
					document.getElementById(id+"-2").onclick="";
					document.getElementById(id+"-2").style.animation="placeEmptyContainer8 1.25s forwards";
					if(id==5)
					{
						document.getElementById(id+"-5").style.animation="placeEmptyContainerWithSoil8 1.25s forwards";
					}
					setTimeout(function()
					{
						//IsInt(dataset[p][1]);
						if(id==3)
						{
							document.getElementById("p"+id+"-1").innerHTML="145.00";
							// document.getElementById("p"+id+"-2").innerHTML="Weight of empty metal tube = "+dataset[p][0]+" g";
							document.getElementById("p"+id+"-2").innerHTML="Weight of empty specimen ring = 145 g";
						}
						if(id==5)
						{
							document.getElementById("p"+id+"-1").innerHTML="291.00";
							document.getElementById("p"+id+"-2").innerHTML="Weight of metal tube + specimen ring, W<sub>2</sub> = 291 g";
						}
						setTimeout(function()
						{
							// if(id==6)
							// {
								// validateFormativeQA(0,2,"150px","100px");
							// }
							document.getElementById("nextButton").style.visibility="visible";
						},500);
					},1300);	
				}
			},750);
		}
	},500);
}

function placeApparatusInOrder(id1,id2,id3,wid,stat)
{
	document.getElementById("p6-4").style.visibility="visible";
	document.getElementById(id1).style.visibility="hidden";
	document.getElementById(id2).style.visibility="hidden";
	document.getElementById(id3).style.visibility="visible";
	document.getElementById("6-3").style.width=wid+"px";
	document.getElementById("p6-4").innerHTML=stat;
	setTimeout(function()
	{
		document.getElementById("p6-4").style.visibility="hidden";
	},2700);
}