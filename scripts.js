let globalAnsB = 0 //should be 2nd
let globalAnsA = 0 //should be 1st
let operatorSign
let processedNum

let storedValues = [0]
let memoryArray = [0]

//eventListeners
getDigit(storeDisplay) 
function getDigit (callback){
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


decideOperation () 
function decideOperation (){
    let operationSelector = document.querySelectorAll('button.operator')

    operationSelector.forEach((operationNode)=> {
        operationNode.addEventListener('click', (e) => {
            
            
            globalAnsA = globalAnsB // should go here
            operatorSign = e.target.textContent;
            storedValues = [0]
            
            console.log (`type ${typeof(memoryArray[memoryArray.length-1])}`)
            console.log(`memoryArray last# ${memoryArray[memoryArray.length-1]}`)
            globalAnsB = operate(globalAnsA, memoryArray[memoryArray.length-1], operatorSign)
            pushMemory (globalAnsA) 
            showDisplay(globalAnsB)
           
 
        })
    })
} 


//Calculator mechanics
function operate (a, b, operation){ 
    switch(operation) {
        
        case '+': 
        globalAnsB = addNumbers (a, b)
        break;

        case '-': 
        globalAnsB = subtractNumbers (a, b)

        break;

        case '*': 
        globalAnsB = multiplyNumbers (a, b)
        break;

        case '/': 
        globalAnsB = divideNumbers (a, b)
        break;  
        } 
        return globalAnsB
        
}


//Array allocation
function storeDisplay(numberCell) {
    storedValues.push(numberCell);
    return numerize(storedValues); 

} 

function pushMemory (tempNum) {
    memoryArray.push(tempNum) //returns as an array of arrays for some reason
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
    globalAnsB = processedNum 
    return processedNum
}


function showDisplay(screenText){
    let screenDisplay = document.querySelector('div.display')
    
    screenDisplay.textContent = screenText

    

}


/*TO DO
 -operate should be hooked up 
 -should operate when equals sign is hit
 -should also operate when operators are hit
 -store all values in a array linked with a function 
*/
