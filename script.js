const defaultDisplayValue = '0'
const defaultFirstOperand = ''
const defaultSecondOperand = ''
const defaultOperator = ''

let displayValue = defaultDisplayValue
let firstOperand = defaultFirstOperand
let secondOperand = defaultSecondOperand
let operator = defaultOperator
let answer = ''

const buttons = document.querySelectorAll('button')
const display = document.getElementById('display')
const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const equalsButton = document.getElementById('equals')
const clearButton = document.getElementById('clear')
const decimalButton = document.getElementById('decimal')

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let num = button.textContent
        if (displayValue === answer && !operator) {
            reset()
        }
        if (!operator) {
            firstOperand += num
            updateDisplay(firstOperand)
        }
        else {
            secondOperand += num
            updateDisplay(secondOperand)
        }
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let id = button.textContent
        if (operator) {
            firstOperand = evaluate(operator, firstOperand, secondOperand)
            updateDisplay(firstOperand)
            secondOperand = defaultSecondOperand
            operator = id
        }
        if (!operator) {
            operator = id
        }
        console.log('the operator is ' + operator)
    })
} )

equalsButton.addEventListener('click', () => {
    answer = evaluate(operator, firstOperand, secondOperand)
    firstOperand = answer
    operator = defaultOperator
    secondOperand = defaultSecondOperand
    updateDisplay(answer)
})

decimalButton.addEventListener('click', () => {
    if (displayValue === answer && !operator) {
        reset()}
    if (display.textContent.includes('.')) return
    if (!operator) {
        firstOperand += '.'
        updateDisplay(firstOperand)
    }
    else {
        secondOperand += '.'
        updateDisplay(secondOperand)
    }
})
        
clearButton.addEventListener('click', reset)


function evaluate (operator, x, y) {
    x = Number(x)
    y = Number(y)
    switch(operator) {
        case '+':
            return x+y
        case '-':
            return x-y
        case 'x':
            return x*y
        case '÷':
            if (y=== 0) return "Uh oh!"
            else return x/y
        case '^':
            return x**y
        case '%':
            return x%y
        default:
            return null
    }
}

function reset () {
    firstOperand = defaultFirstOperand
    secondOperand = defaultSecondOperand
    operator = defaultOperator
    displayValue = defaultDisplayValue
    answer = ''
    updateDisplay(displayValue)
}

function updateDisplay (value) {
    displayValue = value
    display.textContent = displayValue
    console.log(displayValue)
}

updateDisplay(displayValue)