// import styles
import styles from "./MainPart.module.css";
import "../../css/main-part/main-part.css";

// import components
import TopNav from "../navbars/mainPart-nav/TopNav";

const MainPart = () => {
    return (
        <>
            <main className={styles["main"]}>
                <TopNav userName="Sasha" />
                <section className={styles["section"]}></section>
            </main>
        </>
    );
};

export default MainPart;
