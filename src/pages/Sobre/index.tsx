import {Banner, Container, Text} from "@/styles/sobre/sobre.styles";
import Image from "next/image";
import ellie from '@/assets/ellie.jpg'

const Sobre = () => {
    return (
        <Container>
            <h1>Olá, Bem vindo(a) ao The Infected Zone</h1>
            <Text>
                <p>
                    Eu sou Bruno Moisés, criador do projeto.
                    Meu projeto pessoal foi criar um blog sobre The Last of Us, onde a ideia era utilizar a personagem
                    Ellie
                    como protagonista do blog. A inspiração para este projeto surgiu da paixão que eu tenho pelo jogo e
                    pela
                    personagem, e da vontade de compartilhar minhas opiniões e reflexões sobre o universo de The Last of
                    Us.
                </p>
                <p>
                    Para tornar o projeto mais desafiador e interessante, decidi que o blog seria escrito como se fosse
                    a
                    própria Ellie quem estivesse contando as histórias dos posts. Isso exigiu muita criatividade e
                    habilidade de escrita da minha parte, mas também tornou o projeto muito mais envolvente e
                    emocionante.
                </p>
                <p>
                    Para implementar o projeto, escolhi as tecnologias Nextjs, Golang e PostgreSQL. O Nextjs forneceu
                    uma
                    estrutura robusta para a criação da interface do usuário do blog, enquanto o Golang permitiu que eu
                    criasse um backend rápido e escalável. E o PostgreSQL foi utilizado para armazenar e gerenciar os
                    dados
                    do blog de maneira eficiente e segura.
                </p>
                <p>
                    Ao longo do desenvolvimento do projeto, eu escrevi muitos posts do blog em que Ellie compartilhava
                    suas
                    opiniões sobre os personagens, a narrativa e a jogabilidade de The Last of Us. Eu também escrevi
                    sobre
                    curiosidades e fatos interessantes sobre o jogo, além de incluir algumas reflexões pessoais sobre
                    minha
                    própria experiência de jogar o jogo.
                </p>
                <p>
                    Um dos aspectos mais desafiadores do projeto foi manter a consistência da voz e da personalidade de
                    Ellie em todos os posts do blog. Para isso, eu tive que me aprofundar na psicologia da personagem e
                    na
                    maneira como ela fala e pensa, a fim de garantir que seus posts fossem autênticos e coerentes.
                </p>
                <p>
                    No final, o projeto foi um grande sucesso. Eu consegui criar um blog envolvente e emocionante que
                    atraiu
                    muitos fãs de The Last of Us. A utilização da personagem Ellie como protagonista do blog trouxe uma
                    nova
                    dimensão ao projeto e permitiu que os leitores se conectassem emocionalmente com a personagem e suas
                    reflexões sobre o jogo. E as tecnologias escolhidas permitiram que eu criasse um blog rápido,
                    eficiente
                    e seguro que atendeu às minhas necessidades.
                </p>
            </Text>
            <Banner>
                <Image src={ellie} alt="Ellie Williams" width={600} />
            </Banner>
        </Container>
    );
}

export default Sobre;