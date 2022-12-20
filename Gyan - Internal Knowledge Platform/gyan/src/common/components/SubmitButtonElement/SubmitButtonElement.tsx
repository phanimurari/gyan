import { StyledSubmitButtonElement } from "./styledComponents"


interface SubmitButtonElementProps {
    text: string,
    type: string,
}

const SubmitButtonElement = (props: SubmitButtonElementProps) => {
    
    const {text, type} = props

    return <StyledSubmitButtonElement type="submit">{text}</StyledSubmitButtonElement>
}
export {SubmitButtonElement}