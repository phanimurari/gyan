import { StyledInputElement } from "./StyledComponents"

interface InputElementProps {
    placeHolderText: string,
    value: string,
    onChangeMethod: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputElement = (props: InputElementProps) => {
    
    const {placeHolderText, value, onChangeMethod} = props

    return <StyledInputElement placeholder={placeHolderText} value={value} onChange={onChangeMethod}/>

}

export {InputElement}