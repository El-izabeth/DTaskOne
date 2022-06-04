
 /*Logic:
 one button blinks.
 User clicks it.
 Move to next round.
 same button blinks, follwed by next random button blinks.
 user clicks both in whatever sequence.
 next round.
 1st button blinks. Next, 2nd button blinks. Next, 3rd button blinks.
 etc..until last round or until user clicks wrong button*/
var points = 0;
var arrin=[];
var arr=[];
var idarr=[];
var flag = false;
var getRand = (function() {
    var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    var current = [];
    function rand(n) {
        return (Math.random() * n)|0;
    }
    return function() {
      if (!current.length) current = nums.slice();
      return current.splice(rand(current.length), 1);
    }
}());
function randArr(){
    
    arr = Array.from(document.getElementsByClassName('tile'));
    
        document.getElementById("pts").innerHTML=points;
        idarr=[];
        x = getRand();
        
        arrin.push(x);
        f = blink(arrin,arr); 
       
        if(arrin.length==16){
            document.getElementById("W/L").innerHTML="YOU WIN!!";
            gameOver();
            
            
        }
}

function tileClick(id){
    idarr.push(document.getElementById(id));
    if(idarr.length==arrin.length){
        checkClick();
        randArr();
    }    
}
function checkClick(){
    for(i = 0; i < arrin.length;i++){
        if(idarr.includes(arr[arrin[i]])){
            incrementPoints();
            continue;
        }
        else{
            document.getElementById("W/L").innerHTML="YOU LOSE!";
            gameOver();
            
            
        }
    }
}
function incrementPoints(){
    points+=10;
}
function blink(arrin,arr){
    
    for(j=0;j<arrin.length;j++){
        
        let id = arr[arrin[j]].id;
        document.getElementById(id).style.backgroundColor = '#e223dc';          //change clr
        setTimeout(function(){                                                  //back to og clr
            document.getElementById(id).style.backgroundColor = '#9e177a';
        },500);
        
    }
}

  function gameOver(){
    alert("GAMEOVER\nPOINTS:"+points);
    points = 0;
    arrin=[];
    exit();
    //arrin=[];
    
      
  }
  function exit(){
      while(1>0){

      }
     
  }