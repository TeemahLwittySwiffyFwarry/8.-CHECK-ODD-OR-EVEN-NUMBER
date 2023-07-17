let inputBox = document.getElementById("inputBox");

let button = document.getElementById("btn");


let displayScreen = document.getElementById("displayScreen");

button.onclick = function(){
    var resultElement = document.createElement("h3")
        if(parseInt(inputBox.value) % 2 === 0){
            resultElement.textContent ="This is an even number";
        } else if (inputBox.value === ""){
            resultElement.textContent="You have not inputed any figure";

        }
        
        else{
            resultElement.textContent="This ia an odd number";
        }

        // var displayScreen = document.getElementById("displayScreen")
        displayScreen.innerHTML = ""

        displayScreen.appendChild(resultElement);
        }