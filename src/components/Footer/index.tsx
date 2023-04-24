import {Container, Copyright} from "./styles"
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

export const Footer = () => {
    return (
        <Container>
            <Link href="/">
                <Image src={logo} alt="The Infected Zone" width={60}/>
            </Link>
            <Copyright>
                © Bruno Moises - Projeto pessoal
            </Copyright>
        </Container>
    )
}