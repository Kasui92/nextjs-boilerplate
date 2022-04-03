import {NextSeo} from "next-seo";

import {ReactElement} from "react";
import {LayoutMetaProps, LayoutProps, WithChildren } from "../../lib/types";

import siteConfig from "../../../../config/site-config";

/**
 * Meta data for the layout
 * @param title
 * @param description
 * @param image
 * @param url
 * @constructor
 */
const Meta = ({
  title,
  description,
  image,
  url
}: LayoutMetaProps): JSX.Element =>
    <NextSeo
        title={title || siteConfig.meta.title}
        description={description || siteConfig.meta.description}
        additionalLinkTags={[
            {
                rel: "icon",
                href: "/favicon.ico"
            }
        ]}
    />

/**
 * Common layout for the application
 * @param props
 * @constructor
 */
const CommonLayout = ({
  meta,
  children
}: WithChildren<LayoutProps>): JSX.Element =>
    <>
        <Meta {...meta}/>
        {children}
    </>

/**
 * Export the layout
 */
export const getLayout =
    (page?: ReactElement): JSX.Element =>
        <CommonLayout>{page}</CommonLayout>