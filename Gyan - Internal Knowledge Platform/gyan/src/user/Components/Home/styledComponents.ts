import styled from "styled-components";
import tw from "twin.macro";

import { device } from "../../../common/constants/devicesBreakPoints";

export const StyledHomeContainer = styled.div``

export const StyledTagsAndPostContainer = styled.div` ${tw`flex min-h-screen`}`

export const StyledTagsMobileViewContainer = styled.div`
@media ${device.laptop} {
    display: none
}
`
