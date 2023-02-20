import { StyledPostTagListElement, StyledSelectedPostTagListElement } from "./styledComponents"

interface postTagItemPropsTypes {
    tag: string,
    setSelectedTag: (tag: string) => void,
    selectedPostsTag : string
}

const PostTagItem = (props: postTagItemPropsTypes) => {
    const { tag , setSelectedTag, selectedPostsTag} = props
    const onSelectTagItem = () => {
        console.log(tag)
        setSelectedTag(tag)
    }   

    const renderSelectedTagElement = () => <StyledSelectedPostTagListElement onClick={onSelectTagItem}>
        {tag}
    </StyledSelectedPostTagListElement>

    const renderTagElement = () => <StyledPostTagListElement onClick={onSelectTagItem} >
        {tag}
    </StyledPostTagListElement>

    return selectedPostsTag === tag ? renderSelectedTagElement() : renderTagElement()
}

export {PostTagItem}