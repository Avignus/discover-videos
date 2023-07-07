import styles from "./section-cards.module.css";
import Card from "./card";

type Props = {
    title: string;
};
const SectionCards = ({ title }: Props) => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>
                <Card
                    alt="section-item-image"
                    imgUrl="/static/clifford.webp"
                    size="large"
                />
            </div>
        </section>
    );
};

export default SectionCards;
