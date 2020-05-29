var a = new Date();


a.setMinutes(5);
a.setSeconds(0);

var p = document.getElementById("demo");
var btn = document.getElementById("btn");
var rst = document.getElementById("rst");
var pause = document.getElementById("pause");

var min = a.getMinutes();
var sec = a.getSeconds();
var b;
function int1(){
    b = setInterval(function() {
        if(min == 0 && sec == 0) {
            clearInterval();
        }
        else {
            if(sec-- == 0){
                min--;
                sec = 59;
            }
            p.innerHTML = min + " : " + sec;
        }
    },1000); 
}
function int2 () {
    clearInterval(b);
    min = 5;
    sec = 0;
    p.innerHTML = min + " : " + sec;
   
}

function int3() {
    clearInterval(b);
}

btn.addEventListener("click", int1);
rst.addEventListener("click", int2);
pause.addEventListener("click",int3);


