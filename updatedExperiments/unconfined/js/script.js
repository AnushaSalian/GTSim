   var user = 0;
   var user1 =0;
   var user2 = 0;
   
   var counter=0;
   var counter1=0;
   var counter2=0;
   
   var sInput1=0;
   var sInput2=0;
   var sInput3=0;

   var rInput1=0;
   var rInput2=0;
   var rInput3=0;
   
   var oInput1=0;
   var oInput2=0;
   var oInput3=0;
   
var dataA=[[7.60,]];
var dataB=[[3.80,]];
var tryData = [86.19,227.71,50,80,67,88,99,45,78,9]
console.log(tryData)

let x =[[0.29,0.295,0.31,0.325,0.365,0.4,0.48,0.635,0.78,0.93,1.08,1.235,1.38,1.52,1.55,1.58,1.5850],
	   [0.091,0.14,0.21,0.3,0.38,0.4482,0.54,0.61,0.7,0.78,0.85,0.94,1.03,1.09,1.112],
	   [0.365,0.38,0.42,0.45,0.55,0.7,0.86,1.02,1.17,1.32,1.49,1.63,1.69,1.74,1.76]];

let i=(parseInt((Math.random()*(3-0)),10));
				console.log(i);
				console.log(x[i]);
	
var sample =[[10,0.5,3.4800,0.0066,11.4151,0.3049],
			[3,0.5,1.0400,0.0066,11.4151,0.0911],
			[12,0.5,4.1700,0.0066,11.4151,0.3653]] ;
			console.log(sample);

var sample1 =[[0.354,0.35,66,38,1.59,0.28,0.57,"stiff"],
   			[0.268,0.26,64,42,1.1,0.14,0.28,"Medium"],
			[0.429,0.42,64,38,1.76,0.28,0.57,"stiff"]];
			console.log(sample1[i])
console.log(sample1[i])

var finalData=[[1.59, 42, 0.354],
			   [1.10, 38, 0.268],
			   [1.76, 38, 0.429]];
			   console.log(finalData)
   
var value = [[10,0.5,3.4800,0.0066,11.4151,0.3049],
			[13,1,4.5200,0.132,11.4912,0.3933],
			[28,1.5,9.7400,0.0197,11.5683,0.8420],
			[38,2,13.2200,0.0263,11.6465,1.1351],
			[52,2.5,18.0900,0.0329,11.7257,1.5428],
			[54,3,18.7800,0.0395,11.8060,1.5907]];
   
var value1 = [[3,0.5,1.0400,0.0066,11.4151,0.0911],
			  [7,1,2.4300,0.0132,11.4912,0.2115],
			  [10,1.5,3.4900,0.0197,11.5683,0.3017],
			  [15,2,5.2200,0.0263,11.6465,0.4482],
			  [17,2.5,5.9100,0.0329,11.7257,0.5040],
			  [29,3,10.0400,0.0395,11.8060,0.8504],
			  [38,3.5,13.2200,0.0461,11.8874,1.1121]];
		   
var value2 = [[12,0.5,4.1700,0.0066,11.4151,0.3653],
			  [15,1,5.2200,0.0132,11.4912,0.4543],
			  [30,1.5,10.4400,0.0197,11.5683,0.9025],
			  [40,2,13.9100,0.0263,11.6465,1.1944],
			  [55,2.5,19.1300,0.0329,11.7257,1.6315],
			  [60,3,20.8000,0.0395,11.8060,1.7618]];


// var sen =["stiff", "middle"];
		   
const characters ='a';
   let interval = 1000;
   let increment = 0;
   let values = i == 0? value: i== 1? value1: i==2? value2:
//    let Curves = i == 0? curve: i== 1? curve1: i==2? curve2:
   console.log(i,values)
   
var graphData = [{
	y: (x[i]),
    x: [0.0003,0.0050,0.0075,0.0100,0.0125,0.0150,0.0175,0.0200,0.0225,0.0250,0.0275,0.0300,0.0325,0.0350,0.0375,0.0400], 
	type:"line",
	'line': {'shape': 'spline', 'smoothing': 1.3},

    mode:'line'+'markers',
    enableAnimation: true
}]
let layout = {
	title:'Stress V/S Strain',
    xaxis: {
		title:'Strain,e',
		range: [0,0.04],
    	fixedrange: false
		},
  yaxis: {
	range: [ 0,1.8],
    title:'Stress, ꞇ (kg/cm<sup>2</sup>)',
    fixedrange: false
  },
  width: 780,
  height: 490,
  
  line: {shape: 'vh',
 		// type: 'lines',
		// path: 'M 0 0,1.2 Q 1,3 2,0.3',
		// line: {
		//   color: 'rgb(207, 114, 255)'
		// }
}
};
let options = {
    scrollZoom: false, // lets us scroll to zoom in and out - works
    showLink: false, // removes the link to edit on plotly - works
    modeBarButtonsToRemove: ['toImage', 'zoom2d', 'pan', 'pan2d', 'autoScale2d'],
    //modeBarButtonsToAdd: ['lasso2d'],
    displayLogo: false, // this one also seems to not work
    displayModeBar: false, //this one does work
    isResponsive:true,
    animationEnabled:true,
};

function plotUsingPlotly(){
    Plotly.newPlot('graph1', graphData, layout,options);
}
function decideLayoutPath1(){
	document.getElementById('16-2').style.visibility="visible";
	
	document.getElementById('16-1').style.visibility="hidden";
	document.getElementById('16-3').style.visibility="hidden";
	if(i==0){
		createPathSample1a();
		}else if(i==1){
		createPathSample2a();
		} else if(i == 2){
		createPathSample3a();
		
}}

function decideLayoutPath2(){
	document.getElementById('16-3').style.visibility="visible";
	// document.getElementById('p16-2').style.visibility="visible";
	document.getElementById('16-1').style.visibility="hidden";
	document.getElementById('16-2').style.visibility="hidden";
	if(i==0){
		createPathSample1b();
	}else if(i==1){
		createPathSample2b();
	} else if(i == 2){
		createPathSample3b();
	}}

function decideLayoutPath3(){
	document.getElementById('16-3').style.visibility="hidden";
	document.getElementById('p16-3').style.visibility="visible";
	document.getElementById('nextButton').style.visibility="visible";

	if(i==0){
		createPathSample1c();
		}else if(i==1){
		createPathSample2c();
		} else if(i == 2){
		createPathSample3c();
		}}

function formula(){
	if(i==0){
		// document.getElementById('g1').style.visibility="visible";
		// document.getElementById('x2').style.visibility="visible";
		// document.getElementById('x2a').style.visibility="visible";
		// document.getElementById('x2b').style.visibility="visible";
	}else if(i==1){
		// document.getElementById('g2').style.visibility="visible";
		// document.getElementById('x3').style.visibility="visible";
		// document.getElementById('x3a').style.visibility="visible";
		// document.getElementById('x3b').style.visibility="visible";
	} else if(i == 2){
		// document.getElementById('g3').style.visibility="visible";
		// document.getElementById('x4').style.visibility="visible";
		// document.getElementById('x4a').style.visibility="visible";
		// document.getElementById('x4b').style.visibility="visible";
	}
}


