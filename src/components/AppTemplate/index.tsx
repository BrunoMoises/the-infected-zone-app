import {ReactNode} from 'react';
import {Container, Main} from './styles'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

interface AppTemplateProps {
    children: ReactNode;
}

const AppTemplate = ({children}: AppTemplateProps) => {
    return (
        <Container>
            <Header/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </Container>
    )
}

export default AppTemplate