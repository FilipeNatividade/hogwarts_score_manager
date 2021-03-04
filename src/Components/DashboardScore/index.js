import {
  Container,
  ContainerSecund,
  DivHouse,
  InputNamber,
  DivButton,
  ButtonGain,
  ButtonLose,
} from "./style";
import { useSelector } from "react-redux";
import { studentsThunks } from "../../Store/module/StudentsList/thunks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const DashboardScore = () => {
  const students = useSelector((state) => state.students);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(studentsThunks());
  }, []);

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
          <InputNamber />
          <DivButton>
            <ButtonGain>Gain</ButtonGain>
            <ButtonLose>Lose</ButtonLose>
          </DivButton>
        </div>
      </ContainerSecund>
    </Container>
  );
};
export default DashboardScore;
