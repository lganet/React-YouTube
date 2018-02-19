import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBz65gXrB7L1ypJ6vnw5bjrHruYdBWuaWo';

// Create a new component. This component should produce some html
class App extends Component  {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };       

        this.videoSearch('surfborads');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: null ? ! videos && videos.length == 0 : videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300)

        return (
            <div>
                {/* <SearchBar onSearchTermChange={ term => this.videoSearch(term) } /> */}
                <SearchBar onSearchTermChange={ videoSearch } />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelected={ selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on de page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));