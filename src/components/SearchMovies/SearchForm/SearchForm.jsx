import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

export const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = evt => {
    const { value } = evt.currentTarget;
    setInputValue(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (inputValue.trim() === '') {
      toast.error('Nothing to search!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }

    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.from}>
      <input
        type="text"
        placeholder="Search films"
        value={inputValue}
        autoFocus
        onChange={handleChange}
        autoComplete="off"
        className={css.input}
      />
      <button type="submit" className={css.submitBtn}>
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
