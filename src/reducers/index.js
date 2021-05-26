const initState = {
  logo: false,
  position: null,
  watermarks: false,
  aspectRatio: "4:3",
  totalArea: false,
  color: "Colored",
  welcome: false,
  welcomeLogo: false,
};

export const inputDataReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      const objectKey = action.payload.key;
      const value = action.payload.value;

      return {
        ...state,
        [objectKey]: value,
      };
    default:
      return state;
  }
};
