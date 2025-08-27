// import styles
import styles from "./MainPage.module.css";

// import components
import LeftNav from "../../components/navbars/left-navbar/LeftNav";
import MainPart from "../../components/main-part/MainPart";

const MainPage = () => {
    return (
        <>
            <main className={styles["main"]}>
                <LeftNav />
                <MainPart />
            </main>
        </>
    );
};

export default MainPage;
