import styled from "styled-components";
import tw from "twin.macro";

import { device } from "../../../common/constants/devicesBreakPoints";

import colors from '../../styleGuide/themes/colors.json'

export const StyledHomeContainer = styled.div``

export const StyledTagsAndPostContainer = styled.div` ${tw`flex min-h-screen`}
`

export const StyledTagsMobileViewContainer = styled.div`
@media ${device.laptop} {
    display: none
}
`
export const StyledTagsViewContainer = styled.div`
display: none;
@media ${device.laptop} {
    ${tw`flex w-1/5`};
    border-right : 1px solid ${colors.liteGrey};
}
`