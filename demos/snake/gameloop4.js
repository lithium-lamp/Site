"use strict";

let canvas4;
let context4;

let running4 = false;
//window.onload = init;

window.addEventListener('load', init4);

function init4(){
    canvas = document.getElementById('demo4');
    context = canvas.getContext('2d');

    canvas.addEventListener('mousedown', function(event) {
        setFocus(4);
    });

    canvas.addEventListener('mouseenter', function(event) {
        running4 = true;

    });
    canvas.addEventListener('mouseleave', function(event) {
        running4 = false;
    });

    draw4();
    window.requestAnimationFrame(gameLoop4);
}

let secondsPassed4 = 0;
let oldTimeStamp4 = 0;
let fps4 = 60;

function gameLoop4(timeStamp) {
    secondsPassed4 = (timeStamp - oldTimeStamp4) / 1000;
    oldTimeStamp4 = timeStamp;

    fps4 = Math.round(1 / secondsPassed4);

    if (running4) {

    
        draw4();
    }

    window.requestAnimationFrame(gameLoop4);
}

function draw4(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    
}