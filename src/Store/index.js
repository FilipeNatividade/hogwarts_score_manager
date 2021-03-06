import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import studentsReducer from "./module/StudentsList/reducer";
import isVisibleReducer from "./module/isVisible/reducer";
import houseReducer from "./module/addStudentModel/reducer";
import displayReducer from "./module/display/reducer";

const reducers = combineReducers({
  students: studentsReducer,
  isVisible: isVisibleReducer,
  house: houseReducer,
  display: displayReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
