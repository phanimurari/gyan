import styled from "styled-components";
import tw from "twin.macro";

export const StyledFormContainer = styled.form`${tw`flex flex-col`}`

export const StyledInputElementContainer = styled.div`${tw`py-2 px-3 mb-3 w-1/2 flex items-center rounded`}
border: 1px solid #dfe4ed;
`
export const StyledErrorMessageElement = styled.p`${tw`text-center`}
color: #f52950`

export const StyledFormHeadingElement = styled.h1`${tw``}
color: #7e98c3`