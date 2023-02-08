import { StyledTextArea } from "./styledComponents"

interface textBoxElementProps {
    placeHolderText: string,
    value: string
    onChangeMethod: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    onKeyDownMethod?: (event:  React.KeyboardEvent) => void,
}

const TextBoxElement = (props: textBoxElementProps) => {
 
    const {placeHolderText, value, onChangeMethod, onKeyDownMethod} = props
    return <StyledTextArea placeholder={placeHolderText} value={value} onChange={onChangeMethod} onKeyDown={onKeyDownMethod}/>

}

export {TextBoxElement}