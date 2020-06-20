/*
 * Parse the data and create a graph with the data.
 */

 
  
function home() {
	window.k=document.getElementById("Home").value;
	document.getElementById("select").style.display = "none";
	document.getElementById("tab").style.display = "none";
	document.getElementById("sts").style.display = "none";
	document.getElementById("pic").style.display = "block";
	document.getElementById("foot").style.display = "block";

	mapboxgl.accessToken = 'pk.eyJ1IjoiZ29rdWxyZWppdGgiLCJhIjoiY2tia2FnMHQzMHhodDJ0cXY4YTNnejAwMSJ9.zrdqxqj_9iq1BHkYydlF9A';
  var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/gokulrejith/ckbmelwe31cd31ipg8fiq4263/draft' // replace this with your style URL
    //zoom: 6.4,
    //center: [76.3053, 10.3723] // starting position [lng, lat]
  });

  map.on('mousemove', function(e) {
    var district = map.queryRenderedFeatures(e.point, {
      layers: ['KeralaDistricts']
    });

    if (district.length > 0) {
	  document.getElementById('pd').innerHTML =  district[0].properties.DISTRICT ;
	  document.getElementById('px').innerHTML =  district[0].properties.Cases + 'Cases';
      console.log(district[0].properties.Cases)
    } else {
	  document.getElementById('pd').innerHTML = 'Hover over districts';
	  document.getElementById('px').innerHTML = "";
	
    }
  });
  map.getCanvas().style.cursor = 'default';
  map.fitBounds([
    [74.044885, 12.835487],
    [78.743410, 7.980074]
  ]);
	console.log(k);
	
	ker(keralaa);


	function ker(keralaa) {
		var c=document.getElementById("cars").value;
		var s ="https://raw.githubusercontent.com/derin111/firebase-database/master/wo.csv"
		console.log(s);
	
		Papa.parse(s, {
			download: true,
			complete: function(results) {
				keralaa(results.data);
			}
		});
	}
	
	function keralaa(data) {
		
		var date = [];
		var cured = ["Cured"];
		var death=["Death"]
		var confirmed=["confirmed"]
		var s=1;
		for (var i = 1; i < data.length-1; i++) {
			if((data[i][1])=="Kerala"){
				var q =i;
				if((data[i-1][1])!=(data[i][1])){
					var t =i;
				
			}
			}
			
		}
		console.log(t);
		console.log(q);
		for (var i = t; i <=q; i++) {
			
			date.push(data[i][0]);
		cured.push(data[i][2]);
		death.push(data[i][3])
		confirmed.push(data[i][4])
	}
	var e = document.getElementById("cars").value;
	console.log(e);
	console.log(cured);

	var chart = c3.generate({
		bindto: '#chart',
	    data: {
	        columns: [
			
				
				cured,
				confirmed
				
				
	        ]
	    },
	    axis: {
	        x: {
	            type: 'category',
	            categories: date,
	            tick: {
					rotate: 75,
					multiline: false,
					
                	culling: {
                    	max: 15
                	}
            	}
	        }
	    },
	    zoom: {
			enabled: true
			
    	},
	    legend: {
	        position: 'down'
	    }
	});
	var chart = c3.generate({
		bindto: '#chart1',
	    data: {
	        columns: [
			
				death,
				
				
				
	        ]
	    },
	    axis: {
	        x: {
	            type: 'category',
	            categories: date,
	            tick: {
					rotate: 75,
					multiline: false,
					
                	culling: {
                    	max: 15
                	}
            	}
	        }
	    },
	    zoom: {
			enabled: true
			
    	},
	    legend: {
	        position: 'down'
	    }
	});

	var sum =parseInt(data[i-1][4]-(parseInt(data[i-1][2])+parseInt(data[i-1][3])))
	var sum1 =parseInt(data[i-2][4]-(parseInt(data[i-2][2])+parseInt(data[i-2][3])))
	var ac= (sum - sum1).toString();
	var acc ="+"+"("+ac+")"
	var co=(parseInt(data[i-1][4])-parseInt(data[i-2][4])).toString();
	var coo ="+"+"("+co+")"
	var cu=(parseInt(data[i-1][2])-parseInt(data[i-2][2])).toString();
	var cuu ="+"+"("+cu+")"
	var de=(parseInt(data[i-1][3])-parseInt(data[i-2][3])).toString();
	var dee ="+"+"("+de+")"
	var acst=(((sum/parseInt(data[i-1][4]))*100).toFixed(3))+"%"
	var dest=(((parseInt(data[i-1][3])/parseInt(data[i-1][4])).toFixed(2))*100)+"%"
	var rest= (((parseInt(data[i-1][2])/parseInt(data[i-1][4])).toFixed(2))*100)+"%"
	document.getElementById("Active1").innerHTML = acc;
	document.getElementById("cured1").innerHTML = cuu;
	document.getElementById("death1").innerHTML = dee;
	document.getElementById("confirmed1").innerHTML =coo;
	document.getElementById("Active").innerHTML = sum;
	document.getElementById("cured").innerHTML = data[i-1][2];
	document.getElementById("death").innerHTML = data[i-1][3];
	document.getElementById("confirmed").innerHTML =data[i-1][4];

	}



	console.log(k);
	
	com();
		}
