let xNumber
let yNumber
let operator
let processedString
let processedNum

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

getClickValue(storeDisplay) //pass a function as an argument
function getClickValue (callback){
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

function storeDisplay(numberCell) {
    storedValues.push(numberCell);
    return stringify(storedValues); 

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

function stringify (array){
    processedString = array.join('')
    return processedString 
} //use numerize on the display and squash the processed bit

function numerize (string){
    processedNum = +string
    return processedNum
}


function showDisplay(screenText){
    let screenDisplay = document.querySelector('div.display')

    screenDisplay.textContent = screenText
}

/*TO DO

work with numerize function

*/
