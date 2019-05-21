
const { Component } = React;

class SearchBar extends Component {
  state = { term: '' };

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange = term => {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  };
}

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>
          {video.snippet.title}
        </div>
        <div>
          {video.snippet.description}
        </div>
      </div>
    </div>
  );
};

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

const InvalidApiKey = () => (<h1>Sorry you do not give a valid YOUTUBE API key. Refresh the page or Run the snippet again and give a valid API key. </h1>)


class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    error: false
  };
  componentDidMount() {
    this.videoSearch('Sport');
  }

  searchYouTube(options, callback) {
    $.get('https://www.googleapis.com/youtube/v3/search', {
      key: this.props.youtubeApiKey,
      q: options.query,
      part: 'snippet',
      maxResults: options.max
    }).done(function(data) {
      callback(data);
    }).fail(() => this.setState({error: true}))
  }
  videoSearch = (term) => {
    this.searchYouTube({ key: this.props.youtubeApiKey, term: term }, data => {
      this.setState({
        videos: data.items,
        selectedVideo: data.items[1]
      });
    });
  }

  render() {
    // const videoSearch = _.debounce(term => {
    //   this.videoSearch(term);
    // }, 300);
    if (this.state.error) return  <InvalidApiKey />

    return (
      <div>
        <SearchBar onSearchTermChange={this.videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

const youtubeApiKey = prompt(
  'Give a valid YOUTUBE API KEY and everything should work: '
);


ReactDOM.render(
  youtubeApiKey
    ? <App youtubeApiKey={youtubeApiKey} />
    : <InvalidApiKey />,
  document.querySelector('#app')
);