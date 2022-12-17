interface EmptyViewPropsTypes {
    displayText: string
}

const EmptyView = (props: EmptyViewPropsTypes) =>{

    const {displayText} = props

    return <h1>{displayText}</h1>
}

export {EmptyView}