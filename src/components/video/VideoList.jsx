import React, { Component } from 'react';

// Components
import VideoListItem from "./VideoListItem";

export default class VideoList extends Component {
    render() {
        return (
            <div className="video-list">{ this.props.videos.map((video, index) => 
                <VideoListItem key={video.etag} video={video} />) 
            }</div>
        );
    }
}
