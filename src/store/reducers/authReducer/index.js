const initialState = {
   token: null,
};

function reducer(state = initialState, action) {
   switch (action.type) {
      case "set_token":
         return {
            ...state,
            token: action.payload.token,
         };
      case "remove_token":
         return {
            ...state,
            token: null,
         };
      default:
         return state;
   }
}

export default reducer;
