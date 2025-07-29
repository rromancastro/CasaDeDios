import Image from "next/image"

export const NavBar = ({opacity}) => {
    return (<nav style={{opacity: opacity}}>
            <Image id="navLogo" src="/logo.png" alt="Logo" width={100} height={100} />
        </nav>
    )
}