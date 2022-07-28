import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Poster = styled.img`
  width: 300px;
  height: 400px;
`;

export const WraperInfo = styled.div`
  display: inline-flex;
  padding-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const WraperInfoFilm = styled.div`
  margin-left: 40px;
`;

export const GanresFilm = styled.span`
  margin-right: 40px;
`;

export const WraperAdditionalInformation = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid black;
`;

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

export const Wraper = styled.div`
  margin-top: 16px;
`;

export const LinkFilmSInfo = styled(NavLink)`
  text-decoration: none;
  &:hover {
    color: green;
  }
`;

export const ListFilmInfo = styled.ul`
  list-style: none;
`;
