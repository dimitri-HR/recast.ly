var searchYouTube = (options, callback) => {
  // TODO
  console.log("searchYouTube function begins")
  var url = 'https://www.googleapis.com/youtube/v3/search';

// https://www.youtube.com/watch?v='videoId'

  // options = {
  //   key: YOUTUBE_API_KEY,
  //   part: 'snippet',
  //   type: 'video',
  //   videoEmbeddable: true,
  //   q: searchTerm
  // };

  var params = {
    key: options.key,
    part: 'snippet',
    type: 'video',
    videoEmbeddable: true,
    maxResults: options.max || 5,
    q: options.query
  };


  $.ajax({
    url: url,
    type: 'GET',
    data: params,
    // contentType: 'application/json',


    success: function(data) {
      console.log('callback =', callback);
      callback(data);
      console.log('YOUTUBE Success!');
      console.log('Retrieved data -', data);
    },
    error: function(error) {
      console.error('Failed to fetch videos', error);
    }
  });

};

window.searchYouTube = searchYouTube;
