import { Image } from "react-native"

export default Images = ({
    src,
    ...props
}) => {
    return <Image {...props} source={src} />
}