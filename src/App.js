import React, { Component } from 'react';
import './App.css';

class Contacts
{
    static contactsData = []

    static setContactsData(contactsData)
    {
        this.contactsData = contactsData;
    }

    static deleteContact(contactPk)
    {
        this.contactsData = this.contactsData.filter(
            contact => contact.name !== contactPk
        );
    }

    static addContact(name)
    {
        this.contactsData.push({name: name});
    }
}

class ContactItem extends Component
{
    render()
    {
        return <li>{this.props.contactData.name}</li>
    }
}

class ContactInput extends Component
{
    constructor(props)
    {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.setState({ contactName: ''});
    }

    handleClick()
    {
        Contacts.addContact(this.state.contactName);
        this.setState({contactName: ''});
    }

    render()
    {
        return (
            <div class="contact-input-wrapper">
                <input type='text' name='contactName' value=''/>
                <button onclick="this.handleClick">Add</button>
            </div>
        )
    }
}

class App extends Component
{

    render()
    {
        let items =  (this.props.contactsData || []).map(
            (contactData) => <ContactItem contactData={contactData}/>
        );
        return (
            <div className="App">
                <h1>Contact List</h1>
                <ul>
                    {items}
                </ul>
                <ContactInput/>
            </div>
        );
    }
}

export default App;
export {
    App,
    Contacts,
};
