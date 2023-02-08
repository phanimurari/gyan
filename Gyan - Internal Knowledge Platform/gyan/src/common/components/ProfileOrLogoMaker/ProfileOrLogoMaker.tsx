import { StyledProfileOrLogo } from "./styledComponents"

interface ProfileOrLogoMakerProps {
    url: string
    size : number
}

const ProfileOrLogoMaker = (props: ProfileOrLogoMakerProps) => {
    
    const {url, size} = props
    
    return <StyledProfileOrLogo src={url} size={size}/>

    
}

export default ProfileOrLogoMaker