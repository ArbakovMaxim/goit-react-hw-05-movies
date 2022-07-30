import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WraperAdditionalInformation = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const ListFilmInfo = styled.ul`
  list-style: none;
`;

export const LinkFilmSInfo = styled(NavLink)`
  text-decoration: none;
  &:hover {
    color: green;
  }
`;
