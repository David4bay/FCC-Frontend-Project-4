import CalculatorBody from "../CalculatorBody/CalculatorBody";
import Display from "../Display/Display";
import { useState } from 'react';
import Button from "../Button/Button";
import './CalculatorWrapper.scss';

function CalculatorWrapper() {

    const [result, setResult] = useState(0);

    return (
        <div className="Calculator__Wrapper">
            <div className="Styling" />
            <Display result={result} />
            <CalculatorBody>
                <Button result={result} setResult={setResult} value="/" />
                <Button result={result} setResult={setResult} value="*" />
                <Button result={result} setResult={setResult} value="-" />
                <Button result={result} setResult={setResult} value="+" />
                <Button result={result} setResult={setResult} value="7" />
                <Button result={result} setResult={setResult} value="8" />
                <Button result={result} setResult={setResult} value="9" />
                <Button result={result} setResult={setResult} value="4" />
                <Button result={result} setResult={setResult} value="5" />
                <Button result={result} setResult={setResult} value="6" />
                <Button result={result} setResult={setResult} value="1" />
                <Button result={result} setResult={setResult} value="2" />
                <Button result={result} setResult={setResult} value="3" />
                <Button result={result} setResult={setResult} value="0" />
                <Button result={result} setResult={setResult} value="." />
                <Button result={result} setResult={setResult} value="=" />
                <Button result={result} setResult={setResult} value="Clear" />
            </CalculatorBody>
        </div>
    )
}

export default CalculatorWrapper;