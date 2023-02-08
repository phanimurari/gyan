import styled from "styled-components";
import tw from "twin.macro";

import colors from '../../styleGuide/themes/colors.json'

export const StyledCommentsContainer = styled.div`${tw`px-4 flex p-4 font-sans w-full`}
border-top: 1px solid ${colors.borderLinerGrey};`

export const StyledCommentByImageContainer = styled.div`${tw`flex flex-col py-3 mr-2`}`

export const StyledCommentContentContainer = styled.div`${tw``}`

export const StyledApprovedByContainer = styled.div`${tw `flex items-center flex-wrap`}`

export const StyledCommenterAndCommentDateAndTimeContainer = styled.div`${tw `flex`}`

export const StyledCommenterName = styled.p`${tw`font-medium`}`

export const StyledCommentApprovedByAuthor = styled.p`${tw`mx-2 font-medium`}
color: #2e73ff`

export const StyledCommentedDateAndTime = styled.p`${tw`ml-4 font-medium`}
color: #b0b5ba`

export const StyledCommentContent = styled.p`${tw`leading-7`}`

export const StyledApprovedIconContainer = styled.div`${tw`flex items-center`}
color: ${colors.brightGreen}`

export const StyledApprovedByTextElement = styled.p`${tw `font-sans ml-1`}`