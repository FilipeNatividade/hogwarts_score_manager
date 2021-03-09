const displayHufflepuffReducer = (state = 0, action) => {
  switch (action.type) {
    case "DISPLAY_HUFFLEPUFF":
      const newValue = state + Number(action.valueHufflepuff);
      return newValue;
    default:
      return state;
  }
};
export default displayHufflepuffReducer;
