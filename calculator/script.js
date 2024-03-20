let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')
let zero = document.getElementById('zero')
let multiply = document.getElementById('multiply')
let clear = document.getElementById('clear')
let divide = document.getElementById('divide')
let equal = document.getElementById('equal')
let dot = document.getElementById('dot')
let add = document.getElementById('add')
let subtract = document.getElementById('subtract')
let display = document.getElementById('display')

one.addEventListener('click', function(){
    display.value += 1
})
two.addEventListener('click', function(){
    display.value += 2
})
three.addEventListener('click', function(){
    display.value += 3
})
four.addEventListener('click', function(){
    display.value += 4
})
five.addEventListener('click', function(){
    display.value += 5
})
six.addEventListener('click', function(){
    display.value += 6
})
seven.addEventListener('click', function(){
    display.value += 7
})
eight.addEventListener('click', function(){
    display.value += 8
})
nine.addEventListener('click', function(){
    display.value += 9
})
zero.addEventListener('click', function(){
    display.value += 0
})
dot.addEventListener('click', function(){
    display.value += '.'
})
add.addEventListener('click', function(){
    display.value += '+'
})
equal.addEventListener('click', function(){
    let value = display.value;
    let numbers = value.split(/[+\-*\/]/); // Splitting the expression by operators
    let operator = value.match(/[+\-*\/]/); // Extracting the operator
    let result;
    
    if (operator && numbers.length === 2) {
        let num1 = parseFloat(numbers[0]);
        let num2 = parseFloat(numbers[1]);

        switch (operator[0]) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = 'Error: Division by zero';
                }
                break;
            default:
                result = 'Error: Invalid operator';
        }

        display.value = result;
    } else {
        display.value = 'Error: Invalid expression';
    }
});

subtract.addEventListener('click', function(){
    display.value += '-'
})
multiply.addEventListener('click', function(){
    display.value += '*'
})
divide.addEventListener('click', function(){
    display.value += '/'
})
clear.addEventListener('click', function(){
    display.value = ''
})