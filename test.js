function getVideo(){
       var videos = [ "JtJnSWPIlpk?vq=highres", "TwRkg3KDnqw?vq=highres", "mNPPcLztN-w?vq=highres" ];     
       return videos[Math.floor(Math.random()*videos.length)];  
}

function onYouTubeIframeAPIReady() {
  var player;
  ytFired = true;
  player = new YT.Player('player', {
   videoId: getVideo(),         // YouTube Video ID
      
    playerVars: {
      autoplay: 1,        // Auto-play the video on load
      controls: 0,        // Show pause/play buttons in player
      showinfo: 0,        // Hide the video title
      modestbranding: 1,  // Hide the Youtube Logo
      loop: 1,            // Run the video in a loop
      rel : 0,        // Hide rel videos
      fs : 0,             // Hide the full screen button
      cc_load_policy: 1, // Hide closed captions
      iv_load_policy: 1,  // Hide the Video Annotations
      autohide: 1,        // Hide video controls when playing
      wmode:'transparent',   //
      boder:0,
      enablejsapi:1,
      origin: "sracopperpot.com" 
      
        
    },
    events: {
      onReady: function(e) { 
        e.target.mute();
        e.target.playVideo();
      },
      // onStateChange: function(e) { if (e.data === YT.PlayerState.ENDED) { player.playVideo(); }}
     
      onStateChange: function(e) { 
    
        if (e.data === YT.PlayerState.ENDED) { 
          var id = getVideo();
          player.loadVideoById(id); 
        }
      }



    }
  });
 }
