import styled from "styled-components";
import tw from "twin.macro";

import colors from '../../styleGuide/themes/colors.json'



export const StyledPostElement = styled.li`${tw`list-none p-2 my-2 font-sans`}
background-color: ${colors.white};
border: 1px solid ${colors.liteGrey};
`

export const SyledPostAuthorImageContainer = styled.div`${tw`my-2`}`

export const StyledPostContentContainer = styled.div`${tw`flex flex-col`}`

export const StyledAuthorName = styled.p`${tw`font-medium mb-0`}
`

export const StyledPostMainContentElement = styled.div`${tw `flex`}`

export const StyledPostCreationTime = styled.p`${tw`mb-0`}
color: #a7aab0`

export const StyledPostHeading = styled.h1`${tw``}`

export const StyledTagsLikeCountContainer = styled.div`${tw`flex w-1/2`}`

export const StyledLikeAndCommentsCountContainer = styled.div`${tw`flex w-1/2 mr-1`}
justify-content: flex-end`

export const StyledPostTextContentContainer = styled.div`${tw``}`

export const StyledTagElement = styled.p`${tw`flex items-center m-1 border font-bold`}
color: ${colors.blue};
background-color: ${colors.backgroundGrey}`

        
export const StyledPostTagsAndLikesAndCommentCountContainer = styled.div`${tw`flex justify-items-end w-full`}`

export const StyledCommentsCount = styled.p`${tw``}`

export const StyledCommentsAndCountCountainer = styled.div`${tw`flex items-center`}`

export const StyledLikesContainer = styled.div`${tw`flex items-center mr-2`}`

export const StyledUITagsELemenntsContainer = styled.div`${tw`flex w-1/2 mr-1`}
`

export const StyledCommentsAndCommentBoxContainer = styled.div`${tw``}`

export const StyledTextBoxElementContainer = styled.div`${tw`w-full flex items-center`}
`

export const StyledLikedIcon = styled.button`${tw`bg-none`}
border: none;
color : #f40b39 `

export const StyledUnLikedIcon = styled.button`${tw`bg-none`}
border: none`

export const StyledCommentBoxConatiner = styled.div`${tw` flex p-4 py-6`}
border: 1px solid #e3e9ef`

export const StyledSendButtonElement = styled.button`${tw`bg-none border-0`}
color: #2c68fe`