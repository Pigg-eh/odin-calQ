

let buttonArray = function () {
    //potentially need to use object to add classes
    let number = ['+','-', '/', '*', ]

    for (let i = 1; i<10; i++){
        number.splice ((4+i), 0, i)
    }
    number.push(0)
    number.push('=')

    console.log (number)
}
buttonArray()



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

console.log(addNumbers (4, 2))
console.log(subtractNumbers (4, 2))
console.log(multiplyNumbers(4, 2))
console.log(divideNumbers (4, 2))
