	

		
document.addEventListener("deviceready", onDeviceReady, false);

    
	function onDeviceReady() {
        
		document.getElementById('sayHello').onclick = function () { alert("hola"); }

		document.getElementById('takePhoto').onclick = function () {
					navigator.camera.getPicture( function(imageURI)
									{ 
										var lastPhoto= document.getElementById("thePhoto");
										lastPhoto.innerHTML="<img src='" + imageURI + "' style='width=60%;'/>" } ) 
	
					}

				
		
		
    }

	
		
