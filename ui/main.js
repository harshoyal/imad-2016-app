console.log('Loaded!');
//change the text of the main page and see it happening

var element = document.getElementById("apple");

element.innerHTML = "new value is just un certain so kindly wait";

//move the image

var img = document.getElementById("madi")
var moveLeft=0;
function moveRight ()
{
    marginLeft= marginLeft + 10 ;
    img.style.marginLeft= marginLeft + 'px';
    
}

img.onclick = function() {

var interval= setInterval(moveRight,100);

};