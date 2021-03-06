const isVisibleReducer = (state = true, action) => {
  switch (action.type) {
    case "ON_OFF":
      return !state;
    default:
      return state;
  }
};
export default isVisibleReducer;
