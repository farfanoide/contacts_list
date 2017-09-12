import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, Contacts } from './App';
import registerServiceWorker from './registerServiceWorker';


var contactsData = [
    {id: 1, name: 'mire'},
    {id: 2, name: 'pepe'},
];

Contacts.setContactsData(contactsData);
Contacts.deleteContact('mire');
Contacts.addContactData = (contact) => {
  this.contactsData.push(contact)
};

ReactDOM.render(<App contactsData={ Contacts.contactsData } />,
                document.getElementById('root'));
registerServiceWorker();
