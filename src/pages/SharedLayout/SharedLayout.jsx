import { Loader } from 'pages/Loader';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => (
  <div>
    <header className={css.header}>
      <nav>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.link}>
          Movies
        </NavLink>
      </nav>
    </header>
    <div className={css.container}>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  </div>
);
