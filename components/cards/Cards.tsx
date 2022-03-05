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
    return (
        <div className={styles.root}>
            <div className={styles.inner}>
                {props.cards.map((card, index) => {
                    return (
                        <div className={styles.card} key={index}>
                            <div className={styles.banner}>
                                <div className={styles.image}>
                                    <img src="https://images3.alphacoders.com/115/thumb-1920-1152476.png" alt="Card image" />
                                </div>

                                <div className={styles.icon}>
                                    <img src="https://github.com/SkylixGH/Nexts/raw/main/readme/nexts-logo.svg" alt="Card image" />
                                </div>
                            </div>

                            <div className={styles.description}>{card.description}</div>

                            <div className={styles.buttons}>
                                {card.buttons && card.buttons.map((button, index) => {
                                    return (
                                        <div key={card.title + '-' + index} className={`${styles.button} ${button.primary ? styles.primary : ''}`}>
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
