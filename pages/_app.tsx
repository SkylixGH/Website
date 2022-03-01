import '../styles/globals.scss'
import Head from "next/head";
import Nav from "../components/nav/Nav";
import { useEffect, useRef, useState } from 'react';

export type languageOptions = "en" | "ru";

function MyApp(App: {
  Component: any,
  pageProps: any
}) {
    const [ lastScrollTop, setLastScrollTop ] = useState(0);
    const [ loading, setLoading ] = useState(true);
    const [ navBarCollapsed, setNavBarCollapsed ] = useState(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    const getScrollDirection = () => {
        if (bodyRef.current!.scrollTop > lastScrollTop) {
            return "down";
        } else if (bodyRef.current!.scrollTop < lastScrollTop) {
            return "up";
        }
    }

    if (typeof window !== 'undefined') {
        document.body.classList.add('body');
    }

    // See if the document is loaded
    if (typeof window !== 'undefined') {
        document.addEventListener('readystatechange', () => {
            setLoading(false);
        });

        // if (document.readyState === 'complete') {
        //     setLoading(false);
        // }
    }

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
                <Nav collapsedMobile={navBarCollapsed} />

                <div onScroll={() => {
                    setLastScrollTop(bodyRef.current!.scrollTop);
                    
                    if (getScrollDirection() === 'down' && bodyRef.current!.scrollTop >= 70) {
                        setNavBarCollapsed(true);
                    } else {
                        setNavBarCollapsed(false);
                    }
                }} ref={bodyRef} className={"body-content"}>
                    <App.Component { ...App.pageProps } />
                </div>
            </div>

            <div className={`page-loader ${!loading ? 'page-loader-hidden' : ''}`}>
                <div className={"page-loader-inner"} />    
                <div className={"page-loader-center"} />    
                <div className={"page-loader-outer"} />    
                <div className={"page-loader-outer-2"} />    
            </div>
        </>
    );
}

export default MyApp;
