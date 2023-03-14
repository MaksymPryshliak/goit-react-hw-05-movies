import { Link } from 'react-router-dom';
import css from './AditInfo.module.css';

export const AditInfo = () => {
  return (
    <div className={css.infoContainer}>
      <h2 className={css.infoTitle}>Aditional information</h2>
      <ul className={css.infoList}>
        <li>
          <Link to="cast" className={css.infoLink}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" className={css.infoLink}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};
