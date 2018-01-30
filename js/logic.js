
window.addEventListener('load', function() {


    var nRaces = 6;
    var nHorses = 3;
    function showValue(newValue, slide)
    { 
        document.getElementById(slide).innerHTML=newValue;  
        //document.getElementById(" slider0 ").innerHTML=newValue;
    }
    
    
    /**
     * Shuffles array in place.
     * @param {Array} a items The array containing the items.
     */
    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }
    
    function showLuckySix(value)
    {	
        var pot = [];
        var luckySix = [];
        var temp = "" ;
        var start = 0;
        
    for (var race = 0; race < nRaces; ++race) 
    {	
        for (var row = 0; row < nHorses; ++row) 
        {	 
           var sliderID = ' slider' + race + row +  ' '; // Note: we have forward and backward space
           var horseID = 'horse' + race + row ;
           //temp += document.getElementById(horseID).value;
           //temp += document.getElementById(sliderID).innerHTML; // not value
           var horseNo = parseInt(document.getElementById(horseID).value);
           var freq = parseInt(document.getElementById(sliderID).innerHTML);
           if(horseNo)
           {
                for (var idx = start; idx < start+freq; ++idx) 
                {
                   pot[idx] = horseNo;
                }
                start += freq;
            }      	   
        }
        start = 0;
        shuffle(pot); 
        // pick lucky one from the shuffled pot
        luckySix[race] = pot[Math.floor(Math.random() * pot.length)]; // Math.floor(Math.random() * 11); - random number between 0 - 10 (0,10 are inclusive)
        pot= [];
    }  
        for (var idx = 0; idx < nRaces; ++idx) 
        {
            if(typeof luckySix[idx] === "undefined") 
              temp += "X" + " ";
            else
               temp += luckySix[idx] + " ";
        }
        document.getElementById("luckySix").innerHTML=temp;	
    }
    
    
    
    var mytable = "<table border='1' width = '20%' cellpadding=\"0\" cellspacing=\"0\"><tbody><tr>";
    for (var race = 0; race < nRaces; ++race) 
    { 
        var raceID = "RACE - " + (race+1);  
        mytable += "<td colspan='2' style='background-color:#043227;color:white;font-weight:bold' >" + raceID + "</td>";
        mytable += "</tr><tr>";
        mytable += "<td style='background-color:#581845;color:white;font-weight:bold'> HorseNo </td>";
        mytable += "<td style='background-color:#900c3f;color:white;font-weight:bold'> Win % </td>";      
        mytable += "</tr><tr>";
        for (var row = 0; row < nHorses; ++row) 
        {
             var sliderID = "slider" + race + row;
             var horseID = "horse" + race + row;
             // mytable += '<td><INPUT TYPE="TEXT" NAME="horseNo" SIZE="3"></td>';
             mytable += "<td><INPUT TYPE='TEXT' style='text-align:center;' value='0' id='" + horseID + "' SIZE='3'></td>";
            
            // mytable += "<td><input type=\"range\" min=\"0\" max=\"100\" value=\"0\" step=\"5\" onchange=\'showValue(this.value, \"slider1\")\' /> <span id=\"slider1\">0</span> </td>";
             /*
             Single Quote or Double Quote Usage:
             " He's good "
             ' He\'s good '
             " He's \"genius\""
             */
             mytable += "<td><input type='range' min='0' max='99' value='0' step='1' onchange='showValue(this.value, \" "+sliderID+" \")' /> <span id=' "+sliderID+" '>0</span> </td>";	
             mytable += "</tr><tr>";
        }
    }
    mytable += "</tr></tbody></table>";
    document.write(mytable);
    
    
    }) // window.addEventListener('load', function() {