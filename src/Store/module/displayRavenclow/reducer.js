const displayRavenclowReducer = (state = [], action) => {
  switch (action.type) {
    case "DISPLAY_RANVENCLOW":
      return (state = [...state, action.valueRavenclow]);
    default:
      return state;
  }
};
export default displayRavenclowReducer;
