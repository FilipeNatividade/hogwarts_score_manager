import {
  Container,
  ContainerSecund,
  DivHouse,
  InputNamber,
  DivButton,
  ButtonGain,
  ButtonLose,
  ButtonDone,
  ImgPerfil,
  DivLeft,
} from "./style";
import { useSelector } from "react-redux";
import { studentsThunks } from "../../Store/module/StudentsList/thunks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { visibleAction } from "../../Store/module/isVisible/action";
import { display } from "../../Store/module/display/action";

const DashboardScore = ({ visible }) => {
  const state = useSelector((state) => state.house);
  const displayIndex = useSelector((state) => state.display);

  const [valorInput, setValorInput] = useState();

  const [inputVsPoint, setInputVsPoint] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(studentsThunks());
  }, []);

  const showValue = () => {
    setInputVsPoint(!inputVsPoint);
    dispatch(display(valorInput));
    // console.log(valorInput);
  };

  const exitModel = () => {
    setInputVsPoint(!inputVsPoint);
    dispatch(visibleAction(true));
  };

  const emblem = (nameHouse) => {
    let src = "";
    switch (nameHouse) {
      case "Gryffindor":
        src = "./Images/Gryffindor.png";
        break;
      case "Hufflepuff":
        src = "./Images/Hufflepuff.png";
        break;
      case "Ravenclow":
        src = "./Images/Ravenclow.png";
        break;
      case "Slytherin":
        src = "./Images/Slytherin.png";
        break;
      default:
        break;
    }
    return src;
  };

  const setValor = (e) => setValorInput(e.target.value);

  return (
    <Container visible={visible}>
      <ContainerSecund>
        <ImgPerfil src={state.image} />
        <DivLeft>
          <DivHouse>
            <img src={emblem(state.house)} style={{ width: "4rem" }} />
            <h3>{state.house}</h3>
          </DivHouse>
          <h1>{state.name}</h1>

          {inputVsPoint ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                showValue();
                setValorInput();
              }}
            >
              <InputNamber
                onChange={(e) => setValor(e)}
                value={valorInput}
                type="number"
                name="ponto"
                max="100"
                placeholder="pontos"
              />
              <DivButton>
                <ButtonGain type="submit">Gain</ButtonGain>
                <ButtonLose type="submit">Lose</ButtonLose>
              </DivButton>
            </form>
          ) : (
            <>
              <h2>{displayIndex[displayIndex.length - 1]}</h2>
              <ButtonDone onClick={exitModel}>Done</ButtonDone>
            </>
          )}
        </DivLeft>
      </ContainerSecund>
    </Container>
  );
};
export default DashboardScore;
