import React from "react";
// import {useSelector, useDispatch} from "react-redux";
import CalcButtons from "./CalcButtons";
import CalcDisplay from "./CalcDisplay";

class App extends React.Component {
    /*
    constructor(props) {
        super(props);
    }
    */

    render() {
        return (
            <div id="app">
                <div id="calculator">
                    <CalcDisplay/>
                    <CalcButtons/>
                </div>
                <p id="subtext">React-Redux Calculator, by Timofey Cvetkov</p>
            </div>
        );
    }
}

export default App;