import React from "react";
import { Container, Row, Tile } from "./styles";

export default function Grid(
  props: {elements: string[][], rotate: Function }
) {
  const { elements, rotate } = props;
  return (
    <Container>
      {elements.length >0 && elements.map((row: string[], y: number) => (
        <Row key={y}>
          {row.map((cell, x: number) => (
            <Tile key={`${x}${y}`} onClick={() => rotate(x, y)}>
              {cell}
            </Tile>
          ))}
        </Row>
      ))}
    </Container>
  );
}
