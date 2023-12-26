import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './app.module.css';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getSubmitData(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
            required
          />
          <label htmlFor={this.numberInputId}>Number</label>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
            required
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default Form;
