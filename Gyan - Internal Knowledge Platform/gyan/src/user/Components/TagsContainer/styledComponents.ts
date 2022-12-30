import styled from "styled-components";
import tw from "twin.macro";

import colors from '../../styleGuide/themes/colors.json'

export const StyledTagsContainer = styled.div`${tw `w-1/5`}
border-right : 1px solid ${colors.liteGrey}
`

export const StyledTagElementContainer = styled.ul`${tw`p-0`}`

export const StyledLoadingViewContainer = styled.div`${tw `flex h-screen flex items-center justify-center`}`