function result() {
    let changeColor = document.getElementById('text');
    changeColor.style.color = "brown";

    let bodyColor = document.getElementsByTagName('body')[0]; 
    bodyColor.style.backgroundColor = "violet";


    let inputData = document.getElementById("inputText").value;
    //Valid Age for Voting
    if(inputData>=18)
{
    alert("Valid Age");
}
else{
    alert("Not Valid");
}
    document.getElementById('text').innerHTML=inputData;
 
}
let para = document.getElementById("para");
function changetextColor(){
    p.style.backgroundColor = "brown";
}

   
   