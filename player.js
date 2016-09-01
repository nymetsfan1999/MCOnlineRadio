/* Javascript used to change the url of the web player to the desired station */
function callID(){
	var callSymbol = document.getElementById("callsymbol").value.toUpperCase();
	    console.log(callSymbol);
            if(callSymbol == "WHYN"){
   			    	$("#player").attr('src', 'http://api.dar.fm/player_api.php?callsign=' + callSymbol + '-fm&onnow_display=true&station_display=true&volume_display=true');
        			return false;
        			}
   	    	else if(callSymbol=="WKSS"){
        				$("#player").attr('src', 'http://api.dar.fm/player_api.php?callsign=' + callSymbol + '-fm&onnow_display=true&station_display=true&volume_display=true');
        			}
       		else if(callSymbol=="WMAS"){
        				$("#player").attr('src', 'http://api.dar.fm/player_api.php?callsign=' + callSymbol + '-fm&onnow_display=true&station_display=true&volume_display=true');
        			}
   			else if(callSymbol=="WTIC"){
        				$("#player").attr('src', 'http://api.dar.fm/player_api.php?callsign=' + callSymbol + '-fm&onnow_display=true&station_display=true&volume_display=true');
        			}
   			else if(callSymbol=="WSRS"){
        				$("#player").attr('src', 'http://api.dar.fm/player_api.php?callsign=' + callSymbol + '-fm&onnow_display=true&station_display=true&volume_display=true');
        			}
   			else if(callSymbol=="WKCI"){
        				$("#player").attr('src', 'http://api.dar.fm/player_api.php?callsign=' + callSymbol + '-fm&onnow_display=true&station_display=true&volume_display=true');
        			}
        	else if(callSymbol=="WDRC"){
        				$("#player").attr('src', 'http://api.dar.fm/player_api.php?callsign=' + callSymbol + '-fm&onnow_display=true&station_display=true&volume_display=true');
        			}
        	else if(callSymbol=="WHCN"){
        				$("#player").attr('src', 'http://api.dar.fm/player_api.php?callsign=' + callSymbol + '-fm&onnow_display=true&station_display=true&volume_display=true');
        			}
   			else{
        				$("#player").attr('src', 'http://api.dar.fm/player_api.php?callsign=' + callSymbol + '&onnow_display=true&station_display=true&volume_display=true');
        			return false;
        			}
}
function stopRADIO(){
						$("#player").attr('src', 'radio_iframe.html');
        			return false;
					}
function WHYN()
        					{
        			    	$("#player").attr('src', 'http://api.dar.fm/player_api.php?callsign=WHYN-FM&onnow_display=true&station_display=true&volume_display=true');
      		  				return false;
        					}
function WMAS()
        					{
        			    	$("#player").attr('src', 'http://api.dar.fm/player_api.php?callsign=WMAS-FM&onnow_display=true&station_display=true&volume_display=true');
      		  				return false;
        					}   
function WKSS()
        					{
        			    	$("#player").attr('src', 'http://api.dar.fm/player_api.php?callsign=WKSS-FM&onnow_display=true&station_display=true&volume_display=true');
      		  				return false;
        					}     
function WSRS()
        					{
        			    	$("#player").attr('src', 'http://api.dar.fm/player_api.php?callsign=WSRS-FM&onnow_display=true&station_display=true&volume_display=true');
      		  				return false;
        					}
function WTIC()
        					{
        			    	$("#player").attr('src', 'http://api.dar.fm/player_api.php?callsign=WTIC-FM&onnow_display=true&station_display=true&volume_display=true');
      		  				return false;
        					}
function WRCH()
        					{
        			    	$("#player").attr('src', 'http://api.dar.fm/player_api.php?callsign=WRCH&onnow_display=true&station_display=true&volume_display=true');
      		  				return false;
        					}	
function WKCI()
        					{
        			    	$("#player").attr('src', 'http://api.dar.fm/player_api.php?callsign=WKCI-FM&onnow_display=true&station_display=true&volume_display=true');
      		  				return false;
        					}	
function WDRC()
        					{
        			    	$("#player").attr('src', 'http://api.dar.fm/player_api.php?callsign=WDRC-FM&onnow_display=true&station_display=true&volume_display=true');
      		  				return false;
        					}								
function WMRQ()
        					{
        			    	$("#player").attr('src', 'http://api.dar.fm/player_api.php?callsign=WMRQ&onnow_display=true&station_display=true&volume_display=true');
      		  				return false;
        					}
function WHCN()
        					{
        			    	$("#player").attr('src', 'http://api.dar.fm/player_api.php?callsign=WHCN-FM&onnow_display=true&station_display=true&volume_display=true');
      		  				return false;
        					}																	