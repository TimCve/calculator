import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {altNum1} from "../actions/altNum1";
import {altNum2} from "../actions/altNum2";
import {add} from "../actions/add";
import {sub} from "../actions/sub";
import {mul} from "../actions/mul";
import {div} from "../actions/div";
import {AC} from "../actions/AC";
import {makeNeg1} from "../actions/makeNeg1";
import {makeNeg2} from "../actions/makeNeg2";
import {altOperator} from "../actions/altOperator";
import {afterOP} from "../actions/afterOP";
import {oneOperand} from "../actions/oneOperand";

let num1Done = false;

function CalcButton(props) {
    const dispatch = useDispatch();

    const num1 = useSelector(state => state.createSum.num1);
    const num2 = useSelector(state => state.createSum.num2);
    const symbol = useSelector(state => state.createSum.operator);

    function addNum() {
        if(num1Done) {
            dispatch(altNum2(props.symbol));
        } else {
            dispatch(altNum1(props.symbol));
        }
    }

    function negateNum() {
        if(num1Done) {
            dispatch(makeNeg2(props.symbol));
        } else {
            dispatch(makeNeg1(props.symbol));
        }
    }

    function addOp() {
        dispatch(altOperator(props.symbol));
        num1Done = true;
    }

    function performOp() {
        if(num1 !== "" && num2 !== "") {
            switch(symbol) {
                case "+" :
                    dispatch(add(num1, num2));
                    break;
                case "-" :
                    dispatch(sub(num1, num2));
                    break;
                case "*" :
                    dispatch(mul(num1, num2));
                    break;
                case "/" :
                    dispatch(div(num1, num2));
                    break;
            }
            dispatch(afterOP());
            num1Done = false;
        }
        if(num1 !== "" && num2 === "") {
            dispatch(oneOperand(num1));
            num1Done = false;
        }
    }

    function doAC() {
        dispatch(AC());
        num1Done = false;
    }

    if(props.symbol === "AC") {
        return (
            <button onClick={doAC} className="btn btn-elong">{props.symbol}</button>
        );
    } else if(props.symbol === "=") {
        return (
            <button onClick={performOp} className="btn btn-elong">{props.symbol}</button>
        );
    } else if(props.symbol === "+" || props.symbol === "-" || props.symbol === "*" || props.symbol === "/") {
        if(num1Done === false && num1 !== "" && num1 !== "-") {
            return (
                <button onClick={addOp} className="btn">{props.symbol}</button>
            );
        } else {
            return (
                <button className="btn">{props.symbol}</button>
            );
        }
    } else if(props.symbol === "+/-") {
        return (
            <button onClick={negateNum} className="btn">{props.symbol}</button>
        );      
    } else if(props.symbol === "0") {
        if((num1 === "" || num1 === "-") && num1Done === false) {
            return (
                <button className="btn">{props.symbol}</button>
            );
        }
        if((num2 === "" || num2 === "-") && num1Done === true) {
            return (
                <button className="btn">{props.symbol}</button>
            );
        }
    }
    return (
        <button onClick={addNum} className="btn">{props.symbol}</button>
    );

}

export default CalcButton;