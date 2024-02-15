let globalAnsB = 0 //should be 2nd
let globalAnsA = 0 //should be 1st
let operatorSignLock = 0
let operatorSign = 0
let processedNum


let storedValues = [0]

let memoryArray = [0]
let tempAns = 0
let operatorSelected = false

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
                        if(memoryArray.length > 0){
                            operatorSelected = false
                        }
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

            if(!operatorSelected) {
                manipulateSign ()
                operatorSign = e.target.textContent;
                
                //handleOperations ()
                
                handleOperands ()

                operatorSelected = true


            } 
        })
    })
} 


addEqualsListeners ()
function addEqualsListeners () {
    let equalsSelector = document.querySelector('button.equals')

    equalsSelector.addEventListener('click', () => {

        manipulateSign ()
        handleOperations()
    })
}

function handleOperands () {
    storedValues = [0]
    if(memoryArray < 2) {
        pushMemory (globalAnsB)
        globalAnsA = globalAnsB
        showDisplay(operatorSign)
    }else{
        handleOperations()
        globalAnsA = tempAns
        
    }
}

function manipulateSign () {
    if(operatorSign != 0){operatorSignLock = operatorSign}
}

function handleOperations (){

    storedValues = [0]
    runOperation () 
}

function runOperation (){

    
    tempAns = operate(globalAnsA, globalAnsB, operatorSignLock)

    pushMemory (tempAns)
    showDisplay(tempAns)
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

function clearDigits () {
    operatorSelected = false
    operatorSign = 0

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
    console.log(`b parameter: ${b}`) 
        return a - b
    
}   

function multiplyNumbers(a, b){
    return a * b
}

function divideNumbers(a, b){
    return a/b
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
-division needs to be worked on 


TO DO
 -division limits to a few digits
 -properly link memory array functions
 -maybe needs a failsafe for the first iteration of the operations 
*/
