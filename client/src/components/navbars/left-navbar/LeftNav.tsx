// import styles
import styles from "./LeftNav.module.css";
import "../../../css/nav/left-nav/nav.css";

// import icons
import { GiWeightLiftingUp } from "react-icons/gi";
import { AiOutlineLogout } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { BsCalendar4 } from "react-icons/bs";
import { MdOutlineEditNote } from "react-icons/md";
import { TbSettings2 } from "react-icons/tb";
import { FaBowlFood } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";

const LeftNav = () => {
    return (
        <>
            <nav className={styles["nav"]}>
                <div className={styles["top"]}>
                    <GiWeightLiftingUp className={styles["lifter-icon"]} />
                </div>
                <div className={styles["mid"]}>
                    <button>
                        <div>
                            <GoHome className={styles["icon"]} />
                        </div>
                    </button>

                    <button>
                        <div>
                            <BsCalendar4 className={styles["icon"]} />
                        </div>
                    </button>

                    <button>
                        <div>
                            <FiMessageCircle className={styles["icon"]} />
                        </div>
                    </button>

                    <button>
                        <div>
                            <FaBowlFood className={styles["icon"]} />
                        </div>
                    </button>

                    <button>
                        <div>
                            <MdOutlineEditNote className={styles["icon"]} />
                        </div>
                    </button>

                    <button>
                        <div>
                            <TbSettings2 className={styles["icon"]} />
                        </div>
                    </button>
                </div>
                <button className={styles["bottom"]}>
                    <AiOutlineLogout className={styles["exit-icon"]} />
                </button>
            </nav>
        </>
    );
};

export default LeftNav;
