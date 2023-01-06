import styled from "styled-components";
import tw from "twin.macro";

import { device } from "../../constants/devicesBreakPoints";

import colors from '../../StyledGuide/themes/colors.json'

export const StyledHeaderContainer = styled.div`
${tw`sticky top-0 bg-white`}
@media ${device.mobileS} { 
  ${tw `flex flex-wrap p-2`}
}
@media ${device.tablet} { 
 ${tw`p-4`};
}
border-bottom: 1px solid ${colors.bordeGrey};  
`

export const StyledInputSearchInputElementContainer = styled.div`${tw`flex items-center rounded`}
border : 1px solid ${colors.liteGrey};
@media ${device.mobileL} {
  ${tw`flex px-4`};
  justify-content: flex-start;
  flex-grow: 1
}
@media ${device.tablet} { 
 ${tw `w-1/2 p-2`};
}
`



export const StyledInputElementContainer = styled.div`
border: 1px solid ${colors.bordeGrey};
@media ${device.mobileS} { 
  ${tw ``}
}
@media ${device.tablet} { 
 ${tw`w-1/2`};
}

`

export const StyledButtonAndProfileImageContainer = styled.div`${tw `flex items-center`}
@media ${device.mobileS} { 
  ${tw `flex justify-between w-full p-2`}
}
@media ${device.tablet} {
  ${tw`flex w-2/12`};
  justify-content: flex-end;P
  flex-grow: 1;
}
`

export const StyledProfileOrLogoMakerContainer = styled.div`${tw` flex w-1/12`}
@media ${device.mobileL} {
  ${tw`w-1/6`};
};
@media ${device.tablet} {
 flex-grow: 1;
}
`

export const StyledHambergurIconContainer = styled.div`${tw``}

@media ${device.mobileL} {
  ${tw`w-1/6 flex justify-center items-center`};
};

@media ${device.tablet} {
display: none
}
`