function slope(){
	if(i==0){
		document.getElementById('g1').style.visibility="visible";
	}else if(i==1){
			document.getElementById('g2').style.visibility="visible";
	} else if(i == 2){
		document.getElementById('g3').style.visibility="visible";
	}
}
var graphData1 = [{
	y: x[i], 
	x: [],
    type: 'splain',
    mode:'curve.markers',
    enableAnimation: true
}];
let layout1a = {
	title:"Mohr's Circle",
	xaxis: {
	range:[0,1.7],
	title:'Compressive Stress, σ (kg/cm<sup>2</sup>)',
    fixedrange: true
	},
	yaxis: {
		range: [ 0,0.9],
		title:'Shear Stress, ꞇ (kg/cm<sup>2</sup>)',
		fixedrange: true
	  },
	  width: 790,
  	height: 450,
  	shapes: [
	
]};
function plotUsingPlotly1(){
    Plotly.newPlot('graph2', graphData1, layout1a,options);
}
function createPathSample1a(){
	layout1a.shapes.push({
			type: 'line01',
			path: 'M 0 0,1,1.3 Q 1.5,4 3,0.0',
			line: {
			  color: 'rgb(207, 114, 255)'
			}});
			Plotly.newPlot('graph2', graphData1, layout1a);
}
function createPathSample1b(){
	layout1a.shapes.push({
			type: 'path',
		 	path: 'M 0,0 C 0.1,1.2, 1.5,1 1.6,0',
			line: {
			  color: 'rgb(100, 90, 200)'
			}});
			Plotly.newPlot('graph2', graphData1, layout1a);
}
function createPathSample1c(){
	layout1a.shapes.push({
			type: 'line8',
			path: 'M 0 0.33,1.8,1 Q 3,4 4,0.7',
		  	line: {
		    color: 'rgb(93, 164, 214)'
		  	}
		  });
			Plotly.newPlot('graph2', graphData1, layout1a);
}
var graphData2a = [{
	// y: [], 
	// x: [], 
    type: 'line	',
    mode:'curve.markers',
    enableAnimation: true
}];
// slope  x and y axis  and functions//
let layout2a = {
	title:"Mohr's Circle",
	xaxis: {
	range:[0,1.2],
	title:'Compressive Stress, σ (kg/cm<sup>2</sup>)',
    fixedrange: true
	},
	yaxis: {
		range: [ 0,0.8],
		title:'Shear Stress, ꞇ (kg/cm<sup>2</sup>)',
		fixedrange: true
	  },
	  width: 790,
  	height: 450,
  	shapes: [
	
	]};
function plotUsingPlotly2a(){
    Plotly.newPlot('graph2', graphData2a, layout2a,options);
}
function createPathSample2a(){
	layout2a.shapes.push({
			type: 'line3',
			path: 'M 0 0,0.5,1 Q 1.2,4 4,0.3',
			line: {
			  color: 'rgb(207, 114, 255)'
			}});
			Plotly.newPlot('graph2', graphData2a, layout2a);
}
function createPathSample2b(){
	layout2a.shapes.push({
			type: 'path1',
			path: 'M 0,0 C 0,1.1, 1.1,1 1.1,0',
			line: {
			  color: 'rgb(100, 90, 200)'
			}});
			Plotly.newPlot('graph2', graphData2a, layout2a);
}
function createPathSample2c(){
	layout2a.shapes.push({
			type: 'line4',
			path: 'M 0 0.25,0.4,1 Q 1.6,3.5 5,0.4',
		  	line: {
		    color: 'rgb(93, 164, 214)'
		  	}
		  });
			Plotly.newPlot('graph2', graphData2a, layout2a);
}
var graphData3a = [{
	y: [], 
	x: [], 
	type: 'line	',
    mode:'curve.markers',
    enableAnimation: true
}];
let layout3a = {
	title:"Mohr's Circle",
	xaxis: {
	range:[0,1.7],
	title:'Compressive Stress, σ (kg/cm<sup>2</sup>)',
    fixedrange: true
	},
	yaxis: {
		range: [ 0,0.9],
		title:'Shear Stress, ꞇ (kg/cm<sup>2</sup>)',
		fixedrange: true
	  },
  	shapes: [
	
]};
function plotUsingPlotly3a(){
    Plotly.newPlot('graph2', graphData3a, layout3a,options);
}
function createPathSample3a(){
	layout3a.shapes.push({
		type: 'line2',
		path: 'M 0 0,1,1.3 Q 1.5,4 3,0.0',
		line: {
		color: 'rgb(207, 114, 255)'
		}});
		Plotly.newPlot('graph2', graphData3a, layout3a);
}
function createPathSample3b(){
	layout3a.shapes.push({
			type: 'path',
			path: 'M 0,0 C 0.1,1.2, 1.6,1 1.7,0',
			line: {
			color: 'rgb(100, 90, 200)'
			}});
			Plotly.newPlot('graph2', graphData3a, layout3a);
}
function createPathSample3c(){
	layout3a.shapes.push({
			type: 'line1',
			path: 'M 0 0.46,0.6,1 Q 3,2.5 5,0.6',
			line: {
		    color: 'rgb(93, 164, 214)'
		  	}
		  });
			Plotly.newPlot('graph2', graphData3a, layout3a);
}
function generate_table(){
	for(let i=0; i<values.length; i++){
		var runner = setTimeout(function(){
			let rows = tableData.insertRow(-1);
			clearTimeout(runner);
			eachRow(rows,values[i])
		},interval*increment);
		increment = increment+1;
	}
}
function eachRow(rows,row){
	for(let i=0;i<3; i++){
		rows.insertCell(i).innerHTML = row[i]
}}
function table13(){
	for(let i=0; i<values.length; i++){
	rows = tableData1.insertRow(-1);
	eachRow1(rows,values[i]);
	
}}
function eachRow1(rows,row){
	for(let i=0;i<row.length; i++){
	rows.insertCell(i).innerHTML = row[i]
}}

function evaluateArea(){
	// let area = tryData[0];
	// let userInput = Number(document.getElementById("res").value);
	// if(area != userInput){
	// 	document.getElementById("rightAns").innerHTML = "&#10008;"
	// 	document.getElementById("rightAns").style.color = "red";
	// 	// document.getElementById("resultStyle").style.visibility = "visible";
	// } else {
	// 	document.getElementById("rightAns").innerHTML = "&#10004;"
	// 	document.getElementById("rightAns").style.color = "green";
	// }
	let area = tryData[0];
	let userInput = Number(document.getElementById("res").value);
	document.getElementById("rightAns").style.visibility="hidden";
	document.getElementById("res").value = area;
	document.getElementById('Result').style.visibility="hidden";

	document.getElementById("form1").style.visibility="visible";
	document.getElementById("iv1").style.visibility="visible";
}
function hideButton()
{
	let area = tryData[0];
	let userInput = Number(document.getElementById("res").value);
	console.log("hit");

	if(!userInput)
	{
		alert("please enter a value")
	}
	else 
	{
		counter++;
		if(area != userInput){
			document.getElementById("rightAns").innerHTML = "&#10008;"
			document.getElementById("rightAns").style.color = "red";
			document.getElementById("Result").style.visibility="hidden";
			// document.getElementById("form1").style.visibility="visible";
			// 		document.getElementById("iv1").style.visibility="visible";
			// document.getElementById("resultStyle").style.visibility = "visible";
		} else {
			document.getElementById("rightAns").innerHTML = "&#10004;"
			document.getElementById("rightAns").style.color = "green";
			document.getElementById("chk").style.visibility = "hidden";
			document.getElementById("Result").style.visibility="hidden";
			document.getElementById("form1").style.visibility="visible";
					document.getElementById("iv1").style.visibility="visible";
			return true;
			
		}
		// if(counter>1)
		// {
			document.getElementById("chk").style.visibility="hidden";
			document.getElementById("Result").style.visibility="visible";
		// }	
	}
	
}


