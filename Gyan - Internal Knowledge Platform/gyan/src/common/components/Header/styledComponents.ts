import styled from "styled-components";
import tw from "twin.macro";

import { device } from "../../constants/devicesBreakPoints";

import colors from '../../StyledGuide/themes/colors.json'

export const StyledHeaderContainer = styled.div`
${tw`sticky top-0 bg-white w-full z-10`};
@media ${device.mobileS} { 
  ${tw `flex flex-wrap p-2`}
}
@media ${device.laptop} { 
 ${tw`p-4 flex items-center`};
}
border-bottom: 1px solid ${colors.bordeGrey};  
`

export const StyledProfileOrLogoMakerContainer = styled.div`${tw`flex items-center w-1/6 px-2`}`


export const StyledLogoutButtonContainer = styled.div`${tw``}
`

export const StyledInputSearchInputElementContainer = styled.div`${tw`flex items-center rounded px-4`}
border : 1px solid ${colors.liteGrey};
@media ${device.mobileL}  {
 ${tw`flex mx-1`}
 flex-grow:1
}
@media ${device.laptop} { 
 ${tw`flex p-2 w-1/4`}
}
`



export const StyledInputElementContainer = styled.div`
border: 1px solid ${colors.bordeGrey};
@media ${device.mobileL} { 
  ${tw``};
}
@media ${device.laptop} { 
 ${tw`w-1/2`};
}

`

export const StyledButtonAndProfileImageContainer = styled.div`${tw `flex items-center`}
@media ${device.mobileS} { 
  ${tw `flex justify-between w-full py-6`}
}
@media ${device.laptop} {
  ${tw`flex w-2/12 pr-6 py-0`};
  justify-content: flex-end;
  flex-grow: 1;
}
`



export const StyledHambergurIconContainer = styled.div`${tw`
cursor-pointer`}

@media ${device.mobileL} {
  ${tw`w-1/6 flex justify-center items-center`};
};

@media ${device.laptop} {
display: none
}
`

export const StyledProfileIconButton= styled.button`${tw `bg-white outline-none border-none cursor-pointer`}`