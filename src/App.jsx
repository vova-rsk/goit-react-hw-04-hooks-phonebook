import { useState } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList/ContactList';
import Container from './App.styled';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  /*function for adding an item to contacts*/
  const contactAdding = newContact => {
    setContacts([...contacts, newContact]);
  };

  /*function for removing an item from contacts*/
  const contactRemoving = id => {
    setContacts(contacts.filter(elem => elem.id !== id));
  };

  /*function for checking the presence of a contact with the specified name*/
  const availabilityСheck = inputName => {
    const existingСontact = contacts.find(
      ({ name }) => name.toLowerCase() === inputName.toLowerCase(),
    );

    if (existingСontact) {
      alert(`${inputName} is already in contacts`);
      return true;
    }
    return false;
  };

  /*function for handling data input to input-elem*/
  const handleChange = e => {
    setFilter(e.target.value.trim());
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm
        availabilityСheck={availabilityСheck}
        contactAdding={contactAdding}
      />

      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList
        contacts={filteredContacts}
        contactRemoving={contactRemoving}
      />
    </Container>
  );
};

export default App;
