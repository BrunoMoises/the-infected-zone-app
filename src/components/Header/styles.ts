import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  height: 100px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  font-size: 26px;

  a {
    position: absolute;
    left: 25px;
  }
`

export const MenuItens = styled.div`
  display: flex;
  gap: 80px;
  align-items: center;

  a {
    position: relative;
    
    :hover {
      color: ${props => props.theme.colors.tertiary};
    }
  }
`