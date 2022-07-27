import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  margin-left: 20px;
  color: black;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const HeaderList = styled.ul`
  list-style: none;
  display: flex;
`;

export const Main = styled.main`
  padding: 12px;
`;
