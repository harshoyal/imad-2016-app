console.log('Loaded!');
//change the text of the main page and see it happening

var element = document.getElementById("apple");

element.innerHTML = "new value is just un certain so kindly wait";

//move the image

var img = document.getElementById("madi")

img.onclick = function(){
img.style.marginLeft='100px';
};