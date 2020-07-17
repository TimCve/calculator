import React from "react";
import {useSelector, useDispatch} from "react-redux";

function CalcDisplay(props) {
    const num1 = useSelector(state => state.createSum.num1);
    const num2 = useSelector(state => state.createSum.num2);
    const symbol = useSelector(state => state.createSum.operator);
    const ans = useSelector(state => state.operation);

    return(
        <div id="calc-display">
            <p id="calc-text-top">{`${num1}${symbol}${num2}`}</p>
            <p id="calc-text-bot">{ans}</p>
        </div>
    );
}

export default CalcDisplay;