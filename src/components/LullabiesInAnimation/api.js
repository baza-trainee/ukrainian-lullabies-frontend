import axios from "axios";

export const fetchYouTubePlaylist = async () => {
  try {
    const apiKey = "YOUR_YOUTUBE_API_KEY";
    const playlistId = "YOUR_PLAYLIST_ID";
    const maxResults = 3;

    const result = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${playlistId}&maxResults=${maxResults}`
    );

    return result.data.items;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};