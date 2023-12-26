import ContactItem from './ContactItem';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      <ContactItem contacts={contacts} onClick={onClick} />
    </ul>
  );
};

export default ContactList;
