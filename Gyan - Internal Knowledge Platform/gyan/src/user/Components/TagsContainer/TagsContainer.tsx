import EmptyView from "../../../common/components/EmptyView"

import userStrings from '../../i18n/userStrings.json'
import { StyledTagsContainer } from "./styledComponents"

const TagsContainer = () => <>
   <StyledTagsContainer>
        <EmptyView displayText={userStrings.displayEmptyTagsText} />
    </StyledTagsContainer>
</>

export { TagsContainer }