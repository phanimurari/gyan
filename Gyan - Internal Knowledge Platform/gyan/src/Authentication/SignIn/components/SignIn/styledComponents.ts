import styled from "styled-components";
import tw from "twin.macro";


import colors from '../../../StyledGuide/themes/colors.json'

export const StyledFormContainer = styled.form`${tw`flex flex-col font-sans p-4`}`

export const StyledLogoContainer = styled.div`${tw `flex justify-center`}`

export const StyledInputElementContainer = styled.div`${tw`py-2 px-3 flex items-center rounded w-11/12 mb-6`}
border: 1px solid #dfe4ed;
`
export const StyledErrorMessageElement = styled.p`${tw`text-center`}
color: #f52950`

export const StyledFormHeadingElement = styled.p`${tw`text-4xl mt-0`}
color: ${colors.black}`