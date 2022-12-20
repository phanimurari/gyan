import { StyledTextArea } from "./styledComponents"

interface textBoxElementProps {
    placeHolderText: string,
    onChangeMethod: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextBoxElement = (props: textBoxElementProps) => {
 
    const {placeHolderText} = props
    return <StyledTextArea placeholder={placeHolderText}></StyledTextArea>

}

export {TextBoxElement}