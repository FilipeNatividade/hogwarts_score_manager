const displayRavenclawReducer = (state = 0, action) => {
  switch (action.type) {
    case "DISPLAY_RANVENCLAW":
      const newValue = state + Number(action.valueRavenclaw);
      return newValue;
    default:
      return state;
  }
};
export default displayRavenclawReducer;
