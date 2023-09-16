const youtube_api_key = process.env.REACT_APP_YouTubeAPIKey;
export const youtube_api = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+youtube_api_key;


