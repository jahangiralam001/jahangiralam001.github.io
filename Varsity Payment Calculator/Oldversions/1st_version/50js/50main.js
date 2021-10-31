// function
function payment(){
   
  //Question 1 
  var credits = document.getElementById('Credits').value;
  
    //Question 2 
  var Creditsfee = document.getElementById('Creditsfee').value;

  var Trimesterfee = document.getElementById('Trimesterfee').value;
  
 

 var totalfee = parseFloat(credits * Creditsfee);
 var scholarship =  parseFloat((totalfee * 50)/100);
 
 var result =  parseFloat((scholarship * 25)/100);

 var results = parseFloat(result);

 var resultss = parseFloat(Trimesterfee);

 var finalfee = parseFloat(resultss + results);





 
 
//Show the results
document.getElementById('totalfee').innerHTML = "Your tuition fee is "+ totalfee +" Taka. " ;

document.getElementById('scholarshipfee').innerHTML = " After 50% Scholarship now your tuition fee is "+ scholarship +" Taka. " ;

document.getElementById('firstpayment').innerHTML = "You need to pay " + finalfee + " Taka before 18November,2020." ;


document.getElementById('secondpayment').innerHTML = "You need to pay " + result + " Taka before 13December,2020.";
document.getElementById('thirdpayment').innerHTML = "You need to pay " + result + " Taka before 11January,2020.";
document.getElementById('lastpayment').innerHTML = "You need to pay " + result + " Taka before 7February,2020.";






document.getElementById('Warning').innerHTML = "Warning!!!!If you pay after the date you will have to add 1000Tk late fee.";


  
}
// Display 
$(document).ready(function(){
  
    $(".btn2").click(function(){
        $(".test").show();
    });
});

