window.onload=function(){setTimeout(function(){$("#text1").fadeIn(1e3)},200),setTimeout(function(){$("#text2").fadeIn(1e3)},1500),setTimeout(function(){$("#progressbar").show(1e3),$("#donate-form").show(1e3)},4e3),setTimeout(function(){$(".topheader-arrowbox").show(1e3)},5e3),setTimeout(function(){$("#text3").fadeIn(400)},6e3),$(function(){$(".date-picker").datepicker({changeMonth:!0,changeYear:!0,showButtonPanel:!0,dateFormat:"MM / yy",onClose:function(e,t){$(this).datepicker("setDate",new Date(t.selectedYear,t.selectedMonth,1))}})}),$(function(){$(".smalltext2").hover(function(){$(this).css("background-color","yellow")},function(){$(this).css("background-color","white")}),$(".smalltext2").click(function(){alert("A donation of $50 is the average donation which will help us.........")})})};