
// function
function payment(){
   
  //Question 1 
  
  
    //Question 2 
  var tuitionfee = document.getElementById('tuitionfee').value;
    
  var Trimesterfee = document.getElementById('Trimesterfee').value;

 
 
 var results = parseFloat(tuitionfee.replace(/[^\d\.]/g, ""));

 var resultss = parseFloat(Trimesterfee.replace(/[^\d\.]/g, ""));

 var finalfee = parseFloat((resultss + results));

 var result =  parseFloat(((finalfee)/4));


  
//Show the results
document.getElementById('totalfee').innerHTML = "Your tuition fee is "+ tuitionfee +" Taka. " ;

document.getElementById('finalfee').innerHTML = "Your total payable fee is "+ finalfee +" Taka. " ;

document.getElementById('firstpayment').innerHTML = "You need to pay " + result + " Taka before 23 November,2021." ;
document.getElementById('secondpayment').innerHTML = "You need to pay " + result + " Taka before 13 December,2021.";
document.getElementById('thirdpayment').innerHTML = "You need to pay " + result + " Taka before 10 January,2022.";
document.getElementById('lastpayment').innerHTML = "You need to pay " + result + " Taka before 2 February,2022.";



document.getElementById('Warning').innerHTML = "Warning!!!! If you pay after the date you will need to add 1000Tk late fee.";


  
}

// Display 
$(document).ready(function(){
  
    $(".btn2").click(function(){
        $(".test").show();
    });
});
