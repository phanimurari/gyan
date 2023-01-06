import styled from "styled-components";
import tw from "twin.macro";

import device from '../../../common/constants/displaySizes/displaySizes.json'
import colors from '../../styleGuide/themes/colors.json'



export const StyledTagsContainer = styled.div`
@media (min-width : ${device.mobileS}) and (max-width: ${device.tablet}){ 
  display: none;
}

@media (min-width : ${device.tablet}) and (max-width: ${device.desktop}){
  display: flex;
  ${tw`w-1/5`};
  border-right : 1px solid ${colors.liteGrey};
}

`

export const StyledTagElementContainer = styled.ul`${tw`p-0`}`

export const StyledLoadingViewContainer = styled.div`${tw `flex h-screen flex items-center justify-center`}`