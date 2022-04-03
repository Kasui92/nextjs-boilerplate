import {ReactElement, ReactNode} from "react";
import {NextComponentType} from "next";

export type WithChildren<Props = Record<string, unknown>> = Props & {
    children: ReactNode;
};

/**
 * Layouts
 */

/**
 * Patched `NextComponentType` to support attaching `.Layout` component in `_app`
 *
 * @see https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
 */
export type ComponentWithLayout = NextComponentType & WithLayout;

export type WithLayout = {
    /**
     * The layout to use for the page
     * @default "CommonLayout"
     */
    Layout?: (page: ReactElement) => ReactElement;
    /**
     * props forwarded onto Meta component in Layout
     */
    meta?: LayoutMetaProps;
};

export type LayoutProps = {
    /**
     * props forwarded onto Meta component
     */
    meta?: LayoutMetaProps;
};

export type LayoutMetaProps = {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
};