class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0],
      searchTerm: ''
    };
  }

  componentDidMount() {
    this.onSearch('react tutorials');
  }

  onSearch (term) {
    var params = {
      key: this.props.API_KEY,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true,
      max: 5,
      query: term
    };
    var callback = function(data) {
      this.setState({
        currentVideo: data.items[0],
        videoList: data.items
      });
      return data;
    }.bind(this);
    this.props.searchYouTube(params, callback);
  }

  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    var searchMe = _.debounce((term) => { this.onSearch(term); }, 1000);

    return (
      <div>
        <Nav searchTerm={this.state.searchTerm} onSearch={searchMe} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} onVideoClick={ this.onVideoClick.bind(this) } />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
