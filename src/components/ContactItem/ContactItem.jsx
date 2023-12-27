const ContactItem = ({ contact, onClick }) => {
  return (
    <li>
      {contact.name}: {contact.number}
      <button onClick={onClick}>Delete</button>
    </li>
  );
};

export default ContactItem;
