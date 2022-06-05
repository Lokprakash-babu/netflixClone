export const getVideos = async (searchString) => {
  const youtubeApiKey = process.env.YOUTUBE_API_KEY;
  const search = encodeURIComponent(searchString);
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=${youtubeApiKey}`
    );
    const data = await response.json();
    return data?.items.map((item) => {
      return {
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id: item?.id?.videoId,
      };
    });
  } catch (err) {
    console.error("Something went wrong with video library", err);
    return [];
  }
};
