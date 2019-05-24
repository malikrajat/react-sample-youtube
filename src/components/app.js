import React from 'react';
import SearchBar from './searchBar';
import youtube from '../api/youtube';
import VideoList from './videoList';
import VideoDetail from './videoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };
    onVideoSelect = (video) => {        
        this.setState({ selectedVideo: video })
    }
    onTermSubmit = async data => {
        const res = await youtube.get('/search', {
            params: {
                q: data
            }
        })
        this.setState({
            videos: res.data.items,
            selectedVideo: res.data.items[0]
        });        
    }
    componentDidMount () {
        this.onTermSubmit('buy shop');
    }
    render() {
        return (
            <div className="ui container" style={{marginTo: '10px'}}>
                <SearchBar onFormSubmit={ this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList 
                            onVideoSelect={this.onVideoSelect} 
                            videos={this.state.videos}/>
                        </div>
                        We have {this.state.videos.length} videos.
                    </div>
                </div>
            </div>
        )
    };
}
export default App;