/*DOM MANIPULATION */
let displayArray 


/* */
let xNumber
let yNumber
let operator

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

getValue()
function getValue (){ //WORK HERE
    let valuePointGroup = document.querySelector('button.calcBtn')

    valuePointGroup.addEventListener('click', (e) => {
        valuePoint = e.target.value;
        if (!isNaN(valuePoint )) {storeDisplay (valuePoint)}
    }) 
    /*
    -store value until operator is pressed 
    -store into storeDisplay function 
    -
    */
}

function storeDisplay (...numberCell){
    console.log(numberCell)
} //check on this too 

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


/*TO DO

populate display function (change textcontent with an event listener that uses  (e) function)

stores numbers in a function (probably need to use ...args) 

*/
