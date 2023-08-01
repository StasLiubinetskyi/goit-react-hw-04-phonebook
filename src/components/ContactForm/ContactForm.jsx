import React from 'react';
import PropTypes from 'prop-types';
import ContactFormStyled from './ContactFormStyled';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    const numberInput = event.target.value;
    const numberRegex =
      /^\+?\d{0,4}?[-.\s]?\(?\d{0,3}?\)?[-.\s]?\d{0,4}[-.\s]?\d{0,4}[-.\s]?\d{0,9}$/;

    if (numberInput === '' || numberRegex.test(numberInput)) {
      this.setState({ number: numberInput });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    if (name.trim() !== '' && number.trim() !== '') {
      this.props.onSubmit(name.trim(), number.trim());
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <ContactFormStyled onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleNameChange}
          placeholder="Enter name"
          required
        />
        <input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleNumberChange}
          placeholder="Enter phone number"
          required
        />
        <button type="submit">Add contact</button>
      </ContactFormStyled>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
