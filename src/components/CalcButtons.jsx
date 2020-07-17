import React from "react";
// import {useSelector, useDispatch} from "react-redux";

import CalcButton from "./CalcButton";

class CalcButtons extends React.Component {
    constructor(props) {
        super(props);
        this.createButtons = this.createButtons.bind(this);
    }

    createButtons() {
        const buttonLayout = [["7", "8", "9", "AC"],
                              ["4", "5", "6", "+", "-"],
                              ["1", "2", "3", "*", "/"],
                              [".", "0", "+/-", "="]];

        const buttons = [[]];

        for(let i = 0; i < buttonLayout.length; i++) {
            buttons[i] = buttonLayout[i].map(function(symbol) {
                return <CalcButton symbol={symbol}/>; 
            });
        }

        return buttons;
    }

    render() {
        const buttons = this.createButtons();

        return (
            <div>
                {buttons[0]}
                <br/>
                {buttons[1]}
                <br/>
                {buttons[2]}
                <br/>
                {buttons[3]}
                <br/>
            </div>
        )
    }
}

export default CalcButtons;