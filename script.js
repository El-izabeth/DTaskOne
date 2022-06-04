
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
    //let count = 0;
    //let i = 0;
    
    //let interval1 = setInterval(function(){
        document.getElementById("pts").innerHTML=points;
        idarr=[];
        x = getRand();
        
        arrin.push(x);
        f = blink(arrin,arr); 
        /*if(f==false){
            gameOver();
            //clearInterval(interval1);
            
        } */
                                                                                /*blinks as many times as 
                                                                                there are elements 
                                                                                in arrel*/
        /*let id = arr[x].id;
        document.getElementById(id).style.backgroundColor = '#e223dc';          //change clr
        setTimeout(function(){                                                  //back to og clr
            document.getElementById(id).style.backgroundColor = '#9e177a';
        },500);*/
        
        
        //i++;
        if(arrin.length==16){
            
            gameOver();
            //clearInterval(interval1);
            
        }
        
        
        
    //},2000);
}

function tileClick(id){
    idarr.push(document.getElementById(id));
    if(idarr.length==arrin.length){
        checkClick();
        randArr();
    }
    //alert(arrin.length);
    
}
function checkClick(){
    //c=0;
    for(i = 0; i < idarr.length;i++){
        if(idarr.includes(arr[arrin[i]])){
            //c++;
            incrementPoints();
            continue;
        }
        else{
            gameOver();
            
        }
    }
    //document.getElementById(pts).innerHTML="points";
}
function incrementPoints(){
    //alert("IP");
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

 /*Logic:
 one button blinks.
 User clicks it.
 Move to next round.
 same button blinks, follwed by next random button blinks.
 user clicks both in whatever sequence.
 next round.
 1st button blinks. Next, 2nd button blinks. Next, 3rd button blinks.
 etc..until last round or until user clicks wrong button*/
 function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  function gameOver(){
      alert("GAMEOVER\nPOINTS:"+points);
      arrin=[];
      return;

      
  }