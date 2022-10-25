var w4=0;wd=0;v1=0;v2=0,ws=0,cnt=0;;
//Weight of empty shrinkage cup, W1 // Weight of shrinkage cup + wet soil (W2 grams), //Weight of shrinkage cup + dry soil (W3 grams), //Weight of empty shrinkage cup + Mercury (W5 grams), //Empty weight of immersion cup (W6 grams),//Weight of immersion cup + Mercury (W7 grams),//Weight of immersion cup + Mercury after immersion of soil pat (W8 grams)
var dataset=[[63.6,102.8,88,381.4,184.2,1057.8,855.4],
			[63.6,104.21,89.95,381.4,184.2,1058.5,855.7],
			[63.6,103.54,88.5,381.4,184.2,1057.64,856],
			[63.6,102.7,87.9,381.4,184.2,1059.01,855.9],
			[63.6,101.98,87.3,381.4,184.2,1057.85,854.9],
			[63.6,103.26,88.56,381.4,184.2,1058.7,854.3],
			[63.6,102.78,89,381.4,184.2,1057.34,855],
			[63.6,101.8,87.9,381.4,184.2,1056.99,855.5]];
			   
var repeat=0;
var p=Math.floor((Math.random() * 8));
// $(function()
// {
	// $('input').on('input', function() {
		// this.value = this.value.match(/\d*(\.\d*)?/)[0];
	// });
// });

var questions=["Which is the sieve size through which the soil has to pass for this experiment?",
			   "What amount of soil should be taken for this experiment?",
			   "Which liquid is used to calculate the volume of soil pat?"];
			   
var options2=[["425μ sieve","75μ sieve","300μ sieve","150μ sieve"],//425μ sieve
			  ["200 grams","150 grams","20 grams","100 grams"],//100 grams
			  ["Sodium","Mercury","Manganese","Water"]];//Mercury

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

function generate_table() 
{
	var j=0;
    var table = document.getElementById("dataTable");
    for(var i=2;i>=0;i--)
    {
			$("#dataTable").delay()
            .queue(function (generate_table) {
            $(this).append("<tr><td>" + dataset[j][0] + "</td><td>" + dataset[j][1] + "</td><td>"+dataset[j][2]+"</td><td>"+dataset[j][3]+"</td><td>"+dataset[j][4]+"</td><td>"+(dataset[j][3] - dataset[j][4]).toFixed(2)+"</td><td>"+(dataset[j][4] - dataset[j][2]).toFixed(2)+"</td><td>" + ((dataset[j][3] - dataset[j][4]) /(dataset[j][4] - dataset[j][2])*100).toFixed(2)+ "</td></tr>");
			j++;
            generate_table();
        });
	}
}

