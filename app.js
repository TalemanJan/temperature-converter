

//=========convert celsius to fahrenheit
function C_F(){
    var F=document.getElementById("num1").value;    
    var CelToF= Math.round(F*1.8)+32;
    document.getElementById("result").innerHTML=CelToF+"°F";
}


//=========Convert fahrenheit to celsius
function F_C(){
    var d=document.getElementById("num1").value;
    var FtoC=Math.round(d-32)*.5556;
    document.getElementById("result").innerHTML=FtoC+"°C"
}









  


  
  
  
  