function evaluateArea1(){

	let area = tryData[1];
	let userInput = Number(document.getElementById("res1").value);
	document.getElementById("rightAns1").style.visibility = "hidden";
	document.getElementById("res1").value = area;
	document.getElementById('Result1').style.visibility="hidden";
	document.getElementById("form2").style.visibility="visible";
				itv=(dataA[0]/(dataB[0][1]))*100;
				document.getElementById("iv2").style.visibility="visible";
}
function hideButton1() {

	let area = tryData[1];
	let userInput = Number(document.getElementById("res1").value);

	if (!userInput) {
		alert("please enter a value")
	}
	else {
		counter1++;
		if (area != userInput) {
			document.getElementById("rightAns1").innerHTML = "&#10008;"
			document.getElementById("rightAns1").style.color = "red";
			document.getElementById("Result1").style.visibility="hidden";
			// document.getElementById("resultStyle").style.visibility = "visible";
		} else {
			document.getElementById("rightAns1").innerHTML = "&#10004;"
			document.getElementById("rightAns1").style.color = "green";
			document.getElementById("chk1").style.visibility = "hidden";
			document.getElementById("Result1").style.visibility="hidden";
			document.getElementById("form2").style.visibility="visible";
				itv=(dataA[0]/(dataB[0][1]))*100;
				document.getElementById("iv2").style.visibility="visible";
			// document.getElementById("Result1").style.visibility = "visible";
			return true;

		}
		// if (counter1 > 1) {
			document.getElementById("chk1").style.visibility = "hidden";
			document.getElementById("Result1").style.visibility = "visible";
			
		// }
	}

}


function evaluateArea2() {

	let area = tryData[2];
	let userInput = Number(document.getElementById("res2").value);
	document.getElementById("rightAns2").style.visibility = "hidden";
	document.getElementById("res2").value = area;
	document.getElementById('Result2').style.visibility="hidden";
}
function hideButton2() {

	let area = tryData[2];
	let userInput = Number(document.getElementById("res2").value);

	if (!userInput) {
		alert("please enter a value")
	}
	else {
		counter2++;
		if (area != userInput) {
			document.getElementById("rightAns2").innerHTML = "&#10008;"
			document.getElementById("rightAns2").style.color = "red";
			// document.getElementById("resultStyle").style.visibility = "visible";
		} else {
			document.getElementById("rightAns2").innerHTML = "&#10004;"
			document.getElementById("rightAns2").style.color = "green";
			document.getElementById("chk2").style.visibility = "hidden";
			document.getElementById("Result2").style.visibility="hidden";
			document.getElementById('nextButton').style.visibility="visible";
			// document.getElementById("chk2").style.visibility = "hidden";
			return true;

		}
		// if (counter2 > 1) {
			document.getElementById("chk2").style.visibility = "hidden";
			document.getElementById("Result2").style.visibility = "visible";
		// }
	}

}


function navNext()
{
	for(temp=0;temp<=17;temp++)
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
	if(document.getElementById('arrow1').style.visibility=="hidden")
		document.getElementById('arrow1').style.visibility="visible";
	else
		document.getElementById('arrow1').style.visibility="hidden";
}
function myStopFunction()
{
	clearInterval(myInt);
	document.getElementById('arrow1').style.visibility="hidden";
}



