console.log('Loaded!');
//change the text of the main page and see it happening

var element = document.getElementById("apple");

element.innerHTML = "new value is just un certain so kindly wait";

//move the image

var img = document.getElementById("madi")
var marginLeft=0;
function moveRight ()
{
    marginLeft= marginLeft + 1 ;
    img.style.marginLeft= marginLeft + 'px';
    
}

img.onclick = function() {

//before
//img.style.marginLeft='100px';

    //after
    // haer moveRight() is the function on every 100 ms 
var interval= setInterval(moveRight, 50);

};