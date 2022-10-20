const initialState = {
  favItem:[],
}

const GetFavouriteReducer = (state=initialState,action) => {
  switch (action.type) {
    case "GET_FAVOURITE":
      return {
        ...state,
        favItem:[...state.favItem,action.payload]
      }
    default: return state;
  }
}

export default GetFavouriteReducer;