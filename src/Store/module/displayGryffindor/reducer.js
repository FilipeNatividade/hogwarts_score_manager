const displayGryffindorReducer = (state = 0, action) => {
  switch (action.type) {
    case "DISPLAY_GRYFFINDOR":
      const newValue = state + Number(action.valueGryffindor);
      return newValue;
    default:
      return state;
  }
};
export default displayGryffindorReducer;