function magic(){
if(simsubscreennum==1){
        myInt=setInterval(function(){animatearrow();},500);
        document.getElementById('arrow1').style="visibility:visible; left:167px; top:91px; position:absolute; height:35px;";
		document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
		document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
		document.getElementById('arrow1').style.transform="rotate(-90deg)";
		document.getElementById('1-2').style.visibility="visible";
		document.getElementById('p1-1').style.visibility="visible";
        document.getElementById('1-2').onclick=function(){
            myStopFunction();
            document.getElementById('1-2').onclick="";
            document.getElementById('1-2').style.transformOrigin="0 20%";
			document.getElementById('1-2').style.animation="moveScale 4s forwards";
			setTimeout(function(){
			document.getElementById("p1-1").innerHTML="Diameter of the Split Mould, d (cm) = <span style='border-bottom-style:double'> "+dataB[0][0] + "0</span>cm";
			document.getElementById('p2-1').style.visibility="visible";
            setTimeout(function(){
				document.getElementById('1-2').style.visibility="visible";
			setTimeout(function(){
				document.getElementById('1-2').style.visibility="hidden";
				document.getElementById("p2-1").style.visibility="hidden";
			myInt=setInterval(function(){animatearrow();},500);
							document.getElementById('arrow1').style="visibility:visible; left:17px; top:247px; position:absolute; height:40px; transform:rotate(-180deg)";
							document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
							document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
							document.getElementById('arrow1').style.transform="rotate(-180deg)";
							document.getElementById('1-3').style.visibility="visible";
									document.getElementById('1-3').onclick=function(){
									myStopFunction();
									document.getElementById('1-3').onclick=""
									document.getElementById('1-3').style="position:absolute; visibility:visible;width:100%; top:400px; left:362px;rotate:0deg;max-width:10%; ";
									document.getElementById('1-3').style.transformOrigin="0 20%";
									document.getElementById('1-3').style.animation="moveScale1 4s forwards";
									document.getElementById("p1-2").style.visibility="visible";
									setTimeout(function(){
										document.getElementById("p1-2").innerHTML="Height of the Split Mould, h (cm) = <span style='border-bottom-style:double'> "+dataA[0][0] + "0</span>cm";
										document.getElementById("p2-2").style.visibility="visible";
									setTimeout(function(){
										document.getElementById('1-3').style.visibility="visible";
										document.getElementById("p2-2").style.visibility="visible";
									setTimeout(function(){
										document.getElementById('1-3').style.visibility="hidden";
										document.getElementById("p2-2").style.visibility="hidden";
									},2000);
										document.getElementById('nextButton').style.visibility="visible";
									})
								},4000);
							}
						
						})
					
					},2000);

			},4000);
        }
}
else if(simsubscreennum==2){
			document.getElementById("p1-1").style.visibility="hidden";
			document.getElementById("p2-2").style.visibility="hidden";
			document.getElementById("p1-2").style.visibility="hidden";
				document.getElementById('1-3').style="visibility:hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById("iv2").style.visibility="visible";
				
						document.getElementById("form").style.visibility="visible";
						document.getElementById("iv").style.visibility="visible";
			
					document.getElementById("form1").style.visibility="hidden";
					document.getElementById("iv1").style.visibility="hidden";
				
				document.getElementById("form2").style.visibility="hidden";
				itv=(dataA[0]/(dataB[0][1]))*100;
				document.getElementById("iv2").style.visibility="hidden";
			// document.getElementById("iv2").style.visibility="visible";
}
else if(simsubscreennum==3)
{
	document.getElementById('iv').style.visibility="hidden"; 
	document.getElementById('form').style.visibility="hidden"; 
	document.getElementById('iv1').style.visibility="hidden"; 
	document.getElementById('form1').style.visibility="hidden"; 
	document.getElementById('iv2').style.visibility="hidden"; 
	document.getElementById('form2').style.visibility="hidden";
	document.getElementById('Result').style.visibility="hidden"; 
	document.getElementById('Result1').style.visibility="hidden"; 
	document.getElementById('Result2').style.visibility="hidden"; 

myInt=setInterval(function(){animatearrow();},500);
	document.getElementById('arrow1').style="visibility:visible; left:100px; top:100px; position:absolute; height:30px;";
	document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.transform="rotate(-90deg)";
	document.getElementById('3-3').style.visibility="visible";
	document.getElementById('3-3').onclick=function()
	{
		myStopFunction();
			document.getElementById('3-3').onclick="";
			document.getElementById('3-3').style.visibility="visible";
            document.getElementById('3-3').style.transformOrigin="0 20%";
			document.getElementById('3-3').style.animation="moveTrowel 3.5s forwards";
        setTimeout(function()
		{
				document.getElementById('3-3').onclick="";
				document.getElementById('3-3').style.visibility="hidden";
				document.getElementById('3-3a').style.visibility="visible";
				document.getElementById('3-4').style.visibility="visible";
		setTimeout(function()
		{
					document.getElementById('3-3a').style.visibility="hidden";
					document.getElementById('3-5').style.visibility="visible";
					document.getElementById('3-1').style.visibility="visible";
		setTimeout(function(){
				myInt=setInterval(function(){animatearrow();},500);	
				document.getElementById('arrow1').style="visibility:visible; left:100px; top:100px; position:absolute;height:30px;";
				document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
				document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
				document.getElementById('arrow1').style.transform="rotate(-90deg)";
				document.getElementById('3-5').onclick=function()
				{
			myStopFunction();
					document.getElementById('3-5').onclick="";
					document.getElementById('3-5').style.transformOrigin="0 20%";
					document.getElementById('3-5').style.animation="moveTrowel1 3.5s forwards";
			setTimeout(function()
					{
						document.getElementById('3-5').style.visibility="hidden"
						document.getElementById('3-5a').style.visibility="visible";
						document.getElementById('3-5b').style.visibility="visible";
			setTimeout(function(){
						document.getElementById("3-5c").style.visibility="visible";	
					},500);
			setTimeout(function()
					{
						document.getElementById('3-5a').style.visibility="hidden";
						document.getElementById('3-5b').style.visibility="hidden";
			setTimeout(function(){
								document.getElementById('3-6').style.visibility="visible";	
						
					myInt=setInterval(function(){animatearrow();},500);	
							document.getElementById('arrow1').style="visibility:visible; left:100px; top:100px; position:absolute; height:30px;";
							document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
							document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
							document.getElementById('arrow1').style.transform="rotate(-90deg)";
							document.getElementById('3-6').style.visibility="visible";
							document.getElementById('3-6').onclick=function()
							{
					myStopFunction();
								document.getElementById('3-6').onclick="";
								document.getElementById('3-6').style.transformOrigin="0 20%";
								document.getElementById('3-6').style.animation="tamp 4s forwards";
						setTimeout(function()	
								{
									document.getElementById('3-6').style.visibility="visible";
									document.getElementById('3-5a').style.visibility="hidden";
									document.getElementById('3-4').style.visibility="visible";
									document.getElementById('3-7').style.visibility="hidden";
									document.getElementById('nextButton').style.visibility="visible";
						setTimeout(function(){
										document.getElementById('3-1').style.visibility="hidden";
										document.getElementById('3-4').style.visibility="hidden";
										document.getElementById('3-5b').style.visibility="hidden";
										document.getElementById('3-5c').style.visibility="hidden";
										document.getElementById('3-6').style.visibility="hidden";
										document.getElementById('3-7').style.visibility="visible";	
										})
								},4000);
							}
						},1500);
						},1500);
					},3500);
				}
			})
		},1200);
},3500);		
}}
else if(simsubscreennum==4)
	{
		document.getElementById('3-6').style.visibility="hidden";
		document.getElementById('3-5c').style.visibility="hidden";
		document.getElementById('3-4').style.visibility="hidden";
		document.getElementById('3-1').style.visibility="hidden";
		document.getElementById('3-7').style.visibility="hidden";
	myInt=setInterval(function(){animatearrow();},500);	
							document.getElementById('arrow1').style="visibility:visible; left:86px; top:452px; position:absolute; height:30px;";
							document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
							document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
							document.getElementById('arrow1').style.transform="rotate(-90deg)";
							document.getElementById('4-a').style.visibility="visible";
							document.getElementById('4-a').onclick=function()
							{
					myStopFunction();
								document.getElementById('4-a').onclick="";
								document.getElementById('4-a').style.transformOrigin="0 20%";
								document.getElementById('4-a').style.animation="Cap 4s forwards";
								setTimeout(function(){
									document.getElementById('4-2').style.visibility="visible";
									document.getElementById('4-1').style.visibility="hidden";
									document.getElementById('4-1a').style.visibility="visible";
									document.getElementById('4-bs').style.visibility="visible";
									document.getElementById('4-a').style.visibility="hidden";
					myInt=setInterval(function(){animatearrow();},500);	
							document.getElementById('arrow1').style="visibility:visible; left:372px; top:87px; position:absolute; height:30px;";
							document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
							document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
							document.getElementById('arrow1').style.transform="rotate(-90deg)";
							document.getElementById('4-2').onclick=function()
							{
					myStopFunction();
								document.getElementById('4-2').onclick="";
								document.getElementById('4-2').style.transformOrigin="0 20%";
								document.getElementById('4-2').style.animation="tamp1 4.5s forwards";
					setTimeout(function()	
								{
									document.getElementById('3-6').style.visibility="hidden";
									document.getElementById('4-2').style.visibility="hidden";
									document.getElementById('4-1a').style.visibility="hidden";
									document.getElementById('4-bs').style.visibility="hidden"
									document.getElementById('4-b').style.visibility="visible"
					myInt=setInterval(function(){animatearrow();},500);
								document.getElementById('arrow1').style="visibility:visible; left:513px; top:108px; position:absolute; height:30px;";
								document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
								document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
								document.getElementById('arrow1').style.transform="rotate(-90deg)";
								document.getElementById('4-3').style.visibility="visible";
								document.getElementById('4-3').onclick=function()
								{
									myStopFunction();
										document.getElementById('4-3').onclick="";
										document.getElementById('4-3').style.transformOrigin="0 20%";
										document.getElementById('4-3').style.animation="moveBowl 2.5s forwards";
										setTimeout(function()
										{		
											myInt=setInterval(function(){animatearrow();},500);	
												document.getElementById('arrow1').style="visibility:visible; left:62px; top:99px; position:absolute; height:30px;";
												document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
												document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
												document.getElementById('arrow1').style.transform="rotate(-90deg)";
												document.getElementById('4-4').style.visibility="visible";
												document.getElementById('4-4').onclick=function()
											{
												myStopFunction();
												document.getElementById('4-4').onclick="";
												document.getElementById('4-4').style.transformOrigin="0 20%";
												document.getElementById('4-4').style.animation="moveBowl1 2.5s forwards";
												setTimeout(function()
												{
													document.getElementById('4-4').style.visibility="hidden";	
													document.getElementById('4-4a').style.visibility="visible";	
													setTimeout(function(){
														document.getElementById('4-4a').style.visibility="hidden";
														document.getElementById('4-4c').style.visibility="visible";
														
												setTimeout(function(){
														document.getElementById('4-3').style.visibility="hidden";
														document.getElementById('4-4c').style.	visibility="hidden";
												setTimeout(function(){
														document.getElementById('4-4b').style.visibility="visible";	
											myInt=setInterval(function(){animatearrow();},500);	
													document.getElementById('arrow1').style="visibility:visible; left:636px; top:178px; position:absolute; height:30px;";
													document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
													document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
													document.getElementById('arrow1').style.transform="rotate(-90deg)";
													document.getElementById('4-4b').onclick=function()
													{
														myStopFunction();
														
															document.getElementById('4-4b').onclick="";
															document.getElementById('4-4b').style.visibility="visible";
															document.getElementById('4-4b').style.transformOrigin="0 20%";
															document.getElementById('4-4b').style.animation="mouldCap 1.5s forwards";
															setTimeout(function(){
															// setTimeout(function()
															// {
																document.getElementById('4-1').style.visibility="hidden";
																document.getElementById('4-4b').style.visibility="hidden";
																document.getElementById('4-b').style.visibility="hidden";
																// document.getElementById('4-a').style.visibility="visible";
																document.getElementById('4-1').style.visibility="hidden";
																document.getElementById('4-4d').style.visibility="visible";
																document.getElementById('4-3').style.visibility="hidden";	
																document.getElementById('4-4a').style.visibility="hidden";	
															document.getElementById('nextButton').style.visibility="visible";	
														},1500);
													}
												})
													
												},1000);
											},200);
											},2500);
										
										}	
									},2000);		
									}
								},5000);
								}
								},4000);
							}
						
						
}
else if(simsubscreennum==5)
	{
		document.getElementById('4-b').style.visibility="hidden"
		document.getElementById('4-4d').style.visibility="hidden";														
		document.getElementById('4-1a').style.visibility="hidden";
		document.getElementById('4-4b').style.visibility="hidden";
		// document.getElementById('nextButton').style.visibility="hidden";	
						myInt=setInterval(function(){animatearrow();},500);	
							document.getElementById('arrow1').style="visibility:visible; left:114px; top:320px; position:absolute; height:30px;";
							document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
							document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
							document.getElementById('arrow1').style.transform="rotate(-90deg)";
							document.getElementById('5-2').style.visibility="visible";
							document.getElementById('5-2').onclick=function()
							{
								myStopFunction();
								document.getElementById('5-2').onclick="";
								document.getElementById('5-2').style.transformOrigin="0 20%";
								document.getElementById('5-2').style.animation="mould 3s forwards";
							setTimeout(function()
							{
								document.getElementById('5-3').style.visibility="visible";	
								document.getElementById('5-4').style.visibility="visible";
								document.getElementById("5-5").style.visibility="visible";	
								document.getElementById('5-2').style.visibility="hidden";
								document.getElementById('5-1').style.visibility="hidden";		
								
								myInt=setInterval(function(){animatearrow();},500);	
												document.getElementById('arrow1').style="visibility:visible; left:380px; top:442px; position:absolute; height:28px;rotate:180deg";
												document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
												document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
												document.getElementById('arrow1').style.transform="rotate(-90deg)";
												document.getElementById('5-5').onclick=function()
												{
													myStopFunction();
													document.getElementById('5-4').onclick=""
													document.getElementById('5-4').style.transformOrigin="0 20%";
													document.getElementById("5-4").style.animation="rod 1.5s forwards";
													
													setTimeout(function()
													{
														document.getElementById('dialog').style.visibility="visible";
														document.getElementById('divp').style.visibility="visible";
														// document.getElementById('nextButton').style.visibility="hidden"
														document.getElementById('5-6').onclick=function(){ 
														document.getElementById('nextButton').style.visibility="visible"
														document.getElementById('dialog').style.visibility="hidden";
														document.getElementById('divp').style.visibility="hidden	";
													
														}
														
											},1500);
											
											
			}
			
														
		},2400);
		
		}
		
}
else if(simsubscreennum==6)
	{
		document.getElementById("5-3").style.visibility="hidden";
		document.getElementById("5-5").style.visibility="hidden";
		document.getElementById("5-4").style.visibility="hidden";
		document.getElementById("5-4").style.visibility="hidden";
		myInt=setInterval(function(){animatearrow();},500);	
			document.getElementById('arrow1').style="visibility:visible; left:248px; top:257px; position:absolute; height:30px;rotate:-90deg;";
			document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
			document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
			document.getElementById('arrow1').style.transform="rotate(-90deg)";
			document.getElementById('6-0').style.visibility="visible";
			document.getElementById('6-1').style.visibility="visible";
			document.getElementById('6-1').onclick=function()
			{
				myStopFunction();
				document.getElementById('6-1').onclick="";
				document.getElementById('6-1').style.transformOrigin="0 20%";
				document.getElementById('6-1').style.animation="mouldSet 4.5s forwards";
		setTimeout(function(){
						document.getElementById('6-2').onclick="";
						document.getElementById('6-2').style.visibility="visible";
						document.getElementById('6-2').style.transformOrigin="0 20%";
						document.getElementById('6-2').style.animation="soilspecimen 4.5s forwards";
		setTimeout(function(){
						document.getElementById('6-0').style.visibility="hidden";	
						document.getElementById('6-1').style.visibility="hidden";
						// document.getElementById('6-4').style.visibility="visible";	
				myInt=setInterval(function(){animatearrow();},500);	
						document.getElementById('arrow1').style="visibility:visible; left:161px; top:111px; position:absolute; height:30px;transform:rotate:-90deg;";
						document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
						document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
						document.getElementById('arrow1').style.transform="rotate(-90deg)";
						document.getElementById('6-4').style.visibility="visible";
						document.getElementById('6-4').onclick=function()
						{
							myStopFunction();
							document.getElementById('6-4').onclick="";
							document.getElementById('6-4').style.visibility="visible";
							document.getElementById('6-4').style.transformOrigin="0 20%";
							document.getElementById('6-4').style.animation="measureScale 2s forwards";
							setTimeout(function()
							{
								document.getElementById('p6-4').style.visibility="visible";
								document.getElementById('p6-1').style.visibility="visible";
								document.getElementById("p6-1").innerHTML="Diameter of the Split Mould, d (cm)= <span style='border-bottom-style:double'> "+dataB[0][0] + "0</span>cm";
								
								setTimeout(function(){
									
									document.getElementById('6-4').style.visibility="hidden";
									document.getElementById('p6-1').style.visibility="visible";
									document.getElementById('6-5').style.visibility="visible";
									 document.getElementById('p6-4').style.visibility="hidden";
									// setTimeout(function(){
										// document.getElementById('6-5').style.visibility="visible";
									// setTimeout(function(){
									
						myInt=setInterval(function(){animatearrow();},500);	
						document.getElementById('arrow1').style="visibility:visible; left:43px; top:252px; position:absolute; height:30px;transform:rotate:-180deg;";
						document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
						document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
						document.getElementById('arrow1').style.transform="rotate(-180deg)";
						document.getElementById('6-5').style.visibility="visible";
						document.getElementById('6-5').onclick=function()
						{
							myStopFunction();
							document.getElementById('6-5').onclick="";
							document.getElementById('6-5').style.transformOrigin="0 20%";
							document.getElementById('6-5').style.animation="measureScale1 2s forwards";
						setTimeout(function(){
								document.getElementById('p6-5').style.visibility="visible";
								document.getElementById('p6-2').style.visibility="visible";
								document.getElementById("p6-2").innerHTML="Height of the Split Mould, h (cm)= <span style='border-bottom-style:double'> "+dataA[0][0] + "0</span>cm";
						setTimeout(function(){
								document.getElementById('6-5').style.visibility="hidden";
								document.getElementById('p6-5').style.visibility="hidden";
								document.getElementById('nextButton').style.visibility="visible";
										},2000);
									},2000);
								}
							// },1700);
						},2000);
								
					},2000);
				}
			},5500);
		},1000);
	}
}
else if(simsubscreennum==7)
{
	document.getElementById('p6-1').style.visibility="hidden";
	document.getElementById('p6-2').style.visibility="hidden";
	document.getElementById('6-2').style.visibility="hidden";
	document.getElementById('6-5').style.visibility="hidden";
	document.getElementById('p6-5').style.visibility="hidden";
	myInt=setInterval(function(){animatearrow();},500);	
	document.getElementById('arrow1').style="visibility:visible; left:127px; top:199px; position:absolute; height:30px;transform:rotate:-90deg;";
	document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.transform="rotate(-90deg)";
	document.getElementById('7-1').style.visibility="visible";
	document.getElementById('7-2').style.visibility="visible";
	document.getElementById('7-2').onclick=function()
	{
		myStopFunction();
		document.getElementById('7-2').onclick="";
		document.getElementById('7-2').style.visibility="visible";
		
		// document.getElementById('7-2').style.visibility="hidden";
		
		document.getElementById('7-2').style.transformOrigin="0 20%";
		document.getElementById('7-2').style.animation="moveRing 2.5s forwards";	
		setTimeout(function(){
			document.getElementById('7-1').style.visibility="hidden";
			document.getElementById('7-2').style.visibility="hidden";
			document.getElementById('7-3').style.visibility="visible";
			document.getElementById('nextButton').style.visibility="visible";
	// 		setTimeout(function()
	// 	{
		
	// },500);	
		},2500);
		
	}	
}
else if(simsubscreennum==8)
{	document.getElementById('7-3').style.visibility="hidden";
	document.getElementById('7-1').style.visibility="hidden";
	document.getElementById('7-2').style.visibility="hidden";
	document.getElementById('8-1').style.visibility="visible";
	document.getElementById('8-2').style.visibility="visible";
	myInt=setInterval(function(){animatearrow();},500);	
	document.getElementById('arrow1').style="visibility:visible; left:680px; top:235px; position:absolute; height:30px;transform:rotate:-90deg;";
	document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.transform="rotate(-90deg)";
	// document.getElementById('7-1').style.visibility="visible";
	// document.getElementById('7-2').style.visibility="visible";
	document.getElementById('8-2').onclick=function()
	{
		myStopFunction();
		document.getElementById('8-2').onclick="";
		document.getElementById('8-2').style.visibility="visible";
		document.getElementById('8-2').style.transformOrigin="0 20%";
		document.getElementById('8-2').style.animation="moveSpecimen 2s forwards";	
		setTimeout(function(){
			document.getElementById('8-1').style.visibility="hidden";
			document.getElementById('8-2').style.visibility="hidden";
			document.getElementById('8-3').style.visibility="visible";
			document.getElementById('nextButton').style.visibility="visible";
	},2000);
}
}
else if(simsubscreennum==9)
{
	document.getElementById('8-1').style.visibility="hidden";
	document.getElementById('8-2').style.visibility="hidden";
	document.getElementById('8-3').style.visibility="hidden";
	document.getElementById('9-1').style.visibility="visible";
	document.getElementById('9-2').style.visibility="visible";
	myInt=setInterval(function(){animatearrow();},500);	
	document.getElementById('arrow1').style="visibility:visible; left:97px; top:185px; position:absolute; height:30px;transform:rotate:-90deg;";
	document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.transform="rotate(-90deg)";
	document.getElementById('9-2').style.visibility="visible";
	document.getElementById('9-2').onclick=function()
	{
		myStopFunction();
		document.getElementById('9-2').onclick="";
		document.getElementById('9-2').style.visibility="visible";
		document.getElementById('9-2').style.transformOrigin="0 20%";
		document.getElementById('9-2').style.animation="dialGauge 2.5s forwards";	
		setTimeout(function(){
			document.getElementById('9-1').style.visibility="hidden";
			document.getElementById('9-2').style.visibility="hidden";
			document.getElementById('9-3').style.visibility="visible";
			document.getElementById('9-4').style.visibility="visible";
			myInt=setInterval(function(){animatearrow();},500);	
			document.getElementById('arrow1').style="visibility:visible; left:310px; top:136px; position:absolute; height:30px;transform:rotate:180deg;";
			document.getElementById('arrow1').style.WebkitTransform="rotate(180deg)";
			document.getElementById('arrow1').style.msTransform="rotate(180deg)";
			document.getElementById('arrow1').style.transform="rotate(180deg)";
			document.getElementById('9-4').style.visibility="visible";
			document.getElementById('9-4').onclick=function()
			{
			myStopFunction();
				document.getElementById('9-4').onclick="";
				document.getElementById('9-4').style.visibility="visible";
				document.getElementById('9-4').style.transformOrigin="0 20%";
				document.getElementById('9-4').style.animation="upperPlate 2.5s forwards";
				setTimeout(function(){
					// document.getElementById('9-4').style.visibility="hidden";
					document.getElementById('nextButton').style.visibility="visible";
				},2500);
				}

			},2600);
		}

}
else if(simsubscreennum==10){
		document.getElementById('9-3').style.visibility="hidden";
		document.getElementById('9-4').style.visibility="hidden";
	myInt=setInterval(function(){animatearrow();},500);	
		document.getElementById('arrow1').style="visibility:visible; left:359px; top:200px; position:absolute; height:30px;transform:rotate:-180deg;";
		document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
		document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
		document.getElementById('arrow1').style.transform="rotate(-180deg)";
		document.getElementById('10-1').style.visibility="visible";
		document.getElementById('10-1a').style.visibility="visible";
		document.getElementById('10-1b').style.visibility="visible";
		document.getElementById('10-1a').onclick=function(){
	myStopFunction();
		document.getElementById('10-2').style.visibility="visible";
		document.getElementById('10-3').style.visibility="visible";
			document.getElementById('10-2').onclick="";
			document.getElementById('10-2').style.visibility="visible";
			document.getElementById('10-2').style.transformOrigin="45% 80%";
			document.getElementById('10-2').style.animation="Gauge 6s  forwards";	
	setTimeout(function(){
		document.getElementById('10-2').style.visibility="hidden";
			document.getElementById('10-3').style.visibility="hidden";
		setTimeout(function(){
			myInt=setInterval(function(){animatearrow();},500);	
			document.getElementById('arrow1').style="visibility:visible; left:334px; top:236px; position:absolute; height:30px;transform:rotate:-180deg;";
			document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
			document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
			document.getElementById('arrow1').style.transform="rotate(-180deg)";
			document.getElementById('10-1').style.visibility="visible";
			document.getElementById('10-1b').onclick=function(){
				myStopFunction();
					document.getElementById('10-1').onclick="";
					document.getElementById('10-2').style.visibility="visible";
					document.getElementById('10-3').style.visibility="visible";
					document.getElementById('10-2').style.transformOrigin="45% 80%";
					document.getElementById('10-2').style.animation="Gauge1 6s  forwards";
		setTimeout(function(){
			document.getElementById('10-2').style.visibility="hidden";
			document.getElementById('10-3').style.visibility="hidden";
			document.getElementById('nextButton').style.visibility="visible";
			
				},6500);
			}
		},1500);
	},6000);

}}
else if(simsubscreennum==11){
	document.getElementById('10-1a').style.visibility="hidden";
	document.getElementById('10-1b').style.visibility="hidden";
	document.getElementById('10-1').style.visibility="hidden";
	document.getElementById('10-2').style.visibility="hidden";
	document.getElementById('10-3').style.visibility="hidden";
	document.getElementById('11-1').style.visibility="visible";
	document.getElementById('11-2').style.visibility="visible";
	document.getElementById('11-3').style.visibility="visible";
	// document.getElementById('10-1a').style.visibility="hidden";
	// document.getElementById('10-1b').style.visibility="hidden";
myInt=setInterval(function(){animatearrow();},500);	
			document.getElementById('arrow1').style="visibility:visible; left:153px; top:418px; position:absolute; height:30px;transform:rotate:-180deg;";
			document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
			document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
			document.getElementById('arrow1').style.transform="rotate(-180deg)";
			document.getElementById('11-3').onclick=function(){
			myStopFunction();
				document.getElementById('11-3').onclick="";
				document.getElementById('11-3').style.visibility="visible";
				document.getElementById('11-a').style.visibility="visible";
				document.getElementById('11-a1').style.visibility="visible";
				document.getElementById('11-4').style.visibility="visible";
				// document.getElementById('11-4a').style.visibility="visible";
						document.getElementById('11-1').style.visibility="visible";
						document.getElementById('11-51').style.visibility="visible";
						document.getElementById('11-6').style.visibility="visible";
						document.getElementById('p-11').style.visibility="visible";
						document.getElementById('11-71').style.visibility="visible";
						document.getElementById('11-8').style.visibility="visible";
						document.getElementById('p-12').style.visibility="visible";
				document.getElementById('11-3').style.transformOrigin="15% 39%";
				document.getElementById('11-3').style.animation="Trol 5s 3 forwards";
			setTimeout(function(){
					document.getElementById('11-2').onclick="";
					document.getElementById('11-2').style.visibility="visible";
					document.getElementById('11-2').style.transformOrigin="10% 20%";
					document.getElementById('11-2').style.animation="spring 3s forwards";
			setTimeout(function(){
				
				document.getElementById('11-71').style.visibility="hidden";
				document.getElementById('11-7').style.visibility="visible";
						document.getElementById('11-7').onclick="";
						document.getElementById('11-7').style.transformOrigin="45% 80%";
						document.getElementById('11-7').style.animation="Gauge3 10s 1 forwards";
						document.getElementById('11-5a').style.visibility="hidden";
						document.getElementById('11-2').style.visibility="hidden";
						document.getElementById('11-4').style.visibility="visible";
			setTimeout(function(){
							document.getElementById('11-b').style.visibility="visible";
							document.getElementById('11-b1').style.visibility="visible";
							document.getElementById('11-3a').style.visibility="hidden";
							document.getElementById('11-51').style.visibility="hidden";
							document.getElementById('11-5').style.visibility="visible";
			setTimeout(function(){
						document.getElementById('11-5').style.transformOrigin="45% 80%";
						document.getElementById('11-5').style.animation="Gauge4 10s 1 forwards";
			setTimeout(function(){
						document.getElementById('11-c').style.visibility="visible";
						document.getElementById('11-c1').style.visibility="visible";
						document.getElementById("data").style.visibility="visible";
						document.getElementById("obsData").style.visibility="visible";
						setTimeout(function(){
							document.getElementById("obsData").onclick="";
							document.getElementById('nextButton').style.visibility="visible";
						},4500);
			generate_table();
		},900);
	})	
},2500);
},2500);

},2500);
}}
else if(simsubscreennum==12){
	document.getElementById('11-1').style.visibility="hidden";
	document.getElementById('11-2').style.visibility="hidden";
	document.getElementById('11-3').style.visibility="hidden";
	document.getElementById('11-4').style.visibility="hidden";
	document.getElementById('11-5').style.visibility="hidden";
	document.getElementById('11-6').style.visibility="hidden";
	document.getElementById('11-8').style.visibility="hidden";
	document.getElementById('11-3a').style.visibility="hidden";
	document.getElementById('11-a').style.visibility="hidden";
	document.getElementById('11-a1').style.visibility="hidden";
	document.getElementById('11-b').style.visibility="hidden";
	document.getElementById('11-b1').style.visibility="hidden";
	document.getElementById('11-c').style.visibility="hidden";
	document.getElementById('11-c1').style.visibility="hidden";
	document.getElementById('11-a1').style.visibility="hidden";
	// document.getElementById('11-4a').style.visibility="hidden";
	document.getElementById('p-11').style.visibility="hidden";
	document.getElementById('p-12').style.visibility="hidden";										
	document.getElementById('obsData').style.visibility="hidden";					
						document.getElementById('11-5a').style.visibility="hidden";
						document.getElementById('11-7').style.visibility="hidden";
						document.getElementById('11-8').style.visibility="hidden";
						document.getElementById('10-2').style.visibility="hidden";
						document.getElementById('10-3').style.visibility="hidden";

						document.getElementById("Dial").innerHTML = sample[i][0];
						document.getElementById("Deform").innerHTML = sample[i][1];
						document.getElementById("load").innerHTML = sample[i][2];
}
else if(simsubscreennum==13){
	document.getElementById("Result4").style.visibility = "hidden";
	document.getElementById('12-1').style.visibility = "hidden";
	document.getElementById("subData").style.visibility="hidden";
	document.getElementById("tab").style.visibility="hidden";
	setTimeout(function(){
		document.getElementById('p13-1').style.visibility = "visible";
		document.getElementById('p13-1').style.transformOrigin="45% 80%";
		document.getElementById('p13-1').style.animation="fadeIn 3.5s forwards";
		setTimeout(function(){
			document.getElementById("p13-1").style.visibility="hidden";
			document.getElementById("subData").style.visibility="visible";
			document.getElementById("tab").style.visibility="visible";
			document.getElementById('nextButton').style.visibility="visible";	
},3500);
})
table13();
	
}
else if(simsubscreennum==14){
	document.getElementById('p13-1').style.visibility = "hidden";
	document.getElementById('tab').style.visibility = "hidden";
	document.getElementById("compressive").innerHTML = finalData[i][0];
   	document.getElementById("Angle").innerHTML = finalData[i][1];
}
else if(simsubscreennum==15){
			document.getElementById('Result14').style.visibility="hidden";
			document.getElementById('graph1').style.visibility="visible";
			plotUsingPlotly();
			
			document.getElementById('15-2').onclick=function(){ 
			document.getElementById('15-1').style.visibility="visible";
			document.getElementById('15-2').style.visibility="visible"
			document.getElementById('g1').style.visibility="visible";
			slope();
			// document.getElementById('g2').style.visibility="visible";
			
			// document.getElementById('curve').style.visibility="visible";
			document.getElementById('x1').style.visibility="visible";
			document.getElementById('y1').style.visibility="visible";
			document.getElementById('slp').style.visibility="visible";
			document.getElementById('graph1').style.visibility="hidden";
			document.getElementById('nextButton').style.visibility="visible";
			}
	
				document.getElementById('15-1').onclick=function(){ 
				document.getElementById('graph1').style=" visibility:visible;position:absolute; margin-top:12px; margin-left:-45px;"
				// document.getElementById('curve').style=" visibility:hidden;position:absolute; margin-top:100px; margin-left:-58px;width:94%;"
				// document.getElementById('curve1').style=" visibility:hidden;position:absolute; margin-top:196px; margin-left:-49px;width:96%;"
				// document.getElementById('curve2').style=" visibility:hidden;position:absolute; margin-top:57px; margin-left:-65px;width:100%;"
				
			
				
				document.getElementById('g1').style.visibility="hidden";
				document.getElementById('g2').style.visibility="hidden";
				document.getElementById('g3').style.visibility="hidden";
				
				document.getElementById('x1').style.visibility="hidden";
				document.getElementById('y1').style.visibility="hidden";
				document.getElementById('slp').style.visibility="hidden";
				// Curves();
				// document.getElementById('curve1').style=" visibility:hidden;position:absolute; margin-top:92px; margin-left:-49px;width:86%;"
				// document.getElementById('curve2').style=" visibility:hidden;position:absolute; margin-top:92px; margin-left:-49px;width:86%;"
				
}}
else if(simsubscreennum==16){
document.getElementById('graph1').style.visibility="hidden";
document.getElementById('15-1').style.visibility="hidden";
document.getElementById('15-2').style.visibility="hidden";
document.getElementById('g1').style.visibility="hidden";
document.getElementById('g2').style.visibility="hidden";
document.getElementById('g3').style.visibility="hidden";
document.getElementById('p16-1').style.visibility="visible";
document.getElementById('p16-2').style.visibility="visible";
// document.getElementById('p16-3').style.visibility="visible";

document.getElementById('x1').style.visibility="hidden";
document.getElementById('y1').style.visibility="hidden";
document.getElementById('slp').style.visibility="hidden";

document.getElementById('graph2').style="position:absolute; visibility:visible;margin-top:10px; margin-left:0px;  width:100%;"
document.getElementById('16-1').style.visibility="visible";
document.getElementById('16-2').style.visibility="hidden";
document.getElementById('16-3').style.visibility="hidden";

document.getElementById("p16-1").innerHTML="Horizontal Angle, α = <span style='border-bottom-style:double';left:53px; top:522px;> "+sample1[i][2] + "°";
document.getElementById("p16-2").innerHTML="Vertical Angle,Ø  = <span style='border-bottom-style:double'left:53px; top:525px;> "+sample1[i][3] + "°";
document.getElementById("p16-3").innerHTML="C = <span style='border-bottom-style:double'left:53px; top:530px;> "+sample1[i][1] + "kg/cm<sup>2</sup>";

formula();

if(i == 0) {
	plotUsingPlotly1();
} else if(i == 1){
	plotUsingPlotly2a();
} else if(i == 2){
	plotUsingPlotly3a();
}
}
else if(simsubscreennum==17){
	document.getElementById('p16-1').style.visibility="hidden";
	document.getElementById('p16-2').style.visibility="hidden";
	document.getElementById('p16-3').style.visibility="hidden";
document.getElementById('graph2').style.visibility="hidden";
document.getElementById('16-1').style.visibility="hidden";
document.getElementById('16-2').style.visibility="hidden";
document.getElementById('16-3').style.visibility="hidden";
document.getElementById('x1').style.visibility="hidden";
document.getElementById('y1').style.visibility="hidden";
document.getElementById('slp').style.visibility="hidden";
document.getElementById('g1').style.visibility="hidden";
document.getElementById('g2').style.visibility="hidden";
document.getElementById('g3').style.visibility="hidden";


document.getElementById("p17-1").innerHTML="The Value of cohesion obtained for analytical method  = <span style='border-bottom-style:double'> "+sample1[i][0] + "kg/cm<sup>2</sup>";
document.getElementById("p17-2").innerHTML="The Value of cohesion obtained for graphical method = <span style='border-bottom-style:double'> "+sample1[i][1] + "kg/cm<sup>2</sup>";
document.getElementById("p17-3").innerHTML="Angle of internal friction, Ø  = <span style='border-bottom-style:double'> "+sample1[i][3] + "°";
document.getElementById("p17-4").innerHTML="The Unconfined Compressive Strength of the given soil  = <span style='border-bottom-style:double'> "+sample1[i][4] + "kg/cm<sup>2</sup>";
document.getElementById("17-6").innerHTML="The value of cohesive strength of soil obtained from the experiment is "+sample1[i][1] + "kg/cm<sup>2</sup>. Hence the ";
document.getElementById("17-6a").innerHTML="of soil is " + sample1[i][7] + " clay whose cohesive strength ranges from " + sample1[i][5] +  " to "  + sample1[i][6] +  "kg/cm<sup>2</sup>.";
// document.getElementById('17-6a').style.visibility="visible"
// document.getElementById('17-7').style.visibility="visible";

}}
function Observation()
{
	let sInput1 = Number(document.getElementById("s1").value);
	let sInput2= Number(document.getElementById("s2").value);
	let sInput3= Number(document.getElementById("s3").value);
	console.log(sInput1)
	let resultVisible = false;
	if(!sInput1 && !sInput2 && !sInput3)
		{
			alert("Please Enter the Value ")
		}
	else
	{
				if(sInput1 == sample[i][3]){
					setEvaluateColor("rightAns4", true)
					resultVisible = false;
				} else {
					setEvaluateColor("rightAns4", false)
					resultVisible = true;
				}
				if(sInput2 == sample[i][4]){
					setEvaluateColor("rightAns5", true)
					resultVisible = false;

				} else {
					setEvaluateColor("rightAns5", false)
					resultVisible = true;
				}
				if(sInput3 ==  sample[i][5]){
					setEvaluateColor("rightAns6", true)
					resultVisible = false;

				} else {
					setEvaluateColor("rightAns6", false)
					resultVisible = true;
				}
				if(resultVisible){
					document.getElementById("Result4").style.visibility = "visible"
					document.getElementById("12-1").style.visibility = "hidden"
				} else {
					document.getElementById("12-1").style.visibility = "hidden"
					document.getElementById('nextButton').style.visibility="visible";

}
}}	
function setEvaluateColor(id, res){
	let color = res ? "green" : "red";
	let mark = res ? "&#10004;" : "&#10008;"
	document.getElementById(id).innerHTML = mark;
	document.getElementById(id).style.color = color;
}
function evaluateArea4() 
{
	document.getElementById("rightAns4").style.visibility = "hidden";
	document.getElementById("rightAns5").style.visibility = "hidden";
	document.getElementById("rightAns6").style.visibility = "hidden";
	document.getElementById("s1").value = sample[i][3];
	document.getElementById("s2").value = sample[i][4];
	document.getElementById("s3").value = sample[i][5];
	document.getElementById("Result4").style.visibility = "hidden"
}
function Observation1(){
	let oInput1 = Number(document.getElementById("C1").value);
	console.log(oInput1);
	if(!oInput1)
		{
			alert("Please Enter the Value ")
		}
		else
		{
			if(oInput1 == finalData[i][2])
			{
				console.log("1");
				setEvaluateColor("rightAns14", true);
				document.getElementById("Result14").style.visibility = "hidden"
				document.getElementById("14-1").style.visibility = "hidden"
				document.getElementById('nextButton').style.visibility="visible";

			}
			else
			{
				console.log("0");
				setEvaluateColor("rightAns14", false);
				document.getElementById("Result14").style.visibility = "visible"
				// document.getElementById('nextButton').style.visibility="visible";

			}	
			}
}
function evaluateArea5() {
	let area = finalData[i][2];
	document.getElementById("C1").value = area;
	document.getElementById("rightAns14").style.visibility = "hidden";
	document.getElementById("Result14").style.visibility = "hidden"
	document.getElementById("14-1").style.visibility = "hidden"
	document.getElementById('nextButton').style.visibility="visible";

}
function showTooltip1(){
	document.getElementById("ttp1").style.visibility = "visible"										
}
function hideTooltip1(){
	document.getElementById("ttp1").style.visibility = "hidden"										
}
function showTooltip2(){
	document.getElementById("ttp2").style.visibility = "visible"										
}
function hideTooltip2(){
	document.getElementById("ttp2").style.visibility = "hidden"										
}
function showTooltip3(){
	document.getElementById("ttp3").style.visibility = "visible"										
}
function hideTooltip3(){
	document.getElementById("ttp3").style.visibility = "hidden"										
}
function hidedialog(){
	document.getElementById('dialog').style.visibility="hidden";
	document.getElementById('divp').style.visibility="hidden";
}
function Observation7()
{
	let rInput1 = Number(document.getElementById("R1").value);
	let rInput2= Number(document.getElementById("R2").value);
	let rInput3= Number(document.getElementById("R3").value);
	console.log(rInput1)
	let resultVisible = false;
	if(!rInput1 && !rInput2 && !rInput3)
		{
			alert("Please Enter the Value ")
		}
	else
	{
				if(rInput1 == sample1[i][0]){
					setEvaluateColor("rightAns7", true)
					resultVisible = false;
				} else {
					setEvaluateColor("rightAns7", false)
					resultVisible = true;
				}
				if(rInput2 == sample1[i][1]){
					setEvaluateColor("rightAns8", true)
					resultVisible = false;

				} else {
					setEvaluateColor("rightAns8", false)
					resultVisible = true;
				}
				if(rInput3 ==  sample1[i][2]){
					setEvaluateColor("rightAns9", true)
					resultVisible = false;

				} else {
					setEvaluateColor("rightAns9", false)
					resultVisible = true;
				}
				if(resultVisible){
					document.getElementById("Result17").style.visibility = "visible"
					document.getElementById("17-1").style.visibility = "hidden"
					// document.getElementById("17-4").style.visibility = "visible"
					// document.getElementById('p17-1').style.visibility="visible"
					// document.getElementById('p17-2').style.visibility="visible"
					// document.getElementById('p17-3').style.visibility="visible"
					// document.getElementById('p17-4').style.visibility="visible"
					
				} else {
					document.getElementById("17-1").style.visibility = "hidden"
					document.getElementById("17-4").style.visibility = "visible"
					document.getElementById('p17-1').style.visibility="visible"
					document.getElementById('p17-2').style.visibility="visible"
					document.getElementById('p17-3').style.visibility="visible"
					document.getElementById('p17-4').style.visibility="visible"

}
}}	
function evaluateArea7() 
{
	document.getElementById("rightAns7").style.visibility = "hidden";
	document.getElementById("rightAns8").style.visibility = "hidden";
	document.getElementById("rightAns9").style.visibility = "hidden";
	document.getElementById("R1").value = sample1[i][0];
	document.getElementById("R2").value = sample1[i][1];
	document.getElementById("R3").value = sample1[i][2];
	document.getElementById("Result17").style.visibility = "hidden";
	document.getElementById('17-4').style.visibility="visible"
	document.getElementById('p17-1').style.visibility="visible"
	document.getElementById('p17-2').style.visibility="visible"
	document.getElementById('p17-3').style.visibility="visible"
	document.getElementById('p17-4').style.visibility="visible"

}

















































