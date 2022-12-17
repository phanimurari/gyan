import { StyledInputElement } from "./StyledComponents"

interface InputElementProps {
    placeHolderText : string,
    value: string
}

const InputElement = (props: InputElementProps) => {
    
    const {placeHolderText, value} = props

    return <StyledInputElement placeholder={placeHolderText} value={value}/>

}

export {InputElement}