import styled from "styled-components";
import tw from 'twin.macro'


export const StyledProfileOrLogo = styled.img`${tw`rounded-full w-14 mx-1`}
width: ${(props: { size: number }) => props.size}px;
`
