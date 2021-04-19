import {
  Container,
  Header,
  DivHeader,
  ImgHeader,
  Cards,
  CardsImg,
  DivDisplay,
} from "./style";
import { useSelector } from "react-redux";
import { useState } from "react";

const CardsNote = () => {
  const displayGryffindor = useSelector((state) => state.displayGryffindor);
  const displayHufflepuff = useSelector((state) => state.displayHufflepuff);
  const displayRavenclaw = useSelector((state) => state.displayRavenclaw);
  const displaySlytherin = useSelector((state) => state.displayvalueSlytherin);
  const scoreboard = [
    {
      score: displayGryffindor,
      tag: (
        <Cards>
          <h2>#1 Gryffindor</h2>
          <CardsImg src="./Images/Gryffindor.png" />
          <DivDisplay>{displayGryffindor}</DivDisplay>
        </Cards>
      ),
    },
    {
      score: displaySlytherin,
      tag: (
        <Cards>
          <h2>#2 Slytherin</h2>
          <CardsImg src="./Images/Slytherin.png" />
          <DivDisplay>{displaySlytherin}</DivDisplay>
        </Cards>
      ),
    },
    {
      score: displayHufflepuff,
      tag: (
        <Cards>
          <h2>#3 Hufflepuff</h2>
          <CardsImg src="./Images/Hufflepuff.png" />
          <DivDisplay>{displayHufflepuff}</DivDisplay>
        </Cards>
      ),
    },
    {
      score: displayRavenclaw,
      tag: (
        <Cards>
          <h2>#4 Ravenclaw</h2>
          <CardsImg src="./Images/Ravenclaw.png" />
          <DivDisplay>{displayRavenclaw}</DivDisplay>
        </Cards>
      ),
    },
  ];

  return (
    <>
      <Header>
        <DivHeader>
          <ImgHeader src="./Images/Header_image.png" />
        </DivHeader>
      </Header>

      <Container>
        {scoreboard.map((crr, idx, arr) => {
          const scoreboardMap = crr.tag;
          return scoreboardMap;
        })}
      </Container>
    </>
  );
};
export default CardsNote;
