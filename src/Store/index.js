import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import studentsReducer from "./module/StudentsList/reducer";

const reducers = combineReducers({
  students: studentsReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
