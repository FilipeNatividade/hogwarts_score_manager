import Dashboard from "../Dashboard";
import { useSelector } from "react-redux";
import { studentsThunks } from "../../Store/module/StudentsList/thunks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Container, H2Container, DivName, H3Name } from "./style";

const Students = () => {
  const students = useSelector((state) => state.students);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(studentsThunks());
  }, []);

  //   console.log(students);
  return (
    <Container>
      <H2Container>Alunos</H2Container>
      <DivName>
        <H3Name>Nome</H3Name>
        <H3Name>Casa</H3Name>
      </DivName>
      {students.map((crr, idx) => (
        <Dashboard key={idx} student={crr} />
      ))}
    </Container>
  );
};
export default Students;