function world() {
	

	var select = document.getElementById("cars");
    select.options.length = 0;
	
	window.k=document.getElementById("WorldS").value;
	document.getElementById("tab").style.display = "block";
	document.getElementById("sts").style.display = "block";
	
	document.getElementById("select").style.display = "block";
	document.getElementById("pic").style.display = "none";
	document.getElementById("foot").style.display = "none";
	console.log(k);
	par(cre);


	function par(cre) {
		var c=document.getElementById("cars").value;
		var s ="../data/world.csv"
		console.log(s);
	
		Papa.parse(s, {
			download: true,
			complete: function(results) {
				cre(results.data);
			}
		});
	}
	
	function cre(data) {

		for (var i = 1; i < data.length-1; i++) {
			
			

			
			var c=i+5
document.getElementById(i).innerHTML = data[i][0];
document.getElementById(c).innerHTML = data[i][1];
		}

	}
	
	com();
		}
function dis() {
	var select = document.getElementById("cars");
    select.options.length = 0;
	window.k=document.getElementById("District Wise").value;
	document.getElementById("tab").style.display = "block";
	document.getElementById("sts").style.display = "block";
	document.getElementById("select").style.display = "block";
	document.getElementById("pic").style.display = "none";
	document.getElementById("foot").style.display = "none";

	//map.........
	mapboxgl.accessToken = 'pk.eyJ1IjoiZ29rdWxyZWppdGgiLCJhIjoiY2tia2FnMHQzMHhodDJ0cXY4YTNnejAwMSJ9.zrdqxqj_9iq1BHkYydlF9A';
  var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/gokulrejith/ckbmelwe31cd31ipg8fiq4263/draft' // replace this with your style URL
    //zoom: 6.4,
    //center: [76.3053, 10.3723] // starting position [lng, lat]
  });

  map.on('mousemove', function(e) {
    var district = map.queryRenderedFeatures(e.point, {
      layers: ['KeralaDistricts']
    });

    if (district.length > 0) {
	  document.getElementById('pd').innerHTML =  district[0].properties.DISTRICT ;
	  document.getElementById('px').innerHTML =  district[0].properties.Cases + 'Cases';
      console.log(district[0].properties.Cases)
    } else {
	  document.getElementById('pd').innerHTML = 'Hover over districts';
	  document.getElementById('px').innerHTML = "";
	
    }
  });
  map.getCanvas().style.cursor = 'default';
  map.fitBounds([
    [74.044885, 12.835487],
    [78.743410, 7.980074]
  ]);
	console.log(k);
	
	disr(creee);


	function disr(creee) {
		var c=document.getElementById("cars").value;
		var s ="../data/district.csv"
		console.log(s);
	
		Papa.parse(s, {
			download: true,
			complete: function(results) {
				creee(results.data);
			}
		});
	}
	
	function creee(data) {

		for (var i = 1; i < data.length-1; i++) {
		
			var c=i+5
document.getElementById(i).innerHTML = data[i][0];
document.getElementById(c).innerHTML = data[i][1];
		}

	}

	com();
		}
