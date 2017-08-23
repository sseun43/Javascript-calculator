$(document).ready(function() {
  var state1 = true;
  var state2 = true,state3=true;
  var numbers1 = "";
  var finalresult = "";
  var numbers2 = "";
  var numbersid = ["#a","#a0","#a1","#a2","#a3","#a4","#a5","#a6","#a7","#a8","#a9"];
  var numbersarray = [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var operatorid = ["#aa", "#ab", "#ac", "#ad"];
  var clearid = "#ace";
  var resultid = "#az";

  var stateboolean = function() {state1 = false;};
  var operatorMemory=function() {
    switch(state2){
        case 0: 
      numbers1 /= numbers2;
      numbers2 = "";
      $("#result").text(numbers1);
    break;
      case 1:
      numbers1 *= numbers2;
      numbers2 = "";
        $("#result").text(numbers1);
      break;
      case 2:
      numbers1 =String(Number(numbers1)+Number(numbers2));
      numbers2 = "";  
        $("#result").text(numbers1);
      break;
      case 3:
        numbers1 -= numbers2;
        numbers2 = "";
        $("#result").text(numbers1);
      break;      
                 }
    //state3=false;
    //numbers1 = "";
   // numbers2 = "";
    //state1 = true;
    //state2 = true;
  }
  $(resultid).click(function(){
    operatorMemory();
    state2=5;
    state1=true;
   state3=false;                          });

  $(clearid).click(function() {// returns everything to it original state
    numbers1 = "";
    numbers2 = "";
    $("#result").text(numbers1);
    state1 = true;
    state2 = true;
    state3 = true;
  });

  for (var i = 0; i < numbersid.length; i++) {
    var testing = numbersid[i];
    $(testing).on(
      "click",
      (function(k) {
        return function() {
          if(state3===false){
           if(state2===5) {numbers1="";}
            numbers2="";
             state3=true;
                            }
          if (state1 === true) {
            numbers1 += numbersarray[k];
            $("#result").text(numbers1);
          }else if (state1===false||numbers2 === "") {
            numbers2 += numbersarray[k];
            $("#result").text(numbers2);
          }
          
        };
      })(i)
    );
  }

  $(operatorid[0]).on("click", function() {
    stateboolean();
    
    
    if (numbers2 === "") {
      numbers1 /= 1;
    } else {
      
      operatorMemory();
    }
    state2 = 0;
  });
  $(operatorid[1]).on("click", function() {
    stateboolean();
    
   
    if (numbers2 === "") {
      numbers1 *= 1;
    } else {
      
      operatorMemory();
    }
     state2 = 1;
  });
  
  $(operatorid[2]).on("click", function() {
    stateboolean();
    
        if (numbers2 === "") {
      //numbers1 += 0;
    } else {
      operatorMemory();
    }
    state2=2;
  });
  
  $(operatorid[3]).on("click", function() {
    stateboolean();
    
          if (numbers2 === "") {
      numbers1 -= 0;
    } else {
      operatorMemory();
    }
    state2=3;
  });
  
  
  
  
});
