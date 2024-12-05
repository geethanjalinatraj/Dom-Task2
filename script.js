// Body
let a = document.getElementById("body"); 

// container - Blue Box
let b = document.createElement("div");  
a.appendChild(b);                         
b.id = "container";                      
b.style.border = "2px solid indigo";
b.style.width = "autos";
b.style.height = "250px";
b.style.padding = "10px";
b.style.display = "flex";
// b.style.justifyContent = "space-between";

// Boxes 

// Box-1

let c = document.createElement("div");
b.appendChild(c); 
c.style.border = "2px solid Green";
c.style.height = "220px";
c.style.width = "auto";
c.style.padding = "5px 15px";
c.style.margin = "0 15px";
// c.id = "box1";

let c1 = document .createElement ("h1");
c.appendChild(c1);
c1.innerHTML = "Rahul";
let c2 = document.createElement("h4");
c.appendChild(c2);
c2.innerHTML = "3567";
let c3 = document.createElement("p");
c.appendChild(c3);
c3.innerHTML = "mailme@gmail.com";
let c4 = document.createElement("button");
c.appendChild(c4);
c4.innerHTML = "Delete";

c4.id = "btn1";
c4.onclick= "myfunction1";
document.getElementById("btn1").addEventListener("click" ,myfunction1);
function myfunction1(){
    let delbtn1 = document.getElementById("container");
    delbtn1.removeChild(c)
}

// Box-2

let d = document.createElement("div");
b.appendChild(d);
d.style.border = "2px solid Green";
d.style.height = "220px";
d.style.width = "auto";
d.style.padding = "5px 15px";
d.style.margin = "0 15px"
d.id = "box2"

let d1 = document.createElement ("h1");;
d.appendChild(d1);
d1.innerHTML = "Ravi";
let d2 = document.createElement ("h4");
d.appendChild(d2);
d2.innerHTML = "9867";
let d3 = document.createElement("p");
d.appendChild(d3);
d3.innerHTML = "ravime@gmail.com";
let d4 = document.createElement("button");
d.appendChild(d4);
d4.innerHTML = "Delete";

d4.id ="btn2";
d4.onclick = "myfunction2";
document.getElementById("btn2").addEventListener("click", myfunction2);
function myfunction2() {
    let delbtn2 = document.getElementById("container");
    delbtn2.removeChild(d)
}

// Box-3

let e = document.createElement("div");
b.appendChild(e)
e.style.border = "2px solid green"; 
e.style.height = "220px";
e.style.width = "auto";
e.style.padding = "5px 15px";
e.style.margin = "0 15px"

let e1 = document.createElement("h1");
e.appendChild(e1);
e1.innerHTML = "Santhosh";
let e2 = document.createElement("h4");
e.appendChild(e2);
e2.innerHTML = "8876";
let e3 = document.createElement("p");
e.appendChild(e3);
e3.innerHTML = "santhoshsirme@gail.com"
let e4 = document.createElement("button");
e.appendChild(e4);
e4.innerHTML = "Delete";

e4.id = "btn3";
e4.onclick =  "myfunction3";
document.getElementById("btn3").addEventListener("click", myfunction3);
function myfunction3(){
    let delbtn3 = document.getElementById("container");
    delbtn3.removeChild(e)
}

// Box-4

let f = document.createElement("div");
b.appendChild(f);
f.style.border = "2px solid Green";
f.style.height = "220px";
f.style.width = "auto";
f.style.padding = "5px 15px";
f.style.margin = "0 15px"

let f1 = document.createElement("h1");
f.appendChild(f1);
f1.innerHTML = "Surya";
let f2 = document.createElement("h4");
f.appendChild(f2);
f2.innerHTML = "3469";
let f3 = document.createElement("p");
f.appendChild(f3);
f3.innerHTML = "suryahellome@gail.com"
let f4 = document.createElement("button");
f.appendChild(f4);
f4.innerHTML = "Delete";

f4.id = "btn4";
f4.onclick =  "myfunction4";
document.getElementById("btn4").addEventListener("click", myfunction4);
function myfunction4(){
    let delbtn4 = document.getElementById("container");
    delbtn4.removeChild(f)
}

// Box-5



let g = document.createElement("div");
b.appendChild(g)
g.style.border = "2px solid green"; 
g.style.height = "220px";
g.style.width = "auto";
g.style.padding = "5px 15px";
g.style.margin = "0 15px"

let g1 = document.createElement("h1");
g.appendChild(g1);
g1.innerHTML = "Kiran";
let g2 = document.createElement("h4");
g.appendChild(g2);
g2.innerHTML = "8864";
let g3 = document.createElement("p");
g.appendChild(g3);
g3.innerHTML = "kiranhereme@gail.com"
let g4 = document.createElement("button");
g.appendChild(g4);
g4.innerHTML = "Delete";

g4.id = "btn5";
g4.onclick =  "myfunction5";
document.getElementById("btn5").addEventListener("click", myfunction5);
function myfunction5(){
    let delbtn5 = document.getElementById("container");
    delbtn5.removeChild(g)
}