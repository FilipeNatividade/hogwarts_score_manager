const displayGryffindorReducer = (state = [], action) => {
  switch (action.type) {
    case "DISPLAY_GRYFFINDOR":
      return (state = [...state, action.valueGryffindor]);
    default:
      return state;
  }
};
export default displayGryffindorReducer;
