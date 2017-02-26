var searchYouTube = (options, callback) => {
  var url = 'https://www.googleapis.com/youtube/v3/search';

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
    method: 'GET',
    data: params,

    success: function(data) {
      callback(data);
    },
    error: function(error) {
      error.responseJSON.error.errors.forEach(err => {
        console.error('Failed to fetch videos', err);
      });
    }
  });
};

window.searchYouTube = searchYouTube;
