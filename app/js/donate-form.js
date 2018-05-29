	$( function() {	

	var donors=42;
	var total=0;
	
//---------------validation starts here -----------------------------------------------------------------------------

//---------------custom method for the email-----------------------
			$.validator.addMethod("customemail", 
			    function(value, element) {
			        return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
			    }, 
			    "Sorry, I've enabled very strict email validation"
			);	
//---------------end of custom method-----------------------					
			 var validator = $( "#donate-form" ).validate( {
				errorClass: "ui-state-error",
				rules: {
					name: {
						required: true,
						lettersonly: true,
						 minlength: 5
					},
					email: {
                        required:  {
                                depends:function(){
                                    $(this).val($.trim($(this).val()));
                                    return true;
                                }   
                            },
                        customemail: true
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
//--------------- where the errors will be placed -------------------------------------------------------
				errorPlacement: function( error, element ) {											
						error.prependTo( element.parent() );					
				},

//----------------next session runs if the validation is OK -----------------------------------------
				submitHandler: function() {				
								
				//we take the value of donation
			    var donation =($('#donation').val());
				//total donation	
				total+=1*(donation);
				//total donors
				donors+=1;
					if(total>=167){
						var moneyleft=total-167;
					    var barvolume = 100;
					     
						 $("#donate-form").hide( 1000);
						 $("#text3").hide( 1000);
						 $("#text4").show( 1000);
						 setTimeout(function () {
					        $("#progbarinner").css("background-color","green");   
					        $("#progbarinner").css("width", barvolume +"%");
					          $("#days").css("color","green");  				        
					          }, 1500); //will call the function after 1.5 secs.;
						  setTimeout(function () {
					        $("#donate-form").show( 1000);
					        $("#text4").fadeOut( 2000);
					        $("#text5").show( 1000);
					        $("#surplus").text( moneyleft);
					          }, 5000); //will call the function after 5 secs.;
						  $("#donors").text( donors);															
					     }				
					else{
						var moneyleft=total-167;
						var barvolume = 95;
			                $("#donate-form").hide( 1000);
			                
			                setTimeout(function () {
					                  $("#money").text( -moneyleft );
					          }, 1500); //will call the function after 1.5 secs.;
			                		$("#donors").text( donors);
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

//-------------- see  variables in the console	-------------------------------------------------------					    					             
              // console.log(donation);           
              // console.log(total);  
              // console.log(moneyleft);
               //console.log(donors);
                 
                
        
                
			}
			} );
//---------------- include this for all browsers ------------------------------------------------------------------
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

//----------------------------js for the date picker--------------------- 
        $(function() {
            $('.date-picker').datepicker( {
            changeMonth: true,
            changeYear: true,
               showButtonPanel: true,           
            dateFormat: 'MM / yy',
            onClose: function(dateText, inst) { 
                $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
            }
            });
        });

//------------------------------js for the donate text-------------------------------------   
     $( function() {
    $(".smalltext2").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "white");
    });
    $( ".smalltext2" ).click(function() {
  alert( "A donation of $50 is the average donation which will help us........." );
});
});
		} );
	
	