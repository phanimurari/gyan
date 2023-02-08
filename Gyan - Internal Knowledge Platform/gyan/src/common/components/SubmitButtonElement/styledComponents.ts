import styled from "styled-components";
import tw from "twin.macro";

export const StyledSubmitButtonElement = styled.button`

${tw `text-white text-sm px-2 bg-blue py-3 font-semibold border-0 rounded text-center w-full cursor-pointer`}`

export const StyledSubmitButtonContainer = styled.div`${tw`flex items-center w-full`}
display: flex;
justify-content: center;
align-items:center`

export const StyledSubmitButtonLoaderElement = styled.div`${tw`text-white text-sm px-2 py-2 bg-blue font-semibold border-0 rounded text-center w-full flex justify-center items-center items-center`}`

export const StyledLoaderContainer = styled.div`${tw `w-full flex justify-items-center`}`