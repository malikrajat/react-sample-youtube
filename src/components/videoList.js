import React from 'react';
import VideoItems from './videoItems';

const videoList = ({videos, onVideoSelect}) => {
    const renderList = videos.map( 
        (res, index) => {
            return <VideoItems onVideoSelect={onVideoSelect} key={index} items={res}/>
    })
    return <div className="ui relaxed divided list">{renderList}</div>;
}
export default videoList;