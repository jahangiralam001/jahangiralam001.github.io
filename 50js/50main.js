// function
function payment(){
   
  //Question 1 
  var credits = document.getElementById('Credits').value;
  
    //Question 2 
  var Creditsfee = document.getElementById('Creditsfee').value;

  var Trimesterfee = document.getElementById('Trimesterfee').value;
  
 

 var totalfee = parseFloat(credits * Creditsfee);

 var results = parseFloat(totalfee);

 var resultss = parseFloat(Trimesterfee);

 var finalfee = parseFloat(resultss + results);

 var scholarship =  parseFloat((totalfee * 50)/100);

 var resultsss = parseFloat(scholarship + resultss);
 
 var result =  parseFloat((resultsss * 25)/100);





 
 
//Show the results
document.getElementById('totalfee').innerHTML = "Your tuition fee is "+ totalfee +" Taka. " ;


document.getElementById('scholarshipfee').innerHTML = " After 50% Scholarship now your tuition fee is "+ scholarship +" Taka. " ;

document.getElementById('finalfee').innerHTML = "Your total payable fee is "+ resultsss +" Taka. " ;

document.getElementById('firstpayment').innerHTML = "You need to pay " + result + " Taka before 22 March,2021." ;
document.getElementById('secondpayment').innerHTML = "You need to pay " + result + " Taka before 20 April,2021.";
document.getElementById('thirdpayment').innerHTML = "You need to pay " + result + " Taka before 19 May,2021.";
document.getElementById('lastpayment').innerHTML = "You need to pay " + result + " Taka before 14 June,2021.";






document.getElementById('Warning').innerHTML = "Warning!!!!If you pay after the date you will have to add 1000Tk late fee.";


  
}
// Display 
$(document).ready(function(){
  
    $(".btn2").click(function(){
        $(".test").show();
    });
});

