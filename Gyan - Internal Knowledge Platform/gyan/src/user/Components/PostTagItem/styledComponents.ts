import styled from "styled-components";
import tw from "twin.macro";

import colors from '../../styleGuide/themes/colors.json'

export const StyledPostTagListElement = styled.li`${tw`list-none py-3 pl-5 font-sans cursor-pointer`}
color: ${colors.darkBlueGrey};
font-weight: 300;`

export const StyledSelectedPostTagListElement = styled.li`${tw`list-none py-3 pl-5 font-sans cursor-pointer`}
background-color: ${colors.liteBlue};
color: ${colors.blue};
font-weight: 500;
`