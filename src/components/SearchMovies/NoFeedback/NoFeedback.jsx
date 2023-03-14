import PropTypes from 'prop-types';
import css from '../SearchForm/SearchForm.module.css';

export const NoFeedback = ({ search }) => (
  <p className={css.noFeedbackMess}>
    There is no movies matching your query: '{search}'
  </p>
);

NoFeedback.propTypes = {
    search: PropTypes.string.isRequired,
}
