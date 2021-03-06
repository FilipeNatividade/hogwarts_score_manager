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
import { displayGryffindor } from "../../Store/module/displayGryffindor/action";
import { displayHufflepuff } from "../../Store/module/displayHufflepuff/action";
import { displayRavenclow } from "../../Store/module/displayRavenclow/action";
import { displaySlytherin } from "../../Store/module/displaySlytherin/action";

const DashboardScore = ({ visible }) => {
  const state = useSelector((state) => state.house);
  const displayIndex = useSelector((state) => state.display);

  const [valorInput, setValorInput] = useState();

  const [inputVsPoint, setInputVsPoint] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(studentsThunks());
  }, []);

  const showValue = (nameHouse) => {
    setInputVsPoint(!inputVsPoint);

    switch (nameHouse) {
      case "Gryffindor":
        return dispatch(displayGryffindor(valorInput));

      case "Hufflepuff":
        return dispatch(displayHufflepuff(valorInput));

      case "Ravenclow":
        return dispatch(displayRavenclow(valorInput));

      case "Slytherin":
        return dispatch(displaySlytherin(valorInput));
      default:
        break;
    }
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
            <h2>{state.house}</h2>
          </DivHouse>
          <h1>{state.name}</h1>

          {inputVsPoint ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                showValue(state.house);
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
              <h2>500</h2>
              <ButtonDone onClick={exitModel}>Done</ButtonDone>
            </>
          )}
        </DivLeft>
      </ContainerSecund>
    </Container>
  );
};
export default DashboardScore;
