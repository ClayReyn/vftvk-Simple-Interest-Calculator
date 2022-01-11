// functionality of compute interest button
function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);

    var interest = principal * years * rate / 100;

    // validation of "amount" input
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("result").innerHTML = "";
        document.getElementById("principal").focus();
        return null
    }

    document.getElementById("result").innerHTML = `
        <br>
        If you deposit <mark>${principal}</mark>, <br>
        at an interest rate of <mark>${rate}%</mark>. <br>
        You will receive an amount of <mark>${interest}</mark>, <br>
        in the year <mark>${year}</mark> <br>
    `;
}

// updates displayed interest rate to match slider input
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + '%';
}