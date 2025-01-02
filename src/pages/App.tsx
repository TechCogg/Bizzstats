import '@/styles/globals.css';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="flex flex-col justify-between">
            <div id="app:container" className="h-full sm:mx-12 sm:my-20 md:mx-32 md:my-30 xs:mx-5">
                <Component {...pageProps} />
            </div>
        </div>
    );
}
