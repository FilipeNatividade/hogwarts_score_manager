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

const CardsNote = () => {
  const displayGryffindor = useSelector((state) => state.displayGryffindor);
  const displayHufflepuff = useSelector((state) => state.displayHufflepuff);
  const displayRavenclaw = useSelector((state) => state.displayRavenclaw);
  const displaySlytherin = useSelector((state) => state.displayvalueSlytherin);

  const addOrSub = useSelector((state) => state.addOrSub);

  // console.log(displayGryffindor);
  // console.log(displayHufflepuff);
  // console.log(displayRavenclaw);
  // console.log(displaySlytherin);

  return (
    <>
      <Header>
        <DivHeader>
          <ImgHeader src="./Images/Header_image.png" />
        </DivHeader>
      </Header>

      <Container>
        <Cards>
          <h2>#2 Gryffindor</h2>
          <CardsImg src="./Images/Gryffindor.png" />
          <DivDisplay>
            {displayGryffindor <= 0
              ? displayGryffindor
              : displayGryffindor.reduce((acc, crr) => {
                  return addOrSub ? acc + crr : acc + -crr;
                })}
          </DivDisplay>
        </Cards>
        <Cards>
          <h2>#1 Slytherin</h2>
          <CardsImg src="./Images/Slytherin.png" />
          <DivDisplay>
            {displaySlytherin <= 0
              ? displaySlytherin
              : displaySlytherin.reduce((acc, crr) => {
                  return addOrSub ? acc + crr : acc + -crr;
                })}
          </DivDisplay>
        </Cards>
        <Cards>
          <h2>#3 Hufflepuff</h2>
          <CardsImg src="./Images/Hufflepuff.png" />
          <DivDisplay>
            {displayHufflepuff <= 0
              ? displayHufflepuff
              : displayHufflepuff.reduce((acc, crr) => {
                  return addOrSub ? acc + crr : acc + -crr;
                })}
          </DivDisplay>
        </Cards>
        <Cards>
          <h2>#4 Ravenclaw</h2>
          <CardsImg src="./Images/Ravenclaw.png" />
          <DivDisplay>
            {displayRavenclaw <= 0
              ? displayRavenclaw
              : displayRavenclaw.reduce((acc, crr) => {
                  return addOrSub ? acc + crr : acc + -crr;
                })}
          </DivDisplay>
        </Cards>
      </Container>
    </>
  );
};
export default CardsNote;
