import {ThemeProvider} from 'next-themes'
import '../styles/globals.css'
import Head from "next/head";
import Header from "../components/Header/Header";

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider attribute='class'>
            <Head>
                <title>Orientation 2022</title>
            </Head>
            <Header/>
            <div className='mb-12'>
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    )

}

export default MyApp
