const displaySlytherinReducer = (state = [], action) => {
  switch (action.type) {
    case "DISPLAY_SLYTHERIN":
      return (state = [...state, action.valueSlytherin]);
    default:
      return state;
  }
};
export default displaySlytherinReducer;
