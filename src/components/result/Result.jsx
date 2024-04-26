import React from "react";
import './Result.css'

const Result = (props) => {
	return(
		<input className="result" value={props.result} />
	)
}

export default Result;