import styles from "./NavBar.module.scss";

const NavBar = () => {
    return (
        <nav>
            <container>
                <span className={styles.tasks + " fa fa-tasks"} />
                <div className={styles.menu}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="favorite">Favorite</a></li>
                        <li><a href="about">About</a></li>
                    </ul>
                </div>
            </container>
        </nav >
    );
};

export default NavBar;