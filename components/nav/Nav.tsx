import Link from "next/link";
import React from "react";
import enLang from "../_locale/nav/en";
import ruLang from "../_locale/nav/ru";
import { useRouter } from "next/router";
import { languageOptions } from "../../pages/_app";
import styles from "./Nav.module.scss";

const languages = {
    en: { ...enLang },
    ru: { ...ruLang }
}

export default function Nav() {
    const { locale } = useRouter();
    const language = languages[locale as languageOptions] as typeof enLang;

    const links = [
        { href: '/', label: language.links.home },
        { href: '/about', label: language.links.about },
        { href: '/docs', label: language.links.docs },
        { href: '/contact', label: language.links.contact },
        { href: '/pricing', label: language.links.pricing },
    ]

    return (
        <div className={styles.root}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>SKYLIX</a>
                </Link>
            </div>

            <div className={styles.links}>{ links.map((link, index) => {
                return (
                    <>
                        <Link href={link.href} key={`desktop-${link.href}`}>
                            <a>{link.label}</a>
                        </Link>

                        { index !== links.length - 1 && <span>•</span> }
                    </>
                );
            }) }</div>
        </div>
    );
}