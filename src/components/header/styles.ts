import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Navbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    max-width: 1120px;
  }
`
export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 12px;
`

export const Location = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  user-select: none;

  padding: 8px;
  border-radius: 6px;

  background-color: ${(props) => props.theme.colors.purple[300]};

  span {
    font-size: 14px;
    line-height: 130%;

    color: ${(props) => props.theme.colors.purple[700]};
  }

  svg {
    color: ${(props) => props.theme.colors.purple[500]};
  }
`

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 6px;

  background-color: ${(props) => props.theme.colors.yellow[300]};
  color: ${(props) => props.theme.colors.yellow[700]};
`
