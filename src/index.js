import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, Contacts } from './App';
import registerServiceWorker from './registerServiceWorker';


var contactsData = [
    {name: 'mire'},
    {name: 'pepe'},
];

Contacts.setContactsData(contactsData);
Contacts.deleteContact('mire');

ReactDOM.render(<App contactsData={ Contacts.contactsData } />,
                document.getElementById('root'));
registerServiceWorker();
