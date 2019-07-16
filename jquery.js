// <!-- Teal, gray and white -->

$(document).ready(function(){
		
	$('.primary').css({"color":"#1995AD"});
	$('.contrast').css({"color":"#8c8b8c;"});
	$('.complementary').css({"color":"#A1D6E2;"});
	$('.mellow').css({"color":"#F1F1F2"});

	$('.bgPrimary').css({"background-color":"#1995AD"});
	$('.bgcontrast').css({"background-color":"#8c8b8c;"});
	$('.bgComplementary').css({"background-color":"#A1D6E2;"});
	$('.bgMellow').css({"background-color":"#F1F1F2"});

	document.documentElement.style.setProperty('--primary', '#1995AD');
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

	document.documentElement.style.setProperty('--primary', '#1995AD');
	
});

// <!--Bright Blue, Dark Blue, White, other blue -->
$('#palette2').click(function(){
	$('.primary').css({"color":"#3500D3;"});
	$('.contrast').css({"color":"#0C0032;"});
	$('.complementary').css({"color":"#C6D166;"});
	$('.mellow').css({"color":"#FFFFFF"});

	$('.bgPrimary').css({"background-color":"#3500D3;"});
	$('.bgcontrast').css({"background-color":"#0C0032;"});
	$('.bgComplementary').css({"background-color":"#190061;"});
	$('.bgMellow').css({"background-color":"#FFFFFF"});
	
	document.documentElement.style.setProperty('--primary', '#3500D3');
});
  
// <!-- Bright Red, White, gray, black   -->
$('#palette3').click(function(){
	$('.primary').css({"color":"#962715;"});
	$('.contrast').css({"color":"#1E1E20;"});
	$('.complementary').css({"color":"#BBC3C6;"});
	$('.mellow').css({"color":"#FFFFFF"});

	$('.bgPrimary').css({"background-color":"#962715;"});
	$('.bgcontrast').css({"background-color":"#1E1E20;"});
	$('.bgComplementary').css({"background-color":"#BBC3C6;"});
	$('.bgMellow').css({"background-color":"#FFFFFF"});
	
	document.documentElement.style.setProperty('--primary', '#962715');
});	

// <!-- Pink, Fusha, Red Wine, White -->
$('#palette4').click(function(){
	$('.primary').css({"color":"#EE4C7C;"});
	$('.contrast').css({"color":"#5D001E;"});
	$('.complementary').css({"color":"#9A1750;"});
	$('.mellow').css({"color":"#FFFFFF;"});

	$('.bgPrimary').css({"background-color":"#EE4C7C;"});
	$('.bgcontrast').css({"background-color":"#5D001E;"});
	$('.bgComplementary').css({"background-color":"#9A1750;"});
	$('.bgMellow').css({"background-color":"#FFFFFF"});
	
	document.documentElement.style.setProperty('--primary', '#EE4C7C');
});	

//Steel Blue, Yellow, Dark Navy, Beige
$('#palette5').click(function(){
	$('.primary').css({"color":"#F9BA32;"});
	$('.contrast').css({"color":"#2F3131;"});
	$('.complementary').css({"color":"#426E86;"});
	$('.mellow').css({"color":"#F8F1E5"});

	$('.bgPrimary').css({"background-color":"#F9BA32;"});
	$('.bgcontrast').css({"background-color":"#2F3131;"});
	$('.bgComplementary').css({"background-color":"#426E86;"});
	$('.bgMellow').css({"background-color":"#F8F1E5"});

	document.documentElement.style.setProperty('--primary', '#F9BA32');

});	

//Light Gray, Cobalt, white, black
$('#palette6').click(function(){
	$('.primary').css({"color":"#adadaa;"});
	$('.contrast').css({"color":"#2F2E33;"});
	$('.complementary').css({"color":"#3A5199;"});
	$('.mellow').css({"color":"#FFFFFF"});

	$('.bgPrimary').css({"background-color":"#adadaa;"});
	$('.bgcontrast').css({"background-color":"#2F2E33;"});
	$('.bgComplementary').css({"background-color":"#3A5199;"});
	$('.bgMellow').css({"background-color":"#FFFFFF"});
	
	document.documentElement.style.setProperty('--primary', '#adadaa');

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





