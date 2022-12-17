import { StyledInputElement } from "./StyledComponents"

interface InputElementProps {
    placeHolderText : string
}

const InputElement = (props: InputElementProps) => {
    
    const {placeHolderText} = props

    return <StyledInputElement placeholder={placeHolderText} />

}

export {InputElement}