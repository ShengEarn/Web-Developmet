var slideImg = document.getElementById("slideImg");
var images = new Array(
    "slide1.jpg",
    "slide2.jpg",
    "slide4.jpg",
    "slide5.webp",
    "slide6.webp"
);

var len = images.length;
var i = 0;

function slider(){
    if(i > len-1){
        i=0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()',3000);
}