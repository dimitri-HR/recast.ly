class App extends React.Component {
  constructor (props) {
    super(props)
    console.log("APP props - ", props);

    // this.state = {
    //   currentVideo: exampleVideoData[0],
    //   videoList: exampleVideoData
    // };
    // console.log("app.js props", props);
    // console.log("app.js this.props.videodata", this.props.videoData);
    console.log('searchYoutube data callback exampleData[0]', exampleVideoData[0]);
    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData,
      searchTerm: 'type here'
    };

    props.searchYouTube({
      key: YOUTUBE_API_KEY,
      max: 5,
      query: 'cats'
      },
        function(data) {
          // console.log("searchYoutube data callback", data);
          // console.log("searchYoutube data callback data.items[0]", data.items[0]);
          // console.log("this, within callback function", this)
          this.setState({
            currentVideo: data.items[0],
            videoList: data.items
          });
    }.bind(this));


  }

  onSearch (term) {
    console.log('onSearch');

    var params = {
      key: YOUTUBE_API_KEY,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true,
      max: 5,
      query: term
    };

    var callback = function(data) {
      // console.log('From Callback!');
      // console.log(data);
      // console.log('data.items[0]', data.items[0]);
        this.setState({
          currentVideo: data.items[0],
          videoList: data.items
        });
      return data;
    }.bind(this);

    searchYouTube(params, callback);

  }


  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <Nav searchTerm={this.state.searchTerm} onSearch={this.onSearch} />
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
