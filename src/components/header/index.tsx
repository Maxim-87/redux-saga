import { NavLink } from "react-router-dom";

import styles from './Header.module.css';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Latest News', path: '/latest-news' },
  { id: 3, title: 'Popular News', path: '/popular-news' },
];

const Header = () => (
  <header>
    <nav className={styles.nav}>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <NavLink key={id} to={path}>{title}</NavLink>
        ))}
      </div>
    </nav>
  </header>
);

export default Header;