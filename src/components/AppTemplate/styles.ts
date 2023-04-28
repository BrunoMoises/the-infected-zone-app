import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;