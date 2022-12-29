var mldDia = 10, mldHght = 13, hdr = 31, layerNo = 3, compEnergy = 3, mldWght = 990, mldVol = 1021.01;
var cnt = 0;
var repeat = 0;
var temp = 105;
var h1 = 0, h2 = 0, h3 = 0, h4 = 0;

let soilVolume=1327.32;
let myInt=0;
var p = 0;
var dataset = [[42, 25, 42.75, 40.98, 1.77, 15.98, 11.07, 1, 1.472],
[27, 30, 57.04, 52.85, 4.19, 22.85, 18.34, 2, 1.381],
[39, 25, 50.06, 46.49, 3.57, 21.49, 16.61, 3, 1.402]];

var ca;
var questions = ["The internal diameter of core cutter is ",
	"Field density is also known as",
	"Field density of soil is defined as ratio of",
	"Due to its overburden pressure field density is used in caculating the stress in the soil"];

var options2 = [
	["10 cm", "20 cm ", "30 cm", "40 cm"], //10 cm
	["Site-density", "In-situ density", "Out-situ density", "Outer density"], //In-situ density
	["Weight of soil to corresponding volume", "Volume to weight of soil", "Weight of soil to area at the site", "none of the above"],//Weight of soil to corresponding volume
	["True", "False"],//True
];

function validateAnswer_(qn, ans, left, top) {
	$("#answer").empty();
	document.getElementById("a").innerHTML = "";
	document.getElementById("questD").style = "position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:" + left + ";top:" + top + ";";
	document.getElementById("qu").innerHTML = questions[qn];
	if (qn == 0) document.getElementById('questD').style.width = "320px";
	if (qn == 1) document.getElementById('questD').style.width = "320px";
	if (qn == 2) document.getElementById('questD').style.width = "320px";
	var j = 0;
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
		$("#answer").change(function () {
			ca = $(this).children("option:selected").val();
			if (options2[qn][ans] == ca) {
				document.getElementById("a").innerHTML = "Correct Answer!";
			}
			else {
				document.getElementById("a").innerHTML = "Wrong! Answer is" + options2[qn][ans];
			}
			setTimeout(function () {
				document.getElementById("questD").style.visibility = "hidden";
				document.getElementById("nextButton").style.visibility = "visible";
			}, 1500);
		});
	}
}

function navNext() {
	for (temp = 0; temp <= 14; temp++) {
		document.getElementById('canvas' + temp).style.visibility = "hidden";
	}

	simsubscreennum += 1;
	document.getElementById('canvas' + (simsubscreennum)).style.visibility = "visible";
	document.getElementById('nextButton').style.visibility = "hidden";
	magic();
}

let arrowBlinkCount=0;
function animatearrow() {
	
	if (document.getElementById('arrow1').style.visibility == "hidden")
	{
		console.log(arrowBlinkCount);
		arrowBlinkCount++;
		document.getElementById('arrow1').style.visibility = "visible";
	}
	else
	{
		console.log(arrowBlinkCount);
		arrowBlinkCount++;
		document.getElementById('arrow1').style.visibility = "hidden";
	}
}

function blinkArrow(left, t, height, degg) 
{
	// console.log(myInt);
	myInt = setInterval(function () { animatearrow(); }, 500);
	document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left:" + left + "px; top: " + t + "px; height:" + height + "px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(" + degg + "deg)";
	document.getElementById("arrow1").style.msTransform = "rotate(" + degg + "deg)";
	document.getElementById("arrow1").style.transform = "rotate(" + degg + "deg)";
}

function myStopFunction() {
	clearInterval(myInt);
	document.getElementById('arrow1').style.visibility = "hidden";
}

