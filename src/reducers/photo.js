export const photo = (state = {}, action) => {
  switch (action.type) {
    case "GET_PHOTO":
      return [action.photo];
    case "DELETE_ADD_INFO":
      return {};
    default:
      return state;
  }
};
