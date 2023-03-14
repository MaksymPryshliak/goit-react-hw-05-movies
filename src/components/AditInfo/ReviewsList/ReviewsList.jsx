import css from '../AditInfo.module.css';

export const ReviewsList = ({reviews}) => (
  <ul className={css.reviewsList}>
    {reviews.map(({ id, author, content }) => {
      return (
        <li key={id}>
          <p className={css.author}>{author}</p>
          <p className={css.content}>{content}</p>
        </li>
      );
    })}
  </ul>
);
