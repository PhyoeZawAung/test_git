const initialState = {
  person: [
    { id: 1, name: "John", position: "Leader", fav: false },
    { id: 2, name: "Marry", position: "Manager", fav: false },
    { id: 3, name: "Eric", position: "Manager", fav: false },
    { id: 4, name: "Hanna", position: "Sub Leader", fav: false },
  ],
};

const GetFavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FAVOURITE": {
      const Index = state.person.findIndex(
        (person) => person.id === action.payload.id
      );
      const newPerson = [...state.person];
      newPerson[Index].fav = true;
      return {
        ...state,
        person: newPerson,
      };
    }
    case "REMOVE_FROM_FAVOURITE": {
      const Index = state.person.findIndex(
        (person) => person.id === action.payload.id
      );
      const newPerson = [...state.person];
      newPerson[Index].fav = false;

      return {
        ...state,
        person: newPerson,
      };
    }
    default:
      return state;
  }
};

export default GetFavouriteReducer;
