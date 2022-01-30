import {Page} from "../client/lib/types";
import {getLayout} from "../client/components/layouts/CommonLayout";

const IndexPage: Page = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen'>
            <h1 className='text-3xl'>Hello World!</h1>
        </div>
    )
}

IndexPage.Layout = getLayout

export default IndexPage