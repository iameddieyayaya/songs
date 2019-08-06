import { combineReducers } from 'redux'; //documentation tell ya if ya need {}

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:02' },
    { title: 'No Diggity', duration: '4:20' },
    { title: 'All Star', duration: '2:20' },
    { title: 'No Surprises', duration: '3:19' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

//any files can get access to the combine reducers
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
