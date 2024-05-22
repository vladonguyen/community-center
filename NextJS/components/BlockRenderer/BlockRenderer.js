import { CallToActionButton } from "components/CallToActionButton";
import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Cover } from "components/Cover/Cover";
import { FormspreeForm } from "components/FormspreeForm";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { PropertySearch } from "components/PropertySearch";
import { PropertyFeatures } from "components/PropertyFeatures";
import Image from "next/legacy/image";
import { theme } from "theme";
import { Gallery } from "components/Gallery";
import {TickItem} from "components/TickItem";

export const BlockRenderer = ({ blocks = [], propertyFeaturesProps = {} }) => {
    return blocks.map((block) => {
        switch (block.name) {
            case "acf/tickitem": {
                return (
                    <TickItem key={block.id} >
                        <BlockRenderer blocks={block.innerBlocks} />
                    </TickItem>
                );
            }
            case "core/gallery": {
                return <Gallery

                    key={block.id}
                    columns={block.attributes.columns || 3}
                    cropImages={block.attributes.imageCrop}
                    items={block.innerBlocks} />
            };
            case "acf/propertyfeatures": {
                return <PropertyFeatures
                    key={block.id}
                    price={propertyFeaturesProps.price}
                    bathrooms={propertyFeaturesProps.bathrooms}
                    bedrooms={propertyFeaturesProps.bedrooms}
                    hasParking={propertyFeaturesProps.has_parking}
                    petFriendly={propertyFeaturesProps.pet_friendly}
                />
            }
            case "acf/ctabutton": {
                return (
                    <CallToActionButton
                        key={block.id}
                        buttonLabel={block.attributes.data.label}
                        destination={block.attributes.data.destination.url || "/"}
                        align={block.attributes.data.align}
                    />
                );
            }
            case "acf/formspreeform": {
                return <FormspreeForm
                    key={block.id}
                    formId={block.attributes.data.form_id}
                />
            }
            case "core/paragraph": {
                return <Paragraph
                    key={block.id}
                    textAlign={block.attributes.align}
                    content={block.originalContent}
                    textColor={
                        theme[block.attributes.textColor] ||
                        block.attributes.style?.color?.text}
                />
            }

            case "core/post-title":
            case "core/heading": {
                return <Heading
                    key={block.id}
                    level={block.attributes.level}
                    originalContent={block.originalContent}
                    textAlign={block.attributes.textAlign} />
            };
            case "acf/propertysearch": {
                return <PropertySearch key={block.id} />
            }
            case 'core/cover': {
                return (<Cover key={block.id} background={block.attributes.url}>
                    <BlockRenderer blocks={block.innerBlocks} propertyFeaturesProps={propertyFeaturesProps} />
                </Cover>
                );
            }
            case "core/columns": {
                console.log("COLUMNS:", block.attributes)
                return (
                    <Columns
                        key={block.id}
                        isStackedOnMobile={block.attributes.isStackedOnMobile}
                        textColor={
                            theme[block.attributes.textColor] ||
                            block.attributes.style?.color?.text}

                        backgroundColor={theme[block.attributes.backgroundColor] ||
                            block.attributes.style?.background}
                    >
                        <BlockRenderer blocks={block.innerBlocks} propertyFeaturesProps={propertyFeaturesProps} />
                    </Columns>

                )
            };

            case "core/column": {
                return (
                    <Column
                        key={block.id}
                        width={block.attributes.width}
                        textColor={
                            theme[block.attributes.textColor] ||
                            block.attributes.style?.color?.text}
                        backgroundColor={theme[block.attributes.backgroundColor] ||
                            block.attributes.style?.background}
                    >
                        <BlockRenderer blocks={block.innerBlocks} propertyFeaturesProps={propertyFeaturesProps} />
                    </Column>

                )
            };
            case "core/group":
            case "core/block": {
                return (
                    <BlockRenderer key={block.id} blocks={block.innerBlocks} propertyFeaturesProps={propertyFeaturesProps} />

                )
            };

            case "core/image": {
                return (
                    <Image
                        key={block.id}
                        src={block.attributes.url}
                        width={9000}
                        height={6000}
                        // sizes="100vw"
                        // style={{ width: '100%', height: 'auto' }} // optional
                        alt={block.attributes.alt || ""}
                        // style={{objectFit: "cover"}}
                    />

                )
            };
            default:
                console.log("UNKNOWN: ", block);
                return null;
        }
    })
}