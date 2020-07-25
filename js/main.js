'use strict'

class Calculator {
    constructor(){
        this.input = document.querySelector('.calculator__input');
        this.buttons = document.querySelector('.calculator__buttons');
        this.firstNumber = '';
        this.secondNumber = '';
        this.sign = '';
       
        this.buttons.addEventListener('click', this.onClickButton);
    }

    onClickButton = e => {

        if (e.target !== this.buttons) {
            switch (e.target.textContent) {
                case '+':
                case '-':
                case '/':
                case 'X':
                    this.sign = e.target.textContent;
                    break;
                case '.':
                    if ( this.sign == '') {
                        this.firstNumber == '0' || this.firstNumber == '' ? this.firstNumber = '0.' : this.firstNumber += '.' 
                    } else {
                        this.secondNumber == '0' || this.secondNumber == '' ? this.secondNumber = '0.' : this.secondNumber += '.' 
                    }
                    break;
                case 'AC':
                    this.firstNumber = '';
                    this.secondNumber = '';
                    this.sign = '';
                    break;
                case 'CE':
                    this.undoLastAction();
                    break;
                case '=':
                    if ( this.secondNumber !== '' ) {
                        this.firstNumber = this.mathOperation(+this.firstNumber, +this.secondNumber, this.sign); 
                        this.secondNumber = '';
                        this.sign = '';
                    }
                    break;
                
                default:
                    this.sign == '' ? this.firstNumber += e.target.textContent : this.secondNumber += e.target.textContent; 
                    break;
            }
    
            this.input.value = this.firstNumber + this.sign + this.secondNumber;
        }
    }

    mathOperation(firstNumber, secondNumber, sign){
        switch (sign) {
            case '+':
                return (firstNumber + secondNumber).toFixed(2);
            case '-':
                return (firstNumber - secondNumber).toFixed(2);
            case '/':
                return (firstNumber / secondNumber).toFixed(2);
        
            default:
                return (firstNumber * secondNumber).toFixed(2);
        }
    }

    undoLastAction(){
        if (this.sign == '') {
            this.firstNumber = '';
            console.log(this.firstNumber);
        } else if( this.sign !=='' && this.secondNumber !=='') {
            this.secondNumber = '';
        } else {
            this.sign = '';
        }
    }

}

const calculator = new Calculator();
// const num =  +'123.12' + 10
// console.log(typeof(num), ` ${num}`);
