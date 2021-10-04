import {SiteCore} from "./core";

const SiteLayout = ({children}) => <SiteCore>{children}</SiteCore>

export const getLayout = page => <SiteLayout>{page}</SiteLayout>

export default SiteLayout;