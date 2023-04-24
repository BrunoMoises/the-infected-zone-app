import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 200px;
`

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Yellowtail', cursive;
        box-sizing: border-box;
    }
    body {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.white};
    }
`;