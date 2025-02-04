import React, { Component } from "react";
require("./subImgModal.css");

class SubImgModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div
        id={`carouselExampleIndicators${this.props.id}`}
        className="carousel "
        data-interval="false"
      >
        <ol className="carousel-indicators">
          <li
            data-target={`#carouselExampleIndicators${this.props.id}`}
            data-slide-to="0"
            className="active"
          />
          <li data-target={`#carouselExampleIndicators${this.props.id}`} data-slide-to="1" />
          <li data-target={`#carouselExampleIndicators${this.props.id}`} data-slide-to="2" />
          <li data-target={`#carouselExampleIndicators${this.props.id}`}data-slide-to="3" />
          <li data-target={`#carouselExampleIndicators${this.props.id}`} data-slide-to="4" />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              className="d-block img-fluid projectImg rounded mx-auto d-block"
              src={this.props.image}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-fluid projectImg rounded mx-auto d-block"
              src={this.props.subImgOne}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-fluid projectImg rounded mx-auto d-block"
              src={this.props.subImgTwo}
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-fluid projectImg rounded mx-auto d-block"
              src={this.props.subImgThree}
              alt="Fourth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-fluid projectImg rounded mx-auto d-block"
              src={this.props.subImgFour}
              alt="Fifth slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href={`#carouselExampleIndicators${this.props.id}`}
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href={`#carouselExampleIndicators${this.props.id}`}
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default SubImgModal;
