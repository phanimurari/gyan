import { StyledButtonElement } from "./styledComponents"

interface ButtonElementProps {
    text: string,
    type: string
}

const ButtonElement = (props: ButtonElementProps) => {
    
    const {text} = props

    return <StyledButtonElement>{text}</StyledButtonElement>
}
export {ButtonElement}