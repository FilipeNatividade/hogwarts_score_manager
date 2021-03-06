const displayReducer = (state = [], action) => {
  switch (action.type) {
    case "MY_DISPLAY":
      return (state = [...state, action.displayValue]);

    default:
      return state;
  }
};
export default displayReducer;
