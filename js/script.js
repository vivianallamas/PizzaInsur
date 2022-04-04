$(document).ready(function(){
  $('#menubutton').click(function() {
    //alert("entro");
    $('.menu-hamburger').toggleClass( "show" );
  });
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}