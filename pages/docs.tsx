import { useRouter } from "next/router";
import Banner from "../components/banner/Banner";
import Cards from "../components/cards/Cards";
import useDarkTheme from "../hooks/useDarkTheme";
import enLang from "../locale/docs/en";
import ruLang from "../locale/docs/ru";
import { languageOptions } from "./_app";

const languages = {
    en: { ...enLang },
    ru: { ...ruLang }
}

export default function Docs() {
    const { locale } = useRouter();
    const language = languages[locale as languageOptions] as typeof enLang;
    const darkTheme = useDarkTheme();
    
    return (
        <div>
            <Banner title={language.banner.title} />
            <br />

            <Cards cards={[
                {
                    title: language.projects.nexts.title,
                    description: language.projects.nexts.description,
                    imageURL: darkTheme ? 'https://raw.githubusercontent.com/SkylixGH/Nexts/main/readme/nexts-logo.svg' : 'https://raw.githubusercontent.com/SkylixGH/Nexts/main/readme/nexts-logo-light.svg',
                    buttons: [
                        {
                            label: language.open,
                            href: '/docs/nexts',
                            primary: true
                        },
                        {
                            label: language.github,
                            href: 'https://github.com/SkylixGH/Nexts'
                        }
                    ]
                },
                {
                    title: language.projects.catLang.title,
                    description: language.projects.catLang.description,
                    imageURL: darkTheme ? 'https://raw.githubusercontent.com/SkylixGH/Nexts/main/readme/nexts-logo.svg' : 'https://raw.githubusercontent.com/SkylixGH/Nexts/main/readme/nexts-logo-light.svg',
                    buttons: [
                        {
                            label: language.open,
                            href: '/docs/cat-lang',
                            primary: true
                        },
                        {
                            label: language.github,
                            href: 'https://github.com/SkylixGH/CatLang'
                        }
                    ]
                }
            ]} />
        </div>
    )
}