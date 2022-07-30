import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListFilmStyled = styled.ul`
  list-style: none;
`;

export const ItemFilmStyled = styled.li`
  margin-bottom: 1rem;
`;

export const ItemLinkFilmStyled = styled(NavLink)`
  text-decoration: none;
  &:hover {
    color: green;
  }
`;
