let globalAnsB = 0 //should be 2nd
let globalAnsA = 0 //should be 1st
let operatorSign = 0 
let processedNum


let storedValues = [0]

let memoryArray = [0]
let memoryArrayLast = 0
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
                operatorSign = e.target.textContent;
                       
                handleOperations ()
                operatorSelected = true
            }
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
    //globalAnsA = globalAnsB 
    storedValues = [0]

    if(memoryArray.length > 0){
    memoryArrayLast = memoryArray[memoryArray.length-1]
}

    checkInitial () //should be callback

}

function checkInitial (){

    if (memoryArray.length > 0){
        tempAns = operate(globalAnsA, globalAnsB, operatorSign)
        globalAnsA = tempAns    
        pushMemory (tempAns)
        showDisplay(tempAns)
    } else {
        pushMemory (globalAnsB)
        showDisplay (globalAnsB)
    }
      
    
    
     // might need to change to memoryArrayLast
    
    
    console.log(memoryArray)
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
    if (memoryArray.length > 1){
        return a - b
    }else {
        return globalAnsB
    }
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
-operate is done after**
-division needs to be worked on 


TO DO
 -should operate when equals sign is hit
 -division limits to a few digits
 -properly link memory array functions
 -maybe needs a failsafe for the first iteration of the operations 
*/
