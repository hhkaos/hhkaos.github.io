"use strict";

var $APP = {};

(function() {
	
	var url = 'https://spreadsheets.google.com/feeds/list/1DmlsW78hm916t9sK1UDdnICOWO9QHPO5piJHaR5t-Lg/1/public/values?alt=json';

	load(url, function(xhr) {
		var len, i, tbody = '', response, id, obj;

		response = JSON.parse(xhr.responseText);
		$APP.data = response.feed.entry;
		len = $APP.data.length;
		
		for(i = 0; i < len; i++){
			obj = loadObj(i);

			tbody += '\
				<tr onclick="showModal(\''+ i +'\')">\
				<td>'+ obj.company +'</td>\
				<td>'+ obj.position +'</td>\
				<td>'+ obj.city +'</td>\
				<td>'+ obj.period +'</td>\
				</tr>';
		}
		(document.getElementById("expertise").querySelectorAll("tbody")[0]).innerHTML = tbody;
	});

	(document.querySelectorAll('#job .fa-times')[0]).addEventListener('click', function(){
		document.getElementById("job").setAttribute('class', 'modal closed');
	});

	document.getElementById('video').addEventListener('click', function(){
		document.getElementById("youtube-video").setAttribute('class', 'modal');
	});

	(document.querySelectorAll('#youtube-video .fa-times')[0]).addEventListener('click', function(){
		document.getElementById("youtube-video").setAttribute('class', 'modal closed');
	});


	document.getElementById("email").addEventListener("submit",function(){
		var emailTo, emailSub, emailBody;

		if(document.getElementById('topic').value === "-- Elige un tema --"){
			alert("Por favor selecciona un tema");
			return false;
		}

		emailTo = document.getElementById("to").value;
		emailSub = document.getElementById("topic").value + ': ' + document.getElementById("subject").value;
		emailBody	= document.getElementById("body").value;

		window.open("mailto:"+emailTo+'?subject='+emailSub+'&body='+emailBody);
		return false;
	})
})();

// Load object
// para
function loadObj(i){
	return {
		company: $APP.data[i]['gsx$empresaorganización'].$t,
		position: $APP.data[i]['gsx$cargo'].$t,
		city: $APP.data[i]['gsx$localización'].$t,
		period: $APP.data[i]['gsx$desde-hasta'].$t,
		achievements: $APP.data[i]['gsx$logros'].$t,
		web: $APP.data[i]['gsx$web'].$t
	};
}

function showModal(i){
	var obj = loadObj(i);
	document.getElementById("job").setAttribute('class', 'modal');
	document.getElementById("company-link").setAttribute('href', obj.web);

	document.getElementById("company-text").innerHTML = obj.company;
	document.getElementById("position").innerHTML = obj.position;
	document.getElementById("city").innerHTML = obj.city;
	document.getElementById("period").innerHTML = obj.period;
	document.getElementById("achievements").innerHTML = obj.achievements.replace("\n", "<br>");;
}

/******************************

	LOAD RESOURCE USING AJAX

******************************/
function load(url, callback) {
	var xhr;

	if(typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();
	else {
		var versions = ["MSXML2.XmlHttp.5.0", 
		"MSXML2.XmlHttp.4.0",
		"MSXML2.XmlHttp.3.0", 
		"MSXML2.XmlHttp.2.0",
		"Microsoft.XmlHttp"]

		for(var i = 0, len = versions.length; i < len; i++) {
			try {
				xhr = new ActiveXObject(versions[i]);
				break;
			}
			catch(e){}
    } // end for
   }

   xhr.onreadystatechange = ensureReadiness;

   function ensureReadiness() {
   	if(xhr.readyState < 4) {
   		return;
   	}

   	if(xhr.status !== 200) {
   		return;
   	}

    // all is well  
    if(xhr.readyState === 4) {
    	callback(xhr);
    }           
  }

  xhr.open('GET', url, true);
  xhr.send('');
}
