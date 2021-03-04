import {
  Container,
  ContainerSecund,
  DivHouse,
  InputNamber,
  DivButton,
  ButtonGain,
  ButtonLose,
  ButtonDone,
} from "./style";
import { useSelector } from "react-redux";
import { studentsThunks } from "../../Store/module/StudentsList/thunks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const DashboardScore = () => {
  const students = useSelector((state) => state.students);

  const [inputVsPoint, setInputVsPoint] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(studentsThunks());
  }, []);

  const toExchange = () => {
    setInputVsPoint(!inputVsPoint);
  };

  console.log(students[0]);

  return (
    <Container>
      <ContainerSecund>
        <img src={students[0].image} />
        <div>
          <DivHouse>
            <img src="./Images/Hufflepuff.png" style={{ width: "50px" }} />
            <h3>{students[0].house}</h3>
          </DivHouse>
          <h1>{students[0].name}</h1>

          {inputVsPoint ? (
            <>
              <InputNamber />
              <DivButton>
                <ButtonGain onClick={toExchange}>Gain</ButtonGain>
                <ButtonLose onClick={toExchange}>Lose</ButtonLose>
              </DivButton>
            </>
          ) : (
            <>
              <h2>ponto</h2>
              <ButtonDone onClick={toExchange}>Done</ButtonDone>
            </>
          )}
        </div>
      </ContainerSecund>
    </Container>
  );
};
export default DashboardScore;
