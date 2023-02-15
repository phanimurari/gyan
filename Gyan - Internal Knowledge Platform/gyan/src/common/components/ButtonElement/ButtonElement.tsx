import { StyledButtonElement } from "./styledComponents"
import {  useProSidebar } from 'react-pro-sidebar';

interface ButtonElementProps {
    text: string,
    type: string,
    onClickMethod :(value:boolean) => void
}

const ButtonElement = (props: ButtonElementProps) => {

    const { collapseSidebar } = useProSidebar();
    
    const {text, onClickMethod} = props

    const onClickButton = () => {
        onClickMethod(true)
        collapseSidebar(true)
    }

    return <StyledButtonElement onClick={onClickButton}>{text}</StyledButtonElement>
}
export {ButtonElement}