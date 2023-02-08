import styled from "styled-components";
import tw from "twin.macro";

import colors from '../../../StyledGuide/themes/colors.json'

export const StyledSignOutConfirmModalHeadingElement = styled.h1`${tw`font-sans`}
color: ${colors.black}`

export const StyledSignOutConfirmModalButtonsContainer = styled.div`${tw`flex justify-around pt-4`}`

export const StyledLogOutButton = styled.button`${tw`p-4 border-none rounded font-bold cursor-pointer`}
background-color: ${colors.neonRed};
color: ${colors.white};
width: 100px
`

export const StyledCloseModalButton = styled.button`${tw`p-4 border-none rounded font-bold cursor-pointer`}
background-color: ${colors.brightBlue};
color: ${colors.white};
width: 100px
`