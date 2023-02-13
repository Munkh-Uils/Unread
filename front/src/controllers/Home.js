import styles from "./styles/Home.module.css";
import background from "./assets/background.png";

export const Home = () => {

    return (
        <div className={styles.controller}>
            <div className={styles.nuur}>
                <div className={styles.light}>
                    <img className={styles.background} src={background}></img>
                    <div className={styles.text}>ahahah</div>
                </div>
            </div>
        </div>
    );
};