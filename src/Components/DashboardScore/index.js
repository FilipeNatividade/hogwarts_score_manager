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
import { displayRavenclaw } from "../../Store/module/displayRavenclaw/action";
import { displaySlytherin } from "../../Store/module/displaySlytherin/action";
import {
  addNumberTrue,
  subNumberFalse,
} from "../../Store/module/addOrSub/action";

const DashboardScore = ({ visible }) => {
  const state = useSelector((state) => state.house);

  const [valorInput, setValorInput] = useState(0);

  const [inputVsPoint, setInputVsPoint] = useState(true);

  const addOrSub = useSelector((state) => state.addOrSub);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(studentsThunks());
  }, []);

  const setValor = (e) => {
    setValorInput(e.target.value);
  };

  const showValue = (nameHouse) => {
    setInputVsPoint(!inputVsPoint);
    switch (nameHouse) {
      case "Gryffindor":
        return dispatch(displayGryffindor(parseInt(valorInput)));

      case "Hufflepuff":
        return dispatch(displayHufflepuff(parseInt(valorInput)));

      case "Ravenclaw":
        return dispatch(displayRavenclaw(parseInt(valorInput)));

      case "Slytherin":
        return dispatch(displaySlytherin(parseInt(valorInput)));
      default:
        break;
    }
  };

  const addPonto = (nameHouse) => {
    showValue(nameHouse);
    dispatch(addNumberTrue());
  };

  const subPonto = (nameHouse) => {
    showValue(nameHouse);
    dispatch(subNumberFalse());
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
      case "Ravenclaw":
        src = "./Images/Ravenclaw.png";
        break;
      case "Slytherin":
        src = "./Images/Slytherin.png";
        break;
      default:
        break;
    }
    return src;
  };

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
            <>
              <InputNamber
                onChange={setValor}
                type="number"
                name="ponto"
                max="100"
                placeholder="pontos"
              />
              <DivButton>
                <ButtonGain onClick={() => addPonto(state.house)}>
                  Gain
                </ButtonGain>
                <ButtonLose onClick={() => subPonto(state.house)}>
                  Lose
                </ButtonLose>
              </DivButton>
            </>
          ) : (
            <>
              {addOrSub ? (
                <>
                  <h1 style={{ color: "#77edf0" }}>{`+ ${valorInput}`}</h1>
                </>
              ) : (
                <>
                  <h1 style={{ color: "#f4a288" }}>{`- ${valorInput}`}</h1>
                </>
              )}
              <ButtonDone onClick={exitModel}>Done</ButtonDone>
            </>
          )}
        </DivLeft>
      </ContainerSecund>
    </Container>
  );
};
export default DashboardScore;
