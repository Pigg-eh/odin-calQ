let xNumber
let yNumber
let operatorSign
let processedNum
let tempAns

let storedValues = [0];

//eventListeners
getDigit(storeDisplay) //pass a function as an argument
function getDigit (callback){
    let valuePointGroup = document.querySelectorAll('button.calcBtn')
    
    valuePointGroup.forEach((valuePoint) => {
        valuePoint.addEventListener('click', (e) => {
            let clickedValue = e.target.textContent;

            if (!isNaN(clickedValue)) {
                if(storedValues.length <= 8){
                let processedValue = callback(clickedValue); 
                showDisplay (processedValue);
                }
            }
        }) 
    }) 
} 

decideOperation () 
function decideOperation (){
    let operationSelector = document.querySelectorAll('button.operator')

    operationSelector.forEach((operationNode)=> {
        operationNode.addEventListener('click', (e) => {
            operatorSign = e.target.textContent;
            storedValues = []
            
            
            storeDisplay(storedValues) 
            
        })
    })
} 

function storeDisplay(numberCell) {
    storedValues.push(numberCell);
    return numerize(storedValues); 

} 

//Calculator mechanics
function operate (a, b, operation){ 

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
    xNumber = processedNum 
    return processedNum
}


function showDisplay(screenText){
    let screenDisplay = document.querySelector('div.display')

    screenDisplay.textContent = screenText
}

/*TO DO
 
*/
