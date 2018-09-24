	

		
document.addEventListener("deviceready", onDeviceReady, false);

    
	function onDeviceReady() {

		window.addEventListener("batterystatus", onBatteryStatus, false);

		function onBatteryStatus(status) {
			document.getElementById('battery').innerHTML = status.level
		    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
		}
        
		document.getElementById('sayHello').onclick = function () { alert("hola"); }

		document.getElementById('takePhoto').onclick = function () {
					navigator.camera.getPicture( function(imageURI)
									{ 
										var lastPhoto= document.getElementById("thePhoto");
										lastPhoto.innerHTML="<img src='" + imageURI + "' style='width=60%;'/>" } ) 
	
					}
		document.getElementById('vibrar').onclick = function () {
			document.getElementById('prueba').innerHTML = "funciona"
			navigator.vibrate(1000)
		}

				
		
		
    }

	
		
