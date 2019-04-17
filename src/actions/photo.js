import PhotosService from "../services/PhotosService";

export const getPhotoAction = (id, dispatch) => {
  PhotosService.getPhoto(id)
    .then(photo => {
      dispatch({ type: "GET_PHOTO", photo });
    })
    .catch(error => {
      alert("GET_PHOTO error!");
    });
};
