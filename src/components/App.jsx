import { Component } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };
    this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
    console.log(this.state);
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '500px',
        }}
      >
        <Form getSubmitData={this.formSubmitHandler} />
        <div>
          <h2>Contacts</h2>
          <h3>Find contacts by name</h3>
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.handleFilter}
          />
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </div>
      </div>
    );
  }
}
