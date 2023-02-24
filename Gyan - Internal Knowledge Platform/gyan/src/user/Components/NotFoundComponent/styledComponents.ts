import styled from "styled-components";
import tw from "twin.macro";

import { device } from "../../../common/constants/devicesBreakPoints";

export const StyledNotFoundContainer = styled.div`${tw`h-screen flex flex-col items-center justify-center`}`

export const StyledNotFoundImage = styled.img`${tw``}

@media ${device.mobileS} { 
  ${tw `w-9/12`}
}
@media ${device.laptop} { 
 ${tw`w-1/3`};
}

`


export const StyledNotFoundHeading = styled.h1`${tw `font-sans`}`