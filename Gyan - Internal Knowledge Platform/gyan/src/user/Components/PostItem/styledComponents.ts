import styled from "styled-components";
import tw from "twin.macro";

import colors from '../../styleGuide/themes/colors.json'

import { device } from "../../../common/constants/devicesBreakPoints/index";


interface StyledTagElementProps {
    randomBackgroundColor: string,
    randomFontColor : string
}

export const StyledPostElement = styled.li`${tw`list-none py-4 px-5 my-2 font-sans rounded`}
display: table;
background-color: ${colors.white};
border: 1px solid ${colors.borderLinerGrey};
@media ${device.laptopL} { 
min-width:1300px
}
`

export const SyledPostAuthorImageContainer = styled.div`${tw`my-2 mr-2`}`

export const StyledPostTextContentAndOptionIconContainer = styled.div`${tw`flex items-center w-full`}
justify-content: space-between`

export const StyledPostContentContainer = styled.div`${tw`flex flex-col`}`

export const StyledAuthorName = styled.p`${tw`font-medium mb-0`}`

export const StyledPostMainContentElement = styled.div`${tw `flex w-full pb-4`}`

export const StyledPostCreationTime = styled.p`${tw`mb-0`}
color: #a7aab0`

export const StyledPostHeading = styled.h1`${tw``}`

export const StyledTagsLikeCountContainer = styled.div`${tw`flex w-1/2`}`

export const StyledLikeAndCommentsCountContainer = styled.div`${tw`flex w-1/2 mr-1`}
justify-content: flex-end`

export const StyledPostTextContentContainer = styled.div`${tw`w-full`}`

export const StyledTagElement = styled.p<StyledTagElementProps>`${tw`flex items-center m-1 border font-bold rounded px-2`}
color: ${props => props.randomFontColor};
background-color: ${props => props.randomBackgroundColor}`

        
export const StyledPostTagsAndLikesAndCommentCountContainer = styled.div`${tw`flex justify-items-end w-full`}`

export const StyledCommentsCount = styled.p`${tw`mx-1 text-xl font-medium`}`

export const StyledCommentsAndCountCountainer = styled.div`${tw`flex items-center font-medium`}
color: ${colors.brightBlue}`

export const StyledLikesContainer = styled.div`${tw`flex items-center mr-2`}`

export const StyledUITagsELemenntsContainer = styled.div`${tw`flex w-1/2 mr-1`}
`

export const StyledCommentsAndCommentBoxContainer = styled.div`${tw``}`

export const StyledTextBoxElementContainer = styled.div`${tw`w-9/12 flex items-center rounded-md p-2`}
border: 1px solid ${colors.borderLinerGrey}
`

export const StyledLikedIcon = styled.button`${tw`bg-white m-0 p-0`}
border: none;
color : ${colors.neonRed}`

export const StyledUnLikedIcon = styled.button`${tw`bg-white m-0 p-0`}
border: none`

export const StyledCommentBoxConatiner = styled.div`${tw` flex p-4 py-6`}
border-top: 1px solid ${colors.borderLinerGrey}`

export const StyledSendButtonElement = styled.button`${tw`bg-white border-0`}
color: ${colors.brightBlue}`

export const StyledLikeCountElement = styled.p`${tw`p-2 rounded-lg text-sm`}
background-color: ${colors.backgroundGrey}`

export const StyledHighlightedNumberOfLikesCount = styled.p`${tw`p-0 m-0 font-medium text-xl`}
color: ${colors.neonRed}`

export const StyledNumberOfLikesCount = styled.p`${tw`p-0 m-0 font-medium text-xl`}
color: ${colors.black}`

export const StyledLikeIconCountContainer = styled.div`${tw`flex items-center px-3`}`

export const StyledSendIconContainer = styled.div`${tw ``}
color: ${colors.brightBlue}`