/*eslint-disable no-eval */
import React, { useState } from 'react';
import './Calculator.css'
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
		let calc = number;
		calc = eval(calc).toString();

		setNumber(calc);

		result = calc;
	}


	return (
		<div id='calculator'>
			<h1 id="title">Calculadora</h1>
			<input className="result" value={number} />
			<table>
				<tbody>
					<tr>
						<td><button style={{backgroundColor: 'grey', color: 'red'}} id="clear" onClick={clean}>C</button></td>
						<td><button style={{backgroundColor: 'grey', color: '#18db11'}}></button></td>
						<td><button style={{backgroundColor: 'grey', color: '#18db11'}}></button></td>
						<td><button style={{backgroundColor: 'grey', color: '#18db11'}} onClick={inputNumber} value={'/'}>÷</button></td>
					</tr>
					<tr>
						<td><button onClick={inputNumber} value={7}>7</button></td>
						<td><button onClick={inputNumber} value={8}>8</button></td>
						<td><button onClick={inputNumber} value={9}>9</button></td>
						<td><button style={{backgroundColor: 'grey', color: '#18db11'}} onClick={inputNumber} value={'*'}>X</button></td>
					</tr>
					<tr>
						<td><button onClick={inputNumber} value={4}>4</button></td>
						<td><button onClick={inputNumber} value={5}>5</button></td>
						<td><button onClick={inputNumber} value={6}>6</button></td>
						<td><button style={{backgroundColor: 'grey', color: '#18db11'}} onClick={inputNumber} value={'-'}>-</button></td>
					</tr>
					<tr>
						<td><button onClick={inputNumber} value={1}>1</button></td>
						<td><button onClick={inputNumber} value={2}>2</button></td>
						<td><button onClick={inputNumber} value={3}>3</button></td>
						<td><button style={{backgroundColor: 'grey', color: '#18db11'}} onClick={inputNumber} value={'+'}>+</button></td>
					</tr>
					<tr>
						<td><button></button></td>
						<td><button id="zero" onClick={inputNumber} value={0}>0</button></td>
						<td><button onClick={inputNumber} value={'.'}>,</button></td>
						<td><button style={{backgroundColor: 'green', color: 'white'}} onClick={calculate}>=</button></td>
					</tr>
			</tbody>
			</table>
		</div>
	)
};