$(function () {
	$('input').on('input', function () {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
});

function generate_table() {
	var j = 0;
	var table = document.getElementById("dataTable");
	for (var i = 2; i >= 0; i--) {
		$("#dataTable").delay()
			.queue(function (generate_table) {
				$(this).append("<tr><td>" + dataset[j][7] + "</td><td>" + 990 + "</td><td>" + 1670 + "</td><td>" + 1021.01 + "</td><td>" + 1.635 + "</td><td>" + dataset[j][1] + "</td><td>" + dataset[j][2] + "</td><td>" + dataset[j][3] + "</td><td>" + dataset[j][6] + "</td><td>" + dataset[j][8] + "</td></tr>");
				j++;
				generate_table();
			});
	}
}
function magic() 
{
	if(simsubscreennum == 1) 
	{
		document.getElementById('trial').style = "visibility:visible; left: 700px; top: 80px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML = "Trial : " + 1;
		blinkArrow(110, 300, 40, 180);
		document.getElementById('a21').onclick = function () { step1(); };
	}

	else if(simsubscreennum == 2) 
	{
		document.getElementById('cap1').style.visibility = "hidden";
		document.getElementById('cap2').style.visibility = "hidden";
		document.getElementById('tx').style.visibility = "hidden";
		document.getElementById('ch').style.visibility = "hidden";
		document.getElementById('can3').style.visibility = "hidden";
		document.getElementById('canvas1').style.visibility = "hidden";
		document.getElementById('r1').style.visibility = "hidden";
		document.getElementById('w1').style.visibility = "hidden";
		document.getElementById('re').style.visibility = "hidden";
		document.getElementById('q').style.visibility = "hidden";
		
		blinkArrow(535, 445, 30, 90);
		document.getElementById('1-1').onclick = function ()
		{
			myStopFunction();
			document.getElementById("1-1").onclick = "";
			document.getElementById("1-1").style.visibility = "hidden";
			document.getElementById("1-0").style.backgroundColor = "lightgrey";
			setTimeout(function ()
			{
				document.getElementById("p1-1").innerHTML = "000.10";
				blinkArrow(645, 445, 30, 90);
				document.getElementById('1-4').onclick = function () { step2(); };
			}, 650);
		};
	}
	else if(simsubscreennum == 3) 
	{
		document.getElementById('canvas2').style.visibility = "hidden";
		blinkArrow(510, 200, 40, 270);
		document.getElementById('t21').onclick = function () { step3(); };
	}
	else if (simsubscreennum == 4) //This function will be skipped..(Check step31())
	{
		document.getElementById('a31').style.visibility = "hidden";
		document.getElementById('t').style.visibility = "hidden";
		document.getElementById('a10').style.visibility = "hidden";
		document.getElementById('aw').style.visibility = "hidden";
		blinkArrow(300, 80, 35, 270);
		document.getElementById('a23').onclick = function () { step4(); };
	}
	else if (simsubscreennum == 5)
	{
		document.getElementById('a31').style.visibility = "hidden";
		document.getElementById('t').style.visibility = "hidden";
		document.getElementById('a10').style.visibility = "hidden";
		document.getElementById('aw').style.visibility = "hidden";
		
		document.getElementById('a10').style.visibility = "hidden";
		blinkArrow(240, 130, 40, 270);
		document.getElementById('ah').onclick = function () { step5(); };
	}
	else if (simsubscreennum == 6) 
	{
		document.getElementById('a191').style.visibility = "hidden";
		document.getElementById('a201').style.visibility = "hidden";
		// blinkArrow(300, 170, 40, 270);
		// document.getElementById('ah1').onclick = function () { step6(); };
		step6();
	}
	else if(simsubscreennum == 7) 
	{
		document.getElementById("mak1").style.visibility = "hidden";
		document.getElementById("mak2").style.visibility = "hidden";
		document.getElementById("p2-1").innerHTML = "0.004";
		document.getElementById("2-0").style.backgroundColor = "lightgrey";
		document.getElementById('can21').style.visibility = "visible";
		document.getElementById('v21').style.visibility = "visible";
		blinkArrow(645, 445, 30, 90);
		document.getElementById('2-4').onclick = function ()
		{
			myStopFunction();
			this.onclick = "null";
			document.getElementById("2-4").style.visibility = "hidden";
			document.getElementById("p2-1").innerHTML = "0.000";
			blinkArrow(280, 280, 40, 270);
			document.getElementById('a62').onclick = function () { step7(); };
		}
	}

	else if(simsubscreennum == 8) 
	{
		document.getElementById('v21').style.visibility = "hidden";
		document.getElementById('can21').style.visibility = "hidden";
		document.getElementById("mark1").style.visibility = "visible";
		document.getElementById("mark1").innerHTML = "";
		document.getElementById("res1").style.visibility = "visible";
		document.getElementById("res1").disabled = true;
		document.getElementById("chk1").style.visibility = "visible";
		document.getElementById("t2").innerHTML = 990 + " g";
		document.getElementById("t3").innerHTML = 2660 + " g";
		document.getElementById("t4").innerHTML = 1670 + " g";
		document.getElementById("t5").innerHTML = soilVolume + " cm\u00B3";
		const w=1670;
		var wd = w/soilVolume;
		document.getElementById("chk1").onclick = function () 
		{
			var id1 = document.getElementById("wd");
			var mark1 = document.getElementById("mark1");
			var chk1 = document.getElementById("chk1");
			var res1 = document.getElementById("res1");
			var sheet1 = document.getElementById("sheet1");
			validateAnswer1(id1, wd, mark1, chk1, res1, sheet1);
		}
	}
	else if(simsubscreennum == 9) 
	{
		repeat++;
		var k = 0;
		refresh();
		
		document.getElementById('3-0').style.backgroundColor="lightgrey";
		document.getElementById("p3-1").innerHTML = "0.008";
		document.getElementById('trial').style = "visibility:visible ;left: 700px; top: 80px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML = "Trial : " + repeat;
		document.getElementById('13-5').style.visibility = "hidden";
		document.getElementById('13-51').style.visibility = "hidden";
		document.getElementById('canvas8').style.display = "none";
		document.getElementById('b01').style.visibility = "visible";
		document.getElementById('a26').style.visibility = "hidden";
		document.getElementById('v21').style.visibility = "hidden";
		document.getElementById('can21').style.visibility = "hidden";
		document.getElementById('can01').style.visibility = "visible";
		document.getElementById('3-0').style.visibility = "visible";
		document.getElementById('3-4').style.visibility = "visible";
		blinkArrow(645, 445, 30, 90);
		document.getElementById('3-4').onclick = function () 
		{
			myStopFunction();
			this.onclick = "null";
			document.getElementById("3-4").style.visibility = "hidden";
			document.getElementById("p3-1").innerHTML = "0.000";
			blinkArrow(260, 370, 40, 270);
			document.getElementById('b01').onclick = function () { step72(); };
		};

	}

	else if (simsubscreennum == 10) 
	{
		refresh();
		document.getElementById('s1').style.visibility = "visible";
		document.getElementById('p1').style.visibility = "visible";
		document.getElementById('3-0').style.visibility = "hidden";
		document.getElementById('v22').style.visibility = "hidden";
		document.getElementById('can01').style.visibility = "hidden";
		document.getElementById('b01').style.visibility = "hidden";
		blinkArrow(555, 250, 40, 270);
		document.getElementById('s1').onclick = function () { step8(); };
	}

	else if (simsubscreennum == 11) 
	{
		refresh();
		document.getElementById("s1").style = "position:absolute; left: 480px; top:255px;";
		document.getElementById("incDoor13-" +repeat).style.visibility="visible";
		document.getElementById('v23').style.visibility = "hidden";
		document.getElementById('4-0').style.visibility = "hidden";
		document.getElementById('can02').style.visibility = "hidden";
		document.getElementById('b2').style.visibility = "hidden";
		document.getElementById('p3').style.visibility = "hidden";
		document.getElementById('p2').style.visibility = "hidden";
		document.getElementById('b02').style.visibility = "hidden";
		document.getElementById('13-11').style.visibility = "visible";
		document.getElementById('acu').style.visibility = "visible";
		blinkArrow(155, 260, 40, 360);
		document.getElementById('13-11').onclick = function () { step9(); };
	}

	else if(simsubscreennum == 12) {
		refresh();
		document.getElementById("5-0").style.backgroundColor = "lightgrey";
		document.getElementById('incDoor13-1').style = "display:none";
		if (repeat == 2) 
		{
			document.getElementById('incDoor13-2').style = "display:none";
		}
		if (repeat == 3) 
		{
			document.getElementById('incDoor13-3').style = "display:none";
		}
		document.getElementById('13-11').style.visibility = "hidden";
		document.getElementById('5-4').style.visibility = "visible";
		document.getElementById('auu').style.visibility = "hidden";
		blinkArrow(645, 445, 30, 90);
		document.getElementById('5-4').onclick = function () 
		{
			myStopFunction();
			this.onclick = "null";
			document.getElementById("5-4").style.visibility = "hidden";
			document.getElementById("p5-1").innerHTML = "0.000";
			blinkArrow(260, 360, 40, 270);
			document.getElementById('b').onclick = function () { step10(); };
		}
	}
	
	else if(simsubscreennum == 13) 
	{
		document.getElementById("wd1").value = "";
		document.getElementById("wd1").disabled = false;
		document.getElementById("wc1").value = "";
		document.getElementById("wc1").disabled = false;
		var p = 0;
		var h4 = 0;
		for (var i = 1; i <= 2; i++) 
		{
			document.getElementById("mak" + i).style.visibility = "visible";
			document.getElementById("mak" + i).innerHTML = "";
			document.getElementById("re" + i).style.visibility = "visible";
			document.getElementById("re" + i).disabled = true;
			document.getElementById("ch" + i).style.visibility = "visible";
		}
		document.getElementById("sheet1").style.visibility = "visible";
		document.getElementById("k1").innerHTML = dataset[p][0];
		document.getElementById("k2").innerHTML = dataset[p][1] + " g";
		document.getElementById("k3").innerHTML = dataset[p][2] + " g";
		document.getElementById("k4").innerHTML = dataset[p][3] + " g";
		document.getElementById("k5").innerHTML = dataset[p][4] + " g";
		document.getElementById("k6").innerHTML = dataset[p][5] + " g";
		document.getElementById("k7").innerHTML = 1.635 + " g/cc";

		var wd1 = dataset[h4][6];
		var wc1 = dataset[h4][8];
		cnt = 0;
		document.getElementById("ch1").onclick = function () 
		{
			var id1 = document.getElementById("wd1");
			var mark1 = document.getElementById("mak1");
			var chk1 = document.getElementById("ch1");
			var res1 = document.getElementById("re1");
			var sheet1 = document.getElementById("sheet1");
			validateAnswer(id1, wd1, mark1, chk1, res1, sheet1);
		}
		document.getElementById("ch2").onclick = function () 
		{
			var id2 = document.getElementById("wc1");
			var mark2 = document.getElementById("mak2");
			var chk2 = document.getElementById("ch2");
			var res2 = document.getElementById("re2");
			var sheet1 = document.getElementById("sheet1");
			validateAnswer(id2, wc1, mark2, chk2, res2, sheet1);
		}
		h4++;
		p++;
	}
	else if(simsubscreennum == 14) 
	{
		document.getElementById("mak1").style.visibility = "hidden";
		document.getElementById("mak2").style.visibility = "hidden";
		document.getElementById('13-2').style.visibility = "hidden";
		document.getElementById('13-4').style.visibility = "hidden";
		generate_table();
		document.getElementById("trial").innerHTML = "";
	}
}

function step1() 
{
	myStopFunction();
	this.onclick = "null";
	document.getElementById("a21").style.animation = "movescale 1s forwards";
	setTimeout(function () 
	{
		document.getElementById('can1').innerHTML = "Internal height of the core cutter =10cm";
		document.getElementById('a21').style.visibility = "hidden";
		document.getElementById('1-2').style.visibility = "visible";
		document.getElementById('1-3').style.visibility = "visible";
		blinkArrow(430, 120, 30, 270);
		document.getElementById('1-3').onclick = function () 
		{
			myStopFunction();
			this.onclick = "null";
			document.getElementById("1-3").style.animation = "movev 1s forwards";
			document.getElementById("1-2").style.animation = "movev 1s forwards";
			setTimeout(function () 
			{
				blinkArrow(430, 240, 30, 270);
				document.getElementById('1-3').onclick = function () 
				{
					myStopFunction();
					document.getElementById("1-3").style = "position:absolute; width:15%; cursor:pointer; top:203px;";
					document.getElementById("1-3").style.animation = "movev1 1s forwards";
					setTimeout(function ()
					{
						document.getElementById('can11').innerHTML = "Internal diameter of the core cutter = 13cm";
						setTimeout(function () 
						{
							document.getElementById('1-2').style.visibility = "hidden";
							document.getElementById('1-3').style.visibility = "hidden";
							document.getElementById('a11').style.visibility = "hidden";
							document.getElementById('can1').innerHTML = "Internal height of the core cutter, D= 10cm";
							document.getElementById("can1").style = "position:absolute; left: 28px; top:110px;";
							document.getElementById('can11').innerHTML = "Internal diameter of the core cutter, H= 13cm";
							document.getElementById("can11").style = "position:absolute; left: 28px; top:60px;";
							document.getElementById('cap1').style.visibility = "visible";
							document.getElementById('cap2').style.visibility = "visible";
							document.getElementById('can3').style.visibility = "visible";
							document.getElementById('tx').style.visibility = "visible";
							document.getElementById('q').style.visibility = "visible";
							document.getElementById('ch').style.visibility = "visible";
							document.getElementById('ch').onclick = function () { step33(); };
						}, 1000);
					}, 2000);
				};
			}, 2000);
		};

	}, 2000);
}

function step33() 
{
	if (document.getElementById('tx').value == "") 
	{
		alert("Enter the value to proceed");
	}
	else 
	{
		var soilVolume = 1327.32;
		if (document.getElementById('tx').value == n) 
		{
			document.getElementById('w1').style.visibility = "hidden";
			document.getElementById('r1').style.visibility = "visible";
			document.getElementById('ch').style.visibility = "hidden";
			document.getElementById('re').style.visibility = "hidden";
			document.getElementById('nextButton').style.visibility = "visible";
		}
		else 
		{
			document.getElementById('r1').style.visibility = "hidden";
			document.getElementById('ch').style.visibility = "visible";
			document.getElementById('re').style.visibility = "visible";
			document.getElementById('w1').style.visibility = "visible";
			document.getElementById('ch').onclick = function () { step33(); };
			document.getElementById('re').onclick = function () { step38(); };
		}
		function step38() 
		{
			document.getElementById('tx').value = soilVolume;
			document.getElementById('re').style.visibility = "hidden";
			document.getElementById('ch').style.visibility = "hidden";
			document.getElementById('nextButton').style.visibility = "visible";
		}
	}
}

function step2() 
{
	myStopFunction();
	this.onclick = "null";
	document.getElementById("1-4").style.visibility = "hidden";
	document.getElementById("p1-1").innerHTML = "0.000";
	document.getElementById("1-0").style.backgroundColor = "lightgrey";
	blinkArrow(275, 300, 40, 270);
	document.getElementById('a12').onclick = function () 
	{
		myStopFunction();
		this.onclick = "null";
		document.getElementById("a12").style.animation = "movecore 1.5s forwards";
		setTimeout(function ()
		{
			document.getElementById("p1-1").innerHTML = "990.00";
			document.getElementById("can12").innerHTML = "Weight of the core cutter(W<sub>1</sub>) = 990 g";
			if (repeat == 0) 
			{
				validateAnswer_(0, 0, "80px", "200px");
			}
		}, 1500);
	}
}
function step3() 
{
	myStopFunction();
	this.onclick = "null";
	document.getElementById("t21").style.animation = "moveTrowel 2s 1";
	setTimeout(function () 
	{
		document.getElementById('aw').style.visibility = "visible";
	}, 1000);
	setTimeout(function ()
	{
		document.getElementById('aw').style.visibility = "hidden";
		document.getElementById('t21').style.visibility = "hidden";
		document.getElementById('a20').style.visibility = "visible";
		setTimeout(function () 
		{
			document.getElementById('a19').style.visibility = "hidden";
			document.getElementById('a20').style.visibility = "hidden";
			setTimeout(function () 
			{
				document.getElementById('a31').style.visibility = "visible";
				document.getElementById('t').style.visibility = "visible";
				document.getElementById('a10').style.visibility = "visible";
				blinkArrow(300,150,40,270);
				document.getElementById('a31').onclick = function () { step31(); };
			},500);
		}, 1000);
	}, 2000);
}
function step31()
{
	myStopFunction();
	document.getElementById("a31").style.animation = "movecutterc 1s forwards";
	setTimeout(function () 
	{
		simsubscreennum=4;
		document.getElementById('nextButton').style.visibility = "visible";
	}, 2000);
}

function step4() 
{
	myStopFunction();
	document.getElementById("a23").style.animation = "movehammer 1s forwards";
	setTimeout(function ()
	{
		document.getElementById('nextButton').style.visibility = "visible";
	}, 2000);
}
function step5()
{
	myStopFunction();
	document.getElementById("ah").style.animation = "movehammercoreah 0.6s forwards";
	setTimeout(function() 
	{
		document.getElementById("ac").style.animation = "movehammercoreac 0.5s forwards";
		setTimeout(function() 
		{
			document.getElementById("ah").style.animation = "movehammercoreahh 0.6s forwards";
			setTimeout(function() 
			{
				document.getElementById("ac").style.animation = "movehammercoreacc 0.5s forwards";
				setTimeout(function() 
				{
					document.getElementById("ah").style.animation = "movehammercoreahhh 0.6s forwards";
					setTimeout(function() 
					{
						document.getElementById("ac").style.animation = "movehammercoreaccc 0.5s forwards";
						setTimeout(function () 
						{
							document.getElementById('ah').style.visibility = "hidden";
							setTimeout(function() 
							{
								document.getElementById('a191').style.visibility = "visible";
								document.getElementById('a201').style.visibility = "visible";
								document.getElementById('nextButton').style.visibility = "visible";
							},500);
						},500);
					},600);
				},500);
			},600);
		},500);
	},600);
}
function step6()
{
	// myStopFunction();
	// document.getElementById("ah1").style.animation = "movehammerh1 2s forwards"; //skipped -- removing of rammer 
	// setTimeout(function () {
		document.getElementById('ah1').style.visibility = "hidden";
		blinkArrow(305, 350, 40, 270);
		document.getElementById('aco1').onclick = function () { step61(); };
	// }, 2000);
}

function step61() 
{
	myStopFunction();
	this.onclick = "null";
	setTimeout(function () {
		document.getElementById("aco1").style.animation = "movehammerco1 1s forwards";
	}, 500);
	setTimeout(function ()
	{
		if (repeat == 0) 
		{
			validateAnswer_(2, 0, "120px", "150px");
		}
	}, 2000);
}
function step7()
{
	myStopFunction();
	this.onclick = "null";
	document.getElementById("a62").style.animation = "movecorecco 1s forwards";
	setTimeout(function ()
	{
		document.getElementById('a62').style.visibility = "hidden";
		blinkArrow(200, 380, 40, 180);
		document.getElementById('a26').onclick = function () { step71(); };
	},1000);
	
}

function step71()
{
	myStopFunction();
	this.onclick = "null";
	document.getElementById("a26").style.animation = "movecorecc 2s forwards";
	setTimeout(function () 
	{
		document.getElementById('can21').innerHTML = "Weight of the soil in the core cutter (W<sub>2</sub>) = 2660g";
		document.getElementById('p2-1').innerHTML = "2660";
		document.getElementById('nextButton').style.visibility = "visible";
	}, 2000);
}

function step72() {
	myStopFunction();
	this.onclick = "null";
	var h1 = 0;
	document.getElementById("b01").style.animation = "movecorecck 2s forwards";
	setTimeout(function () 
	{
		document.getElementById('can01').innerHTML = "Weight of the empty container, (w<sub>1</sub>) = " + dataset[h1][1] + "g";
		document.getElementById('p3-1').innerHTML = dataset[h1][1];
		document.getElementById('nextButton').style.visibility = "visible";
		h1++;
	}, 3000);
}

function step8() 
{
	myStopFunction();
	this.onclick = "null";
	document.getElementById("s1").style.animation = "moves 1s forwards";
	setTimeout(function () {
		document.getElementById("s1").style = "position:absolute; left: 310px; top:190px;";
		document.getElementById("s1").style.animation = "rotates 1s forwards";
		setTimeout(function () {
			document.getElementById('p1').style.visibility = "hidden";
			document.getElementById('p2').style.visibility = "visible";
			document.getElementById('s1').style.visibility = "hidden";
			setTimeout(function () {
				document.getElementById('tr1').style.visibility = "visible";
				document.getElementById('b1').style.visibility = "visible";
				setTimeout(function () 
				{
					document.getElementById("tr1").style.animation = "movsss 0.75s forwards";
					setTimeout(function () {
						document.getElementById('tr1').style.visibility = "hidden";
						document.getElementById('tr2').style.visibility = "visible";
						document.getElementById('p2').style.visibility = "hidden";
						document.getElementById('p3').style.visibility = "visible";
						setTimeout(function () {
							document.getElementById("tr2").style.animation = "mov 1s forwards";
							setTimeout(function ()
							{
								document.getElementById('tr2').style.visibility = "hidden";
								document.getElementById('b1').style.visibility = "hidden";
								document.getElementById('b2').style.visibility = "visible";
								setTimeout(function () {
									document.getElementById('p3').style.visibility = "hidden";
									document.getElementById('b2').style.visibility = "hidden";
									document.getElementById('b02').style.visibility = "visible";
									document.getElementById('4-0').style.visibility = "visible";
									document.getElementById('can02').style.visibility = "visible";
									document.getElementById('4-4').style.visibility = "visible";
									document.getElementById("4-0").style.backgroundColor = "lightgrey";
									document.getElementById("p4-1").innerHTML = "0.003";
									blinkArrow(645, 445, 30, 90);
									document.getElementById('4-4').onclick = function () 
									{
										myStopFunction();
										this.onclick = "null";
										document.getElementById("4-4").style.visibility = "hidden";
										document.getElementById("p4-1").innerHTML = "0.000";
										blinkArrow(250, 350, 40, 270);
										document.getElementById('b02').onclick = function () { step08(); };
									}
								}, 1000);
							}, 1000);
						},300);
					}, 750);
				}, 1000);
			}, 1000);
		}, 1000);
	}, 1000);

	
	
}
function step08()
{
	var h2 = 0;
	myStopFunction();
	this.onclick = "null";
	document.getElementById("b02").style.animation = "movecorecckk 2s forwards";
	setTimeout(function () {
		document.getElementById('can02').innerHTML = "Weight of the container with field soil, (w<sub>2</sub>)= " + dataset[h2][2] + " g";
		document.getElementById('p4-1').innerHTML = dataset[h2][2];
		if(repeat==1)
		{
			document.getElementById('nextButton').style.visibility = "visible";
		}
		if (repeat == 2) {
			validateAnswer_(1, 1, "80px", "250px");
		}
		if (repeat == 3) {
			validateAnswer_(3, 0, "120px", "120px");
		}
		h2++;
	}, 3000);
}

function step9() 
{
	myStopFunction();
	$('.door').toggleClass('doorOpen');
	document.getElementById("13-11").onclick = "";
	setTimeout(function () {
		document.getElementById("13-11").style.visibility = "hidden";
	}, 350);
	setTimeout(function () {
		blinkArrow(210, 480, 40, 360);
		document.getElementById('acu').onclick = function () {
			myStopFunction();
			document.getElementById("acu").style.animation = "movecoreacu 2s forwards";
			setTimeout(function () {
				blinkArrow(430,255,35,0);
				document.getElementById("incDoor13-" + repeat).onclick = function () 
				{
					myStopFunction();
					document.getElementById("incDoor13-" + repeat).onclick = "";
					$('.door').toggleClass('doorOpen');
					setTimeout(function () 
					{
						document.getElementById("13-11").style.visibility = "visible";
						var temp = 105;
						blinkArrow(215,147,25,270);
						document.getElementById("13-13").onclick = function () {
							if (temp < 111) {
								temp++;
								document.getElementById("13-12").innerHTML = "&nbsp;" + temp;
							}
							if (temp >= 110) {
								myStopFunction();
								document.getElementById("13-13").onclick = "";
								setTimeout(function () {
									document.getElementById("13-2").style.visibility = "visible";
									$("#13-3").fadeIn(1000);
									setTimeout(function () {
										$("#13-3").fadeOut(2000);
										setTimeout(function () {
											document.getElementById("13-2").style.visibility = "hidden";
											takeOutContainer();
										}, 2000);
									}, 2000);
								}, 1500);
							}
						}
					}, 1500);
				};
			}, 2000);
		};
	}, 2000);
}
function step10() 
{
	myStopFunction();
	this.onclick = "null";
	var h3 = 0;
	document.getElementById("b").style.animation = "moveco 2s forwards";
	setTimeout(function () {
		document.getElementById('can14').innerHTML = "Weight of the container with the dry soil (w<sub>3</sub>) = " + dataset[h3][3] + "g";
		document.getElementById('p5-1').innerHTML = dataset[h3][3];
		setTimeout(function () {
			document.getElementById('nextButton').style.visibility = "visible";
			h3++;
		}, 2000);
	}, 2000);
}

function takeOutContainer() {
	document.getElementById('acu').style.visibility = "hidden";
	document.getElementById('auu').style.visibility = "visible";
	if (repeat == 2 || repeat == 3) {
		document.getElementById('auu').style.visibility = "visible";
	}
	blinkArrow(90,235,30,270);
	document.getElementById("13-11").onclick = function () {
		myStopFunction();
		$('.door').toggleClass('doorOpen');
		document.getElementById("13-11").onclick = "";
		setTimeout(function () {
			document.getElementById("13-11").style.visibility = "hidden";
			setTimeout(function ()
			{
				blinkArrow(105,245,30,180);
				document.getElementById("auu").onclick = function () 
				{
					myStopFunction();
					document.getElementById("auu").onclick = "";
					document.getElementById("auu").style.animation = "moveq 1.5s forwards";
					setTimeout(function () 
					{
						blinkArrow(430,255,35,0);
						document.getElementById("incDoor13-" + repeat).onclick = function () 
						{
							myStopFunction();
							document.getElementById("incDoor13-" + repeat).onclick = "";
							$('.door').toggleClass('doorOpen');
							setTimeout(function () 
							{
								document.getElementById("13-11").style.visibility = "visible";
								document.getElementById("nextButton").style.visibility = "visible";
							}, 1350);
						}
					}, 1500);
				}
			}, 1500);
		}, 350);
	}
}

function validateAnswer1(id, ans, mark, chk, res, sheet)
{
	cnt++;
	if (!id.value || !id.value != " ") {
		alert("Enter the value to proceed ");
	}
	else {
		n = id.value;
		if (Math.round(n * 100) == Math.round(ans * 100)) {
			mark.style = "visibility:visible; color:green; font-size:22px;";
			var right = "&#10004;";
			mark.innerHTML = right;
			chk.style.visibility = "hidden";
			res.style.visibility = "hidden";
			id.style.color = "black";
			id.disabled = true;
			id.style.backgroundColor = "white";
			setTimeout(function () {
				sheet.style.visibility = "hidden";
			}, 250);
			//check();
			document.getElementById("nextButton").style.visibility = "visible";

		}
		else {
			res.disabled = false;
			var wrong = "&#10008;";
			mark.style = "visibility:visible; color:red; font-size:22px;";
			mark.innerHTML = wrong;
		}
	}
	res.onclick = function () {
		setTimeout(function () {
			sheet.style.visibility = "hidden";
		}, 250);
		chk.style.visibility = "hidden";
		res.style.visibility = "hidden";
		id.value = ans.toFixed(2);;
		id.style.color = "black";
		id.disabled = true;
		id.style.backgroundColor = "white";
		mark.style.visibility = "hidden";
		setTimeout(function () {
		
		document.getElementById("nextButton").style.visibility = "visible";
	}, 250);

	}
}


function validateAnswer(id, ans, mark, chk, res, sheet) {
	cnt++;
	if (!id.value || !id.value != " ") {
		alert("Enter the value to proceed ");
	}
	else {
		n = id.value;
		if (Math.round(n * 100) == Math.round(ans * 100)) {
			mark.style = "visibility:visible; color:green; font-size:22px;";
			var right = "&#10004;";
			mark.innerHTML = right;
			chk.style.visibility = "hidden";
			res.style.visibility = "hidden";
			id.style.color = "black";
			id.disabled = true;
			id.style.backgroundColor = "white";
			setTimeout(function () {
				sheet.style.visibility = "hidden";
			}, 250);
			check();
		}
		else {
			res.disabled = false;
			var wrong = "&#10008;";
			mark.style = "visibility:visible; color:red; font-size:22px;";
			mark.innerHTML = wrong;
		}
	}
	res.onclick = function () {
		setTimeout(function () {
			sheet.style.visibility = "hidden";
		}, 250);
		chk.style.visibility = "hidden";
		res.style.visibility = "hidden";
		id.value = ans.toFixed(2);
		id.style.color = "black";
		id.disabled = true;
		id.style.backgroundColor = "white";
		mark.style.visibility = "hidden";
		check();

	}
}

function check() 
{
	if(document.getElementById("ch2").style.visibility == "hidden") 
	{
		document.getElementById("nextButton").style.visibility = "visible";
		if(repeat == 1) 
		{
			document.getElementById('13-5').style.visibility = "visible";
			document.getElementById('13-51').style.visibility = "visible";
		}
		if (repeat < 3) {
			simsubscreennum = 8;
			p++;
		}
		else
		{
			simsubscreennum == 14;
		}
	}
}

function refresh() {
	document.getElementById("s1").style.animation = "";
	document.getElementById("a12").style.animation = "";
	document.getElementById("t21").style.animation = "";
	document.getElementById("a31").style.animation = "";
	document.getElementById("a23").style.animation = "";
	document.getElementById("ah").style.animation = "";
	document.getElementById("a16").style.animation = "";
	document.getElementById("ah1").style.animation = "";
	document.getElementById("aco1").style.animation = "";
	document.getElementById("a62").style.animation = "";
	document.getElementById("a26").style.animation = "";
	document.getElementById("b01").style.animation = "";
	document.getElementById("b02").style.animation = "";
	document.getElementById("13-12").innerHTML = "&nbsp;" + 105;
	document.getElementById("1-0").style.backgroundColor = "";
	document.getElementById("2-0").style.backgroundColor = "";
	document.getElementById("3-0").style.backgroundColor = "";
	document.getElementById("4-0").style.backgroundColor = "";
	document.getElementById("5-0").style.backgroundColor = "";
	document.getElementById('can01').innerHTML = "Weight of the empty container, (w<sub>1</sub>) = ";
	document.getElementById('can02').innerHTML = "Weight of the container with field soil, (w<sub>2</sub>) = ";
	document.getElementById('can14').innerHTML = "Weight of the container with the dry soil, (w<sub>3</sub>) = ";
	document.getElementById("acu").style.animation = "";
	document.getElementById("tr1").style.animation = "";
	document.getElementById("tr2").style.animation = "";
	document.getElementById("auu").style.animation = "";
	document.getElementById("b").style.animation = "";
	document.getElementById('p1-1').innerHTML = "";
	document.getElementById('p2-1').innerHTML = "";
	document.getElementById('p3-1').innerHTML = "";
	document.getElementById('p4-1').innerHTML = "";
	document.getElementById('p5-1').innerHTML = "";
	document.getElementById("mak1").style.visibility = "hidden";
		document.getElementById("mak2").style.visibility = "hidden";
}