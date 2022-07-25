import styled from 'styled-components';

export const ImgActor = styled.img`
  width: 150px;
  height: 200px;
`;

export const ListActor = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(auto-fill, 360px);
  justify-content: space-between;
  flex-flow: wrap;
  text-align: center;
`;

export const ItemsActor = styled.li`
  padding: 20px;
  margin: 10px;
  border: 1px solid black;
  background-color: #d7d7d7;
`;
