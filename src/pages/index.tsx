import Card from "@/components/Card";
import example from '../assets/example.jpg'
import {CardContainer, FilterContainer, Paginator, Search} from "@/styles/home/home.styles";
import {AiOutlineSearch} from "react-icons/ai";
import {TbArrowBigLeftFilled,TbArrowBigRightFilled} from "react-icons/tb";
import {Container} from "@/styles/global";

const cardItens = [
    {
        image: example,
        title: "Titulo 1",
        id: "1"
    },
    {
        image: example,
        title: "Titulo 2",
        id: "2"
    },
    {
        image: example,
        title: "Titulo 3",
        id: "3"
    },
    {
        image: example,
        title: "Titulo 4",
        id: "4"
    },
    {
        image: example,
        title: "Titulo 5",
        id: "5"
    },
    {
        image: example,
        title: "Titulo 6",
        id: "6"
    },
    {
        image: example,
        title: "Titulo 7",
        id: "7"
    },
    {
        image: example,
        title: "Titulo 8",
        id: "8"
    },
    {
        image: example,
        title: "Titulo 9",
        id: "9"
    },
    {
        image: example,
        title: "Titulo 10",
        id: "10"
    },

]

const Home = () => (
    <Container>
        <FilterContainer>
            <Search>
                <input type="text" id="search" name="search" placeholder="Buscar..."/>
                <AiOutlineSearch size={50} color="#635BD6" cursor="pointer"/>
            </Search>
            <button>Mais curtidos</button>
        </FilterContainer>
        <CardContainer>
            {cardItens.map((item) => (
                <Card key={item.title} image={item.image} title={item.title} id={item.id}/>
            ))}
        </CardContainer>
        <Paginator>
            <TbArrowBigLeftFilled size={50} cursor="pointer"/>
            <span>1</span>
            <TbArrowBigRightFilled size={50} cursor="pointer"/>
        </Paginator>
    </Container>
);

export default Home;