// carousel
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
  }
  // end of carousel
// text zoom and minus features
  function textEnlarge() {
    document.getElementById("intro").style.fontSize = "xx-large";
  }
  function textReduce(){
    document.getElementById("intro").style.fontSize = "15pt";
  }
// end of text zoom and minus features
// Display time and date
function displayDate ()
{
document.getElementById("demo") .innerHTML=Date();
}
// end of Display time and date

// function popUp() {
//   alert("Thank you name");
// }

function myFunction()
{
var x;

var name=prompt ("Type your name here...");

if (name!=null)
 {
    alert ("Hello " + name +"!");
 }
}
