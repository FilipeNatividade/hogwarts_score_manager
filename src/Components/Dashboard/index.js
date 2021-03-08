import { DivName, H3Name, ButtonIcon, ImgButton } from "./style";
import { useDispatch } from "react-redux";
import { visibleAction } from "../../Store/module/isVisible/action";
import { getInfo } from "../../Store/module/addStudentModel/action";

const Dashboard = ({ student }) => {
  const dispatch = useDispatch();

  const selectStudents = () => {
    dispatch(getInfo(student));
    dispatch(visibleAction());
  };

  return (
    <DivName>
      <H3Name>{student.name}</H3Name>
      <H3Name>{student.house}</H3Name>
      <ButtonIcon onClick={selectStudents}>
        <ImgButton src="./Images/icon.svg" />
      </ButtonIcon>
    </DivName>
  );
};
export default Dashboard;
