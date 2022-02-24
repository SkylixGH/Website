import '../styles/globals.css'
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
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="https://raw.githubusercontent.com/SkylixGH/Info/main/logos/Logo%20Icon%20Auto.svg" />
            </Head>

            <Nav />

            <App.Component { ...App.pageProps } />
        </>
    );
}

export default MyApp;
