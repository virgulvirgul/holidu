import React, { Component } from 'react';

class Rating extends Component {
    render() {
        const starCount = Math.floor(this.props.rating / 20);

        const countOfFeedbacks = this.props.countOfFeedbacks || 0;

        const tmp = [];
        for (var i = 0; i < 5; i++) {
            if (i < starCount) {
                tmp.push(1);
            } else {
                tmp.push(-1);
            }
        }

        var stars = tmp.map(function (num, id) {
            let className = 'fa fa-star';
            if (num < 0) {
                className = 'fa fa-star-o';
            }
            return (
                <span key={id} className={className}></span>
            );
        });

        return(
            <p className="rating">
                {stars} ({countOfFeedbacks})
            </p>

        );
    }
}

Rating.propTypes = {
    rating: React.PropTypes.number.isRequired,
    countOfFeedbacks: React.PropTypes.number,
};

export default Rating;
