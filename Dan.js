
//Creates the animation where the placeholder moves above the input element and becomes smaller when focused on or when input is received	
function AnimatedPlaceholders(){
		 $('.field > select').addClass("hiddenText");
		 
		 $("form input").on("blur input focus", function() {
			var $field = $(this).closest(".field");
			if (this.value) {
				$field.addClass("filled");
			} else {
				$field.removeClass("filled");
			}
		});


		$("form input").on("focus", function() {
			var $field = $(this).closest(".field");
			if (this) {
				$field.addClass("filled");
			} else {
				$field.removeClass("filled");
			}
		});	
		
		
    $('.field > select').on("focus", function () {
        var $field = $(this).closest(".field");
        var $select = $(this).closest("select");

        if (this) {
            $field.addClass("filled");
            $select.removeClass("hiddenText");
        } else {
            $field.removeClass("filled");
        }
    });
	}
	
	
//creates a 'processing' element	
function LoadingElementHTML(){	
	var loading = "<div id='loading'>";
	loading += "<div class='loader'>";
	loading += "<div class='loader--dot'></div>";
	loading += "<div class='loader--dot'></div>";
	loading += "<div class='loader--dot'></div>";
	loading += "<div class='loader--dot'></div>";
	loading += "<div class='loader--dot'></div>";
	loading += "<div class='loader--dot'></div>";
	loading += "<div class='loader--text'></div>";
	loading += "</div>";
	loading += "</div>";
	
	$("body").prepend(loading);
}

//Create custom masks
function Masks(){
	$('.phoneMask').mask("(999) 999-9999");
	$('.expMMYY').mask("99/99");
    $('.creditCard').mask("9999-9999-9999-9999");
	$('.numbers').mask('0#');
}

//Adds Captcha version 3 to the webpage
function AddCAPTCHAv3(url, siteKey){
		
	//create error block if AJAX is successful, but validation is not
	var error = "<div class='col-lg-10 offset-lg-1 mt-5 text-center' id='error'>";
    error += "<div class='alert alert-danger' role='alert'>";
    error += "An error occurred when trying to confirm your identity. Form submission unavailable at this time.";    
    error += "</div>";    
    error += "</div>"; 
	
	//
	var failure = "<div class='col-lg-10 offset-lg-1 mt-5 text-center' id='error'>";
    failure += "<div class='alert alert-danger' role='alert'>";
    failure += "Failed to connect to CAPTCHA at this time. Form submission may be unavailable.";    
    failure += "</div>";    
    failure += "</div>"; 
	
	
	//check if it's ready
	grecaptcha.ready(function () {
        grecaptcha.execute(siteKey, { action: 'BizzMemberSignUp' }).then(function (token) {
            $('#grecaptcharesponse').val(token);

	//AJAX to see if it worked.
            $.ajax({
                type: "POST",
                url: url,
                data: JSON.stringify({token: token }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
					
					//if the response came back, check if the response was NOT successful.
                   var reCaptchaResponse = $.parseJSON(response);				  
                    $.each(reCaptchaResponse, function (variableName, value) {						
						//if it is not successful, then show the error message.
						if (variableName.toLowerCase() == "success" && value == false) {
                        	$("#alertInHeader").html(error);
						} 
						else if (variableName.toLowerCase() == "success" && value == true) //but if it is successful
						{
							//then check score. If score is above a .3, then continue. If below, show error message.
							$.each(reCaptchaResponse, function (variable2, value2)
							{						
								if (variable2.toLowerCase() == "score") {
									if (value2 >= ".4") {
										} else {
											$("#alertInHeader").html(error);
										}						
								   }
							});
                        }
					});   		
                },
                error: function () {
                        $("#alertInHeader").html(failure);
                }
            });
      });
	  
    });	
	
}


function openNav() {
    $('#mySidenav').css("width", "100vw");
}

function closeNav() {
    $('#mySidenav').css("width", "0vw");
}


