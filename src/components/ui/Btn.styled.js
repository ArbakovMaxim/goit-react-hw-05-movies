import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Btn = styled(NavLink)`
  padding: 8px;
  background-color: blue;
  color: white;
  text-decoration: none;
  &:hover {
    color: green;
    background-color: orange;
  }
`;
