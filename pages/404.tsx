import enLang from "../locale/404/en";
import ruLang from "../locale/404/ru";
import { useRouter } from "next/router";
import { languageOptions } from "./_app";
import React from "react";
import Link from "next/link";

const languages = {
    en: { ...enLang },
    ru: { ...ruLang }
}

export default function Error404() {
    const { locale } = useRouter();
    const language = languages[locale as languageOptions] as typeof enLang;

    return (
        <>
            <h1>404</h1>
            <p>{language.errorMessage}</p>

            <br />
            <br />

            <p>
                {language.returnHome}

                <Link href="/">
                    <a>{language.home}</a>
                </Link>
            </p>
        </>
    )
}