function navNext()
{
	for(temp=0;temp<=18;temp++)
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

function magic()
{
	// if(simsubscreennum==1)
	// {
		// repeat+=1;
		 // // document.getElementById('mark1').style.visibility="hidden";
		 // // document.getElementById('mark2').style.visibility="hidden";
		 // // document.getElementById('mark3').style.visibility="hidden";
		// document.getElementById('1-1').style.visibility="visible";
		// document.getElementById('1-3').style.visibility="visible";
		// setTimeout(function()
		// {
			// blinkArrow(277.5,490,90,30);
			// document.getElementById("1-1").onclick=function()
			// {
				// myStopFunction();
				// document.getElementById("1-1").onclick="";
				// document.getElementById("1-1").style.visibility="hidden";
				// document.getElementById("1-0").style.backgroundColor="lightgrey";
				// setTimeout(function()
				// {
					// document.getElementById("1-2").style.visibility="visible";
					// document.getElementById("p1-1").innerHTML="000.10";
					// setTimeout(function()
					// {
						// blinkArrow(285,180,360,40);
						// document.getElementById("1-2").onclick=function()
						// {
							// myStopFunction();
							// document.getElementById("1-2").onclick="";
							// document.getElementById("1-2").style.animation="movePlate 1.5s forwards";
							// setTimeout(function()
							// {
								// blinkArrow(387.5,490,90,30);
								// document.getElementById("1-3").onclick=function()
								// {
									// myStopFunction();
									// document.getElementById("1-3").onclick="";
									// document.getElementById("1-3").style.visibility="hidden";
									// document.getElementById("p1-1").innerHTML="000.00";
									// setTimeout(function()
									// {
										// document.getElementById("1-4").style.visibility="visible";
										// blinkArrow(630,190,360,40);
										// document.getElementById("1-4").onclick=function()
										// {
											// myStopFunction();
											// document.getElementById("1-4").onclick="";
											// document.getElementById('1-4').style.transformOrigin = "100% 80%";
											// document.getElementById('1-4').style.animation = "rotateSieve 1.5s forwards ";
											// setTimeout(function()
											// {
												// document.getElementById('1-4').style.visibility="hidden";
												// document.getElementById('1-5').style.visibility="visible";
												// setTimeout(function()
												// {
													// document.getElementById("p1-1").innerHTML="100.00";
													// document.getElementById("nextButton").style.visibility="visible";
												// },500);
											// },1500);
										// }	
									// },1000);
								// }
							// },1500);
							// }
					// },750);
				// },650);
			// }
		// },500);
	// }
	
	if(simsubscreennum==1)
	{
		//refresh();
		repeat+=1;
		// document.getElementById('1-1').style.visibility="hidden";
		// document.getElementById('1-3').style.visibility="hidden";
		// document.getElementById("1-2").style.visibility="hidden";
		// document.getElementById("1-4").style.visibility="hidden";
		// document.getElementById("1-5").style.visibility="hidden";
		// document.getElementById("nextButton").style.visibility = "hidden";
		
		document.getElementById('2-1').style.visibility="visible";
        document.getElementById('2-2').style.visibility="visible";
		
		setTimeout(function()
		{
			blinkArrow(440,360,180,40);
			document.getElementById('2-2').onclick=function()
			{
				myStopFunction();
				document.getElementById('2-2').style.animation="placeSieve 1.5s forwards";
				setTimeout(function()
				{
					document.getElementById('2-6').style.visibility="visible";
					setTimeout(function()
					{
						blinkArrow(280,200,180,40);
						document.getElementById('2-6').onclick=function()
						{
							myStopFunction();
							document.getElementById('2-6').style.transformOrigin = "100% 80%";
							document.getElementById('2-6').style.animation = "rotateSieve 1.0s forwards ";
							setTimeout(function()
							{
								document.getElementById('2-7').style.visibility="visible";
								setTimeout(function()
								{
									document.getElementById('2-6').style.visibility="hidden";
									document.getElementById('2-7').style.visibility="hidden";
									setTimeout(function()
									{
										document.getElementById('2-3').style.visibility="visible";
										document.getElementById('2-5').style.visibility="visible";
										blinkArrow(394,214,360,40);
										document.getElementById('2-5').onclick=function()
										{
											myStopFunction();
											document.getElementById('2-5').style.animation="placeCap 0.75s forwards";
											setTimeout(function()
											{
												//validateFormativeQA(2,1,"100px","150px");
												document.getElementById('nextButton').style.visibility="visible";
											},1000);
										}
									},300);
								},200); 
							},800);
						}
					},1000);
				},1500);
			}
		},800);
	}
	
	else if(simsubscreennum==2)
	{
		//refresh();
		for(var i=1; i<=3; i++)
		{
			document.getElementById("2-"+i).style.visibility="hidden";
		}
		for(var i=5; i<=7; i++)
		{
			document.getElementById("2-"+i).style.visibility="hidden";
		}
		document.getElementById('3-1').style.visibility="visible";
		document.getElementById('3-2').style.visibility="visible";
		document.getElementById('3-3').style.visibility="visible";
		document.getElementById('3-5').style.visibility="visible";
		document.getElementById('3-7').style.visibility="visible";
		document.getElementById('3-8').style.visibility="visible";
		blinkArrow(435,230,180,40);
		document.getElementById('3-1').onclick=function()
		{
			myStopFunction();
			document.getElementById('3-1').style.visibility="hidden";
			document.getElementById('3-6').style.visibility="visible";
			document.getElementById('3-9').style.visibility="visible";
			blinkArrow(435,180,180,40);
			document.getElementById('3-9').onclick=function()
			{
				myStopFunction();
				document.getElementById('3-9').onclick="";
				document.getElementById('3-9').style.visibility="hidden";
				document.getElementById('3-10').style.visibility="visible";
				blinkArrow(192,163,180,40);
				document.getElementById('3-7').onclick=function()
				{
					myStopFunction();
					document.getElementById('3-7').onclick="";
					document.getElementById('3-7').style.visibility="hidden";
					document.getElementById('3-11').style.visibility="visible";
					blinkArrow(377,163.5,360,40);
					document.getElementById('3-8').onclick=function()
					{
						myStopFunction();
						document.getElementById('3-8').onclick="";
						document.getElementById('3-8').style.visibility="hidden";
						document.getElementById('3-12').style.visibility="visible";
						blinkArrow(222,354,90,40);
						document.getElementById('3-3').onclick=function()
						{
							myStopFunction();
							document.getElementById('3-3').onclick="";
							document.getElementById('3-3').style.visibility="hidden";
							document.getElementById('3-4').style.visibility="visible";
							document.getElementById("3-6").style.animation="shakeSieveSet 0.5s infinite linear";
							setTimeout(function()
							{
								blinkArrow(300,365,90,40);
								document.getElementById('3-5').onclick=function()
								{
									myStopFunction();
									document.getElementById('3-5').onclick="";
									document.getElementById("3-6").style.animation="";
									document.getElementById('3-3').style.visibility="visible";
									document.getElementById('3-4').style.visibility="hidden";
									setTimeout(function()
									{
										validateFormativeQA(1,3,"360px","200px");
									},500);
								}
							},4000);
						}
					}
				}
			}
		}
	}
	
	else if(simsubscreennum==3)
	{
		for(var i=1; i<=12; i++)
		{
			document.getElementById("3-"+i).style.visibility="hidden";
		}
		document.getElementById('4-1').style.visibility="visible";
		document.getElementById('4-2').style.visibility="visible";
		document.getElementById('4-8').style.visibility="visible";
		document.getElementById('4-9').style.visibility="visible";
		document.getElementById('4-10').style.visibility="visible";
		document.getElementById('4-11').style.visibility="visible";
		document.getElementById('4-12').style.visibility="visible";
		
		blinkArrow(376,185,360,40);
		document.getElementById('4-12').onclick=function()
		{
			myStopFunction();
			document.getElementById('4-12').style.visibility="hidden";
			document.getElementById('4-14').style.visibility="visible";
			blinkArrow(194,182,180,40);
			document.getElementById('4-11').onclick=function()
			{
				myStopFunction();
				document.getElementById('4-11').style.visibility="hidden";
				document.getElementById('4-13').style.visibility="visible";
				setTimeout(function()
				{
					blinkArrow(280,165,270,40);
					document.getElementById('4-10').onclick=function()
					{
						myStopFunction();
						document.getElementById('4-10').style.visibility="hidden";
						setTimeout(function()
						{
							blinkArrow(290,150,270,40);
							document.getElementById('4-2').onclick=function()
							{
								myStopFunction();
								document.getElementById('4-2').style.visibility="hidden";
								document.getElementById('4-5').style.visibility="visible";
								document.getElementById('4-6').style.visibility="visible";
								document.getElementById('4-7').style.visibility="visible";
								document.getElementById('4-10').style.visibility="hidden";
								document.getElementById('4-13').style.visibility="hidden";
								document.getElementById('4-14').style.visibility="hidden";
								document.getElementById('4-8').style.visibility="hidden";
								document.getElementById('4-9').style.visibility="hidden";
								document.getElementById('4-1').style.visibility="hidden";
								setTimeout(function()
								{
									document.getElementById('4-16').style.visibility="visible";
									document.getElementById('4-01').style.visibility="visible";
									document.getElementById('4-01').style.backgroundColor="lightgrey";
									document.getElementById('4-02').style.visibility="visible";
									document.getElementById('4-03').style.visibility="visible";
									document.getElementById('p4-1').style.visibility="visible";
									setTimeout(function()
									{
										blinkArrow(340,500,90,30);
										document.getElementById('4-03').onclick=function()
										{
											myStopFunction();
											document.getElementById('4-03').onclick="";
											document.getElementById('p4-1').innerHTML="0.0";
											setTimeout(function()
											{
												blinkArrow(585,240,270,40);
												document.getElementById('4-5').onclick="";
												document.getElementById('4-7').onclick=function()
												{
													myStopFunction();
													document.getElementById('4-7').onclick="";
													document.getElementById('4-7').style.visibility="hidden";
													document.getElementById('4-3').style.visibility="visible"; //cement
													blinkArrow(477.5,290,180,40);
													document.getElementById('4-6').onclick=function()
													{
														myStopFunction();
														document.getElementById('4-6').onclick="";
														document.getElementById('4-6').style.visibility="hidden";
														document.getElementById('4-3').style.visibility="hidden";
														document.getElementById('4-4').style.visibility="visible";
														blinkArrow(477.5,330,180,35);
														document.getElementById('4-5').onclick=function()
														{
															myStopFunction();
															document.getElementById('4-5').onclick="";
															document.getElementById('4-5').style.visibility="hidden";
															document.getElementById('4-4').style.visibility="hidden";
															document.getElementById('4-18').style.visibility="visible";
															document.getElementById('4-19').style.visibility="visible";
															blinkArrow(505,200,360,40);
															document.getElementById('4-19').onclick=function()
															{
																myStopFunction();
																document.getElementById('4-19').onclick="";	
																document.getElementById('4-19').style.transformOrigin = "100% 80%";
																document.getElementById('4-19').style.animation = "rotateSieve 1.0s forwards ";
																setTimeout(function()
																{
																	document.getElementById('4-18').style.visibility="hidden";
																	setTimeout(function()
																	{
																		document.getElementById('4-17').style.visibility="visible";
																		setTimeout(function()
																		{
																			document.getElementById('4-17').style.visibility="hidden";
																			setTimeout(function()
																			{
																				document.getElementById('4-15').style.visibility="visible";
																				// document.getElementById('p4-1').innerHTML="30";
																				document.getElementById('p4-1').innerHTML="100";
																				setTimeout(function()
																				{
																					document.getElementById('4-19').style.visibility="hidden";
																					setTimeout(function()
																					{
																						document.getElementById('nextButton').style.visibility="visible";
																					},500);
																				},200);
																			},200);
																		},300);
																	},400);
																},100);
															}
														}
													}
												}
											},1500);
										}
									},500);
								},800);
							}
						},500);
					}
				 },500);
			}
		}
	}
	
	else if(simsubscreennum==4)
	{
		document.getElementById('4-01').style.visibility="hidden";
		document.getElementById('4-02').style.visibility="hidden";
		document.getElementById('4-03').style.visibility="hidden";
		document.getElementById('p4-1').style.visibility="hidden";
		document.getElementById("4-4").style.visibility = "hidden";
		document.getElementById("4-5").style.visibility = "hidden";
		document.getElementById("4-15").style.visibility = "hidden";
		document.getElementById("4-16").style.visibility = "hidden";
		document.getElementById("4-17").style.visibility = "hidden";
		document.getElementById("4-18").style.visibility = "hidden";
		document.getElementById("nextButton").style.visibility = "hidden";
		// document.getElementById("p5-1").style.visibility = "visible";
		// document.getElementById("b5-1").onclick=function()
		// {
			// document.getElementById("b5-1").onclick="";
			// document.getElementById("p5-1").style.visibility = "hidden";
			
			blinkArrow(520,270,360,40);
			document.getElementById('5-5').onclick=function()
			{
				myStopFunction();
				document.getElementById('5-5').onclick="";
				document.getElementById('5-5').style.transformOrigin="100% 80%";
				document.getElementById('5-5').style.animation = "valveturn-2 1s forwards ";
				setTimeout(function(){
					document.getElementById('5-5').style.visibility="hidden";
					document.getElementById('5-6').style.visibility="visible";
					setTimeout(function()
					{
						document.getElementById('5-9').style.visibility="visible";
						document.getElementById('5-10').style.visibility="visible";
						document.getElementById('5-10').style.transformOrigin="100% 80%";
						document.getElementById('5-10').style.animation = "water-4 2.5s forwards ";
						setTimeout(function()
						{
							document.getElementById('5-9').style.visibility="hidden";
							document.getElementById('5-6').style.visibility="hidden";
							setTimeout(function()
							{
								document.getElementById("5-12").style.visibility="visible";
								blinkArrow(300,335,360,40);
								document.getElementById('5-12').onclick=function()
								{
									myStopFunction();
									document.getElementById('5-12').onclick="";
									document.getElementById('5-12').style.visibility="hidden";
									document.getElementById('5-13').style.visibility="visible";
									document.getElementById('5-13').style.animation = "mixSoil 1.5s 2 forwards ";
									setTimeout(function()
									{
										document.getElementById('5-14').style.visibility="visible";
										document.getElementById('5-7').style.visibility="hidden";
										document.getElementById('5-10').style.visibility="hidden";
										document.getElementById('5-11').style.visibility="hidden";
										document.getElementById('5-13').style.visibility="hidden";
										setTimeout(function()
										{
											//validateFormativeQA(1,0,"350px","150px");
											document.getElementById("nextButton").style.visibility="visible";
										},500);
									},3000);
								}
							},500);
						},2500);
					},250);
				},1000);
			}
		//}
	}
	
	else if(simsubscreennum == 5)
	{
		//refresh();
		document.getElementById("5-8").style.visibility="hidden";
		document.getElementById("5-14").style.visibility="hidden";
		weightOfContainer(6);
	}
	else if(simsubscreennum == 6)
	{
		document.getElementById("nextButton").style.visibility = "hidden";	
		setTimeout(function()
		{
			document.getElementById("7-3").style.visibility="visible";
			blinkArrow(275,320,270,35);
			document.getElementById("7-3").onclick=function()
			{
				myStopFunction();
				document.getElementById("7-3").onclick="";
				document.getElementById("7-3").style.animation="moveSpatula1 0.4s forwards";
				setTimeout(function()
				{
					document.getElementById("7-3").style.animation="";
					document.getElementById("7-3").style.visibility="hidden";
					document.getElementById("7-0").style="position:absolute; left:236px; top:404px; width:70px; height:20px; background-color:#BB834C; border-radius: 100px / 30px; ";
					document.getElementById("7-4").style.visibility="visible";
					document.getElementById("7-4").style.animation="moveSpatula2 1.5s forwards";
					setTimeout(function()
					{
						document.getElementById("7-4").style="position:absolute; left:360px; top:330px;";
						document.getElementById("7-4").style.animation="rotateSpatula 0.5s forwards";
						setTimeout(function()
						{
							document.getElementById("7-5").style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById("7-4").style.visibility="hidden";
								document.getElementById("7-3").style.visibility="visible";
								setTimeout(function()
								{
									document.getElementById("7-3").style.visibility="hidden";
									document.getElementById("7-0").style="position:absolute; left:236px; top:407px; width:70px; height:20px; background-color:#BB834C; border-radius: 100px / 30px; ";
									document.getElementById("7-4").style.visibility="visible";
									document.getElementById("7-4").style="position:absolute; left:145px; top:335px;";
									document.getElementById("7-4").style.animation="moveSpatula2 1.5s forwards";
									setTimeout(function()
									{
										document.getElementById("7-4").style="position:absolute; left:360px; top:330px;";
										document.getElementById("7-4").style.animation="rotateSpatula 0.5s forwards";
										setTimeout(function()
										{
											document.getElementById("7-5").style="visibility:visible; position:absolute; left:471.5px; top:402px; width:40px; height:22.5px; background-color:#BB834C; border-radius:52%;";
											setTimeout(function()
											{
												document.getElementById("7-4").style.visibility="hidden";
												setTimeout(function()
												{
													validateFormativeQA(0,0,"150px","150px");
												},500);
											},300);
										},500);
									},1500);
								},500);
							},200);
						},400);
					},1500);
				},400);
			}
		},500);
	}
	
	else if(simsubscreennum == 7)
	{
		document.getElementById("7-5").style.visibility = "hidden";
		weightOfContainer(8);
	}	
	else if(simsubscreennum == 8)
	{
		document.getElementById("nextButton").style.visibility = "hidden";
		document.getElementById("9-11").style.visibility = "visible";
		document.getElementById("incDoor9-1").style="visibility:visible;";
		document.getElementById("9-12").innerHTML="&nbsp;105";
		
		blinkArrow(90,235,270,30);
		document.getElementById("9-11").onclick=function()
		{
			myStopFunction();
			$('.door').toggleClass('doorOpen');
			document.getElementById("9-11").onclick="";	
			setTimeout(function(){
				document.getElementById("9-11").style.visibility="hidden";
			},350);
			setTimeout(function()
			{
				blinkArrow(75,485,180,30);
				document.getElementById("9-3a").onclick=function()
				{
					myStopFunction();
					document.getElementById("9-3a").onclick="";
					document.getElementById("9-3a").style.animation="placeContainerinOven 1.5s forwards";
					document.getElementById("9-4").style.animation="placeContainerwithSoilinOven 1.5s forwards";
					setTimeout(function()
					{
						blinkArrow(430,255,0,35);
						document.getElementById("incDoor9-1").onclick=function()
						{
							myStopFunction();
							document.getElementById("incDoor9-1").onclick="";	
							$('.door').toggleClass('doorOpen');
							setTimeout(function()
							{
								document.getElementById("9-11").style.visibility="visible";
								
								var temp=105;
								blinkArrow(215,147,270,25);
								document.getElementById("9-13").onclick=function()
								{
									if(temp<110)
									{
										temp++;
										document.getElementById("9-12").innerHTML="&nbsp;"+temp;
									}
									if(temp>=110)
									{
										myStopFunction();
										document.getElementById("9-13").onclick="";
										setTimeout(function()
										{
											document.getElementById("9-2").style.visibility="visible";
											$("#9-3").fadeIn(1000);
											setTimeout(function()
											{
												$("#9-3").fadeOut(2000);
												setTimeout(function()
												{
													document.getElementById("9-2").style.visibility="hidden";
													takeOutCaontainer();
												},2000);
											},2000);
										},1500);
									}
								}
							},1150);
						}
					},1500);
				}	
			},1500);
		}
	}
     
	else if(simsubscreennum == 9)
	{
		document.getElementById("incDoor9-1").style.visibility="hidden";
		document.getElementById("incDoor9-2").style.visibility="hidden";
		document.getElementById("incDoor9-3").style.visibility="hidden";
		document.getElementById("9-11").style.visibility="hidden";
		weightOfContainer(10);
	}
	
	else if(simsubscreennum == 10)
	{
		setTimeout(function()
		{
			blinkArrow(535,340,270,30);
			document.getElementById("11-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("11-2").onclick="";
				document.getElementById("11-2").style.animation="openCap 1s forwards";
				setTimeout(function()
				{
					blinkArrow(475,415,180,35);
					document.getElementById("11-3").onclick=function()
					{
						myStopFunction();
						document.getElementById("11-3").onclick="";
						document.getElementById("11-3").style.visibility="hidden";
						document.getElementById("11-4").style.visibility="visible";
						document.getElementById("11-4").style.animation="moveMercuryBottle 1.25s forwards";
						setTimeout(function()
						{
							document.getElementById("11-4").style="position:absolute; left: 305px; top: 237px;";
							document.getElementById("11-4").style.transformOrigin="left bottom";
							document.getElementById("11-4").style.animation="rotateMercuryBottle 0.75s forwards";
							setTimeout(function()
							{
								document.getElementById("11-5").style.visibility="visible";
								setTimeout(function()
								{
									document.getElementById("11-6").style.visibility="visible";
									document.getElementById("11-6").style.animation="enlargeMercury 3s forwards";
									setTimeout(function()
									{
										document.getElementById("11-7").style.visibility="visible";
										setTimeout(function()
										{
											document.getElementById("11-7").style.visibility="hidden";
											document.getElementById("11-5").style.visibility="hidden";
											document.getElementById("11-2").style.visibility="hidden";
											document.getElementById("11-4").style.visibility="hidden";
											pressWithGlassPlateWithProngs(11);
										},2300);
									},750);
								},200);
							},750);
						},1250);
					}
				},1100);
			}
		},300);
	}
	
	else if(simsubscreennum == 11)
	{
		document.getElementById("11-5").style.visibility="hidden";
		document.getElementById("11-6").style.visibility="hidden";
		document.getElementById("11-7").style.visibility="hidden";
		weightOfContainer(12);
	}
	
	else if(simsubscreennum == 12)
	{
		weightOfContainer(13);
	}
	else if(simsubscreennum == 13)
	{
		setTimeout(function()
		{
			blinkArrow(535,340,270,30);
			document.getElementById("14-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("14-2").onclick="";
				document.getElementById("14-2").style.animation="openCap 1s forwards";
				setTimeout(function()
				{
					blinkArrow(475,415,180,35);
					document.getElementById("14-3").onclick=function()
					{
						myStopFunction();
						document.getElementById("14-3").onclick="";
						document.getElementById("14-3").style.visibility="hidden";
						document.getElementById("14-4").style.visibility="visible";
						document.getElementById("14-4").style.animation="moveMercuryBottle 1.25s forwards";
						setTimeout(function()
						{
							document.getElementById("14-4").style="position:absolute; left: 305px; top: 237px;";
							document.getElementById("14-4").style.transformOrigin="left bottom";
							document.getElementById("14-4").style.animation="rotateMercuryBottle 0.75s forwards";
							setTimeout(function()
							{
								document.getElementById("14-5").style.visibility="visible";
								setTimeout(function()
								{
									document.getElementById("14-6").style.visibility="visible";
									document.getElementById("14-6").style.animation="enlargeMercury2 3s forwards";
									setTimeout(function()
									{
										document.getElementById("14-7").style.visibility="visible";
										setTimeout(function()
										{
											document.getElementById("14-7").style.visibility="hidden";
											document.getElementById("14-5").style.visibility="hidden";
											document.getElementById("14-2").style.visibility="hidden";
											document.getElementById("14-4").style.visibility="hidden";
											pressWithGlassPlateWithProngs(14);
										},2300);
									},750);
								},200);
							},750);
						},1250);
					}
				},1100);
			}
		},300);
	}
	else if(simsubscreennum==14)
	{
		document.getElementById("14-5").style.visibility="hidden";
		document.getElementById("14-6").style.visibility="hidden";
		document.getElementById("14-7").style.visibility="hidden";
		weightOfContainer(15);
	}
	else if(simsubscreennum == 15)
	{
		setTimeout(function()
		{
			blinkArrow(55,425,270,30);
			document.getElementById("16-5").onclick=function()
			{
				myStopFunction();
				document.getElementById("16-5").onclick="";
				document.getElementById("16-5").style.visibility="hidden";
				document.getElementById("16-6").style.visibility="visible";
				document.getElementById("16-6").style.animation="movePat 1s forwards";
				setTimeout(function()
				{
					document.getElementById("16-6").style.visibility="hidden";
					document.getElementById("16-5").style="visibility:visible; position:absolute; left:190px; top:362px;";
					setTimeout(function()
					{
						pressWithGlassPlateWithProngs(16);
					},300);
				},1100);
			}
		},350);
	}
	else if(simsubscreennum == 16)
	{
		document.getElementById("16-2").style.visibility="hidden";
		document.getElementById("16-5").style.visibility="hidden";
		setTimeout(function()
		{
			blinkArrow(237.5,365,270,30);
			document.getElementById("17-6").onclick=function()
			{
				myStopFunction();
				document.getElementById("17-6").onclick="";
				document.getElementById("17-6").style.visibility="hidden";
				document.getElementById("17-7").style.visibility="visible";
				document.getElementById("17-7").style.animation="movePatBack 1s forwards";
				setTimeout(function()
				{
					document.getElementById("17-7").style.visibility="hidden";
					document.getElementById("17-6").style="visibility:visible; position:absolute; left:10px; top:415px;";
					setTimeout(function()
					{
						document.getElementById("17-6").style.visibility="hidden";
						document.getElementById("17-3").style.visibility="hidden";
						document.getElementById("17-4").style.visibility="hidden";
						document.getElementById("17-5").style.visibility="hidden";
						document.getElementById("17-0").style.visibility="visible";
						document.getElementById("17-1").style.visibility="visible";
						document.getElementById("17-2").style.visibility="visible";
						document.getElementById("p17-1").style.visibility="visible";
						document.getElementById("p17-2").style.visibility="visible";
						weightOfContainer(17);
					},600);
				},1100);
			}
		},350);
	}
	else if(simsubscreennum==17)
	{
		document.getElementById("17-0").style.visibility="hidden";
		document.getElementById("17-1").style.visibility="hidden";
		document.getElementById("17-2").style.visibility="hidden";
		document.getElementById("p17-1").style.visibility="hidden";
		document.getElementById("p17-2").style.visibility="hidden";
		document.getElementById("t2").innerHTML=dataset[p][0]+"g";
		document.getElementById("t3").innerHTML=dataset[p][1]+"g";
		document.getElementById("t4").innerHTML=dataset[p][2]+"g";
		document.getElementById("t5").innerHTML=dataset[p][3]+"g";
		w4 = dataset[p][1] - dataset[p][0];
		wd = dataset[p][2] - dataset[p][0];
		v1 = (dataset[p][3] - dataset[p][0])/(13.6);
		document.getElementById("chk1").onclick=function()
		{
			cnt=1;
			var id1=document.getElementById("w4");
			var mark1=document.getElementById("mark1");
			var chk1=document.getElementById("chk1");
			var res1=document.getElementById("res1");
			checkResult(id1, w4, mark1, chk1, res1, cnt);
		}
		document.getElementById("chk2").onclick=function()
		{
			cnt=2;
			var id2=document.getElementById("wd");
			var mark2=document.getElementById("mark2");
			var chk2=document.getElementById("chk2");
			var res2=document.getElementById("res2");
			checkResult(id2, wd, mark2, chk2, res2, cnt);
		}
		document.getElementById("chk3").onclick=function()
		{
			cnt=3;
			var id3=document.getElementById("v1");
			var mark3=document.getElementById("mark3");
			var chk3=document.getElementById("chk3");
			var res3=document.getElementById("res3");
			checkResult(id3, v1, mark3, chk3, res3, cnt);
		}
	}
	else if(simsubscreennum==18)
	{
		document.getElementById("drySoil").style.visibility="hidden";
		document.getElementById("wetSoil").style.visibility="hidden";
		for(i=1;i<=3;i++)
			document.getElementById("mark"+i).style.visibility="hidden";
		document.getElementById("t6").innerHTML=dataset[p][4]+"g";
		document.getElementById("t7").innerHTML=dataset[p][5]+"g";
		document.getElementById("t8").innerHTML=dataset[p][6]+"g";
		
		document.getElementById("var").innerHTML="Weight of wet soil, W<sub>4</sub> = "+w4.toFixed(2)+" g</br> Weight of dry soil pat, W<sub>d</sub> = "+wd.toFixed(2)+" g</br> Volume of wet soil pat, V<sub>1</sub> = "+v1.toFixed(2)+" g <br> Unit weight of water, &rho;<sub>w</sub> =  1 g/cm3";
		v2 = (dataset[p][5] - dataset[p][6])/(13.6);
		ws = (((w4 - wd)-(v1 - v2))/ wd)*100;
		// console.log(p,w4,wd,v1,v2,ws);
		document.getElementById("chk4").onclick=function()
		{
			cnt=4;
			var id4=document.getElementById("v2");
			var mark4=document.getElementById("mark4");
			var chk4=document.getElementById("chk4");
			var res4=document.getElementById("res4");
			checkResult(id4, v2, mark4, chk4, res4, cnt);
		}
		document.getElementById("chk5").onclick=function()
		{
			cnt=5;
			var id5=document.getElementById("ws");
			var mark5=document.getElementById("mark5");
			var chk5=document.getElementById("chk5");
			var res5=document.getElementById("res5");
			checkResult(id5, ws, mark5, chk5, res5, cnt);
		}
	}
}

