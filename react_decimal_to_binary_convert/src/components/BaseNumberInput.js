import React from "react";
import { useState } from 'react'
import '../index.css';
import arrowButton from '../img/arrow-button.png'

function BaseNumberInput() {
    const [binaryNumber, setBinaryNumber] = useState('');
    const [decimalNumber, setDecimalNumber] = useState('');

    const convertBinaryNumber = () => {
        let binaryArray = Array.from(binaryNumber);
        let binaryNumberArray = [];
        let sum = 0;

        for (let i = 0; i < binaryArray.length; i++) {
            binaryNumberArray.push(parseInt(binaryArray[i]));
        }

        for (let j = binaryNumberArray.length - 1; j >= 0; j--) {
            sum += (binaryNumberArray[j] * Math.pow(2, j))
        }

        setDecimalNumber(sum);
    }

    const convertDecimalNumber = () => {
        let binary = Number(decimalNumber).toString(2);

        setBinaryNumber(binary)
    }

    const verifyInputNumber = (value) => {
        const splittedNumbers = value.split('');

        let isValid = true;

        splittedNumbers.forEach(element => {
            if (Number(element) !== 0 && Number(element) !== 1) {
                isValid = false;
            }
        })

        console.log(isValid)
        return isValid
    }

    return (
        <div className="container">
            <div className="containerLabel">
            <label for="binary-number">Nombre Binaire</label>
                <input
                    type="text"
                    className="binary-number"
                    placeholder="Nombre Binaire"
                    maxLength={8}
                    onChange={(e) => { verifyInputNumber(e.target.value) && setBinaryNumber(e.target.value) }}
                    value={binaryNumber}
                />
            </div>
            <div className="containerLabel">
            <label for="conversion">Conversion</label>
                <img src={arrowButton}
                    onClick={convertBinaryNumber}
                    alt="arrow-button"
                    className="arrow-button"
                />
                <img src={arrowButton}
                onClick={convertDecimalNumber}
                alt="arrow-button-reversed"
                className="arrow-button-reversed"
                />
            </div>

            <div className="containerLabel">
                <label for="decimal-number">Nombre decimal</label>
                <input
                    type="text"
                    onChange={(e) => { setDecimalNumber(e.target.value) }}
                    className="decimal-number"
                    placeholder="Nombre decimal"
                    value={decimalNumber}
                />
            </div>
        </div>
    );
};

export default BaseNumberInput;