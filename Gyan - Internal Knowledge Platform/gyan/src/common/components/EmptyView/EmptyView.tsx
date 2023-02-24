import { StyledEmptyViewHeading } from "./styledComponents"

interface EmptyViewPropsTypes {
    displayText: string
}

const EmptyView = (props: EmptyViewPropsTypes) =>{

    const {displayText} = props

    return <StyledEmptyViewHeading>{displayText}</StyledEmptyViewHeading>
}

export {EmptyView}