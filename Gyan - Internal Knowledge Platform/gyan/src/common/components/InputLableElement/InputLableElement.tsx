import { StyledLabelElement } from "./styledComponents"

interface inputLableElementPropsType {
    labelDisplayText :string
}

const InputLableElement =(props : inputLableElementPropsType) => {

const {labelDisplayText} = props

return <StyledLabelElement>
 {labelDisplayText}
</StyledLabelElement>
}

export {InputLableElement}