import styles from "./banner.module.css";
import Image from "next/image";
type Props = {
    title: string;
    subTitle: string;
    imgUrl: string;
};
const Banner = (props: Props) => {
    const { imgUrl, title, subTitle } = props;
    const handleOnPlay = () => {
        console.log("handleOnPlay");
    };
    return (
        <div className={styles.container}>
            <div className={styles.leftWrapper}>
                <div className={styles.left}>
                    <div className={styles.nseriesWrapper}>
                        <p className={styles.firstLetter}>N</p>
                        <p className={styles.series}>S E R I E S</p>
                    </div>
                    <h3 className={styles.title}>{title}</h3>
                    <h3 className={styles.subTitle}>{subTitle}</h3>
                    <div className={styles.playBtnWrapper}>
                        <button
                            className={styles.playButton}
                            onClick={handleOnPlay}
                        >
                            <Image
                                className={styles.playIcon}
                                width={32}
                                height={32}
                                src={"/static/play_arrow.svg"}
                                alt="Play icon"
                            />
                            <span className={styles.playText}>Play</span>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={styles.bannerImg}
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundPosition: "50% -1%",
                }}
            ></div>
        </div>
    );
};

export default Banner;
