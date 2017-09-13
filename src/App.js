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
        this.contactsData.push({id: this.maxId() + 1, name: name});
    }

    static count()
    {
        return this.contactsData.length;
    }

    static maxId()
    {
        return this.contactsData.reduce(
            (prev, current) => prev.id > current.id ? prev : current
        ).id
    }
}
window.Contacts = Contacts;

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
        this.state = { contactName: ''};
    }

    handleClick()
    {
        Contacts.addContact(this.state.contactName);
        this.setState({contactName: ''});
    }

    updateState(event)
    {
        this.setState({contactName: event.target.value});
    }

    render()
    {
        return (
            <div className="contact-input-wrapper">
            <h1>{this.state.contactName}</h1>
            <input type='text' name='contactName' onChange={this.updateState.bind(this)}/>
            <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}

class App extends Component
{

    render()
    {
        let items =  (this.props.contactsData || []).map(
            (contactData) => <ContactItem key={contactData.id.toString()} contactData={contactData}/>
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
