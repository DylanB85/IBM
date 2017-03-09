// Get the modal
var Card = document.getElementById('Ronaldo_Modal');
var Card2 = document.getElementById('Messi_Modal');
var Card3 = document.getElementById('Hazard_Modal');
var Card4 = document.getElementById('Aguero_Modal');
var Card5 = document.getElementById('Bale_Modal');
var Card6 = document.getElementById('Suarez_Modal');

// Get the button that opens the modal
var Button = document.getElementById("Business_Button");
var Button2 = document.getElementById("Business_Button2");
var Button3 = document.getElementById("Business_Button3");
var Button4 = document.getElementById("Business_Button4");
var Button5 = document.getElementById("Business_Button5");
var Button6 = document.getElementById("Business_Button6");

// Get the <span> element that closes the modal
var Span = document.getElementsByClassName("Closer")[0];
var Span2 = document.getElementsByClassName("Closer2")[0];
var Span3 = document.getElementsByClassName("Closer3")[0];
var Span4 = document.getElementsByClassName("Closer4")[0];
var Span5 = document.getElementsByClassName("Closer5")[0];
var Span6 = document.getElementsByClassName("Closer6")[0];

// When the user clicks the button, open the modal
Button.onclick = function() {
    Card.style.display = "block";
}

Button2.onclick = function () {
    Card2.style.display = "block"
}

Button3.onclick = function () {
    Card3.style.display = "block"
}

Button4.onclick = function () {
    Card4.style.display = "block"
}

Button5.onclick = function () {
    Card5.style.display = "block"
}

Button6.onclick = function () {
    Card6.style.display = "block"
}

// When the user clicks on <span> (x), close the modal
Span.onclick = function() {
    Card.style.display = "none";
}

Span2.onclick = function() {
    Card2.style.display = "none";
}

Span3.onclick = function() {
    Card3.style.display = "none";
}

Span4.onclick = function() {
    Card4.style.display = "none";
}

Span5.onclick = function() {
    Card5.style.display = "none";
}

Span6.onclick = function() {
    Card6.style.display = "none";
}



