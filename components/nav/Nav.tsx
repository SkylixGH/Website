import Link from "next/link";
import React from "react";
import enLang from "../_locale/nav/en";
import ruLang from "../_locale/nav/ru";
import { useRouter } from "next/router";
import { languageOptions } from "../../pages/_app";

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
        <div>
            <div>{ links.map((link) => (
                <Link href={link.href} key={`desktop-${link.href}`}>
                    <a>{link.label}</a>
                </Link>
            )) }</div>
        </div>
    );
}