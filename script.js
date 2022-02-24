//Function to compute and add the information
function compute() {
    //Getting the values and calculating 
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate /100;
    var yearInTheFuture = new Date().getFullYear() + years;
    //Adding the text to the HTML via JS
    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of " + rate + ",<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year" + yearInTheFuture + "";

}

//Function to update the rate value...
function updateRate() {
   document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;

}

//Check for positive values...
function verifyAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number!");
        document.getElementById("principal").focus();
    }

}
