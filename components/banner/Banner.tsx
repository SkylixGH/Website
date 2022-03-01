import styles from "./Banner.module.scss";
import Image from 'next/image';

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
    return (
        <div className={styles.root}>
            { props.imageURL && <div className={styles.image}>
                { /* eslint-disable-next-line @next/next/no-img-element */ }
                <img src={props.imageURL} alt={props.title} />
            </div> }

            <div className={styles.text}>
                <h1>{props.title}</h1>
                {props.subtitle && <p>{props.subtitle}</p>}
            </div>
        </div>
    )
}
