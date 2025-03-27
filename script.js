var btn = document.querySelector('.btn')

var elem1 = document.querySelector('.elem1')
var elem2 = document.querySelector('.elem2')
var elem3 = document.querySelector('.elem3')
var elem4 = document.querySelector('.elem4')
var elem5 = document.querySelector('.elem5') 

var elem1p = document.querySelector('.elem1 p')
var elem2p = document.querySelector('.elem2 p')
var elem3p = document.querySelector('.elem3 p')
var elem4p = document.querySelector('.elem4 p')
var elem5p = document.querySelector('.elem5 p') 


// var elem = document.querySelector('.elem')

btn.addEventListener('click', function () {
    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256); 
 

     

    elem1.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    elem2.style.backgroundColor = `rgb(${c1},${c2},${c3},0.8)`;
    elem3.style.backgroundColor = `rgb(${c1},${c2},${c3},0.6)`;
    elem4.style.backgroundColor = `rgb(${c1},${c2},${c3},0.4)`;
    elem5.style.backgroundColor = `rgb(${c1},${c2},${c3},0.2)`;


    elem1p.innerHTML = `rgb(${c1},${c2},${c3})`;
    elem2p.innerHTML = `rgb(${c1},${c2},${c3},0.8)`;
    elem3p.innerHTML = `rgb(${c1},${c2},${c3},0.6)`;
    elem4p.innerHTML = `rgb(${c1},${c2},${c3},0.4)`;
    elem5p.innerHTML = `rgb(${c1},${c2},${c3},0.2)`;



})

