import {ReactElement, ReactNode} from "react";
import {NextComponentType, NextPage} from "next";
import {NextRouter} from "next/router";

export type AppProps = {
    pageProps: unknown;
    err?: Error;
    Component: NextComponentType & { Layout?: (page: ReactElement) => JSX.Element};
    router: NextRouter;
};

export type Page<P = {}> = NextPage<P> & {
    Layout?: (page: ReactNode) => ReactNode;
};

export type WithChildren<Props = Record<string, unknown>> = Props & {
    children: ReactNode;
};