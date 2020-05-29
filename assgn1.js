var a = prompt("enter you name");
var b = document.querySelector("h1");


var t = new Date() ;
var hrs = t.getHours();



if(hrs <= 12) {
    b.textContent = "Good morning " + a;
}
else if (hrs <= 15) {
    b.textContent = "Good afternoon " + a;
}

else {
    b.textContent = "Good evening " + a;
}


