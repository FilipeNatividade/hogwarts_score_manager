const displayGryffindorReducer = (state = [0], action) => {
  switch (action.type) {
    case "DISPLAY_GRYFFINDOR":
      return (state = [...state, action.valueGryffindor]);
    default:
      return state;
  }
};
export default displayGryffindorReducer;
