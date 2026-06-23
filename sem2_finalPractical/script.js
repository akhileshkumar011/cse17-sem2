function checkNumber() {
    let num = document.getElementById("number").value;

    if (num === "") {
        document.getElementById("result").innerHTML =
            "Please enter a number";
        return;
    }

    if (num % 2 === 0) {
        document.getElementById("result").innerHTML =
            num + " is Even";
    } else {
        document.getElementById("result").innerHTML =
            num + " is Odd";
    }
}