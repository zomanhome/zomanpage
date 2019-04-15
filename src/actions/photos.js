import PhotosService from "../services/PhotosService";

export const getPhotosAction = (page, per_page, order_by, dispatch) => {
  PhotosService.getPhotos(page, per_page, order_by)
    .then(photos => {
      dispatch({ type: "GET_PHOTOS", photos });
    })
    .catch(error => {
      alert("GET_PHOTOS error!");
    });
};
