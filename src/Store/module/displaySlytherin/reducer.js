const displaySlytherinReducer = (state = 0, action) => {
  switch (action.type) {
    case "DISPLAY_SLYTHERIN":
      const newValue = state + Number(action.valueSlytherin);
      return newValue;
    default:
      return state;
  }
};
export default displaySlytherinReducer;
