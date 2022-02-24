import '../styles/globals.scss'
import Head from "next/head";
import Nav from "../components/nav/Nav";

export type languageOptions = "en" | "ru";

function MyApp(App: {
  Component: any,
  pageProps: any
}) {
    return (
        <>
            <Head>
                <title>Skylix</title>

                <meta name="description" content="Welcome to the Skylix homepage!" />
                <link rel="icon" href={"/LogoIconAuto.svg"} />

                <meta property="og:title" content="Skylix" />
                <meta property="og:description" content="Welcome to the Skylix homepage!" />
                <meta property="og:image" content="https://raw.githubusercontent.com/SkylixGH/Info/main/logos/Logo%20Icon%20Auto.svg" />
                <meta property="og:url" content="https://skylix.net" />
                <meta name="theme-color" content="#ffffff" />
            </Head>

            <div className={"body-content-main"}>
                <Nav />

                <div className={"body-content"}>
                    <App.Component { ...App.pageProps } />
                </div>
            </div>
        </>
    );
}

export default MyApp;
