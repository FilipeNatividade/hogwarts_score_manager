const addORSubReducer = (state = true, action) => {
  switch (action.type) {
    case "ADD_NUMBER_TRUE":
      return (state = true);
    case "SUB_NUMBER_FALSE":
      return (state = false);
    default:
      return state;
  }
};
export default addORSubReducer;
