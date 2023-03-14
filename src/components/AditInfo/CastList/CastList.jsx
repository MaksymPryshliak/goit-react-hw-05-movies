import defaultimage from '../../../services/defaultCastImage.png';
import css from '../AditInfo.module.css';

export const CastList = ({cast}) => (
  <ul className={css.castList}>
    {cast.map(({ id, name, profile_path, character }) => {
      return (
        <li key={id} className={css.castitem}>
          <img
            width="50"
            src={
              !profile_path
                ? defaultimage
                : `https://image.tmdb.org/t/p/w500${profile_path}`
            }
            alt={name}
          />
          <div className={css.castInfo}>
            <p className={css.castName}>{name}</p>
            <p className={css.castChar}>Character: {character}</p>
          </div>
        </li>
      );
    })}
  </ul>
);
