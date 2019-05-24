import React from 'react';
import './videoItem.css';
const videoItems = ({onVideoSelect, items}) => {    
    return (
        <div className="video-items item" key={ items.id.videoId } onClick={ () => onVideoSelect(items)}>
            <img className="ui image" alt={ items.snippet.title } 
            src={items.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {items.snippet.title}
                </div>
            </div>
        </div>
    );
}

export default videoItems;