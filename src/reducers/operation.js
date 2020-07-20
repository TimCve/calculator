import { oneOperand } from "../actions/oneOperand";

const operationReducer = (state = 0, action) => {
    console.log(state);
    switch(action.type) {
        case "ADD":
            return state = Number(action.num1) + Number(action.num2);
        case "SUB":
            return state = Number(action.num1) - Number(action.num2);
        case "MUL":
            return state = Number(action.num1) * Number(action.num2);
        case "DIV":
            return state = Number(action.num1) / Number(action.num2);
        case "AC":
            return state = 0;
        case "oneOperand":
            return state = Number(action.num);
        default:
            return state;
    }
}

export default operationReducer;