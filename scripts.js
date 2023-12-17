let globalAnsB = 0 //should be 2nd
let globalAnsA = 0 //should be 1st
let operatorSign = 0 
let processedNum


let storedValues = [0]

let memoryArray = [0]
let memoryArrayLast = 0
let tempMemory = 0
//eventListeners
addDigitListeners(storeDisplay) 
function addDigitListeners (callback){
    let valuePointGroup = document.querySelectorAll('button.calcBtn')
    
    valuePointGroup.forEach((valuePoint) => {
        valuePoint.addEventListener('click', (e) => {
            let clickedValue = +e.target.textContent;

            if (!isNaN(clickedValue)) {
                if(storedValues.length <= 8){
                    let processedValue = callback(clickedValue); 
                    showDisplay (processedValue);
                }
            }
        }) 
    }) 
} 


addOperationListeners () 
function addOperationListeners (){
    let operationSelector = document.querySelectorAll('button.operator')

    operationSelector.forEach((operationNode)=> {
        operationNode.addEventListener('click', (e) => {

            operatorSign = e.target.textContent;
            
            handleOperations ()
        })
    })
} 


addEqualsListeners ()
function addEqualsListeners () {
    let equalsSelector = document.querySelector('button.equals')

    equalsSelector.addEventListener('click', () => {
        handleOperations()
    })
}


function handleOperations (){
    globalAnsA = globalAnsB 
    storedValues = [0]

    if(memoryArray.length > 0){
    memoryArrayLast = memoryArray[memoryArray.length-1]
} else {
        memoryArray[0] = globalAnsB
    }

    checkInitial () //should be callback

}

function checkInitial (){

    if (memoryArray.length > 1){
        globalAnsB = operate(globalAnsA, memoryArrayLast, operatorSign) //change to callback 
    } else {
        memoryArray [1] = globalAnsB
    }

    pushMemory (globalAnsB)
    showDisplay(globalAnsB) // might need to change to memoryArrayLast

    
    console.log(memoryArray )
}


//Calculator mechanics
function operate (a, b, operation){ 
    let result

    switch(operation) {
        case '+': 
        result = addNumbers (a, b)
        break;

        case '-': 
        result = subtractNumbers (a, b)
        break;

        case '*': 
        result = multiplyNumbers (a, b)
        break;

        case '/': 
        result = divideNumbers (a, b)
        break;  
        } 
        return result
        
}


//Array allocation
function storeDisplay(numberCell) {
    storedValues.push(numberCell);
    return numerize(storedValues); 

} 

function pushMemory (tempNum) {
    memoryArray.push(tempNum) 
} 


/*CALCULATOR OPERATIONS */ 
function addNumbers (a, b){
    return a + b
}

function subtractNumbers(a, b){
    console.log(`b parameter: ${b}`) //debug
    return b - a
}   

function multiplyNumbers(a, b){
    return a * b
}

function divideNumbers(a, b){
    return b/a
    //error should just go to another function
}

//Screen Display
function numerize (array){
    let processedString = array.join('')
    processedNum = +processedString
    globalAnsB = processedNum 
    return processedNum
}


function showDisplay(screenText){
    let screenDisplay = document.querySelector('div.display')
    
    screenDisplay.textContent = screenText

    

}
/*
BUGS
-when switching signs it automatically does the operation
-division needs to be worked on 

TO DO
 -should operate when equals sign is hit
 -division limits to a few digits
 -properly link memory array functions
 -maybe needs a failsafe for the first iteration of the operations 
*/
