import { addContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import css from './Form.module.css';

export const FormContact = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const inputChange = newName => {
    return contacts.find(({ name }) => {
      return name.toLowerCase() === newName.toLowerCase();
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (inputChange(name)) {
      return alert(`${name} is already in Contacts`);
    }
    dispatch(addContact(name, number));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label className={css.form__label}>Name</label>
      <input
        className={css.form__input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={inputChange}
      />
      <label className={css.form__label}>Number</label>
      <input
        className={css.form__input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={inputChange}
      />
      <button type="submit" className={css.form__btn}>
        Add contact
      </button>
    </form>
  );
};
