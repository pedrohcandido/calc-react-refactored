/*eslint-disable no-eval */
import React, { useState } from 'react';
import './Calculator.css'
import Title from '../title';
import Result from '../result';
import Button from '../button';
var result = ""

export default function Calculator() {
	const [number, setNumber] = useState(0);

	function inputNumber(e){
		if(result.length > 0){
			if(e.target.value === '/' || e.target.value === '*' || e.target.value === '-' || e.target.value === '+' || e.target.value === '.'){
				setNumber(number + e.target.value);
				result = ""
				return
			}else{
				setNumber(e.target.value);
				result = ""
				return
			}
		}
		if( number === 0 ){
			if(e.target.value === '/' || e.target.value === '*' || e.target.value === '-' || e.target.value === '+' || e.target.value === '.' || e.target.value === '0'){
				setNumber(0)
			}else{
				setNumber(e.target.value);
			}
		}else{
			setNumber(number.toString())
			if(number.slice(-1) === '/' || number.slice(-1) === '*' || number.slice(-1) === '-' || number.slice(-1) === '+' || number.slice(-1) === '.'){
				if(e.target.value === '/' || e.target.value === '*' || e.target.value === '-' || e.target.value === '+' || e.target.value === '.'){
					return
				}
			}
			setNumber(number + e.target.value);
		}
	}

	function clean(e){
		setNumber(0);
	}

	function calculate(){
		let lastInput = number.toString();
		if(lastInput.slice(-1) === '/' || lastInput.slice(-1) === '*' || lastInput.slice(-1) === '-' || lastInput.slice(-1) === '+' || lastInput.slice(-1) === '.'){
			return
		}
		let calc = number;
		calc = eval(calc).toString();

		setNumber(calc);

		result = calc;
	}


	return (
		<div id='calculator'>
			<Title title={"Calculadora"} />
			<Result result={number} />
			<table>
				<tbody>
					<tr>
						<Button method={clean} keyNumber={'C'}/>
						<Button/>
						<Button/>
						<Button method={inputNumber} keyNumber={'/'}/>
					</tr>
					<tr>
						<Button method={inputNumber} keyNumber={7}/>
						<Button method={inputNumber} keyNumber={8}/>
						<Button method={inputNumber} keyNumber={9}/>
						<Button method={inputNumber} keyNumber={'*'}/>
					</tr>
					<tr>
						<Button method={inputNumber} keyNumber={4}/>
						<Button method={inputNumber} keyNumber={5}/>
						<Button method={inputNumber} keyNumber={6}/>
						<Button method={inputNumber} keyNumber={'-'}/>
					</tr>
					<tr>
						<Button method={inputNumber} keyNumber={1}/>
						<Button method={inputNumber} keyNumber={2}/>
						<Button method={inputNumber} keyNumber={3}/>
						<Button method={inputNumber} keyNumber={'+'}/>
					</tr>
					<tr>
						<Button/>
						<Button method={inputNumber} keyNumber={0}/>
						<Button method={inputNumber} keyNumber={'.'}/>
						<Button method={calculate}   keyNumber={'='}/>
					</tr>
			</tbody>
			</table>
		</div>
	)
};