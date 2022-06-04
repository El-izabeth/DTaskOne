
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
    arrel=[];
    arr = Array.from(document.getElementsByClassName('tile'));
    let count = 0;
    let i = 0;
    
    let interval1 = setInterval(function(){
        
        x = getRand();

        arrel.push(x);
        blink(arrel,arr);  
                                                                                /*blinks as many times as 
                                                                                there are elements 
                                                                                in arrel*/
        /*let id = arr[x].id;
        document.getElementById(id).style.backgroundColor = '#e223dc';          //change clr
        setTimeout(function(){                                                  //back to og clr
            document.getElementById(id).style.backgroundColor = '#9e177a';
        },500);*/
        
        
        i++;
        if(i==16){
            clearInterval(interval1)
        }
        
        
        
    },2000);
}
function blink(arrel,arr){
    for(j=0;j<arrel.length;j++){
        let id = arr[arrel[j]].id;
        document.getElementById(id).style.backgroundColor = '#e223dc';          //change clr
        setTimeout(function(){                                                  //back to og clr
            document.getElementById(id).style.backgroundColor = '#9e177a';
        },1000);
    }
}
        

/*.tile:hover{
    background-color: #e1b3dc;
    transition: 0.5s;
}*/