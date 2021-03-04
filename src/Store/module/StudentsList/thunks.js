import axios from "axios";
import { getStudents } from "./action";

export const studentsThunks = () => async (dispatch) => {
  const res = await axios
    .get("https://hp-api.herokuapp.com/api/characters/students")
    .catch((error) => console.log(error));
  dispatch(getStudents(res.data));
};
