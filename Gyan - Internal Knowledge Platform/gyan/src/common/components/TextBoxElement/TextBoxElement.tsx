import { StyledTextArea } from "./styledComponents"

interface textBoxElementProps {
    placeHolderText: string,
    value : string
    onChangeMethod: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

const TextBoxElement = (props: textBoxElementProps) => {
 
    const {placeHolderText, value, onChangeMethod} = props
    return <StyledTextArea placeholder={placeHolderText} value={value} onChange={onChangeMethod}/>

}

export {TextBoxElement}