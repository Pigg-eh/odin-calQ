let xNumber
let yNumber
let operator
let catalyst

let storedValues = [];

//Calculator mechanics

function operate (a, b, operation){

     switch(operation) {
        
        case 'add': 
        addNumbers (a, b)
        break;

        case 'subtract': 
        subtractNumbers (a, b)
        break;

        case 'multiply': 
        multiplyNumbers (a, b)
        break;

        case 'divide': 
        divideNumbers (a, b)
        break;  
         }
}

getClickValue()
function getClickValue (){
    let valuePointGroup = document.querySelectorAll('button.calcBtn')
    
    valuePointGroup.forEach((valuePoint) => {
        valuePoint.addEventListener('click', (e) => {
            let clickedValue = e.target.textContent;

            if (!isNaN(clickedValue)) {
                if(storedValues.length < 8){
                storeDisplay(clickedValue);
                }
            }
        }) 
    }) 
}

function storeDisplay(numberCell) {
    storedValues.push(numberCell);
    stringify(storedValues);
    // You can perform other operations with storedValues here
    
} //just change to a string/value i can use with another function


/*CALCULATOR OPERATIONS */

function addNumbers (a, b){
    return a + b
}

function subtractNumbers(a, b){
    return a - b
}

function multiplyNumbers(a, b){
    return a * b
}

function divideNumbers(a, b){
    return a/b
}

//Screen Display

function stringify (array){
    catalyst = array.join('')
    showDisplay(catalyst)
}


function showDisplay(screenText){
    let screenDisplay = document.querySelector('div.display')

    screenDisplay.textContent = screenText
}

/*TO DO


stores numbers in a function (probably need to use ...args) 

*/
