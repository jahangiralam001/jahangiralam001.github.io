// function
function payment(){
   
  //Question 1 
  
  
  var tuitionfee = document.getElementById('tuitionfee').value;
    
  var Trimesterfee = document.getElementById('Trimesterfee').value;

 var results = parseFloat(tuitionfee.replace(/[^\d\.]/g, ""));

 var resultss = parseFloat(Trimesterfee.replace(/[^\d\.]/g, ""));

 

 var scholarship =  parseFloat((results * 75)/100);

 var resultsss = parseFloat(scholarship + resultss);
 
 var result =  parseFloat((resultsss * 25)/100);





 
 
//Show the results
document.getElementById('totalfee').innerHTML = "Your tuition fee is "+ tuitionfee +" Taka. " ;


document.getElementById('scholarshipfee').innerHTML = " After 25% Scholarship now your tuition fee is "+ scholarship +" Taka. " ;

document.getElementById('finalfee').innerHTML = "Your total payable fee is "+ resultsss +" Taka. " ;

document.getElementById('firstpayment').innerHTML = "You need to pay " + result + " Taka before 22 March,2021." ;
document.getElementById('secondpayment').innerHTML = "You need to pay " + result + " Taka before 20 April,2021.";
document.getElementById('thirdpayment').innerHTML = "You need to pay " + result + " Taka before 19 May,2021.";
document.getElementById('lastpayment').innerHTML = "You need to pay " + result + " Taka before 14 June,2021.";



document.getElementById('Warning').innerHTML = "Warning!!!! If you pay after the date you will have to add 1000Tk late fee.";


  
}
// Display 
$(document).ready(function(){
  
    $(".btn2").click(function(){
        $(".test").show();
    });
});

