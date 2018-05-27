window.onload = function() {
    

	// starting animation section
		
		setTimeout(function () {
					                  $("#text1").fadeIn( 1000 );
					          }, 200); //will call the function after 1.5 secs.;
		setTimeout(function () {
					                  $("#text2").fadeIn( 1000 );
					          }, 1500); //will call the function after 1.5 secs.;
		setTimeout(function () {
					                  
					                  $("#progressbar").show( 1000 );
					                  $("#donate-form").show( 1000 );
					          }, 4000); //will call the function after 1.5 secs.;
		setTimeout(function () {
					                  $(".topheader-arrowbox").show( 1000);
					          }, 5000); //will call the function after 1.5 secs.;
		setTimeout(function () {
					                  $("#text3").fadeIn( 400);
					          }, 6000); //will call the function after 1.5 secs.;


	//js for the date picker 
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


};