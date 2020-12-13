// function
function payment(){
   
  //Question 1 
  

  var Trimesterfee = document.getElementById('Trimesterfee').value;
  

 var finalfee = parseFloat(Trimesterfee);
 

 
 
//Show the results


document.getElementById('firstpayment').innerHTML = "You need to pay " + finalfee + " Taka before 18November,2020." ;


document.getElementById('lastpayment').innerHTML = "This is your last and final payment for this trimester.";


document.getElementById('Warning').innerHTML = "Warning!!!!If you pay after the date you will have to add 1000Tk late fee.";


  
}
// Display 
$(document).ready(function(){
  
    $(".btn2").click(function(){
        $(".test").show();
    });
});

