import { StyledProfileOrLogo } from "./styledComponents"

interface ProfileOrLogoMakerProps {
    url: string
}

const ProfileOrLogoMaker = (props: ProfileOrLogoMakerProps) => {
    
    const {url} = props
    
    return <>
        <StyledProfileOrLogo src= {url}/>
    </>
    
}

export default ProfileOrLogoMaker