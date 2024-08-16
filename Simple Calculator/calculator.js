const display = document.getElementById("res1");

function inputData(input){
    display.value += input;
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function clearAll(){
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value.replace(/\^/g, '**');
        let result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

document.addEventListener("keydown",function(event){
    if(event.key == "Enter")
        calculate();
})
