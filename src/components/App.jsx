import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleSubmit = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const isExistingContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isExistingContact) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };

  const handleDelete = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        height: '100vh',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleSubmit} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList contacts={filteredContacts} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
