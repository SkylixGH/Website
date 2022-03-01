import Link from "next/link";
import React, { useState } from "react";
import enLang from "../_locale/nav/en";
import ruLang from "../_locale/nav/ru";
import { useRouter } from "next/router";
import { languageOptions } from "../../pages/_app";
import styles from "./Nav.module.scss";
import Image from 'next/image';
import { Icon } from "@iconify/react";

const languages = {
    en: { ...enLang },
    ru: { ...ruLang }
}

export default function Nav() {
    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ sideBarOpen, setSideBarOpen ] = useState(false);
    const { locale } = useRouter();
    const language = languages[locale as languageOptions] as typeof enLang;
    const [ darkTheme, setDarkTheme ] = useState<boolean | null>(null);

    if (typeof window !== "undefined" && darkTheme === null) {
        setDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);

        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
            setDarkTheme(e.matches);
        });
    }

    const links = [
        { href: '/', label: language.links.home },
        { href: '/about', label: language.links.about },
        { href: '/docs', label: language.links.docs },
        { href: '/contact', label: language.links.contact },
        { href: '/pricing', label: language.links.pricing },
    ]

    return (
        <div className={styles.root}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    { darkTheme 
                        ? <Image src={"/LogoIconDark.svg"} alt={"SKYLIX"}
                            width={35} height={35} onClick={() => location.href = "/"} /> 
                        : <Image src={"/LogoIconLight.svg"} alt={"SKYLIX"}
                            width={35} height={35} onClick={() => location.href = "/"} />
                    }
                </div>

                <div className={styles.links}>{ links.map((link, index) => {
                    return (
                        <div key={`desktop-${link.href}`}>
                            <Link href={link.href}>
                                <a>{link.label}</a>
                            </Link>

                            { index !== links.length - 1 && <span>•</span> }
                        </div>
                    );
                }) }</div>

                <div className={styles.buttons}>
                    <div className={styles.accountButtons}>
                        { loggedIn 
                            ? <button>Your Account</button>
                            : <>
                                <button>{language.buttons.login}</button>
                                <button>{language.buttons.register}</button>
                            </> 
                        }
                    </div>

                    <div className={styles.mobileButtons}>
                        <button onClick={() => {
                            setSideBarOpen(!sideBarOpen);
                        }}>
                            <Icon icon="fluent:navigation-16-regular" />
                        </button>
                    </div>
                </div>

                <div onClick={() => setSideBarOpen(false)} className={`${styles.sideBarCover} ${sideBarOpen ? '' : styles.sideBarCoverClosed}`} />

                <div className={`${styles.sideBar} ${sideBarOpen ? '' : styles.sideBarClosed}`}>
                    <div className={styles.sideBarHeader}>
                        <div className={styles.sideBarLogo}>
                            <Image src={"/LogoIconAuto.svg"} alt={"SKYLIX"}
                                width={35} height={35} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}