function compute()
{
    var amount = document.getElementById("amount").value;
    var myRate = document.getElementById("myRate").value;
    var years = document.getElementById("years").value;
    var resultDeposit = document.getElementById("resultDeposit");
    var resultRate = document.getElementById("resultRate");
    var resultAmount = document.getElementById("resultAmount");
    var resultYear = document.getElementById("resultYear");

    var newAmount = parseFloat(((amount * (myRate / 100)) * years))

    var year = new Date().getFullYear(); 

    year = parseInt(year) + parseInt(years);

    resultDeposit.innerHTML = "If you deposit " + amount + ","; 
    resultRate.innerHTML = "at an interest rate of " + myRate + "%,"; 
    resultAmount.innerHTML = "You will receive an amount of " + newAmount + ","; 
    resultYear.innerHTML = "in the year " + year ; 
}

function updateRate() {
    var myRate = document.getElementById("myRate").value;
    document.getElementById("rateShow").innerHTML = myRate + "%";
}
        