function checkResult(id,ans,mark,chk,res,cnt)
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
			check(cnt);
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
		id.value=ans.toFixed(2);;
		id.style.color="black";
		id.disabled=true;
		id.style.backgroundColor="white";
		mark.style.visibility="hidden";
		check(cnt);
	}
}

function check(cnt)
{
	if(cnt==1)
		document.getElementById("drySoil").style.visibility="visible";
	if(cnt==2)
		document.getElementById("wetSoil").style.visibility="visible";
	if(cnt==3)
		document.getElementById("nextButton").style.visibility="visible";
	if(cnt==4)
		document.getElementById("shrinkage").style.visibility="visible";
	if(cnt==5)
		document.getElementById("p19-1").style.visibility="visible";
}

function takeOutCaontainer()
{
	blinkArrow(90,235,270,30);
	document.getElementById("9-11").onclick=function()
	{
		// document.getElementById("9-4").style="position:absolute; left:72px; top:202.5px; width:38px; height:22px; background-color:#DFA15D; border-radius:50%;";
		document.getElementById("9-4").style="position:absolute; left:72px; top:202.5px; width:38px; height:22px; background-color:#FFD885; border-radius:50%;";
		myStopFunction();
		$('.door').toggleClass('doorOpen');
		document.getElementById("9-11").onclick="";	
		setTimeout(function()
		{
			document.getElementById("9-11").style.visibility="hidden";
			setTimeout(function()
			{
				blinkArrow(75,245,180,30);
				document.getElementById("9-3a").onclick=function()
				{
					myStopFunction();
					document.getElementById("9-3a").onclick="";
					document.getElementById("9-3a").style.animation="placeContainerBack 1.5s forwards";
					document.getElementById("9-4").style.animation="placeContainerwithSoilBack 1.5s forwards";
					setTimeout(function()
					{
						blinkArrow(430,255,0,35);
						document.getElementById("incDoor9-1").onclick=function()
						{
							myStopFunction();
							document.getElementById("incDoor9-1").onclick="";	
							$('.door').toggleClass('doorOpen');
							setTimeout(function()
							{
								document.getElementById("9-11").style.visibility="visible";
								document.getElementById("nextButton").style.visibility="visible";
							},1150);
						}
					},1500);			
				}
			},1500);
		},350);
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
					setTimeout(function()
					{
						//IsInt(dataset[p][1]);
						
						if(id==6)
						{
							document.getElementById("p"+id+"-1").innerHTML=dataset[p][0];
							document.getElementById("p"+id+"-2").innerHTML="Weight of  empty shrinkage dish, (W<sub>1</sub>) = "+dataset[p][0]+" g";
						}
						if(id==8)
						{
							document.getElementById("p"+id+"-1").innerHTML=dataset[p][1];
							document.getElementById("p"+id+"-2").innerHTML="Weight of shrinkage dish + wet soil, W<sub>2</sub> = "+dataset[p][1]+" g";
						}
						if(id==10)
						{
							document.getElementById("p"+id+"-1").innerHTML=dataset[p][2];
							document.getElementById("p"+id+"-2").innerHTML="Weight of shrinkage dish + dry soil, (W<sub>3</sub>) = "+dataset[p][2]+" g";
						}
						if(id==12)
						{
							document.getElementById("p"+id+"-1").innerHTML=dataset[p][3];
							document.getElementById("p"+id+"-2").innerHTML="Weight of shrinkage dish + Mercury, (W<sub>5</sub>) = "+dataset[p][3]+" g";
						}
						if(id==13)
						{
							document.getElementById("p"+id+"-1").innerHTML=dataset[p][4];
							document.getElementById("p"+id+"-2").innerHTML="Weight of empty immersion cup, (W<sub>6</sub>) = "+dataset[p][4]+" g";
						}
						if(id==15)
						{
							document.getElementById("p"+id+"-1").innerHTML=dataset[p][5];
							document.getElementById("p"+id+"-2").innerHTML="Weight of immersion cup + Mercury, (W<sub>7</sub>) = "+dataset[p][5]+" g";
						}
						if(id==17)
						{
							document.getElementById("p"+id+"-1").innerHTML=dataset[p][6];
							document.getElementById("p"+id+"-2").innerHTML="Weight of immersion cup + Mercury after immersion of soil pat, (W<sub>8</sub>) = "+dataset[p][6]+" g";
						}
						setTimeout(function()
						{
							document.getElementById("nextButton").style.visibility="visible";
						},500);
					},1300);	
				}
			},750);
		}
	},500);
}

