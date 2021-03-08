const displayHufflepuffReducer = (state = [0], action) => {
  switch (action.type) {
    case "DISPLAY_HUFFLEPUFF":
      return (state = [...state, action.valueHufflepuff]);
    default:
      return state;
  }
};
export default displayHufflepuffReducer;
