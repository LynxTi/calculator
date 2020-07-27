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
                        // this.firstNumber == '0' || this.firstNumber == '' ? this.firstNumber = '0.' : this.firstNumber += '.' 
                        this.firstNumber = this.decimalSeparator(this.firstNumber)
                    } else {
                        // this.secondNumber == '0' || this.secondNumber == '' ? this.secondNumber = '0.' : this.secondNumber += '.' 
                        this.secondNumber = this.decimalSeparator(this.secondNumber);
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
                    // this.sign == '' ? this.firstNumber += e.target.textContent : this.secondNumber += e.target.textContent; 
                    this.sign == '' ? this.firstNumber = this.inputUserNumber(this.firstNumber,e.target.textContent) : this.secondNumber = this.inputUserNumber(this.secondNumber,e.target.textContent) 
                    break;
            }
    
            this.input.value = this.firstNumber + this.sign + this.secondNumber;
            this.input.value == '' ?  this.input.value = '0' : this.input.value = this.input.value;

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

    decimalSeparator(num){
        // console.log(/\./.test(num));
        if (!/\./.test(num)){
            num == '0' || num == '' ? num = '0.' : num += '.'
        }

        return num
    }

    inputUserNumber(oldNum, userNum){
        if (oldNum == '0' && userNum == '0') {
            return oldNum;  
        } else if (oldNum == '0' && userNum !== '0'){
            return userNum;
        } else {
            return oldNum += userNum;
        }
    }


}

const calculator = new Calculator();
// const num =  +'123.12' + 10
// console.log(typeof(num), ` ${num}`);
// console.log(/213/.test('123123213'));