function pressWithGlassPlateWithProngs(id)
{
	document.getElementById(id+"-8").style.visibility="visible";
	setTimeout(function()
	{
		blinkArrow(230,275,270,35);
		document.getElementById(id+"-8").onclick=function()
		{
			myStopFunction();
			document.getElementById(id+"-8").onclick="";
			document.getElementById(id+"-8").style.animation="placeGlassPlateOnDish 0.75s forwards";
			setTimeout(function()
			{
				document.getElementById(id+"-8").style.visibility="hidden";
				document.getElementById(id+"-9").style.visibility="visible";
				blinkArrow(220,300,270,35);
				document.getElementById(id+"-9").onclick=function()
				{
					myStopFunction();
					document.getElementById(id+"-9").onclick="";
					document.getElementById(id+"-9").style.animation="pressSurface 1s 3";
					setTimeout(function()
					{
						document.getElementById(id+"-9").style.visibility="hidden";
						if(id==16) 
						{
							document.getElementById("16-2").style="position:absolute; left:180.5px; top:365.5px; width:46px; height:24px; background: radial-gradient(closest-side, #B1B5B8, #6F6578, #B1B5B8); border-radius:50%;"; 
						}
						setTimeout(function()
						{
							if(id==16)
								validateFormativeQA(2,1,"150px","150px");
							else document.getElementById("nextButton").style.visibility="visible";
						},500);
					},3000);
				}
			},850);
		}
	},500);
}