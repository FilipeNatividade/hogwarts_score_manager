import {
  Container,
  Header,
  DivHeader,
  ImgHeader,
  Cards,
  CardsImg,
} from "./style";
import { useSelector } from "react-redux";

const CardsNote = () => {
  const displayGryffindor = useSelector((state) => state.displayGryffindor);
  const displayHufflepuff = useSelector((state) => state.displayHufflepuff);
  const displayRavenclow = useSelector((state) => state.displayRavenclow);
  const displaySlytherin = useSelector((state) => state.displayvalueSlytherin);

  console.log(displayGryffindor);
  console.log(displayHufflepuff);
  console.log(displayRavenclow);
  console.log(displaySlytherin);
  return (
    <>
      <Header>
        <DivHeader>
          <ImgHeader src="./Images/Header_image.png" />
        </DivHeader>
      </Header>

      <Container>
        {displayGryffindor.reduce((acc, crr) => {
          <Cards>
            <h2>#2 Gryffindor</h2>
            <CardsImg src="./Images/Gryffindor.png" />
            <p>{acc + crr}</p>
          </Cards>;
        }, 0)}

        {displayHufflepuff.reduce((acc, crr) => {
          <Cards>
            <h2>#1 Slytherin</h2>
            <CardsImg src="./Images/Slytherin.png" />
            <p>{acc + crr}</p>
          </Cards>;
        }, 0)}

        {displayRavenclow.reduce((acc, crr) => {
          <Cards>
            <h2>#3 Hufflepuff</h2>
            <CardsImg src="./Images/Hufflepuff.png" />
            <p>{acc + crr}</p>
          </Cards>;
        }, 0)}

        {displaySlytherin.reduce((acc, crr) => {
          <Cards>
            <h2>#4 Ravenclow</h2>
            <CardsImg src="./Images/Ravenclow.png" />
            <p>{acc + crr}</p>
          </Cards>;
        }, 0)}
      </Container>
    </>
  );
};
export default CardsNote;
