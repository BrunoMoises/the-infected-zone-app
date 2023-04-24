import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
`;

export const Main = styled.div`
    background-color: ${props => props.theme.colors.primary};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;