import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import studentsReducer from "./module/StudentsList/reducer";
import isVisibleReducer from "./module/isVisible/reducer";
import houseReducer from "./module/addStudentModel/reducer";
import displayGryffindorReducer from "./module/displayGryffindor/reducer";
import displaySlytherinReducer from "./module/displaySlytherin/reducer";
import displayHufflepuffReducer from "./module/displayHufflepuff/reducer";
import displayRavenclawReducer from "./module/displayRavenclaw/reducer";

const reducers = combineReducers({
  students: studentsReducer,
  isVisible: isVisibleReducer,
  house: houseReducer,
  displayGryffindor: displayGryffindorReducer,
  displayvalueSlytherin: displaySlytherinReducer,
  displayHufflepuff: displayHufflepuffReducer,
  displayRavenclaw: displayRavenclawReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
