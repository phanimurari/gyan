import styled from "styled-components";
import tw from "twin.macro";

import colors from '../../styleGuide/themes/colors.json'

export const StyledCommentsContainer = styled.div`${tw`px-4 flex p-4 font-sans w-11/12`}
border-top: 0.5px solid #b0b5ba`

export const StyledCommentByImageContainer = styled.div`${tw`flex flex-col py-3`}`

export const StyledCommentContentContainer = styled.div`${tw``}`

export const StyledApprovedByContainer = styled.div`${tw `flex items-center`}`

export const StyledCommenterAndCommentDateAndTimeContainer = styled.div`${tw `flex`}`

export const StyledCommenterName = styled.p`${tw`font-medium`}`

export const StyledCommentApprovedByAuthor = styled.p`${tw`mx-2 font-medium`}
color: #2e73ff`

export const StyledCommentedDateAndTime = styled.p`${tw`ml-4`}
color: #b0b5ba`

export const StyledCommentContent = styled.p`${tw`leading-7`}`

export const StyledApprovedIconContainer = styled.div`${tw`flex items-center`}
color: ${colors.brightGreen}`

export const StyledApprovedByTextElement = styled.p`${tw `font-sans font-medium ml-1`}`