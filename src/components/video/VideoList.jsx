import React, { Component } from 'react';
import { connect } from "react-redux";

// Components
import VideoListItem from "./VideoListItem";


class VideoList extends Component {
    render() {
        return (
            <div className="video-list">{ this.props.videos.map((video, index) => 
                <VideoListItem
                    key={video.etag}
                    video={video}
                    onVidoeSelect={this.props.onVidoeSelect} />) 
            }</div>
        );
    }
}

const mapStateToProps = state => ({
    videos: state.videos.videos
})

export default connect(
    mapStateToProps,
    // null
)(VideoList)