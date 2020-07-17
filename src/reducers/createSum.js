const createSum = (state = {num1: "", operator: "", num2: ""}, action) => {
    const stateClone = state;
    const totalText = state.num1 + state.operator + state.num2;
    switch(action.type) {
        case "altNum1":
            if(totalText.length < 40) {
                stateClone.num1 += action.payload;
                return state = stateClone;
            } else {
                return state;
            }
        case "altOperator":
            stateClone.operator = action.payload;
            return state = stateClone;
        case "altNum2":
            if(totalText.length < 40) {
                stateClone.num2 += action.payload;
                return state = stateClone;
            } else {
                return state;
            }
        case "makeNeg1":
            if(state.num1[0] != "-") {
                stateClone.num1 = `-${state.num1}`;
                return state = stateClone;
            } else {
                return state;
            }
        case "makeNeg2":
            if(state.num2[0] != "-") {
                stateClone.num2 = `-${state.num2}`;
                return state = stateClone;
            } else {
                return state;
            }
        case "AC":
            return state = {num1: "", operator: "", num2: ""};
        default:
            return state;
    }
}

export default createSum;