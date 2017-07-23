import React, { Component } from 'react';
import Rating from './rating';

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.handleGalleryClick = this.handleGalleryClick.bind(this);
    }


    handleGalleryClick() {
        console.log('todo');
    }

    render() {

        var divStyle = {
            backgroundImage: 'url(' + this.props.photos[0] + ')'
        };

        return (
            <div className="card card-block">
                <div className="img" style={divStyle}></div>
                <div className="card-block">
                    <h4 className="card-title">{this.props.name}</h4>
                    <p className="card-text">
                        from {this.props.price}€/night<br />
                    </p>
                    <Rating rating={this.props.rating} countOfFeedbacks={this.props.countOfFeedbacks} />
                    <a href="#" className="btn btn-primary" onClick={this.handleGalleryClick()}>Details</a>
                </div>
            </div>
        );
    }
}

Gallery.propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    photos: React.PropTypes.arrayOf(React.PropTypes.string),
    price: React.PropTypes.number.isRequired,
    rating: React.PropTypes.number.isRequired,
    countOfFeedbacks: React.PropTypes.number
};

export default Gallery;
