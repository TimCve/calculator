import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./components/App.jsx";
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);