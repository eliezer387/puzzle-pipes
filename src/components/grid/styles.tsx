
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

export const Tile = styled.div`
  color: greenyellow;
  &:hover {
    color: #282c34;
    cursor: pointer;
    border-radius: 1.5px;
    transition-duration: 1s, 2s;
  }
`;
