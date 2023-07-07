import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/banner/banner";
import NavBar from "@/components/nav/navbar";
import SectionCards from "@/components/card/section-cards";
// const inter = Inter({ subsets: ["latin"] });
import Card from "@/components/card/card";
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Netflix</title>
                <meta name="description" content="Netflix" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Netflix</h1>
            <NavBar username="Igor@hotmail.com" />
            <Banner
                title="Clifford the red dog"
                subTitle="a very cute dog"
                imgUrl="/static/clifford.webp"
            />
            <SectionCards title="Disney" />
            <Card size="large" alt="card-image" />
            <Card
                imgUrl="/static/clifford.webp"
                alt="card-image"
                size="medium"
            />
            <Card
                imgUrl="/static/clifford.webp"
                size="small"
                alt="card-image"
            />
        </div>
    );
}
