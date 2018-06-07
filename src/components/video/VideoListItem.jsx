import React, { Component } from 'react';

// Redux
import { connect } from "react-redux";
import { selectVideo } from "../../actions/select_video";

// Assets
import "./video.css";


class VideoListItem extends Component {
    render() {
        const video = this.props.video.snippet;
        console.log("video item", this.props)
        return (
            <div
                className="video-list__item"
                onClick={() => { this.props.selectVideo(this.props.video) }} >

                <img className="item__thumbnail" src={video.thumbnails.default.url} alt={video.title}/>
                <div className="item__desc">
                    <p className="item__title">{video.title}</p>
                    <span className="item__author">{video.channelTitle}</span>
                </div>
            </div>
        )
    }
}

export default connect(
	null,
	{ selectVideo }
)(VideoListItem);