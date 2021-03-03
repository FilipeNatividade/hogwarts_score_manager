import {
  Container,
  Header,
  DivHeader,
  ImgHeader,
  Cards,
  CardsImg,
} from "./style";

const CardsNote = () => {
  return (
    <>
      <Header>
        <DivHeader>
          <ImgHeader src="./Images/Header_image.png" />
        </DivHeader>
      </Header>

      <Container>
        <Cards>
          <h2>#1 Slytherin</h2>
          <CardsImg src="./Images/Slytherin.png" />
          <p>500</p>
        </Cards>
        <Cards>
          <h2>#2 Gryffindor</h2>
          <CardsImg src="./Images/Gryffindor.png" />
          <p>500</p>
        </Cards>
        <Cards>
          <h2>#3 Hufflepuff</h2>
          <CardsImg src="./Images/Hufflepuff.png" />
          <p>500</p>
        </Cards>
        <Cards>
          <h2>#4 Ravenclow</h2>
          <CardsImg src="./Images/Ravenclow.png" />
          <p>500</p>
        </Cards>
      </Container>
    </>
  );
};
export default CardsNote;
