import '../styles/globals.scss'
import Head from "next/head";
import Nav from "../components/nav/Nav";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export type languageOptions = "en" | "ru";

function MyApp(App: {
  Component: any,
  pageProps: any
}) {
    const [ lastScrollTop, setLastScrollTop ] = useState(0);
    const [ loading, setLoading ] = useState(true);
    const [ navBarCollapsed, setNavBarCollapsed ] = useState(false);
    const [ documentReady, setDocumentReady ] = useState(false);
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

    if (typeof window !== 'undefined') {
        document.addEventListener('readystatechange', () => {
            setLoading(false);
        });

        if (document.readyState === 'complete' && !documentReady) {
            setLoading(false);
            setDocumentReady(true);
        }
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

            <div onScroll={() => {
                setLastScrollTop(bodyRef.current!.scrollTop);
                    
                if (getScrollDirection() === 'down' && bodyRef.current!.scrollTop >= 70) {
                    setNavBarCollapsed(true);
                } else {
                    setNavBarCollapsed(false);
                }
            }} ref={bodyRef} className={"body-content-main"}>
                <Nav collapsedMobile={navBarCollapsed} />

                <div className={"body-content"}>
                    <App.Component { ...App.pageProps } />

                </div>
                <footer className={"page-footer"}>
                    <div className={"page-footer-content"}>
                        <div className={"page-footer-block"}>
                            <h1>Skylix</h1>

                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/about">
                                        <a>About</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/contact">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className={"page-footer-block"}>
                            <h1>Skylix</h1>

                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/about">
                                        <a>About</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/contact">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className={"page-footer-block"}>
                            <h1>Skylix</h1>

                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/about">
                                        <a>About</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/contact">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className={"page-footer-block"}>
                            <h1>Block 2</h1>

                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/about">
                                        <a>About</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/contact">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr />

                    <div className={"page-footer-copyright"}>
                        <p>
                                Copyright &copy; {new Date().getFullYear()} Skylix - All rights reserved.
                        </p>
                    </div>
                </footer>
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
