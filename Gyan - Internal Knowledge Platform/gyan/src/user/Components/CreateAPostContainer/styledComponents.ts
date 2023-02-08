import styled from "styled-components";
import tw from "twin.macro";

import colors from '../../../common/StyledGuide/themes/colors.json'

export const StyledCreateAPostForm = styled.form`${tw`flex flex-col w-96`}`

export const StyledCreateAPostModalHeading = styled.h1`${tw`text-center mt-0`}
color: ${colors.black}`

export const StyledProfileImageContainer = styled.div `${tw `flex justify-center items-center`}`