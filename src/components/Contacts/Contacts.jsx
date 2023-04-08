import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';

export function Contacts({ onClick }) {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.value);

  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contacts__list}>
      {filteredContact.map(({ id, name, number }) => (
        <li className={css.contacts__item} key={id}>
          {name}: {number}
          <button
            className={css.contacts__btn}
            onClick={() => onClick(id)}
            name={name}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  onClick: PropTypes.func,
};
