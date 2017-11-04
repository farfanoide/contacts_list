import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { AppRouter } from './Router' 
import registerServiceWorker from './registerServiceWorker';


// var contactsData = [
//     {id: 1, name: 'Mario Bross'},
//     {id: 2, name: 'Juan Carlos Google'},
// ];

// ReactDOM.render(<App contactsData={ contactsData } />,
//                 document.getElementById('root'));

ReactDOM.render(<AppRouter/>, document.getElementById('root'))

registerServiceWorker();
