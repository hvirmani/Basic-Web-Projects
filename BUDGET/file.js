//var income;
//var expense_msg,expense_amt;
//var wish_msg,wish_amt;
//var balance=0;
$(document).ready(function(){
  $("#inc").click(function(){
	  $("#jkl").text("hioj");
	  var income=$("#income").val();
	  var balance=$("#balance_txt").text();
	  balance=balance+income;
	  alert(balance);
	  $("#income_txt").text(income);
	  $("#balance_txt").text(balance);
  });/*
  $("#expense").click(function(){
	var expense_amt=$("#expense_amount").val();
	var expense_msg=$("#expense_text").val();
	var balance=
    if(expense_amt<balance){
				

		$("#expense_list").append(`<tr><td>${expense_amt}</td><td>${expense_msg}</td></tr>`);
		
	}	
	});*/
  /*$("#wish").click(function(){
	  wish_msg=$("#wish_text").val();
	  wish_amt=$("#wish_amount").val();
  });*/
});