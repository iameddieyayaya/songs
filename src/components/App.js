import React from 'react';
// {specifically means export a name file}
// default exports don't need {} wrapper
import SongList from './SongsList';
import SongDetail from './SongDetail';

// import { selectSong } from '../actions/index';

const App = () => {
  return (
    <div className='ui container grid'>
      <div className='ui row'>
        <div className='column eight wide'>
          <SongList />
        </div>
        <div className='column eight wide'>
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
