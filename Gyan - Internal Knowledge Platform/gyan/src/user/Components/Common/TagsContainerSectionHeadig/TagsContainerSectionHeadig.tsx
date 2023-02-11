import { StyleadSectionHeadingContainer, StyledSectionHeading } from "./styledComponents"

const TagsContainerSectionHeading = (props: { sectionHeading: string }) => {
const {sectionHeading} = props
    return <StyleadSectionHeadingContainer>
        <StyledSectionHeading>{sectionHeading}</StyledSectionHeading>
    </StyleadSectionHeadingContainer>
} 

export {TagsContainerSectionHeading}