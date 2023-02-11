import styled from "styled-components";
import tw from "twin.macro";
import { device } from "../../../../common/constants/devicesBreakPoints";

import colors from '../../../styleGuide/themes/colors.json'

export const StyledSectionHeading = styled.h1`${tw`font-sans m-0`}
color: ${colors.darkBlueGrey};
@media ${device.mobileS} OR ${device.mobileM} OR ${device.mobileL} {
    ${tw`text-base`}
}

@media ${device.tablet} {
    ${tw `text-xl`}
}

@media ${device.laptop} {
    ${tw `text-2xl`}
}`


export const StyleadSectionHeadingContainer = styled.div`${tw`p-2`}
border-bottom: 1px solid ${colors.borderLinerGrey}
`