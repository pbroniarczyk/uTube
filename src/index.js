import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './components/App';
import { Provider } from "react-redux";

// Assets
import './index.css';
import store from "./store.js";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
