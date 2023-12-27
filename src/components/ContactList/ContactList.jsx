import ContactItem from '../ContactItem/ContactItem';
import css from 'components/ContactList/contactList.module.css';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={css.deleteBtn}
            type="button"
            onClick={() => onClick(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