function sta() {
	var select = document.getElementById("cars");
    select.options.length = 0;
			window.k=document.getElementById("State wise").value;
			document.getElementById("tab").style.display = "block";
			document.getElementById("sts").style.display = "block";
			document.getElementById("select").style.display = "block";
			document.getElementById("pic").style.display = "none";
			document.getElementById("foot").style.display = "none";
			console.log(k);

			state(cree);


	function state(cree) {
		var c=document.getElementById("cars").value;
		var s ="../data/state.csv"
		console.log(s);
	
		Papa.parse(s, {
			download: true,
			complete: function(results) {
				cree(results.data);
			}
		});
	}
	
	function cree(data) {
		
	

	
		for (var i = 1; i < data.length-1; i++) {
			
			

			
			var c=i+5
document.getElementById(i).innerHTML = data[i][0];
document.getElementById(c).innerHTML = data[i][1];
		}

	}

	mapboxgl.accessToken = 'pk.eyJ1IjoiZ29rdWxyZWppdGgiLCJhIjoiY2tia2FnMHQzMHhodDJ0cXY4YTNnejAwMSJ9.zrdqxqj_9iq1BHkYydlF9A';
	var map = new mapboxgl.Map({
	  container: 'map', // container id
	  style: 'mapbox://styles/gokulrejith/ckbm9zf1y17u61iqr9xen1zi1/draft' // replace this with your style URL
	  //zoom: 6.4,
	  //center: [76.3053, 10.3723] // starting position [lng, lat]
	});
  
	map.on('mousemove', function(e) {
	  var state = map.queryRenderedFeatures(e.point, {
		layers: ['IndiaStates']
	  });
  
	  if (state.length > 0) {
		document.getElementById('pd').innerHTML = state[0].properties.st_nm;
		document.getElementById('px').innerHTML = state[0].properties.Cases + 'Cases';
		console.log(state[0].properties.Cases)
	  } else {
		document.getElementById('pd').innerHTML = 'Hover over states';
		document.getElementById('px').innerHTML = "";
	  }
	});
	map.getCanvas().style.cursor = 'default';
  map.fitBounds([
	 [67.224185, 37.342192],
	  [98.598166, 7.329635]
	]);

			
			com();

				}	
function com() {
	if (k== "State wise") {
		console.log("sta");
		document.getElementById("ch").innerHTML = "State";
		document.getElementById("top").innerHTML = "States";
		document.getElementById("head").innerHTML = "State";
		stasel();
	  }
	  else if (k== "District Wise") {
		document.getElementById("ch").innerHTML = "District";
		document.getElementById("top").innerHTML = "Districts";
		document.getElementById("head").innerHTML = "District";
		dissel();
	  }
	  else if (k== "WorldS") {
		document.getElementById("ch").innerHTML = "Country";
		document.getElementById("top").innerHTML = "Countries";
		document.getElementById("head").innerHTML = "Country";
		console.log("wo");
	}
	else if (k== "Home") {
		console.log("ho");
	}
	

}
function dissel() {	

			var array = [ "Palakkad",  "Kannur",
			"Kasargode","Kozhikode","Thiruvananthapuram","Kollam","Kottayam",
			"Wayanad","Malappuram","Alappuzha","Ernakulam","Idukki","Pathanamthitta",
			"Thrissur"];
			for (var i = 0; i < array.length; i++) {
				var option = document.createElement("option");
				option.setAttribute("value", array[i]);
				option.text = array[i];
				cars.appendChild(option);
		
				
			}
				
			
		parseData(createGraph);

			}
	
	
	    function stasel() {	

			var array = [ "Andhra Pradesh",  "Arunachal Pradesh",
			"Assam","Bihar","Chhattisgarh","Goa","Gujarat",
			"Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala",
			"Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland",
			"Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telengana","Tripura",
			"Uttar Pradesh","Uttarakhand","West Bengal"];
			for (var i = 0; i < array.length; i++) {
				var option = document.createElement("option");
				option.setAttribute("value", array[i]);
				option.text = array[i];
				cars.appendChild(option);
		
				
			}
				
			
		parseData(createGraph);
		

				}	
			
				
