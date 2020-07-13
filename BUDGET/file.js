var income;
var expense_msg,expense_amt;
var wish_msg,wish_amt;
var balance=0;
$(document).ready(function(){
  $("#inc").click(function(){
	  income=$("#income").val();
	  balance+=income;
	  alert(income);
	  //alert(income);
  });
  $("#expense").click(function(){
	expense_amt=$("#expense_amount").val();
	expense_msg=$("#expense_text").val();
	  alert(income);
    if(expense_amt<balance){
				

		$("#expense_list").append(`<tr><td>${expense_amt}</td><td>${expense_msg}</td></tr>`);
		
	}	
	});
  $("#wish").click(function(){
	  wish_msg=$("#wish_text").val();
	  wish_amt=$("#wish_amount").val();
  });
});