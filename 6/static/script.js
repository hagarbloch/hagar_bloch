var x = 5;
var y = 4;
let z = 2;

console.log(x+y);

var d = new Date()
console.log(d);
var y= d.getFullYear();
console.log(y);

var Alon = {
    age : 21,
    Family : "Levy",
    Time : new Date() 
};
console.log(Alon.Time);
var h = d.getHours();
console.log(h);

if (h < 6) {
    document.getElementById("greetingh1").innerHTML = "ZZZZ";

} 
else if (h<12) {
    document.getElementById("greetingh1").innerHTML = "Good Morning";
    document.getElementsByTagName("body").classList.remove("NightStyle");


}
else if (h<16) {
    document.getElementById("greetingh1").innerHTML = "Good Afternoon";

}
else if (h<20) {
    document.getElementById("greetingh1").innerHTML = "Good Evening";
    document.getElementById("body").classList.add("NightStyle");
    

}
else {
    document.getElementById("greetingh1").innerHTML = "Good Night";

};

function Timefunc() {
    document.getElementById("Time").innerHTML = d.getFullYear();
    document.getElementById("btn").innerHTML = "that's it";
    
}

var cars = ["volvo", "mazda", "ferrari", "mazarati", "lamburgini"];
var l = cars.length;
console.log(l);
console.log(cars[4]);

var text = "";


for (let i =0; cars< cars.length; i++) {
    text += cars[i] +"<br>";
    document.getElementById("Time").innerHTML = text;
    console.log(text)

}

