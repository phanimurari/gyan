import styled from "styled-components";
import tw from "twin.macro";

import { device } from '../../../common/constants/devicesBreakPoints/index'


export const StyledTagsContainer = styled.div`
@media ${device.mobileS}{ 
  display: none;
}

@media ${device.laptop} {
  ${tw`flex flex-col w-full`};
}

`

export const StyledTagElementContainer = styled.ul`${tw`p-0`}`

export const StyledLoadingViewContainer = styled.div`${tw `flex h-screen flex items-center justify-center`}`