import {Container, Menu} from './styles'
import Image, {StaticImageData} from "next/image";
import {AiOutlineHeart} from 'react-icons/ai'
import {FaShare} from 'react-icons/fa'
import Link from "next/link";

interface cardProps {
    image: StaticImageData;
    title: string;
    id: string;
}

const Card = ({image, title, id}: cardProps) => {
    return (
        <Container>
            <Link href={`/post/${id}`}>
                <Image src={image} alt={title} width={185}/>
                <h1>{title}</h1>
            </Link>
            <Menu>
                <Link href='/like'>
                    <AiOutlineHeart size={30}/>
                </Link>
                <span>2.34k</span>
                <Link href='/share'>
                    <FaShare size={30}/>
                </Link>
            </Menu>
        </Container>
    );
}

export default Card