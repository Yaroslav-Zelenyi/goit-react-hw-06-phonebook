import { useDispatch } from 'react-redux';
import css from './ContactFilter.module.css';
import { setFilter } from 'redux/filterSlice';

export function ContactFilter() {
  const dispatch = useDispatch();
  const inputHandler = event => {
    const filterValue = event.target.value;

    dispatch(setFilter(filterValue));
  };

  return (
    <input
      className={css.contactFilter__input}
      name="contactFilter"
      onChange={inputHandler}
    />
  );
}
