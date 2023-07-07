import { useRouter } from "next/router";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
type Props = {
    username: string;
};
const NavBar = (props: Props) => {
    const { username } = props;
    const [showDropdown, setShowDropDown] = useState(false);
    const router = useRouter();
    const handleNavigation = (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>,
        routeName: string
    ) => {
        e.preventDefault();
        router.push(routeName);
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Link className={styles.logoLink} href="/">
                    <div className={styles.logoWrapper}>
                        <Image
                            width={128}
                            height={34}
                            src={"/static/netflix.svg"}
                            alt="Netflix-Logo"
                        />
                    </div>
                </Link>

                <ul className={styles.navItems}>
                    <li
                        onClick={(e) => handleNavigation(e, "/home")}
                        className={styles.navItem}
                    >
                        Home
                    </li>
                    <li
                        onClick={(e) => handleNavigation(e, "/my-list")}
                        className={styles.navItem}
                    >
                        My List
                    </li>
                </ul>
                <nav className={styles.navContainer}>
                    <div>
                        <button
                            onClick={() => setShowDropDown(!showDropdown)}
                            className={styles.usernameBtn}
                        >
                            <p className={styles.username}>{username}</p>
                            <Image
                                src={"/static/expand_more.svg"}
                                alt="Expand dropdown"
                                width={24}
                                height={24}
                            />
                        </button>
                        {/** Expand more icon */}
                    </div>
                    {showDropdown && (
                        <div
                            onClick={() => setShowDropDown(!showDropdown)}
                            className={styles.navDropdown}
                        >
                            <Link href="/login" className={styles.linkName}>
                                Sign Out
                            </Link>
                            <div className={styles.lineWrapper}></div>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
