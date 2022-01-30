import {ReactElement} from "react";
import {AppProps} from "../client/lib/types";

import '../../styles/globals.css';

export default function App({
    Component,
    pageProps,
    router
} : AppProps): JSX.Element {
    // Definisco il Layout
    const withLayout = Component.Layout || ((page: ReactElement) => page);

    return withLayout(<Component {...pageProps} />);
}
