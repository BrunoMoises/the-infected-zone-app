import {Container, MenuItens} from "./styles"
import Link from "next/link";
import Image from "next/image";
import logo from '../../assets/logo.png'

const menuItens = [
    {
        href: "/",
        title: "Home"
    },
    {
        href: "/ellie",
        title: "Ellie Williams"
    },
    {
        href: "/sobre",
        title: "Sobre o projeto"
    },
]

export const Header = () => {
    return (
        <Container>
            <Link href="/">
                <Image src={logo} alt="The Infected Zone" width={60}/>
            </Link>
            <MenuItens>
                {menuItens.map((item) => (
                    <Link key={item.href} href={item.href}>
                        {item.title}
                    </Link>
                ))}
            </MenuItens>
        </Container>
    )
}