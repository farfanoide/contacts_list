import React, { Component } from 'react';
import './App.css';


class ContactItem extends Component
{
    handleClick()
    {
        this.props.deleteContact(this.props.contactData.id);
    }
    render()
    {
        return (
            <li className="list-group-item">{this.props.contactData.name}
            <button className="btn btn-outline-danger" onClick={this.handleClick.bind(this)}>Remove</button>
            </li>
        )
    }
}

class ContactInput extends Component
{
    constructor(props)
    {
        super(props)
        this.state = { contactName: ''};
    }

    handleClick()
    {
        this.props.addContact(this.state.contactName);
        this.setState({contactName: ''});
    }

    updateState(event)
    {
        this.setState({contactName: event.target.value});
    }

    render()
    {
        return (
            <div className="contact-input-wrapper form-group">
            <input className="form-control" type='text' name='contactName' onChange={this.updateState.bind(this)}/>
            <button className="btn btn-outline-success" onClick={this.handleClick.bind(this)}>Add</button>
            </div>
        )
    }
}

class App extends Component
{
    constructor(props)
    {
        super(props) 
        this.state = {contactsData: this.props.contactsData }
    }

    deleteContact(contactPk)
    {
        let filtered = this.state.contactsData.filter(
            contact => contact.id !== contactPk
        );
        this.setState({contactsData: filtered})
    }

    addContact(name)
    {
        this.state.contactsData.push({id: this.maxId() + 1, name: name});
        this.setState({contactsData: this.state.contactsData})
    }

    count()
    {
        return this.state.contactsData.length;
    }

    maxId()
    {
        return this.state.contactsData.reduce(
            (prev, current) => prev.id > current.id ? prev : current
        ).id
    }

    render()
    {
        const items =  (this.state.contactsData || []).map(
            (contactData) => <ContactItem key={contactData.id.toString()} contactData={contactData} deleteContact={this.deleteContact.bind(this)}/>
        );
        return (
            <div className="App">
            <div className="jumbotron">
            <h1>Contact List</h1>
            </div>
            <ul className="list-group d-inline-flex p-2">
            {items}
            </ul>
            <ContactInput addContact={this.addContact.bind(this)}/>
            </div>
        );
    }
}

export default App;
export {
    App
};
