import { useRouter } from 'next/router';
import styles from './Cards.module.scss';

interface Card {
    title: string;
    description: string;
    buttons?: {
        label: string;
        primary?: boolean;
        action?: () => void;
        href?: string;
    }[];
}

interface Props {
    cards: Card[];
}

export default function Cards(props: Props) {
    const router = useRouter();

    return (
        <div className={styles.root}>
            <div className={styles.inner}>
                {props.cards.map((card, index) => {
                    return (
                        <div className={styles.card} key={index}>
                            <div className={styles.banner}>
                                <div className={styles.image}>
                                    <img src="https://png.pngtree.com/background/20210715/original/pngtree-graphic-design-geometric-shapes-wallpaper-picture-image_1297654.jpg" alt="Card image" />
                                </div>

                                <div className={styles.icon}>
                                    <img src="https://github.com/SkylixGH/Nexts/raw/main/readme/nexts-logo.svg" alt="Card image" />
                                </div>
                            </div>

                            <div className={styles.description}>{card.description}</div>

                            <div className={styles.buttons}>
                                {card.buttons && card.buttons.map((button, index) => {
                                    return (
                                        <div onClick={() => {
                                            if (button.action) {
                                                button.action();
                                            }

                                            if (button.href) {
                                                if (button.href.startsWith('https://') || button.href.startsWith('http://')) {
                                                    window.open(button.href, '_blank');
                                                } else {
                                                    router.push(button.href);
                                                }
                                            }
                                        }} className={`${styles.button} ${button.primary ? styles.primary : ''}`} key={index}>
                                            {button.label}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
