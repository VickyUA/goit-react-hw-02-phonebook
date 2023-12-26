import css from './app.module.css';

const ContactItem = ({ contacts, onClick }) => {
  return (
    <>
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
    </>
  );
};

export default ContactItem;
