import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';


var contactsData = [
    {id: 1, name: 'Mario Bross'},
    {id: 2, name: 'Juan Carlos Google'},
];

ReactDOM.render(<App contactsData={ contactsData } />,
                document.getElementById('root'));
registerServiceWorker();
