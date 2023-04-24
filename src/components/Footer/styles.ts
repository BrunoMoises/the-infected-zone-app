import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  font-size: 26px;
  bottom: 0;

  a {
    position: absolute;
    left: 25px;
  }
`

export const Copyright = styled.div`
  
`