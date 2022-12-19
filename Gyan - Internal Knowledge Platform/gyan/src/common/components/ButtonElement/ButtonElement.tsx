import { StyledButtonElement } from "./styledComponents"

interface ButtonElementProps {
    text: string,
    type: string,
    onClickMethod :(value:boolean) => void
}

const ButtonElement = (props: ButtonElementProps) => {
    
    const {text, onClickMethod} = props

    const onClickButton = () => {
        onClickMethod(true)
    }

    return <StyledButtonElement onClick={onClickButton}>{text}</StyledButtonElement>
}
export {ButtonElement}