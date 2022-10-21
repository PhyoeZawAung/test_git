export const GetFavouriteAction = (data) => {
  return {
    type: "GET_FAVOURITE",
    payload: data,
  };
};

export const RemoveFromFavourite = (data) => {
  return {
    type: "REMOVE_FROM_FAVOURITE",
    payload: data,
  };
};
