import { API_GET_PHOTOS_URL, API_PHOTOS_KEY } from "../constants/settings";
import {
  DEFAULT_PHOTOS_PAGE,
  DEFAULT_PHOTOS_PER_PAGE,
  DEFAULT_PHOTOS_ORDER_BY
} from "../constants/photos";
import { getParamsString } from "../services/util";

class PhotoService {
  static getPhotos(
    page = DEFAULT_PHOTOS_PAGE,
    per_page = DEFAULT_PHOTOS_PER_PAGE,
    order_by = DEFAULT_PHOTOS_ORDER_BY
  ) {
    const url = getParamsString(
      {
        client_id: API_PHOTOS_KEY,
        page,
        per_page,
        order_by
      },
      API_GET_PHOTOS_URL
    );

    return fetch(url)
      .then(data => {
        return data.json();
      })
      .then(photos => {
        photos.map(photo => {
          // Ищем избранные фотографии в localStorage
          const favorites = localStorage.getObj("photos");
          if (favorites) {
            favorites.forEach(el => {
              if (el.id === photo.id) {
                photo.className = "selected";
              }
            });
          }

          // Фиксим для Gallery
          photo.src = photo.urls.small;
          photo.sponsored = null;
          photo.liked_by_user = null;
          return photo;
        });

        return photos;
      });
  }
}

export default PhotoService;
