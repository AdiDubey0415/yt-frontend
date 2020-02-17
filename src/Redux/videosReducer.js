let videosState = {
  searchHistory: [],
  videos: [],
  played: [],
  bookmarked: []
}

export function videosReducer(state = videosState, action) {
  console.log("VideosReducer", action);
  switch(action.type) {
    default:
      return state;
  }
}