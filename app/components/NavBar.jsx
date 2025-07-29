import Image from "next/image"

export const NavBar = () => {
    return (        <nav>
            <Image id="navLogo" src="/logo.png" alt="Logo" width={100} height={100} />
        </nav>
    )
}