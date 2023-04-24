import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 222px;
  height: 263px;
  gap: 20px;
  border-radius: 20px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.35);
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.secondary};
  
  img{
    border-radius: 10px;
  }
  
  h1 {
    text-align: center;
  }
  
  a:hover {
    color: ${props => props.theme.colors.tertiary};
  }
`

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`