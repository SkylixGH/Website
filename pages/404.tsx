import enLang from "../locale/404/en";
import ruLang from "../locale/404/ru";
import { useRouter } from "next/router";
import { languageOptions } from "./_app";
import React from "react";
import Link from "next/link";
import styles from "./404.module.scss";

const languages = {
    en: { ...enLang },
    ru: { ...ruLang }
}

export default function Error404() {
    const { locale } = useRouter();
    const language = languages[locale as languageOptions] as typeof enLang;

    return (
        <div className={styles.root}>
            <div className={styles.error}>
                <h1>404</h1>
                <hr />
                <p>{language.errorMessage}</p>
            </div>

            <p className={styles.returnHome}>
                {language.returnHome}

                <Link href="/">
                    <a>{language.home}</a>
                </Link>
            </p>
        </div>
    )
}
