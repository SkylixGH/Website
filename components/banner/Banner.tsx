import styles from "./Banner.module.scss";
import Image from 'next/image';
import { useEffect, useState } from "react";

interface Props {
    /**
     * The banner title
     */
    title: string;

    /**
     * The banner subtitle
     */
    subtitle?: string;

    /**
     * The banner background image URL
     */
    imageURL?: string;
}

export default function Banner(props: Props) {
    const [ scrollTop, setScrollTop ] = useState(0);
    let scrollableBody = null as HTMLDivElement | null;

    if (typeof window !== "undefined") {
        scrollableBody = document.querySelector(".body-content-main");
    }

    const onScroll = () => {
        setScrollTop(scrollableBody!.scrollTop);
    }

    useEffect(() => {
        scrollableBody?.addEventListener("scroll", onScroll);

        return () => {
            scrollableBody?.removeEventListener("scroll", onScroll);
        }
    }, []);

    return (
        <div className={styles.root}>
            { props.imageURL && <div className={styles.image}>
                { /* eslint-disable-next-line @next/next/no-img-element */ }
                <img style={{
                    marginTop: `${scrollTop}px`,
                }} src={props.imageURL} alt={props.title} />
            </div> }

            <div style={{
                ...(props.imageURL ? { backdropFilter: "blur(5px)" } : {}),
            }} className={styles.text}>
                <h1>{props.title}</h1>
                {props.subtitle && <p>{props.subtitle}</p>}
            </div>
        </div>
    )
}
