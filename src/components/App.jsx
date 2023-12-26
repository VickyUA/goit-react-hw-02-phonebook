import { Component } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [],
  };

  // contactId = nanoid();

  formSubmitHandler = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };
    // this.setState(prev => ({ contacts: [...prev.contacts, data] }));
    this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
    console.log(this.state);
  };

  render() {
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
          {this.state.contacts.map(contact => (
            <li key={contact}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </div>
      </div>
    );
  }
}
