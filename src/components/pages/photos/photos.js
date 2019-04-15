import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Gallery from "react-photo-gallery";
import { getPhotosAction } from "../../../actions/photos";
import PhotosMenu from "./photos-menu";

import "./photos.scss";

class Photos extends Component {
  // Для удобства отладки
  per_page = 30;
  order_by = "latest";

  componentDidMount() {
    // Скроллер
    window.addEventListener("scroll", this.handleScroll);

    // Если фотографии ещё не получены с сервера, то получаем 1-ую страницу
    if (!this.props.photos.length) {
      this.props.getPhotos(1, this.per_page, this.order_by);
    } else {
      // Сбрасываем selected
      this.props.photos.forEach(el => {
        // В react-photo-gallery в рендере у <img/> изначально нет свойства class, смело удаляем
        if (el.className) {
          return (el.className = "");
        }
      });

      // Обновляем selected глядя в localStorage
      this.props.photos.forEach(photo => {
        const favorites = localStorage.getObj("photos");
        favorites.forEach(el => {
          if (el.id === photo.id) {
            photo.className = "selected";
          }
        });
        return photo;
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scroll = window.pageYOffset,
      maxScroll =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    // Докрутили
    if (scroll === maxScroll) {
      // Добавляем фото со случайной страницы, чтобы не одно и то же
      this.props.getPhotos(
        Math.round(Math.random() * 4999 + 1),
        this.per_page,
        this.order_by
      );
    }
  };

  onClick = e => {
    const img = e.target;
    // Первым делом
    img.classList.toggle("selected");
    /*
    Для хранения избранных фотографий будем использовать localStorage
    который мы инициализировали в app
    */
    const obj = localStorage.getObj("photos");
    if (img.classList.contains("selected")) {
      // Минимум параметров для react-photo-gallery и id для логики сравнения
      obj.push({
        id: img.id,
        src: img.src,
        width: img.width,
        height: img.height
      });
      // Добавили
      localStorage.setObj("photos", obj);
    } else {
      // Или убрали
      localStorage.setObj("photos", obj.filter(el => el.id !== img.id));
    }
  };

  render() {
    return (
      <div>
        <PhotosMenu />
        <div className="photos">
          <Gallery photos={this.props.photos} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: (page, per_page, order_by) =>
      getPhotosAction(page, per_page, order_by, dispatch)
  };
};

const mapStateToProps = state => {
  return {
    photos: state.photos
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Photos));
