import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav>
      <div className={styles.container}>
        <span className={styles.tasks + " fa fa-tasks"} />
        <div className={styles.menu}>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to='/favorite'>
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to='/about'>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
