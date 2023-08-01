import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContactFormStyled from './ContactFormStyled';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    const numberInput = event.target.value;
    const numberRegex =
      /^\+?\d{0,4}?[-.\s]?\(?\d{0,3}?\)?[-.\s]?\d{0,4}[-.\s]?\d{0,4}[-.\s]?\d{0,9}$/;

    if (numberInput === '' || numberRegex.test(numberInput)) {
      setNumber(numberInput);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() !== '' && number.trim() !== '') {
      onSubmit(name.trim(), number.trim());
      setName('');
      setNumber('');
    }
  };

  return (
    <ContactFormStyled onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter name"
        required
      />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleNumberChange}
        placeholder="Enter phone number"
        required
      />
      <button type="submit">Add contact</button>
    </ContactFormStyled>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
