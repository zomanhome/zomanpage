import React, { Component } from "react";
import { connect } from "react-redux";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

import { getPhotoAction } from "../../../actions/photo";
import PhotosMenu from "./photos-menu";
import AddInfo from "./add-info";

class Favorites extends Component {
  constructor() {
    super();
    this.state = { photos: localStorage.getObj("photos"), currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  onClick = (e, obj) => {
    const img = e.target;

    // Самоликвидация по Ctrl+Click
    if (e.ctrlKey) {
      const photos = this.state.photos;
      localStorage.setObj("photos", photos.filter(el => el.id !== img.id));
      this.setState({ photos: localStorage.getObj("photos") });
      this.props.delAddInfo();
      return false;
    }

    // Ссылка на RAW по Alt+Click
    if (e.altKey) {
      this.props.getPhoto(img.id);
      return false;
    }

    this.props.delAddInfo();
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  };

  render() {
    return (
      <div>
        <PhotosMenu link="test" />
        <AddInfo arr={this.props.photo} />
        <div className="photos">
          <Gallery photos={this.state.photos} onClick={this.onClick} />
          <Lightbox
            images={this.state.photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            backdropClosesModal={true}
            showCloseButton={true}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhoto: id => getPhotoAction(id, dispatch),
    delAddInfo: () => dispatch({ type: "DELETE_ADD_INFO" })
  };
};

const mapStateToProps = state => {
  return {
    photo: state.photo
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
