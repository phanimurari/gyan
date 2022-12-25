import styled from "styled-components";
import tw from "twin.macro";

import colors from '../../styleGuide/themes/colors.json'

export const StyledPostTagListElement = styled.li`${tw`list-none p-4 font-sans`}
color: #1b2348;
font-weight: 300`

export const StyledSelectedPostTagListElement = styled.li`${tw`list-none p-4 font-sans`}
background-color: ${colors.liteBlue};
color: ${colors.blue};
font-weight: 300
`