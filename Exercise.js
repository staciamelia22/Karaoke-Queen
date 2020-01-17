// Select all Div's and give them purple backgrounds
$("div").css("background", "purple");

// Select all Div's with the class "highlight" and make them 200 pc wide
$(".highlight").css("width", "200px");

// Select the Div wtih the ID of "third" and give it an orange border
$("#third").css("border", "2px solid orange");

// Bonus: select the first Div only and change its font color to pink
$("div:first-of-type").css("color", "pink");
// Alternate Bonus code, but slightly slower
// $("div:first").css("color", "pink");
