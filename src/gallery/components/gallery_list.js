import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gallery from './gallery';
import * as actions from '../actions';
import '../static/gallery.css';

class GalleryList extends Component {

    componentWillMount() {
        this.props.fetchGalleries();
    }

    render() {
        return (
            <div id="gallery">
                {this.props.galleries.map(function(gallery) {
                    return <Gallery key={gallery.id} {...gallery} />
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {galleries: state.galleries};
}

export default connect(mapStateToProps, actions)(GalleryList);