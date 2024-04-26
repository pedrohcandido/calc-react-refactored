import React from "react";
import './Button.css'

const Button = (props) => {
	return(
		<td>
			{
				props.keyNumber === '*' || props.keyNumber === '+' || props.keyNumber === '/' || props.keyNumber === '-' ?
				(
					<button style={{backgroundColor: 'grey', color: '#18db11'}} onClick={props.method} value={props.keyNumber}>{props.keyNumber}</button>
				) 
					: props.keyNumber === '=' ?
				(
					<button style={{backgroundColor: 'green', color: 'white'}} onClick={props.method} value={props.keyNumber}>{props.keyNumber}</button>
				)
					: props.keyNumber === 'C' ?
				(
					<button style={{backgroundColor: 'grey', color: 'red'}} onClick={props.method} value={props.keyNumber}>{props.keyNumber}</button>
				)
					:
				(
					<button onClick={props.method} value={props.keyNumber}>{props.keyNumber}</button>
				)
			}
		</td>
	);
}

export default Button