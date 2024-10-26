const GOOGLE_API_KEY = "AIzaSyBl_Pj52fhjnT64RkmNv7MrK2FMhBGG68g"

export const YOUTUBE_VIDEOS_API = 
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key="+
    GOOGLE_API_KEY;




//HTTP/1.1


export const YOUTUBE_SEARCH_API = 
    "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
