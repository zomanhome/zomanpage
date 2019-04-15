import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import PhotosMenu from "./photos-menu";

export default class Favorites extends Component {
  // Без редакса.)
  state = {
    photos: localStorage.getObj("photos")
  };

  onClick = e => {
    const img = e.target;

    // Самоликвидация
    const photos = this.state.photos;
    localStorage.setObj("photos", photos.filter(el => el.id !== img.id));
    this.setState({ photos: localStorage.getObj("photos") });
  };
  render() {
    return (
      <div>
        <PhotosMenu />
        <div className="photos">
          <Gallery photos={this.state.photos} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