function CreateHeader(){

var header = "<nav class='navbar justify-content-between pt-5 d-none d-lg-flex'>";
		header += "<a href='https://www.diversalertnetwork.org/'><img src='https://www.diversalertnetwork.org/img/danlogo.png' id='danlogo' style='padding-left: 1.3rem;'></a>";
		header += "<form class='form-inline'>";
			header += "<a class='btn-dan' href='https://www.diversalertnetwork.org/login/'>Login</a>";
			header += "<a class='btn-dan' href='https://www.diversalertnetwork.org/scuba-dive-insurance/?'>Join/Renew</a>";
				header += "<div class='input-group'>";
					header += "<input type='search' id='searchbox' name='searchbox' placeHolder='Search DAN' class='form-control' placeholder='Search' aria-label='Search' onkeyup='checkSearchBox(event);'>";
					header += "<div class='input-group-append'>";
						header += "<span class='input-group-text'><i class='fas fa-search' onclick='searchDAN();'></i></span>";
					header += "</div>";
				header += "</div>";
		header += "</form>";
	header += "</nav>";

header += "<nav class='navbar navbar-expand-lg d-none d-lg-flex'>";
	header += "<div id='navbarText'>";
		header += "<ul class='navbar-nav'>";
			header += "<li class='nav-item'><a class='nav-link' href='https://www.diversalertnetwork.org/'>Home</a></li>";
			header += "<li class='nav-item'><a class='nav-link' href='https://www.diversalertnetwork.org/membership/'>Membership</a></li>";
			header += "<li class='nav-item'><a class='nav-link' href='https://www.diversalertnetwork.org/medical/'>Medicine</a></li>";
			header += "<li class='nav-item'><a class='nav-link' href='https://www.diversalertnetwork.org/research/'>Research</a></li>";
			header += "<li class='nav-item'><a class='nav-link' href='https://www.diversalertnetwork.org/training/'>Education</a></li>";
			header += "<li class='nav-item'><a class='nav-link' href='https://www.diversalertnetwork.org/insurance//'>Insurance</a></li>";
			header += "<li class='nav-item'><a class='nav-link' href='https://www.diversalertnetwork.org/dive-store/'>Store</a></li>";
		header += "</ul>";
	header += "</div>";
header += "</nav>";


header += "<nav class='navbar d-lg-none py-4'>";
	header += "<a href='https://www.diversalertnetwork.org/'><img src='https://www.diversalertnetwork.org/img/danlogo.png' id='danlogo' style='padding-left: 1.3rem;'></a>";
	header += "<div class=''><i class='fad fa-bars' style='font-size: 2rem;' onclick='openNav()'></i></div>";
header += "</nav>";


header += "<div id='mySidenav' class='sidenav'>";
	header += "<a href='javascript:void(0)' class='closebtn' onclick='closeNav()'><i class='fad fa-times white' id='closeX' style='font-size: 2rem;'></i></a>";
	header += "<a href='https://www.diversalertnetwork.org/'>Home</a>";
	header += "<a href='https://www.diversalertnetwork.org/membership/'>Membership</a>";
	header += "<a href='https://www.diversalertnetwork.org/medical/'>Medicine</a>";
	header += "<a href='https://www.diversalertnetwork.org/research/'>Research</a>";
	header += "<a href='https://www.diversalertnetwork.org/training/'>Education</a>";
	header += "<a href='https://www.diversalertnetwork.org/insurance//'>Insurance</a>";
	header += "<a href='https://www.diversalertnetwork.org/dive-store/'>Store</a>";
	header += "<a href='https://www.diversalertnetwork.org/scuba-dive-insurance/?' class='mt-5'>Join/Renew</a>";
	header += "<a href='https://www.diversalertnetwork.org/login/'>Log In</a>";
header += "</div>";

header += "<div id='alertInHeader'></div>"

return header;

}
 
      
             
function CreateFooter(){	

var footer = "<hr />";

footer += "<div class='container-fluid foot'>";
	footer += " <footer class=''>";
		footer += "<div class='footerLinks'>";
			footer += "&copy; DAN, Inc.&nbsp; &nbsp; &nbsp; &nbsp; All rights reserved.";
			footer += "<a href='https://www.diversalertnetwork.org/sitemap'>Site Map</a>";
			footer += "<a href='http://www.alertdiver.com/?a=advertise'>Advertise</a>";
			footer += "<a href='https://www.diversalertnetwork.org/privacypolicy'>Privacy Policy</a>";
			footer += "<a href='https://www.diversalertnetwork.org/?a=logorequest'>Logo Policy</a>";
			footer += "<a href='https://www.diversalertnetwork.org/page/social-media-policy'>Social Media Policy</a>";
			footer += "<a href='https://www.diversalertnetwork.org/copyright.asp'>Terms & Conditions</a>";
			footer += " <a href='https://www.diversalertnetwork.org/contact/'>Contact Us</a>";
		footer += "</div>";

		footer += "<div class='socialMedia'>";
			footer += "<a href='http://www.facebook.com/pages/Divers-Alert-Network/27919332696' class='facebook'><i class='fab fa-facebook-square'></i></a>";
			footer += "<a href='http://twitter.com/#!/DAN_America' class='twitter'><i class='fab fa-twitter-square'></i></a>";
			footer += "<a href='http://www.youtube.com/user/DiversAlertNetworkTV' class='youtube'><i class='fab fa-youtube-square'></i></a>";
			footer += "<a href='https://www.diversalertnetwork.org/rss/index.asp' class='rss'><i class='fas fa-rss-square rss'></i></a>";
		footer += "</div>";
	footer += "</footer>";
footer += "</div>";

return footer;
}
            

function HeaderFooter(){
	 $('body').prepend(CreateHeader());
     $('body').append(CreateFooter());
}
	


    
        
        
    
















