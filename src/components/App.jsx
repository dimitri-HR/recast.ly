class App extends React.Component {
  constructor () {
    super()

    // this.state = {
    //   currentVideo: exampleVideoData[0],
    //   videoList: exampleVideoData
    // };
    // console.log("app.js props", props);
    // console.log("app.js this.props.videodata", this.props.videoData);
    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData
    };
  }

  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }


  render() {
    return (
      <div>
        <Nav />
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
