import React from 'react';
// {specifically means export a name file}
// default exports don't need {} wrapper
import SongList from './SongsList';
import SongDetail from './SongDetail';

import './App.css';

// import { selectSong } from '../actions/index';

const App = () => {
  return (
    <div className='ui container grid wrapper'>
      <div className='ui row'>
        <div className='column four wide'>
          <SongList />
        </div>
        <div className='column four wide'>
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
