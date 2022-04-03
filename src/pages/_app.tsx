import {getLayout as getCommonLayout} from "../client/components/layouts/CommonLayout";
import { ComponentWithLayout } from "../client/lib/types";

import "../../styles/globals.css";

export type AppRenderProps = {
    pageProps: unknown;
    err?: Error;
    Component: ComponentWithLayout;
};

export default function App({
    Component,
    pageProps
} : AppRenderProps): JSX.Element {
    // Definisco il Layout
    const withLayout = Component.Layout || getCommonLayout

    return withLayout(<Component {...pageProps} />);
}
