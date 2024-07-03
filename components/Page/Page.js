import { BlockRenderer } from "components/BlockRenderer/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import Head from "next/head";

export const Page = (props) => {

    return (<div>
        <Head>
            <title>{props.seo.title}</title>
            <meta name="description" content={props.seo.metaDesc} />
        </Head>
        <MainMenu items={props.mainMenuItems}
            callToActionLabel={props.callToActionLabel}
            callToActionDestination={props.callToActionDestination} />
        <BlockRenderer blocks={props.blocks} propertyFeaturesProps={props.propertyFeatures} />
    </div>);
}