	$( function() {

			
			// include this for all browsers ------------------------------------------------------------------
			var matched, browser;

			jQuery.uaMatch = function( ua ) {
			    ua = ua.toLowerCase();

			    var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
			        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
			        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
			        /(msie) ([\w.]+)/.exec( ua ) ||
			        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
			        [];

			    return {
			        browser: match[ 1 ] || "",
			        version: match[ 2 ] || "0"
			    };
			};

			matched = jQuery.uaMatch( navigator.userAgent );
			browser = {};

			if ( matched.browser ) {
			    browser[ matched.browser ] = true;
			    browser.version = matched.version;
			}

			// Chrome is Webkit, but Webkit is also Safari.
			if ( browser.chrome ) {
			    browser.webkit = true;
			} else if ( browser.webkit ) {
			    browser.safari = true;
			}

			jQuery.browser = browser;
			//end of browser ------------------------------------------------------------------


			//validation starts here -----------------------------------------------------------------------------
				
			 var counter=0;			
			 var validator = $( "#donate-form" ).validate( {
				errorClass: "ui-state-error",
				rules: {
					name: {
						required: true,
						lettersonly: true,
						 minlength: 5
					},
					email: {
						required: true,
						email: true,
						extension: "com|net|org|uk|gr|nl|gu|tv"
					},
					phonenumber:{
						required: true,
						digits: true,
						minlength: 10,
						maxlength: 14
					},
					creditcardnumber:{
				     required: true,
     				 creditcard: true,
     				  						
					},
					creditcardbehind:{
					required: true,
     				digits: true,
     				minlength: 3,
     				maxlength: 3						
					},
					date:{
					      required: true
                          	
					},
					
					donation:{
					required: true,
     				min: 0.1						
					}
					
				},
				messages: {
					name: {
						required: "Please enter your name",
						lettersonly: "Letters only please"
					},
					email: {
						required: "Please enter your email",
						email: "Please enter a valid email"
					},
					phonenumber:"Please enter your phone number",
					creditcardnumber:"Please enter your credit card number"

					
				},
				// where the errors will be placed -------------------------------------------------------
				errorPlacement: function( error, element ) {
											
						error.prependTo( element.parent() );
					
				},

				//next session is the animation after submission -----------------------------------------
				submitHandler: function() {				
				 counter++;
				 var donors =42;
				//take value of donation
				var donation = $('#donation').val();
				if (donation<=167){
							var moneyleft = 167-donation;
							var barvolume = 95;
							donors =donors+1;
							//hide the whole form 1sec duration
			                $("#donate-form").hide( 1000);
			                
			                setTimeout(function () {
					                  $("#money").replaceWith( moneyleft );
					          }, 1500); //will call the function after 1.5 secs.;
			                		$("#donors").replaceWith( donors);
					                //make the width bigger depending on donation
					                setTimeout(function () {
					        $("#progbarinner").css("background-color","green");   
					        $("#progbarinner").css("width", barvolume +"%");				        
					          }, 1500); //will call the function after 1.5 secs.;
					                setTimeout(function () {
					        $("#progbarinner").css("background-color","#f16a44");   
					        $("#progbarinner").css("width", "60%");				        
					          }, 4000); //will call the function after 4 secs.;
					                setTimeout(function () {
					        $("#donate-form").show( 1000);
					          }, 5000); 

								}
				else{
						var moneyleft = donation-167;
						var barvolume = 100;
						var donors =donors+1;
						 $("#donate-form").hide( 1000);
						 $("#text3").hide( 1000);
						 $("#text4").show( 1000);
						 setTimeout(function () {
					        $("#progbarinner").css("background-color","green");   
					        $("#progbarinner").css("width", barvolume +"%");				        
					          }, 1500); //will call the function after 1.5 secs.;
						  setTimeout(function () {
					        $("#donate-form").show( 1000);
					          }, 5000); //will call the function after 5 secs.;
						  $("#donors").replaceWith( donors);
				}
				//If we want to take the number of money from text
				//var money=$('#money').text();
				//make it an integer  
                //money=parseInt(money);
                
                

               
             //console.log(moneyleft); 
             //console.log(counter); 
             //console.log(donation);
             //console.log(donors);    
                //alert("Congratulations you just made a donation!");
        
                //validator.destroy();
			}
			} );
		} );