import Link from "next/link";
import React from "react";
import {getComponentLocale} from "../../pages/_app";
import enLang from "../_locale/nav/en";

export default function Nav() {
    const language = getComponentLocale<typeof enLang>("nav");
    console.log(language)
    return (
        <div>
            <div>
                <Link href={"/"}>E</Link>
            </div>
        </div>
    );
}