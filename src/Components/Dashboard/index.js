import { DivName, H3Name, ButtonIcon, ImgButton } from "./style";

//aqui preciso importar as funcoçoes ex: add e remove

const Dashboard = ({ student, isVsible }) => {
  const score = () => {
    // return !isVisible;
  };

  return (
    <DivName>
      <H3Name>{student.name}</H3Name>
      <H3Name>{student.house}</H3Name>
      <ButtonIcon>
        <ImgButton src="./Images/icon.svg" />
      </ButtonIcon>
    </DivName>
  );
};
export default Dashboard;
