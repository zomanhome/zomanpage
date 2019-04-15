export const photos = (state = [], action) => {
  switch (action.type) {
    case "GET_PHOTOS":
      return [...state, ...action.photos];
    default:
      return state;
  }
};
