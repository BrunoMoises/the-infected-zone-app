import styled from 'styled-components'

export const FilterContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 80px;
`

export const Search = styled.div`
  display: flex;
  gap: 10px;
`

export const Paginator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 34px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.tertiary};
`