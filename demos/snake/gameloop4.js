"use strict";

let canvas4;
let context4;

let running4 = false;
//window.onload = init;

window.addEventListener('load', init4);

function init4(){
    canvas4 = document.getElementById('demo4');
    context4 = canvas4.getContext('2d');

    canvas4.addEventListener('mousedown', function(event) {
        running4 = true;
    });

    canvas4.addEventListener('mouseenter', function(event) {
        running4 = true;

    });
    canvas4.addEventListener('mouseleave', function(event) {
        running4 = false;
    });

    window.addEventListener('keypress', function(event) {
        if (running4) {
            var code = event.key;

            if (code === 'a' && direction !== 'RIGHT') direction = 'LEFT';
            else if (code === 'w' && direction !== 'DOWN') direction = 'UP';
            else if (code === 'd' && direction !== 'LEFT') direction = 'RIGHT';
            else if (code === 's' && direction !== 'UP') direction = 'DOWN';
        }
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
    context4.clearRect(0, 0, canvas4.width, canvas4.height);

    context4.fillStyle = "#ff0000";
    context4.fillRect(25, 25, 25, 25);

    context4.fillStyle = "#00ff00";
    context4.fillRect(50, 50, 25, 25);
}