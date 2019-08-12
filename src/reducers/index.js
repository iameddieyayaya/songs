import { combineReducers } from 'redux'; //documentation tell ya if ya need {}
import allStar from '../components/images/allstar.jpg';
import noDiggity from '../components/images/nodiggity.jpg';
import noScrubs from '../components/images/noscrubs.jpeg';
import noSuprises from '../components/images/nosuprises.jpg';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:02', image: noScrubs, album: 'FanMail' },
    {
      title: 'No Diggity',
      duration: '4:20',
      image: noDiggity,
      album: 'Another Level'
    },
    {
      title: 'All Star',
      duration: '2:20',
      image: allStar,
      album: 'Astro Lounge'
    },
    {
      title: 'No Surprises',
      duration: '3:19',
      image: noSuprises,
      album: 'OK Computer'
    }
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
