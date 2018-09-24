	

		
document.addEventListener("deviceready", onDeviceReady, false);

    
	function onDeviceReady() {

		window.addEventListener("batterystatus", onBatteryStatus, false);

		function onBatteryStatus(status) {
			document.getElementById('battery').innerHTML = status.level
		    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
		}
        
		var onSuccess = function(position) {
        	alert(	'Latitude: '          + position.coords.latitude          + '\n' +
              		'Longitude: '         + position.coords.longitude         + '\n' +
              		'Altitude: '          + position.coords.altitude          + '\n' +
              		'Accuracy: '          + position.coords.accuracy          + '\n' +
              		'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              		'Heading: '           + position.coords.heading           + '\n' +
              		'Speed: '             + position.coords.speed             + '\n' +
              		'Timestamp: '         + position.timestamp                + '\n');
    	};

    	// onError Callback receives a PositionError object
    	//
    	function onError(error) {
        	alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    	}

		document.getElementById('sayHello').onclick = function () { alert("hola"); }

		document.getElementById('geoloc').onclick = function () { 
			navigator.geolocation.getCurrentPosition(onSuccess, onError);
		}

		document.getElementById('takePhoto').onclick = function () {
					navigator.camera.getPicture( function(imageURI)
									{ 
										var lastPhoto= document.getElementById("thePhoto");
										lastPhoto.innerHTML="<img src='" + imageURI + "' style='width=60%;'/>" } ) 
	
					}
		document.getElementById('vibrar').onclick = function () {
			navigator.vibrate(1000)
		}

				
		
		
    }

	
		
