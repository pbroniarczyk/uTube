import React, { Component } from 'react'
import { connect } from "react-redux";


class VideoDetails extends Component {
    render() {
        if(!this.props.video) return <div>Loading...</div>;

        const video = this.props.selectedVideo ? this.props.selectedVideo : this.props.video;
        const id = video.id.videoId;
        const url = `https://www.youtube.com/embed/${id}`;

        return (
            <div className="video-details">
                <div className="video__player">
                    <iframe
                        title={video.snippet.title}
                        src={url}
                        width="100%" height="100%"
                        frameBorder="0" />
                </div>
                <div className="video__details">
                    <h3 className="video__title">{video.snippet.title}</h3>
                    <p className="video__author">{video.snippet.channelTitle}</p>
                    <p className="video__desc">{video.snippet.description}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    video: state.videos.videos[0],
    selectedVideo: state.videos.selectedVideo
});

export default connect(mapStateToProps)(VideoDetails)