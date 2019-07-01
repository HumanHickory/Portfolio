
$(document).ready(function(){
	$('.primary').css({"color":"#EE693F;"});
	$('.contrast').css({"color":"#423a35;"});
	$('.complementary').css({"color":"#739F3D;"});
	$('.mellow').css({"color":"#f9f8f7"});

	$('.bgPrimary').css({"background-color":"#EE693F;"});
	$('.bgcontrast').css({"background-color":"#423a35;"});
	$('.bgComplementary').css({"background-color":"#739F3D;"});
	$('.bgMellow').css({"background-color":"#f9f8f7"});

});

// <!-- Teal, gray and white -->

$('#palette1').click(function(){
	$('.primary').css({"color":"#1995AD"});
	$('.contrast').css({"color":"#8c8b8c;"});
	$('.complementary').css({"color":"#A1D6E2;"});
	$('.mellow').css({"color":"#F1F1F2"});

	$('.bgPrimary').css({"background-color":"#1995AD"});
	$('.bgcontrast').css({"background-color":"#8c8b8c;"});
	$('.bgComplementary').css({"background-color":"#A1D6E2;"});
	$('.bgMellow').css({"background-color":"#F1F1F2"});
});

// <!-- Pink, Green, Gray, Plum -->
$('#palette2').click(function(){
	$('.primary').css({"color":"#EC96A4;"});
	$('.contrast').css({"color":"#614e63;"});
	$('.complementary').css({"color":"#9A9EAB;"});
	$('.mellow').css({"color":"#DFE166"});

	$('.bgPrimary').css({"background-color":"#EC96A4;"});
	$('.bgcontrast').css({"background-color":"#614e63;"});
	$('.bgComplementary').css({"background-color":"#9A9EAB;"});
	$('.bgMellow').css({"background-color":"#DFE166"});
});
  
// <!-- Orange, Navy, Yellow   -->
$('#palette3').click(function(){
	$('.primary').css({"color":"#F0810F;"});
	$('.contrast').css({"color":"#003b59;"});
	$('.complementary').css({"color":"#0095e0;"});
	$('.mellow').css({"color":"#ffe721"});

	$('.bgPrimary').css({"background-color":"#F0810F;"});
	$('.bgcontrast').css({"background-color":"#003b59;"});
	$('.bgComplementary').css({"background-color":"#0095e0;"});
	$('.bgMellow').css({"background-color":"#ffe721"});
});	

// <!-- Teal, Green, Gray, Forest -->
$('#palette4').click(function(){
	$('.primary').css({"color":"#4CB5F5;"});
	$('.contrast').css({"color":"#34675C;"});
	$('.complementary').css({"color":"#b5f024;"});
	$('.mellow').css({"color":"#f0f2ed;"});

	$('.bgPrimary').css({"background-color":"#4CB5F5;"});
	$('.bgcontrast').css({"background-color":"#34675C;"});
	$('.bgComplementary').css({"background-color":"#b5f024;"});
	$('.bgMellow').css({"background-color":"#f0f2ed;"});
});	

//Orange, Green, Brown, White
$('#palette5').click(function(){
	$('.primary').css({"color":"#EE693F;"});
	$('.contrast').css({"color":"#423a35;"});
	$('.complementary').css({"color":"#739F3D;"});
	$('.mellow').css({"color":"#f9f8f7"});

	$('.bgPrimary').css({"background-color":"#EE693F;"});
	$('.bgcontrast').css({"background-color":"#423a35;"});
	$('.bgComplementary').css({"background-color":"#739F3D;"});
	$('.bgMellow').css({"background-color":"#f9f8f7"});
});	

//latte, mocha, mocchiatto, Cinnamon
$('#palette6').click(function(){
	$('.primary').css({"color":"#AF4425;"});
	$('.contrast').css({"color":"#662E1C;"});
	$('.complementary').css({"color":"#C9A66B;"});
	$('.mellow').css({"color":"#EBDCB2"});

	$('.bgPrimary').css({"background-color":"#AF4425;"});
	$('.bgcontrast').css({"background-color":"#662E1C;"});
	$('.bgComplementary').css({"background-color":"#C9A66B;"});
	$('.bgMellow').css({"background-color":"#EBDCB2"});
});	





var footerString = "<div class='container-fluid bgContrast white row mt-3 py-4 text-center mx-0'>";
footerString += "<div class='col-xl-4'>";
	footerString += "<h4 class='cutesy'><u>Code</u></h4>";
	footerString += "<a href='FrontEnd.html' class='white'>HTML & CSS</a><br>";
	footerString += "<a href='jQueryJS.html' class='white'>jQuery</a><br>";
	footerString += "<a href='bootstrap.html' class='white'>Bootstrap 4</a><br>";
	footerString += "<a href='wordpress.html' class='white'>Wordpress</a><br>";
	footerString += "<a href='' class='white'></a><br>";
footerString += "</div>";

footerString += "<div class='col-xl-4'>";
	footerString += "<h4 class='cutesy'><u>Resume & More</u></h4>";
	footerString += "<a href='index.html' class='white'>Home</a><br>";
	footerString += "<a href='resume.html' class='white'>Resume</a><br>";
	footerString += "<a href='#' class='white'></a><br>";
	footerString += "<a href='#' class='white'></a><br>";
footerString += "</div>";

footerString += "<div class='col-xl-4'>";
	footerString += "<h4 class='cutesy'><u>Contact</u></h4>";
	footerString += "<a href='mailto:renhickory@gmail.com' class='white'>Email</a><br>";
	footerString += "<a href='tel:5623704395' class='white'>Call or Text</a><br>";
	footerString += "<a href='#' class='white'></a><br>";
footerString += "</div>";

footerString += "</div>";

$('#footer').html(footerString);


