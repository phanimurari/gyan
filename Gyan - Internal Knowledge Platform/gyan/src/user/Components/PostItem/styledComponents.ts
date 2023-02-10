import styled from "styled-components";
import tw from "twin.macro";
import { device } from "../../../common/constants/devicesBreakPoints";

import colors from '../../styleGuide/themes/colors.json'


interface StyledTagElementProps {
    randomBackgroundColor: string,
    randomFontColor : string
}

export const StyledPostElement = styled.li`${tw`list-none py-4 px-5 my-2 font-sans rounded relative`}
background-color: ${colors.white};
border: 1px solid ${colors.borderLinerGrey};

@media ${device.laptop} {
  width: 800px
}

@media ${device.laptopL} {
  width: 1000px
}


`

export const SyledPostAuthorImageContainer = styled.div`
display: none;
@media ${device.tablet} {
    ${tw`flex items-start my-2 mr-2`}
}
`


export const StyledPostTextContentAndOptionIconContainer = styled.div`${tw`flex items-center w-full`}
justify-content: space-between`

export const StyledPostContentContainer = styled.div`${tw`flex flex-col`}`

export const StyledPostContentContainerMobileView = styled.div`


@media ${device.mobileL} {
    ${tw `flex`}
}

@media ${device.tablet}{
  ${tw`flex flex-col`}
}
`

export const StyledProfileImageContinaerInMobileView = styled.div`${tw``}
@media ${device.tablet} {
    display: none
}

`

export const StyledAuthorName = styled.p`${tw`font-medium mb-0 mx-1`}`

export const StyledPostMainContentElement = styled.div`${tw `flex pb-4`}`

export const StyledPostCreationTime = styled.p`${tw`mb-0 mx-1`}
color: #a7aab0`

export const StyledPostHeading = styled.h1`${tw``}
@media ${device.mobileS} OR ${device.mobileM} OR ${device.mobileL} {
    ${tw`text-base`}
}

@media ${device.tablet} {
    ${tw `text-xl`}
}

@media ${device.laptop} {
    ${tw `text-2xl`}
}
`

export const StyledTagsLikeCountContainer = styled.div`${tw`flex w-1/2`}`

export const StyledLikeAndCommentsCountContainer = styled.div`
${tw `flex justify-between`}

@media ${device.tablet} {
 ${tw`w-1/2`};
 justify-content: flex-end
}
`

export const StyledPostTextContentContainer = styled.div`${tw`w-full`}`

export const StyledTagElement = styled.div<StyledTagElementProps>`${tw`flex items-center m-1 border font-bold rounded px-2 cursor-pointer`}
color: ${props => props.randomFontColor};
background-color: ${props => props.randomBackgroundColor}`

        
export const StyledPostTagsAndLikesAndCommentCountContainer = styled.div`
@media ${device.tablet} {
 ${tw `flex justify-items-end`};
}


`

export const StyledCommentsCount = styled.p`${tw`mx-1 text-xl font-medium`}`

export const StyledCommentsAndCountCountainer = styled.div`${tw`flex items-center font-medium cursor-pointer`}
color: ${colors.brightBlue}`

export const StyledLikesContainer = styled.div`${tw`flex items-center mr-2`}`

export const StyledUITagsELemenntsContainer = styled.div`${tw``}
@media ${device.mobileS} {
    ${tw `flex`}
}
@media ${device.tablet} {
    ${tw `flex w-1/2 mr-1`}
}
`

export const StyledCommentsAndCommentBoxContainer = styled.div`${tw``}`

export const StyledTextBoxElementContainer = styled.div`${tw`w-9/12 flex items-center rounded-md p-2`}
border: 1px solid ${colors.borderLinerGrey}
`

export const StyledLikedIcon = styled.button`${tw`bg-white m-0 p-0 cursor-pointer`}
border: none;
color : ${colors.neonRed}`

export const StyledUnLikedIcon = styled.button`${tw`bg-white m-0 p-0 cursor-pointer`}
border: none`

export const StyledCommentBoxConatiner = styled.div`${tw` flex p-4 py-6`}
border-top: 1px solid ${colors.borderLinerGrey}`

export const StyledSendButtonElement = styled.button`${tw`bg-white border-0 cursor-pointer`}
color: ${colors.brightBlue}`

export const StyledLikeCountElement = styled.p`${tw`p-2 rounded-lg text-sm`}
background-color: ${colors.backgroundGrey}`

export const StyledHighlightedNumberOfLikesCount = styled.p`${tw`p-0 m-0 font-medium text-xl`}
color: ${colors.neonRed}`

export const StyledNumberOfLikesCount = styled.p`${tw`p-0 m-0 font-medium text-xl`}
color: ${colors.black}`

export const StyledLikeIconCountContainer = styled.div`${tw`flex items-center px-3`}
@media ${device.tablet} {
    order : 0
}

`

export const StyledSendIconContainer = styled.div`${tw ``}
color: ${colors.brightBlue}`

export const StyledIconImagesCountContainer = styled.div`${tw``}

@media ${device.mobileS} {
 ${tw `flex items-center order-1`}
};

@media ${device.tablet} {
    ${tw`flex`}
    order: 0
}

`


export const StyledPostOptionsButton = styled.button`${tw`bg-none border-none bg-white cursor-pointer`}`

export const StyledPostOptionsContainer = styled.ul`${tw`absolute bg-white list-none p-0 rounded shadow-xl drop-shadow-2xl`}
top:60px;
right: 35px
`

export const StyledPostOptionItem = styled.li`${tw `px-4 py-4 cursor-pointer`}`