const houseReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_NAME_HOUSE":
      return {
        house: action.house,
        name: action.name,
        image: action.image,
      };

    default:
      return state;
  }
};
export default houseReducer;
