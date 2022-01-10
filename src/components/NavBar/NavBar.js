import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav>
      <div className={styles.container}>
        <span className={styles.tasks + " fa fa-tasks"} />
        <div className={styles.menu}>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='favorite'>Favorite</a>
            </li>
            <li>
              <a href='about'>About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
