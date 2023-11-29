let xNumber
let yNumber
let operatorSign
let processedNum
let tempAns

let storedValues = [];

//Calculator mechanics



function operate (a, b, operation){ //callback b

     switch(operation) {
        
        case '+': 
        addNumbers (a, b)
        break;

        case '-': 
        subtractNumbers (a, b)
        break;

        case '*': 
        multiplyNumbers (a, b)
        break;

        case '/': 
        divideNumbers (a, b)
        break;  
         }
}

getDigit(storeDisplay) //pass a function as an argument
function getDigit (callback){
    let valuePointGroup = document.querySelectorAll('button.calcBtn')
    
    valuePointGroup.forEach((valuePoint) => {
        valuePoint.addEventListener('click', (e) => {
            let clickedValue = e.target.textContent;

            if (!isNaN(clickedValue)) {
                if(storedValues.length < 8){
                let processedValue = callback(clickedValue); // Get the processed value
                showDisplay (processedValue);// Display the processed value
                }
            }
        }) 
    }) 
} 

decideOperation (getDigit) 
function decideOperation (callback){
    let operationSelector = document.querySelectorAll('button.operator')

    operationSelector.forEach((operationNode)=> {
        operationNode.addEventListener('click', (e) => {
            operatorSign = e.target.textContent;
            storedValues = []
            
            
            let processedFunction = callback(xNumber) //callback typeError, also comes back as undefined
            getDigit(processedFunction) // need to refactor code in a way that makes it accept whatever this is calling

            

        })
    })//HERE
} 

function storeDisplay(numberCell) {
    storedValues.push(numberCell);
    return numerize(storedValues); 

} 



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

function numerize (array){
    let processedString = array.join('')
    processedNum = +processedString
    xNumber = processedNum //might need to be somewhere else
    return processedNum
}


function showDisplay(screenText){
    let screenDisplay = document.querySelector('div.display')

    screenDisplay.textContent = screenText
}

/*TO DO
Define xNumber and yNumber within your functions or pass them as arguments when
calling the callback functions.

Ensure that the callback functions (getDigit, decideOperation) handle their
arguments correctly and have the necessary variables defined or passed as 
arguments.

Utilize the return values from the arithmetic functions (addNumbers, 
subtractNumbers, etc.) within the operate function and assign the result to a 
variable or use it accordingly.
*/
