/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { getId } from '../util/util';
import * as math from 'mathjs';

function Button({value, setResult, result}) {

    const NumberRef = useRef(null)

    const calculate = () => {
        const numbers = NumberRef.current.textContent;
        switch(numbers) {
        case '=':
        return calculateExpression();
        case 'Clear':
        return clearField();
        default:
        return registerNumber(numbers);
       }
    }

    const clearField = () => {
        setResult(0);
    }

    const calculateExpression = () => {
        setResult(math.evaluate(result));
    }

    const registerNumber = digits => {
        setResult(result => result + digits);
    }


    return (
        <button 
        ref={NumberRef} 
        onClick={calculate} 
        type="button" 
        id={getId(value)} 
        className="Button"
        >
        {value}
        </button>
    )
}

export default Button;