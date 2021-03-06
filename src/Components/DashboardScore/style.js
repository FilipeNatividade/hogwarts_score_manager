import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  color: #3461a4;
  display: flex;
  font-family: "Roboto", sans-serif;
  height: 200%;
  position: absolute;
  width: 100%;
  visibility: ${(props) => (props.visible ? "hidden" : "visible")};
`;
export const ContainerSecund = styled.div`
  background-color: #e5edf2;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding: 1rem 0.5rem;
`;

export const ImgPerfil = styled.img`
  margin: 0 0.5rem;
  width: 10rem;
`;

export const DivLeft = styled.div`
  margin: 0 1rem;
`;

export const DivHouse = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const InputNamber = styled.input`
  border: 0.1rem solid #3461a4;
  height: 1.2rem;
  margin-bottom: 0.8rem;
  width: 80%;
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
`;

export const ButtonGain = styled.button`
  border: none;
  background-color: #69e1cb;
  color: #fff;
  height: 1.5rem;
  outline: none;
  text-transform: uppercase;
  width: 45%;

  &:hover {
    cursor: pointer;
  }
`;
export const ButtonLose = styled(ButtonGain)`
  background-color: #f4a288;
`;

export const ButtonDone = styled(ButtonGain)`
  background-color: #3461a4;
`;
