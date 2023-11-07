/*DOM MANIPULATION */
let number = ['+','-', '/', '*', ]

makeBtnArray()
function makeBtnArray  () {
    //potentially need to use object to add classes
    for (i = 1; i<10; i++){
        number.splice ((4+i), 0, i)
    }
    number.push(0)
    number.splice(7, 0, 'CE')
    number.splice(11, 0, '=')
    

    console.log (number)
    
    
}

insertBtn()
function insertBtn () {
    let buttonQuery = document.querySelector('div.buttonsContainer')
    for (i=0; i<number.length; i++){
        makeBtnArray[i] = document.createElement('button')
        buttonQuery.appendChild(makeBtnArray[i])
    }
    addCalcBtnClass()
}


function addCalcBtnClass() {
    let btnClasses = document.querySelectorAll('div.buttonsContainer>button')

    btnClasses.forEach((btnClass) => {
        btnClass.classList.add('calcBtn')
    })

    insertText ()
}

function insertText (x=0) {
console.log (number.length)

    let buttonTexts = document.querySelectorAll('.calcBtn')

    buttonTexts.forEach((buttonText) => {
        buttonText.textContent = number[x];
        x++;
    })
}

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
