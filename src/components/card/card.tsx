import Image from "next/image";
import styles from "./card.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import cls from "classnames";
type props = {
    imgUrl?: string;
    size?: "large" | "medium" | "small";
    alt: string;
};
type Sizes = {
    large: string;
    medium: string;
    small: string;
};
const Card = ({
    imgUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2659&q=80",
    size = "medium",
    alt,
}: props) => {
    const classMap: Sizes = {
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem,
    };
    const [imgSrc, setImgSrc] = useState(imgUrl);
    const handleError = () =>
        setImgSrc(
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2659&q=80"
        );
    return (
        <div className={styles.container}>
            <motion.div
                whileHover={{
                    scale: 1.2,
                }}
                className={cls(classMap[size], styles.imgMotionWrapper)}
            >
                <Image
                    onError={handleError}
                    className={styles.cardImg}
                    src={imgSrc}
                    alt={alt}
                    fill
                />
            </motion.div>
        </div>
    );
};

export default Card;
