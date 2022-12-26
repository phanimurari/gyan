import styled from "styled-components";
import tw from "twin.macro";

import { device } from "../../constants/devicesBreakPoints";

import colors from '../../StyledGuide/themes/colors.json'

export const StyledHeaderContainer = styled.div`
${tw`flex items-center justify-between p-2 flex-wrap`}
border-bottom: 1px solid #dfe4ed;
`

export const StyledInputElementContainer = styled.div` ${tw`flex rounded px-3 py-2 pr-20`}
border: 1px solid #dfe4ed;
@media ${device.mobileL} { 
${tw `order-3 w-1/2`}    
}
@media ${device.laptop} { 
${tw `order-3 w-4/12`}    
}

`

export const StyledButtonAndProfileImageContainer = styled.div`${tw `flex items-center`}
@media ${device.mobileL} { 
${tw`order-4`}    
};
jutsify-content: flex-end
`

export const StyledInputSearchInputElementContainer = styled.div`${tw`flex items-center w-1/2 p-2 rounded`}
border : 1px solid ${colors.liteGrey};`