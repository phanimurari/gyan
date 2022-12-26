import { API_FETCHING } from "@ib/api-constants"
import OvalLoader from "../Loader/OvalLoader"
import { StyledSubmitButtonContainer, StyledSubmitButtonElement, StyledSubmitButtonLoaderElement } from "./styledComponents"


interface SubmitButtonElementProps {
    text: string,
    type: string,
    userLoginApiStatus? : number
}

const SubmitButtonElement = (props: SubmitButtonElementProps) => {
    
    const { text, userLoginApiStatus } = props

    const renderLoadingButton = () =><StyledSubmitButtonLoaderElement>{OvalLoader}</StyledSubmitButtonLoaderElement>

    return< StyledSubmitButtonContainer >
        {userLoginApiStatus === API_FETCHING ? renderLoadingButton() : <StyledSubmitButtonElement type="submit">{text}</StyledSubmitButtonElement>}
    </StyledSubmitButtonContainer>
}
export {SubmitButtonElement}