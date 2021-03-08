const displayRavenclawReducer = (state = [0], action) => {
  switch (action.type) {
    case "DISPLAY_RANVENCLAW":
      return (state = [...state, action.valueRavenclaw]);
    default:
      return state;
  }
};
export default displayRavenclawReducer;
