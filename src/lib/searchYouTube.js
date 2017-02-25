var searchYouTube = (options, callback) => {
  // TODO

  var url = 'https://www.googleapis.com/youtube/v3/search';

// https://www.youtube.com/watch?v='videoId'

  var searchTerm = 'testing';

  options = {
    key: YOUTUBE_API_KEY,
    part: 'snippet',
    type: 'video',
    videoEmbeddable: true,
    q: searchTerm
  };

  $.ajax({
    url: url,
    type: 'GET',
    data: options,
    // contentType: 'application/json',

    success: function(data) {
      console.log('YOUTUBE Success!');
      console.log('Retrieved data -', data);
    },
    error: function(error) {
      console.error('Failed to fetch videos', error);
    }
  });

};

window.searchYouTube = searchYouTube;
