import { useState } from "react";

// import styles
import styles from "./TopNav.module.css";
import "../../../css/mainCSS/mainCSS.css";
import "../../../css/nav/mainPart-nav/mainPart-nav.css";

// import icons
import { PiHandWaving, PiMagnifyingGlass } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

interface TopNavProps {
    userName: string;
}

const TopNav = ({ userName }: TopNavProps) => {
    const [inputValue, setInputValue] = useState<string>("");

    return (
        <>
            <nav className={styles["nav"]}>
                <div className={styles["left"]}>
                    <div className={styles["left-top"]}>
                        <p className={styles["welcome"]}>
                            Hey, {userName}!&#8194;
                        </p>
                        <PiHandWaving className={styles["icon"]} />
                    </div>

                    <p className={styles["text"]}>Let's track your workouts.</p>
                </div>

                <aside className={styles["right"]}>
                    <div className={styles["search"]}>
                        <div className={"icon-container"}>
                            <PiMagnifyingGlass
                                className={styles["icon-search"]}
                            />
                        </div>

                        <input
                            className={styles["search-input"]}
                            type="text"
                            placeholder="Search here"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </div>

                    <button className={styles["profile"]}>
                        <CgProfile className={styles["profile-icon"]} />
                    </button>
                </aside>
            </nav>
        </>
    );
};

export default TopNav;
