import styled from "styled-components";
import tw from "twin.macro";

import colors from '../../styleGuide/themes/colors.json'

export const StyledPostsContainer = styled.div`${tw`flex justify-center overflow-auto`}
flex-grow: 1;
background-color: ${colors.backgroundGrey}`

export const StyledListOfPostsContainer = styled.ul`${tw``};
padding: 0`

export const StyledEmptyViewContainer = styled.div `${tw `flex flex-col justify-center items-center`}`