import React, { Component } from 'react'

// Assets
import "./video.css";


export default class VideoListItem extends Component {
    render() {
        const video = this.props.video.snippet;

        return (
            <div
                className="video-list__item"
                onClick={() => { this.props.onVidoeSelect(this.props.video) }} >
                <img className="item__thumbnail" src={video.thumbnails.default.url} alt={video.title}/>
                <div className="item__desc">
                    <p className="item__title">{video.title}</p>
                    <span className="item__author">{video.channelTitle}</span>
                </div>
            </div>
        )
    }
}