function parseData(createGraph) {
	var c=document.getElementById("cars").value;

	var s ="https://raw.githubusercontent.com/derin111/firebase-database/master/wo.csv"
	console.log(s);

	Papa.parse(s, {
		download: true,
		complete: function(results) {
			createGraph(results.data);
		}
	});
}

function createGraph(data) {
	var c=document.getElementById("cars").value;

	var date = [];
	var cured = ["Cured"];
	var death=["Death"]
	var confirmed=["confirmed"]
	var s=1;
	for (var i = 1; i < data.length-1; i++) {
		if((data[i][1])==c){
			var q =i;
			if((data[i-1][1])!=(data[i][1])){
				var t =i;
			
		}
		}
		
	}
	console.log(t);
	console.log(q);
	for (var i = t; i <=q; i++) {
		
		date.push(data[i][0]);
	cured.push(data[i][2]);
	death.push(data[i][3])
	confirmed.push(data[i][4])
}
var e = document.getElementById("cars").value;
console.log(e);
console.log(cured);

var chart = c3.generate({
	bindto: '#chart',
	data: {
		columns: [
		
			
			cured,
			confirmed
			
			
		]
	},
	axis: {
		x: {
			type: 'category',
			categories: date,
			tick: {
				rotate: 75,
				multiline: false,
				
				culling: {
					max: 15
				}
			}
		}
	},
	zoom: {
		enabled: true
		
	},
	legend: {
		position: 'down'
	}
});
var chart = c3.generate({
	bindto: '#chart1',
	data: {
		columns: [
		
			death
			
			
			
		]
	},
	axis: {
		x: {
			type: 'category',
			categories: date,
			tick: {
				rotate: 75,
				multiline: false,
				
				culling: {
					max: 15
				}
			}
		}
	},
	zoom: {
		enabled: true
		
	},
	legend: {
		position: 'down'
	}
});
	var sum =parseInt(data[i-1][4]-(parseInt(data[i-1][2])+parseInt(data[i-1][3])))
	var sum1 =parseInt(data[i-2][4]-(parseInt(data[i-2][2])+parseInt(data[i-2][3])))
	var ac= (sum - sum1).toString();
	var acc ="+"+"("+ac+")"
	var co=(parseInt(data[i-1][4])-parseInt(data[i-2][4])).toString();
	var coo ="+"+"("+co+")"
	var cu=(parseInt(data[i-1][2])-parseInt(data[i-2][2])).toString();
	var cuu ="+"+"("+cu+")"
	var de=(parseInt(data[i-1][3])-parseInt(data[i-2][3])).toString();
	var dee ="+"+"("+de+")"
	var acst=(((sum/parseInt(data[i-1][4]))*100).toFixed(3))+"%"
	var dest=(((parseInt(data[i-1][3])/parseInt(data[i-1][4])).toFixed(2))*100)+"%"
	var rest= (((parseInt(data[i-1][2])/parseInt(data[i-1][4])).toFixed(2))*100)+"%"
	document.getElementById("Active1").innerHTML = acc;
	document.getElementById("cured1").innerHTML = cuu;
	document.getElementById("death1").innerHTML = dee;
	document.getElementById("confirmed1").innerHTML =coo;
	document.getElementById("Active").innerHTML = sum;
	document.getElementById("cured").innerHTML = data[i-1][2];
	document.getElementById("death").innerHTML = data[i-1][3];
	document.getElementById("confirmed").innerHTML =data[i-1][4];
	document.getElementById("restats").style.width = rest;
	document.getElementById("acstats").style.width = acst;
	document.getElementById("destats").style.width = dest;
	document.getElementById("rec").innerHTML = rest;
	document.getElementById("act").innerHTML = acst;
	document.getElementById("dea").innerHTML = dest;
	

}


