import React from 'react';

const videoDetail = ({ video }) => {
    debugger;
    if (!video) {
        return <div>Loading....</div>
    }
    const videoSrc= `https://youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe title={video.snippet.title} src={videoSrc}/>
            </div>
            <div className="ui segment">
                <h4 className="yui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}
export default videoDetail;