import { StyledInputElement } from "./StyledComponents"

interface InputElementProps {
    placeHolderText: string,
    value: string,
    onChangeMethod: (event: React.ChangeEvent<HTMLInputElement>) => void,
    type?:string
}

const InputElement = (props: InputElementProps) => {
    const {placeHolderText, value, onChangeMethod, type} = props
    return <StyledInputElement placeholder={placeHolderText} value={value} onChange={onChangeMethod} type={type}/>
}

export {InputElement}