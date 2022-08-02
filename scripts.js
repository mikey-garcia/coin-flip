

/*
    Matt why tf are u looking at the source code 
    and not simply trusting me smh
*/

var lilf = document.getElementById("lilf");
var path_img = document.getElementById("path-img")
var path_bounding_box = path_img.getBoundingClientRect();
var STEPS = [
    Math.floor( path_bounding_box.left),
    Math.floor( path_bounding_box.left + path_bounding_box.width/12),
    Math.floor( path_bounding_box.left + path_bounding_box.width/5),
    Math.floor( path_bounding_box.left + path_bounding_box.width/3),
    Math.floor( path_bounding_box.left + path_bounding_box.width/2),
    Math.floor( path_bounding_box.left + 0.6*path_bounding_box.width),
    Math.floor( path_bounding_box.left + 0.75*path_bounding_box.width),
    Math.floor( path_bounding_box.left + 0.9*path_bounding_box.width),
]

var id=0;
var MAX_HEIGHT = path_bounding_box.top - 150
var START_HEIGHT = path_bounding_box.top;

function move_forward(stage) {
    var x = STEPS[stage]; // starting position
    var y = START_HEIGHT;

    var end = STEPS[stage+1];
    var dist = end - x;
    console.log(dist)
    clearInterval(id);
    id = setInterval(frame, 20);
    function frame() {
      if (x == end) {
        clearInterval(id);
      } else {
        x++;
        // move to the right
        lilf.style.left = x + 'px';

        if(x < STEPS[stage] + dist/2){
            y-= 2;
        } 
        else{
            y+= 2;
        }
        console.log(y)
        lilf.style.top = y+ 'px'
      }
    }
  
}

function die(){
    id = setInterval(frame, 10);
    var y = START_HEIGHT;
    console.log(y);

    function frame() {
      if (y >= 1500) {
        clearInterval(id);
      } else {
        y++;
        lilf.style.top = y+ 'px'
      }
    }
    alert("Ouch... :( save your channel points and go to twitch.tv/curtoss instead of this watching loser")
}


// main
jQuery(document).ready(function($){
    var CURR_STAGE = 0;
    // init coinflip onclick func
    $('#coin').on('click', function(){
        var flipResult = Math.random();
        $('#coin').removeClass();
        setTimeout(function(){
            if(flipResult < 0.5){$('#coin').addClass('headFlip');}
            else{$('#coin').addClass('tailFlip');}
        }, 100);
    });

    $('#lose').on('click', function(){
        die()
    });

    $('#continue').on('click', function(){
        if (CURR_STAGE == 7){
            alert("POGGIES")
            return;
        }
        else{
            move_forward(CURR_STAGE);
            CURR_STAGE++;
        }
    });
});