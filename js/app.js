function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('ytvideo', {
        videoId: 'ELJNvCr4YQ4', // YouTube Video ID
        width: 1280,               // Player width (in px)
        height: 720,              // Player height (in px)
        playerVars: {
          playlist: 'ELJNvCr4YQ4',
          autoplay: 1,        // Auto-play the video on load
          autohide: 1,
          disablekb: 1, 
          controls: 0,        // Hide pause/play buttons in player
          showinfo: 0,        // Hide the video title
          modestbranding: 1,  // Hide the Youtube Logo
          loop: 1,            // Run the video in a loop
          fs: 0,              // Hide the full screen button
          autohide: 0,         // Hide video controls when playing
          rel: 0,
          enablejsapi: 1
        },
        events: {
          onReady: function(e) {
              e.target.unmute();
              e.target.setPlaybackQuality('hd1080');
          },
          onStateChange: function(e) {
              e.target.playVideo()
          }
        }
    });
  }